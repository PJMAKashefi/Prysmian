/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useProject, WorkspaceTabId } from '../../context/ProjectContext';
import { EpistemicBadge } from '../common/EpistemicBadge';
import { ReferenceCard } from '../common/ReferenceCard';
import {
  FileText,
  Target,
  CheckSquare,
  Network,
  ListTodo,
  Flag,
  Users,
  AlertTriangle,
  Coins,
  ShieldCheck,
  PackageCheck,
  BookOpen,
  CalendarDays,
  Plus,
  ArrowRight,
  ArrowLeft,
  Info,
  Clock,
  Sparkles
} from 'lucide-react';
import { ScopeItem, RiskItem } from '../../types/project';

export const WorkspaceView: React.FC = () => {
  const {
    project,
    activeWorkspaceTab,
    setActiveWorkspaceTab,
    setIsWorkspaceOpen,
    updateActivityProgress,
    addScopeItem,
    addRiskItem
  } = useProject();

  // Local state for modals/forms
  const [showAddScope, setShowAddScope] = useState(false);
  const [newScopeTitle, setNewScopeTitle] = useState('');
  const [newScopeDesc, setNewScopeDesc] = useState('');
  const [newScopeCat, setNewScopeCat] = useState<ScopeItem['category']>('Assumption');
  const [newScopeType, setNewScopeType] = useState<ScopeItem['epistemicType']>('planning_assumption');

  const [showAddRisk, setShowAddRisk] = useState(false);
  const [newRiskTitle, setNewRiskTitle] = useState('');
  const [newRiskCat, setNewRiskCat] = useState<RiskItem['category']>('Technical');
  const [newRiskProb, setNewRiskProb] = useState<number>(3);
  const [newRiskImpact, setNewRiskImpact] = useState<number>(3);
  const [newRiskMitigation, setNewRiskMitigation] = useState('');
  const [newRiskOwner, setNewRiskOwner] = useState('Civil Site Construction Manager');

  const tabs: { id: WorkspaceTabId; label: string; icon: React.ElementType; badge?: string }[] = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'scope', label: 'Scope', icon: Target, badge: `${project.scopeItems.length}` },
    { id: 'deliverables', label: 'Deliverables', icon: CheckSquare, badge: `${project.deliverables.length}` },
    { id: 'wbs', label: 'WBS', icon: Network, badge: `${project.wbs.length}` },
    { id: 'activities', label: 'Activities & Schedule', icon: ListTodo, badge: `${project.activities.length}` },
    { id: 'milestones', label: 'Milestones', icon: Flag, badge: `${project.milestones.length}` },
    { id: 'stakeholders', label: 'Stakeholders & RACI', icon: Users },
    { id: 'risks', label: 'Risks', icon: AlertTriangle, badge: `${project.risks.length}` },
    { id: 'costs', label: 'Costs', icon: Coins },
    { id: 'testing', label: 'Quality & Tests', icon: ShieldCheck, badge: `${project.qualityTests.length}` },
    { id: 'handover', label: 'Handover', icon: PackageCheck, badge: `${project.handoverItems.length}` },
    { id: 'references', label: 'Standards', icon: BookOpen, badge: `${project.references.length}` }
  ];

  const handleCreateScope = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newScopeTitle.trim()) return;
    addScopeItem({
      title: newScopeTitle,
      description: newScopeDesc,
      category: newScopeCat,
      epistemicType: newScopeType
    });
    setNewScopeTitle('');
    setNewScopeDesc('');
    setShowAddScope(false);
  };

  const handleCreateRisk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRiskTitle.trim()) return;
    addRiskItem({
      title: newRiskTitle,
      category: newRiskCat,
      probability: newRiskProb as 1 | 2 | 3 | 4 | 5,
      impact: newRiskImpact as 1 | 2 | 3 | 4 | 5,
      mitigation: newRiskMitigation,
      contingencyPlan: 'Trigger contingency protocol upon event escalation.',
      owner: newRiskOwner,
      status: 'Identified',
      epistemicType: 'planning_assumption'
    });
    setNewRiskTitle('');
    setNewRiskMitigation('');
    setShowAddRisk(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Workspace Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <button
            onClick={() => setIsWorkspaceOpen(false)}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to learning lessons</span>
          </button>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {project.overview.name}
            </h1>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono border border-slate-200">
              {project.overview.code}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {project.overview.voltageLevelKv} kV HVAC • {project.overview.routeLengthKm} km double circuit • Client: {project.overview.client}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <EpistemicBadge status="learning_example" size="sm" />
        </div>
      </div>

      {/* Workspace Tab Navigation */}
      <div className="border-b border-slate-200 overflow-x-auto scrollbar-none">
        <div className="flex gap-2 pb-px">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeWorkspaceTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveWorkspaceTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors border-b-2 ${
                  isActive
                    ? 'border-slate-900 text-slate-950 font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${
                    isActive ? 'bg-slate-100 text-slate-800' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab 1: Brief & Overview */}
      {activeWorkspaceTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-slate-900">Project Brief & Objectives</h3>
              <EpistemicBadge status="learning_example" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-lg border border-slate-100 text-xs">
              <div>
                <span className="text-slate-500 block uppercase font-mono text-[10px]">Project Name</span>
                <strong className="text-slate-900 font-medium">{project.overview.name}</strong>
              </div>
              <div>
                <span className="text-slate-500 block uppercase font-mono text-[10px]">Project Code</span>
                <strong className="text-slate-900 font-mono">{project.overview.code}</strong>
              </div>
              <div>
                <span className="text-slate-500 block uppercase font-mono text-[10px]">Client / TSO</span>
                <strong className="text-slate-900 font-medium">{project.overview.client}</strong>
              </div>
              <div>
                <span className="text-slate-500 block uppercase font-mono text-[10px]">Principal Contractor</span>
                <strong className="text-slate-900 font-medium">{project.overview.principalContractor}</strong>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Project Purpose</h4>
                <p>{project.overview.purpose}</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Context Summary</h4>
                <p>{project.overview.contextSummary}</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Specified Cable Technology</h4>
                <p className="font-mono bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-800">
                  {project.overview.cableTechnology}
                </p>
              </div>
            </div>
          </div>

          {/* Epistemic Framework Guide */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-2">
              Epistemic Classification System (Content & Data Principles)
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              To guarantee engineering integrity, every parameter, activity duration, cost estimate, and requirement in this workspace is classified under one of four distinct categories:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="border border-emerald-200 bg-emerald-50/50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <EpistemicBadge status="verified_fact" size="sm" />
                </div>
                <p className="text-slate-700">
                  Backed directly by published technical standards (IEC 60840, CIGRE TBs) or statutory Dutch legislation (CROW 500 / WIBON).
                </p>
              </div>

              <div className="border border-blue-200 bg-blue-50/50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <EpistemicBadge status="planning_assumption" size="sm" />
                </div>
                <p className="text-slate-700">
                  Formulated for our Tilburg illustrative engineering case. Must be tested and validated during site geotechnical investigations.
                </p>
              </div>

              <div className="border border-amber-200 bg-amber-50/50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <EpistemicBadge status="proposed_decision" size="sm" />
                </div>
                <p className="text-slate-700">
                  An engineering or contractor recommendation currently awaiting client or municipal approval gate.
                </p>
              </div>

              <div className="border border-purple-200 bg-purple-50/50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <EpistemicBadge status="learning_example" size="sm" />
                </div>
                <p className="text-slate-700">
                  Pedagogical baseline illustrating workflow relationships, predecessor dependencies, and project controls methodology.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Scope & Boundaries */}
      {activeWorkspaceTab === 'scope' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Contract Scope, Exclusions, Assumptions & Constraints</h3>
              <p className="text-xs text-slate-500">Explicit boundaries defining contractor delivery responsibility and contract risk allocation.</p>
            </div>
            <button
              onClick={() => setShowAddScope(!showAddScope)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Scope Item</span>
            </button>
          </div>

          {showAddScope && (
            <form onSubmit={handleCreateScope} className="bg-slate-50 border border-slate-300 rounded-lg p-4 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase">Create New Scope Boundary Record</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-slate-600 mb-1">Title</label>
                  <input
                    type="text"
                    value={newScopeTitle}
                    onChange={e => setNewScopeTitle(e.target.value)}
                    placeholder="e.g., Substation gantry earthing connection"
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">Category</label>
                  <select
                    value={newScopeCat}
                    onChange={e => setNewScopeCat(e.target.value as ScopeItem['category'])}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
                  >
                    <option value="In-Scope">In-Scope</option>
                    <option value="Exclusion">Exclusion</option>
                    <option value="Assumption">Assumption</option>
                    <option value="Constraint">Constraint</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">Epistemic Status</label>
                  <select
                    value={newScopeType}
                    onChange={e => setNewScopeType(e.target.value as ScopeItem['epistemicType'])}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
                  >
                    <option value="planning_assumption">Planning Assumption</option>
                    <option value="verified_fact">Verified Fact</option>
                    <option value="proposed_decision">Proposed Decision</option>
                    <option value="learning_example">Learning Example</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-slate-600 mb-1 text-xs">Description & Impact</label>
                <textarea
                  value={newScopeDesc}
                  onChange={e => setNewScopeDesc(e.target.value)}
                  placeholder="Define technical boundary, battery limits, or impact..."
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
                  rows={2}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddScope(false)}
                  className="px-3 py-1 rounded text-xs text-slate-600 hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3.5 py-1 rounded text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Save Record
                </button>
              </div>
            </form>
          )}

          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-16">ID</th>
                  <th className="py-2.5 px-3 w-28">Category</th>
                  <th className="py-2.5 px-3">Title & Description</th>
                  <th className="py-2.5 px-3">Impact / Rationale</th>
                  <th className="py-2.5 px-3 w-40">Epistemic Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {project.scopeItems.map(item => {
                  const catBadge = {
                    'In-Scope': 'bg-emerald-100 text-emerald-800 border-emerald-200',
                    'Exclusion': 'bg-rose-100 text-rose-800 border-rose-200',
                    'Assumption': 'bg-blue-100 text-blue-800 border-blue-200',
                    'Constraint': 'bg-amber-100 text-amber-800 border-amber-200'
                  }[item.category];

                  return (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2.5 px-3 font-mono font-bold text-slate-900">{item.id}</td>
                      <td className="py-2.5 px-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${catBadge}`}>
                          {item.category}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 space-y-0.5">
                        <div className="font-bold text-slate-900">{item.title}</div>
                        <div className="text-slate-600">{item.description}</div>
                      </td>
                      <td className="py-2.5 px-3 text-slate-500 italic">
                        {item.rationaleOrImpact || '—'}
                      </td>
                      <td className="py-2.5 px-3">
                        <EpistemicBadge status={item.epistemicType} size="sm" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Deliverables */}
      {activeWorkspaceTab === 'deliverables' && (
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Deliverables and Acceptance Criteria</h3>
            <p className="text-xs text-slate-500">Formal engineering documents, test records, and asset transfer dossiers required for contract sign-off.</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {project.deliverables.map(del => (
              <div key={del.id} className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-slate-800">
                      {del.code}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">{del.title}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold border ${
                      del.status === 'Approved'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {del.status}
                    </span>
                    <EpistemicBadge status={del.epistemicType} size="sm" />
                  </div>
                </div>

                <p className="text-xs text-slate-600">{del.description}</p>

                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Measurable Acceptance Criteria:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {del.acceptanceCriteria.map((crit, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckSquare className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{crit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1 font-mono">
                  <span>Responsible: <strong className="text-slate-700">{del.responsibleParty}</strong></span>
                  <span>Target Milestone: <strong className="text-amber-700">{del.targetMilestoneCode}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: WBS Hierarchy */}
      {activeWorkspaceTab === 'wbs' && (
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Work Breakdown Structure (WBS)</h3>
            <p className="text-xs text-slate-500">100% rule decomposition organizing all work packages from Level 1 down to discrete work packages.</p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-24">WBS Code</th>
                  <th className="py-2.5 px-3">Title & Description</th>
                  <th className="py-2.5 px-3 w-48">Owner Role</th>
                  <th className="py-2.5 px-3 w-36">Classification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {project.wbs.map(node => {
                  const isLevel1 = node.level === 1;
                  return (
                    <tr
                      key={node.id}
                      className={isLevel1 ? 'bg-slate-50 font-semibold' : 'hover:bg-slate-50/60 transition-colors'}
                    >
                      <td className="py-2 px-3 font-mono">
                        <span className={`px-1.5 py-0.5 rounded ${
                          isLevel1 ? 'bg-slate-900 text-white font-bold' : 'text-slate-700'
                        }`}>
                          {node.code}
                        </span>
                      </td>
                      <td className="py-2 px-3">
                        <div className={`text-slate-900 ${isLevel1 ? 'font-bold text-sm' : 'pl-4'}`}>
                          {node.title}
                        </div>
                        <div className={`text-slate-500 text-[11px] font-normal ${!isLevel1 ? 'pl-4' : ''}`}>
                          {node.description}
                        </div>
                      </td>
                      <td className="py-2 px-3 text-slate-700 font-mono text-[11px]">
                        {node.ownerRole}
                      </td>
                      <td className="py-2 px-3">
                        <EpistemicBadge status={node.epistemicType} size="sm" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 5: Activities & Schedule Data */}
      {activeWorkspaceTab === 'activities' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Schedule Activities & Dependency Model</h3>
              <p className="text-xs text-slate-500">
                Relational activity register with stable IDs, durations, predecessor links (FS/SS), planned/actual dates, and progress status.
              </p>
            </div>
            <div className="text-xs font-mono bg-slate-100 px-3 py-1 rounded border border-slate-200">
              Total Duration: <strong>295 Calendar Days</strong> • Critical Path: <span className="text-rose-600 font-bold">Active</span>
            </div>
          </div>

          {/* Schedule Engine & Gantt Roadmap Foundation Notice */}
          <div className="bg-amber-50/80 border border-amber-300 rounded-lg p-3.5 flex items-start gap-2.5 text-xs text-amber-950">
            <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-bold">Stage 1 Foundation Status: </span>
              This activity dataset provides the relational foundation (IDs, durations, predecessors, dates, and completion status).
              Per development guidelines, the fully functional dynamic scheduling engine and interactive Gantt chart will be built and validated in subsequent iterations.
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs border-collapse min-w-[850px]">
              <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-28">Activity ID</th>
                  <th className="py-2.5 px-3 w-16">WBS</th>
                  <th className="py-2.5 px-3">Activity Name</th>
                  <th className="py-2.5 px-3 w-20 text-center">Duration</th>
                  <th className="py-2.5 px-3 w-32">Predecessors</th>
                  <th className="py-2.5 px-3 w-28 font-mono">Dates (Plan)</th>
                  <th className="py-2.5 px-3 w-36">Progress & Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {project.activities.map(act => (
                  <tr key={act.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-3 font-mono font-bold text-slate-900">
                      <div className="flex items-center gap-1.5">
                        <span>{act.id}</span>
                        {act.criticalPath && (
                          <span title="Critical Path Activity" className="px-1 py-0.2 bg-rose-100 text-rose-800 text-[9px] font-bold rounded">
                            CP
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-600">{act.wbsCode}</td>
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-900">{act.name}</div>
                      <div className="text-[11px] text-slate-500">{act.description}</div>
                    </td>
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-800">
                      {act.durationDays}d
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px]">
                      {act.predecessors.length > 0 ? (
                        act.predecessors.map((p, i) => (
                          <span key={i} className="inline-block bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 mr-1 mb-1 border border-slate-200">
                            {p.activityId} ({p.type}{p.lagDays ? `+${p.lagDays}d` : ''})
                          </span>
                        ))
                      ) : (
                        <span className="text-slate-400">Start</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-slate-600">
                      <div>{act.plannedStart}</div>
                      <div>{act.plannedEnd}</div>
                    </td>
                    <td className="py-2.5 px-3">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <select
                            value={act.status}
                            onChange={(e) => updateActivityProgress(
                              act.id, 
                              act.percentComplete, 
                              e.target.value as typeof act.status
                            )}
                            className="text-[10px] font-mono rounded px-1.5 py-0.5 border border-slate-300 bg-white"
                          >
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Blocked">Blocked</option>
                          </select>
                          <span className="font-mono font-bold text-slate-800">{act.percentComplete}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={act.percentComplete}
                          onChange={(e) => updateActivityProgress(
                            act.id,
                            Number(e.target.value),
                            Number(e.target.value) === 100 
                              ? 'Completed' 
                              : Number(e.target.value) > 0 ? 'In Progress' : 'Not Started'
                          )}
                          className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 6: Milestones */}
      {activeWorkspaceTab === 'milestones' && (
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Contractual Milestones</h3>
            <p className="text-xs text-slate-500">Key contractual and technical gating events governing project progress and payment certificates.</p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-20">Code</th>
                  <th className="py-2.5 px-3">Milestone Name</th>
                  <th className="py-2.5 px-3 w-28 font-mono">Target Date</th>
                  <th className="py-2.5 px-3 w-28 font-mono">Actual Date</th>
                  <th className="py-2.5 px-3 w-28">Status</th>
                  <th className="py-2.5 px-3">Contractual Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {project.milestones.map(ms => (
                  <tr key={ms.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-3 font-mono font-bold text-slate-900">{ms.code}</td>
                    <td className="py-2.5 px-3 font-bold text-slate-900">{ms.name}</td>
                    <td className="py-2.5 px-3 font-mono text-slate-700">{ms.targetDate}</td>
                    <td className="py-2.5 px-3 font-mono text-slate-500">{ms.actualDate || '—'}</td>
                    <td className="py-2.5 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                        ms.status === 'Achieved'
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : 'bg-amber-100 text-amber-800 border-amber-300'
                      }`}>
                        {ms.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 text-[11px]">{ms.contractualSignificance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 7: Stakeholders & RACI */}
      {activeWorkspaceTab === 'stakeholders' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">Organizations, Stakeholders & Responsibilities</h3>
            <p className="text-xs text-slate-500">Multi-organizational governance model and RACI matrix governing project interfaces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.stakeholders.map(stk => (
              <div key={stk.id} className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{stk.organization}</h4>
                    <p className="text-xs text-slate-500">{stk.role}</p>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                    {stk.category}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-slate-700 uppercase mb-1">Key Responsibilities:</div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    {stk.keyResponsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-slate-700 uppercase mb-1">Key Interface Points:</div>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
                    {stk.interfacePoints.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* RACI Matrix */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs">
            <h4 className="text-sm font-bold text-slate-900 mb-2">RACI Matrix (Key Cross-Functional Handshakes)</h4>
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[10px] border-b border-slate-200">
                <tr>
                  <th className="py-2 px-3">Scope / Activity</th>
                  <th className="py-2 px-3 text-center">Responsible (R)</th>
                  <th className="py-2 px-3 text-center">Accountable (A)</th>
                  <th className="py-2 px-3 text-center">Consulted (C)</th>
                  <th className="py-2 px-3 text-center">Informed (I)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {project.raci.map(r => (
                  <tr key={r.id} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-semibold text-slate-900">{r.scopeTitle}</td>
                    <td className="py-2.5 px-3 text-center text-slate-700">{r.responsible}</td>
                    <td className="py-2.5 px-3 text-center font-bold text-amber-800">{r.accountable}</td>
                    <td className="py-2.5 px-3 text-center text-slate-600">{r.consulted}</td>
                    <td className="py-2.5 px-3 text-center text-slate-500">{r.informed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 8: Risk Register */}
      {activeWorkspaceTab === 'risks' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Project Risk Register</h3>
              <p className="text-xs text-slate-500">Risk probability x impact scoring (1-25) and mitigation strategies.</p>
            </div>
            <button
              onClick={() => setShowAddRisk(!showAddRisk)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Risk</span>
            </button>
          </div>

          {showAddRisk && (
            <form onSubmit={handleCreateRisk} className="bg-slate-50 border border-slate-300 rounded-lg p-4 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase">Register New Project Risk</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                <div className="md:col-span-2">
                  <label className="block text-slate-600 mb-1">Risk Title</label>
                  <input
                    type="text"
                    value={newRiskTitle}
                    onChange={e => setNewRiskTitle(e.target.value)}
                    placeholder="e.g., Extreme rainfall halts joint bay excavation"
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">Category</label>
                  <select
                    value={newRiskCat}
                    onChange={e => setNewRiskCat(e.target.value as RiskItem['category'])}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
                  >
                    <option value="Technical">Technical</option>
                    <option value="Ground / Geotechnical">Ground / Geotechnical</option>
                    <option value="Permitting">Permitting</option>
                    <option value="Supply Chain">Supply Chain</option>
                    <option value="Grid Outage Window">Grid Outage Window</option>
                    <option value="Safety / Environmental">Safety / Environmental</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">Owner</label>
                  <input
                    type="text"
                    value={newRiskOwner}
                    onChange={e => setNewRiskOwner(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-600 mb-1">Probability (1-5)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={newRiskProb}
                    onChange={e => setNewRiskProb(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">Impact (1-5)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={newRiskImpact}
                    onChange={e => setNewRiskImpact(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1 text-xs">Mitigation Strategy</label>
                <textarea
                  value={newRiskMitigation}
                  onChange={e => setNewRiskMitigation(e.target.value)}
                  placeholder="Proactive engineering or process controls to minimize probability/impact..."
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
                  rows={2}
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddRisk(false)}
                  className="px-3 py-1 rounded text-xs text-slate-600 hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3.5 py-1 rounded text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Save Risk
                </button>
              </div>
            </form>
          )}

          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-20">ID</th>
                  <th className="py-2.5 px-3 w-32">Category</th>
                  <th className="py-2.5 px-3">Risk Title & Mitigation Plan</th>
                  <th className="py-2.5 px-3 w-20 text-center">Score</th>
                  <th className="py-2.5 px-3 w-36">Owner</th>
                  <th className="py-2.5 px-3 w-28">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {project.risks.map(r => {
                  const scoreColor = r.score >= 15 
                    ? 'bg-rose-100 text-rose-800 border-rose-300' 
                    : r.score >= 10 
                    ? 'bg-amber-100 text-amber-800 border-amber-300' 
                    : 'bg-emerald-100 text-emerald-800 border-emerald-300';

                  return (
                    <tr key={r.id} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-mono font-bold text-slate-900">{r.id}</td>
                      <td className="py-2.5 px-3 font-medium text-slate-600">{r.category}</td>
                      <td className="py-2.5 px-3 space-y-1">
                        <div className="font-bold text-slate-900">{r.title}</div>
                        <div className="text-[11px] text-slate-600">
                          <strong>Mitigation: </strong>{r.mitigation}
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold border ${scoreColor}`}>
                          {r.score} (P{r.probability} x I{r.impact})
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-slate-600 font-mono text-[11px]">{r.owner}</td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200">
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 9: Cost Baseline */}
      {activeWorkspaceTab === 'costs' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Cost Baseline, Actuals and Forecast</h3>
              <p className="text-xs text-slate-500">WBS-aligned financial structure tracking expenditure, commitments, and Estimate at Completion (EAC).</p>
            </div>
            <div className="text-xs font-mono bg-slate-900 text-amber-400 px-3 py-1.5 rounded">
              Total Budget: €20,700,000
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-20">WBS</th>
                  <th className="py-2.5 px-3">Cost Account Title</th>
                  <th className="py-2.5 px-3 w-36 text-right">Baseline (€)</th>
                  <th className="py-2.5 px-3 w-36 text-right">Actual to Date (€)</th>
                  <th className="py-2.5 px-3 w-36 text-right">Forecast (EAC) (€)</th>
                  <th className="py-2.5 px-3">Basis of Estimate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {project.costs.map(c => (
                  <tr key={c.id} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-bold text-slate-900">{c.wbsCode}</td>
                    <td className="py-2.5 px-3 font-sans font-medium text-slate-900">{c.title}</td>
                    <td className="py-2.5 px-3 text-right text-slate-800">
                      €{c.baselineEur.toLocaleString()}
                    </td>
                    <td className="py-2.5 px-3 text-right text-emerald-700">
                      {c.actualEur ? `€${c.actualEur.toLocaleString()}` : '—'}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-slate-900">
                      €{c.forecastEur.toLocaleString()}
                    </td>
                    <td className="py-2.5 px-3 font-sans text-slate-500 text-[11px]">
                      {c.basisOfEstimate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 10: Quality & Testing */}
      {activeWorkspaceTab === 'testing' && (
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Quality Assurance, Testing & Commissioning</h3>
            <p className="text-xs text-slate-500">Inspection & Test Plan (ITP) milestones: Factory routine tests, site sheath DC tests, and resonant overvoltage soak tests.</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {project.qualityTests.map(test => (
              <div key={test.id} className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-slate-800">
                      {test.code}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">{test.title}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold border ${
                      test.status === 'Passed'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}>
                      {test.status}
                    </span>
                    <EpistemicBadge status={test.epistemicType} size="sm" />
                  </div>
                </div>

                <div className="text-xs text-slate-600 font-mono">
                  Standard Reference: <strong className="text-slate-800">{test.standardReference}</strong>
                </div>

                <p className="text-xs text-slate-700">{test.description}</p>

                <div className="bg-slate-50 p-2.5 rounded border border-slate-200 text-xs">
                  <span className="font-bold text-slate-800">Pass / Acceptance Criteria: </span>
                  <span className="text-slate-700">{test.acceptanceCriteria}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 11: Handover & Records */}
      {activeWorkspaceTab === 'handover' && (
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Technical Documentation & Final Asset Handover</h3>
            <p className="text-xs text-slate-500">As-built GIS spatial models, test dossiers, punch-list Category A closure, and Taking-Over Certificate (TOC).</p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 uppercase font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-48">Category</th>
                  <th className="py-2.5 px-3">Title & Deliverable Description</th>
                  <th className="py-2.5 px-3 w-40">Owner</th>
                  <th className="py-2.5 px-3 w-28 font-mono">Target Date</th>
                  <th className="py-2.5 px-3 w-32">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {project.handoverItems.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-semibold text-slate-700">{item.category}</td>
                    <td className="py-2.5 px-3 space-y-0.5">
                      <div className="font-bold text-slate-900">{item.title}</div>
                      <div className="text-slate-500 text-[11px]">{item.description}</div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 font-mono text-[11px]">{item.owner}</td>
                    <td className="py-2.5 px-3 font-mono text-slate-600">{item.targetDate}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 12: Reference Standards */}
      {activeWorkspaceTab === 'references' && (
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Authoritative Industry Standards & Specifications</h3>
            <p className="text-xs text-slate-500">
              Verified references cited throughout the project workspace and learning modules. Each entry records publisher, URL, subject, access model, and verified limitations.
            </p>
          </div>

          <div className="space-y-3">
            {project.references.map(ref => (
              <ReferenceCard key={ref.id} reference={ref} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
