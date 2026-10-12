/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { HighVoltageProject, ScopeItem, Activity, RiskItem, CostItem, QualityTestItem } from '../types/project';
import { initialProjectData } from '../data/initialProjectData';

export type MainSectionId = 'grid' | 'definition' | 'execution' | 'control';
export type WorkspaceTabId = 
  | 'overview' 
  | 'scope' 
  | 'deliverables' 
  | 'wbs' 
  | 'activities' 
  | 'milestones' 
  | 'stakeholders' 
  | 'risks' 
  | 'costs' 
  | 'testing' 
  | 'handover' 
  | 'references';

interface ProjectContextType {
  project: HighVoltageProject;
  activeSection: MainSectionId;
  setActiveSection: (section: MainSectionId) => void;
  activeSubsectionId: string | null;
  setActiveSubsectionId: (id: string | null) => void;
  selectTopic: (section: MainSectionId, topicId: string) => void;
  isWorkspaceOpen: boolean;
  setIsWorkspaceOpen: (open: boolean) => void;
  activeWorkspaceTab: WorkspaceTabId;
  setActiveWorkspaceTab: (tab: WorkspaceTabId) => void;
  openWorkspaceTab: (tab: WorkspaceTabId) => void;
  
  // Storage & Persistence Info
  storageStatus: {
    type: 'Local Browser Storage (Persistent across sessions)' | 'In-Memory Only';
    lastSaved: string | null;
    storageKey: string;
    sizeKb: number;
  };
  
  // Updates
  updateProjectOverview: (patch: Partial<HighVoltageProject['overview']>) => void;
  updateActivityProgress: (activityId: string, percent: number, status: Activity['status']) => void;
  addScopeItem: (item: Omit<ScopeItem, 'id'>) => void;
  addRiskItem: (risk: Omit<RiskItem, 'id' | 'score'>) => void;
  resetToDefaultProject: () => void;
  exportProjectJson: () => void;
  importProjectJson: (jsonString: string) => boolean;
}

const STORAGE_KEY = 'ais_onshore_hv_project_v1';

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [project, setProject] = useState<HighVoltageProject>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback to initial
    }
    return initialProjectData;
  });

  const [activeSection, setActiveSectionState] = useState<MainSectionId>('grid');
  const [activeSubsectionId, setActiveSubsectionId] = useState<string | null>(null);
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState<boolean>(false);
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<WorkspaceTabId>('overview');

  const setActiveSection = (section: MainSectionId) => {
    setActiveSectionState(section);
    setActiveSubsectionId(null);
    if (isWorkspaceOpen) setIsWorkspaceOpen(false);
  };

  const selectTopic = (section: MainSectionId, topicId: string) => {
    setActiveSectionState(section);
    setActiveSubsectionId(topicId);
    if (isWorkspaceOpen) setIsWorkspaceOpen(false);
  };
  
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);
  const [storageSizeKb, setStorageSizeKb] = useState<number>(0);

  // Auto-save to localStorage
  useEffect(() => {
    try {
      const json = JSON.stringify(project);
      localStorage.setItem(STORAGE_KEY, json);
      setLastSavedTime(new Date().toLocaleTimeString());
      setStorageSizeKb(Math.round((new Blob([json]).size / 1024) * 10) / 10);
    } catch (err) {
      console.warn('LocalStorage save failed:', err);
    }
  }, [project]);

  const openWorkspaceTab = (tab: WorkspaceTabId) => {
    setActiveWorkspaceTab(tab);
    setIsWorkspaceOpen(true);
  };

  const updateProjectOverview = (patch: Partial<HighVoltageProject['overview']>) => {
    setProject(prev => ({
      ...prev,
      overview: {
        ...prev.overview,
        ...patch,
        lastUpdated: new Date().toISOString().split('T')[0]
      }
    }));
  };

  const updateActivityProgress = (activityId: string, percent: number, status: Activity['status']) => {
    setProject(prev => ({
      ...prev,
      activities: prev.activities.map(act => 
        act.id === activityId 
          ? { ...act, percentComplete: percent, status } 
          : act
      )
    }));
  };

  const addScopeItem = (item: Omit<ScopeItem, 'id'>) => {
    const newId = `SCP-${String(project.scopeItems.length + 1).padStart(2, '0')}`;
    setProject(prev => ({
      ...prev,
      scopeItems: [...prev.scopeItems, { ...item, id: newId }]
    }));
  };

  const addRiskItem = (risk: Omit<RiskItem, 'id' | 'score'>) => {
    const newId = `RSK-${String(project.risks.length + 1).padStart(2, '0')}`;
    const score = risk.probability * risk.impact;
    setProject(prev => ({
      ...prev,
      risks: [...prev.risks, { ...risk, id: newId, score }]
    }));
  };

  const resetToDefaultProject = () => {
    if (window.confirm("Reset project workspace to the standard illustrative Tilburg 150 kV configuration? Custom edits will be replaced.")) {
      setProject(initialProjectData);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const exportProjectJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${project.overview.code || 'HV_Project'}_baseline_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importProjectJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString) as HighVoltageProject;
      if (parsed.overview && parsed.wbs && parsed.activities) {
        setProject(parsed);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        project,
        activeSection,
        setActiveSection,
        activeSubsectionId,
        setActiveSubsectionId,
        selectTopic,
        isWorkspaceOpen,
        setIsWorkspaceOpen,
        activeWorkspaceTab,
        setActiveWorkspaceTab,
        openWorkspaceTab,
        storageStatus: {
          type: 'Local Browser Storage (Persistent across sessions)',
          lastSaved: lastSavedTime,
          storageKey: STORAGE_KEY,
          sizeKb: storageSizeKb,
        },
        updateProjectOverview,
        updateActivityProgress,
        addScopeItem,
        addRiskItem,
        resetToDefaultProject,
        exportProjectJson,
        importProjectJson,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
