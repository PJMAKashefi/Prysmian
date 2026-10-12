/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { useProject } from '../../context/ProjectContext';
import { FolderGit2, ArrowLeft, MoreHorizontal, Download, RotateCcw, Database, HardDrive } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    project,
    isWorkspaceOpen,
    setIsWorkspaceOpen,
    storageStatus,
    exportProjectJson,
    resetToDefaultProject
  } = useProject();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsWorkspaceOpen(false)}
            className="flex items-center gap-2.5 text-left hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded bg-slate-900 text-amber-400 font-mono font-bold text-xs flex items-center justify-center tracking-wider">
              HV
            </div>
            <div>
              <div className="font-semibold text-sm text-slate-900 leading-none">
                HV Cable Systems
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Onshore Engineering & Delivery
              </div>
            </div>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {isWorkspaceOpen ? (
            <button
              onClick={() => setIsWorkspaceOpen(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Lessons</span>
            </button>
          ) : (
            <button
              onClick={() => setIsWorkspaceOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-900 bg-amber-400/90 hover:bg-amber-400 transition-colors shadow-2xs"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-slate-950" />
              <span>Project Workspace</span>
            </button>
          )}

          {/* Discreet Project Data & Backup Menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              title="Project data and settings"
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-1 w-64 rounded-md border border-slate-200 bg-white py-1.5 shadow-lg text-xs z-50">
                <div className="px-3 py-2 border-b border-slate-100 text-[11px] text-slate-500">
                  <div className="font-semibold text-slate-800">Tilburg 150 kV Project</div>
                  <div className="flex items-center gap-1.5 mt-1 text-slate-500">
                    <Database className="w-3 h-3 text-emerald-600" />
                    <span>LocalStorage: {storageStatus.sizeKb} KB</span>
                  </div>
                  {storageStatus.lastSaved && (
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      Last saved at {storageStatus.lastSaved}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    exportProjectJson();
                    setMenuOpen(false);
                  }}
                  className="w-full px-3 py-2 text-left text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Export project backup (JSON)</span>
                </button>

                <button
                  onClick={() => {
                    resetToDefaultProject();
                    setMenuOpen(false);
                  }}
                  className="w-full px-3 py-2 text-left text-rose-600 hover:bg-rose-50 flex items-center gap-2 border-t border-slate-100"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
                  <span>Reset to standard project baseline</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
