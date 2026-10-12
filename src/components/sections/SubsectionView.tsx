/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { useProject, WorkspaceTabId } from '../../context/ProjectContext';
import {
  sectionAContent,
  sectionBContent,
  sectionCContent,
  sectionDContent,
  SubsectionContent
} from '../../data/learningContent';
import { EpistemicBadge } from '../common/EpistemicBadge';
import { ReferenceCard } from '../common/ReferenceCard';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ExternalLink,
  BookOpen,
  FileCode,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const SubsectionView: React.FC = () => {
  const {
    activeSection,
    activeSubsectionId,
    setActiveSubsectionId,
    openWorkspaceTab
  } = useProject();

  // Accordion state for progressive disclosure (collapsed by default)
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [showStandards, setShowStandards] = useState(false);

  const currentSectionData = useMemo(() => {
    switch (activeSection) {
      case 'grid':
        return {
          title: 'High Voltage Power Grid',
          subtitle: 'Technical fundamentals of transmission networks, high-voltage cable systems, and grid substations.',
          items: sectionAContent
        };
      case 'definition':
        return {
          title: 'Project Definition & Planning',
          subtitle: 'Translating employer requirements into contract scope, WBS, schedules, and initial cost estimates.',
          items: sectionBContent
        };
      case 'execution':
        return {
          title: 'Project Execution',
          subtitle: 'Engineering design, civil excavation, horizontal directional drilling, cable laying, and site safety.',
          items: sectionCContent
        };
      case 'control':
        return {
          title: 'Project Control & Delivery',
          subtitle: 'Continuous schedule controls, physical progress measurement, site testing, and final asset handover.',
          items: sectionDContent
        };
    }
  }, [activeSection]);

  // Current active topic (if one is chosen)
  const activeTopic = useMemo(() => {
    if (!activeSubsectionId) return null;
    return currentSectionData.items.find(item => item.id === activeSubsectionId) || null;
  }, [currentSectionData, activeSubsectionId]);

  // Current topic index for Prev/Next navigation
  const currentIndex = useMemo(() => {
    if (!activeTopic) return -1;
    return currentSectionData.items.findIndex(item => item.id === activeTopic.id);
  }, [currentSectionData, activeTopic]);

  // VIEW 1: Clean Section Hub (Topic Directory)
  if (!activeTopic) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Section Title and Short Introduction */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            {currentSectionData.title}
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            {currentSectionData.subtitle}
          </p>
        </div>

        {/* Clean Topic List */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Learning Topics ({currentSectionData.items.length})
          </div>

          {currentSectionData.items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSubsectionId(item.id);
                setShowTechnicalDetails(false);
                setShowStandards(false);
              }}
              className="w-full text-left bg-white border border-slate-200 hover:border-slate-400 rounded-lg p-4 sm:p-5 transition-all shadow-2xs hover:shadow-xs group flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-amber-400 flex items-center justify-center text-xs font-mono font-medium shrink-0 mt-0.5 transition-colors">
                  {idx + 1}
                </span>
                <div>
                  <h2 className="text-base font-semibold text-slate-900 group-hover:text-slate-950 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed max-w-2xl">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-slate-900 shrink-0 transition-colors pt-1">
                <span>Start topic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // VIEW 2: Focused Topic Lesson Page (Progressive Disclosure)
  const prevTopic = currentIndex > 0 ? currentSectionData.items[currentIndex - 1] : null;
  const nextTopic = currentIndex < currentSectionData.items.length - 1 ? currentSectionData.items[currentIndex + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      {/* Return Navigation */}
      <button
        onClick={() => setActiveSubsectionId(null)}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors -ml-1"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to {currentSectionData.title}</span>
      </button>

      {/* Topic Title & Epistemic Tag */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-slate-400">
            Topic {currentIndex + 1} of {currentSectionData.items.length}
          </span>
          <span className="text-slate-300">•</span>
          <EpistemicBadge status={activeTopic.epistemicType} size="sm" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          {activeTopic.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
          {activeTopic.summary}
        </p>
      </div>

      {/* 3 to 5 Key Learning Points */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Key Learning Points</span>
        </h2>
        <ul className="space-y-2.5">
          {activeTopic.keyTakeaways.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 leading-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Practical Project Example (Cleanly Separated) */}
      <div className="border border-amber-200 bg-amber-50/40 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-900">
          <Compass className="w-4 h-4 text-amber-700" />
          <span>Practical Project Example: Tilburg 150 kV Link</span>
        </div>

        <p className="text-sm text-amber-950 leading-relaxed">
          {activeTopic.workspaceConnection.explanation}
        </p>

        <div className="pt-1">
          <button
            onClick={() => openWorkspaceTab(activeTopic.workspaceConnection.targetTab as WorkspaceTabId)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-950 bg-amber-200/80 hover:bg-amber-200 px-3 py-1.5 rounded transition-colors"
          >
            <span>{activeTopic.workspaceConnection.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Progressive Disclosure Sections (Collapsed by Default) */}
      <div className="border-t border-slate-200 pt-6 space-y-4">
        {/* Accordion 1: Technical Details & Concepts */}
        <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
          <button
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>Technical details & core concepts</span>
              <span className="text-xs font-normal text-slate-400 font-mono">
                ({activeTopic.coreConcepts.length})
              </span>
            </span>
            {showTechnicalDetails ? (
              <ChevronUp className="w-4 h-4 text-slate-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {showTechnicalDetails && (
            <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4">
              {activeTopic.coreConcepts.map((concept, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 rounded border border-slate-100 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {concept.term}
                    </h3>
                    <EpistemicBadge status={concept.epistemicType} size="sm" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {concept.definition}
                  </p>
                  <p className="text-xs text-slate-500 pt-1 border-t border-slate-200/60">
                    <strong className="text-slate-700">Project application: </strong>
                    {concept.projectRelevance}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Accordion 2: Applicable Standards & Sources */}
        <div className="border border-slate-200 rounded-lg bg-white overflow-hidden">
          <button
            onClick={() => setShowStandards(!showStandards)}
            className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-500" />
              <span>Applicable standards & source references</span>
              <span className="text-xs font-normal text-slate-400 font-mono">
                ({activeTopic.technicalStandards.length})
              </span>
            </span>
            {showStandards ? (
              <ChevronUp className="w-4 h-4 text-slate-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {showStandards && (
            <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-3">
              {activeTopic.technicalStandards.map(reference => (
                <ReferenceCard key={reference.id} reference={reference} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Topic Pagination / Next & Previous Navigation */}
      <div className="border-t border-slate-200 pt-6 flex items-center justify-between gap-4">
        {prevTopic ? (
          <button
            onClick={() => {
              setActiveSubsectionId(prevTopic.id);
              setShowTechnicalDetails(false);
              setShowStandards(false);
            }}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors p-2 rounded hover:bg-slate-50"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <div className="text-left">
              <div className="text-[10px] text-slate-400 uppercase">Previous</div>
              <div className="font-semibold text-slate-800 truncate max-w-[180px] sm:max-w-xs">{prevTopic.shortTitle}</div>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextTopic ? (
          <button
            onClick={() => {
              setActiveSubsectionId(nextTopic.id);
              setShowTechnicalDetails(false);
              setShowStandards(false);
            }}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors p-2 rounded hover:bg-slate-50 ml-auto"
          >
            <div className="text-right">
              <div className="text-[10px] text-slate-400 uppercase">Next</div>
              <div className="font-semibold text-slate-800 truncate max-w-[180px] sm:max-w-xs">{nextTopic.shortTitle}</div>
            </div>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={() => setActiveSubsectionId(null)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 p-2 ml-auto"
          >
            <span>Back to topic list</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
