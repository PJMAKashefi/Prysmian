/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProjectProvider, useProject } from './context/ProjectContext';
import { Header } from './components/layout/Header';
import { PrimaryNav } from './components/layout/PrimaryNav';
import { SubsectionView } from './components/sections/SubsectionView';
import { WorkspaceView } from './components/workspace/WorkspaceView';
import { ShieldCheck, BookOpen, Database, FolderGit2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const { isWorkspaceOpen, setIsWorkspaceOpen, project } = useProject();

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-950">
      <Header />
      <PrimaryNav />

      <main className="flex-1 pb-16">
        {isWorkspaceOpen ? (
          <WorkspaceView />
        ) : (
          <SubsectionView />
        )}
      </main>

      {/* Engineering Learning Footer */}
      <footer className="border-t border-slate-200 bg-white text-xs text-slate-500 py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">HV Cable Systems</span>
            <span className="text-slate-300">•</span>
            <span>Onshore Transmission Learning Workspace</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Tilburg 150 kV Case Model</span>
            <span className="text-slate-200">•</span>
            <span>Browser LocalStorage</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <ProjectProvider>
      <AppContent />
    </ProjectProvider>
  );
}
