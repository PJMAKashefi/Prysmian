/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useProject, MainSectionId } from '../../context/ProjectContext';

interface SectionTab {
  id: MainSectionId;
  title: string;
}

export const PrimaryNav: React.FC = () => {
  const {
    activeSection,
    setActiveSection,
    isWorkspaceOpen,
    setIsWorkspaceOpen
  } = useProject();

  const sections: SectionTab[] = [
    { id: 'grid', title: 'High Voltage Power Grid' },
    { id: 'definition', title: 'Project Definition & Planning' },
    { id: 'execution', title: 'Project Execution' },
    { id: 'control', title: 'Project Control & Delivery' }
  ];

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex gap-1 sm:gap-6 overflow-x-auto scrollbar-none py-1">
          {sections.map(section => {
            const isActive = !isWorkspaceOpen && activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  if (isWorkspaceOpen) {
                    setIsWorkspaceOpen(false);
                  }
                }}
                className={`py-3 px-2 text-xs sm:text-sm whitespace-nowrap transition-colors border-b-2 font-medium ${
                  isActive
                    ? 'border-slate-900 text-slate-950 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {section.title}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
