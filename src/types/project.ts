/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type EpistemicStatus = 
  | 'verified_fact' 
  | 'planning_assumption' 
  | 'proposed_decision' 
  | 'learning_example';

export interface ReferenceSource {
  id: string;
  title: string;
  publisher: string;
  url: string;
  relevantSubject: string;
  access: 'Free' | 'Paid' | 'Restricted' | 'Internal Standard';
  dateChecked: string;
  limitations: string;
}

export interface ProjectOverview {
  id: string;
  name: string;
  code: string;
  purpose: string;
  contextSummary: string;
  voltageLevelKv: number; // e.g. 150
  transmissionType: 'HVAC' | 'HVDC';
  cableTechnology: string; // e.g. "XLPE insulated single-core copper conductor with aluminium laminated sheath"
  routeLengthKm: number;
  circuits: number;
  client: string; // e.g. "TenneT TSO B.V. (Illustrative Client)"
  principalContractor: string; // e.g. "Turnkey Cable Systems EPC"
  location: string;
  epistemicType: EpistemicStatus;
  disclaimer: string;
  createdDate: string;
  lastUpdated: string;
}

export interface ScopeItem {
  id: string;
  title: string;
  description: string;
  category: 'In-Scope' | 'Exclusion' | 'Assumption' | 'Constraint';
  epistemicType: EpistemicStatus;
  rationaleOrImpact?: string;
  referenceSourceId?: string;
}

export interface Deliverable {
  id: string;
  code: string;
  title: string;
  description: string;
  acceptanceCriteria: string[];
  responsibleParty: string;
  targetMilestoneCode: string;
  status: 'Draft' | 'Under Review' | 'Approved';
  epistemicType: EpistemicStatus;
}

export interface WbsNode {
  id: string;
  code: string; // e.g., "1.0", "1.1", "4.2.1"
  parentCode?: string;
  level: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  ownerRole: string;
  epistemicType: EpistemicStatus;
}

export interface ActivityPredecessor {
  activityId: string;
  type: 'FS' | 'SS' | 'FF' | 'SF';
  lagDays: number;
}

export interface Activity {
  id: string; // e.g. "ACT-ENG-01"
  wbsCode: string; // references WbsNode.code
  name: string;
  description: string;
  durationDays: number;
  predecessors: ActivityPredecessor[];
  plannedStart: string; // YYYY-MM-DD
  plannedEnd: string;   // YYYY-MM-DD
  actualStart?: string;
  actualEnd?: string;
  percentComplete: number;
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Blocked';
  assignedRole: string;
  criticalPath: boolean;
  epistemicType: EpistemicStatus;
  notes?: string;
}

export interface Milestone {
  id: string;
  code: string;
  name: string;
  targetDate: string;
  actualDate?: string;
  critical: boolean;
  status: 'Pending' | 'Achieved' | 'Delayed';
  epistemicType: EpistemicStatus;
  contractualSignificance: string;
}

export interface ProjectStakeholder {
  id: string;
  organization: string;
  role: string;
  category: 'Client / TSO' | 'EPC Main Contractor' | 'Specialist Subcontractor' | 'Authority / Municipality' | 'Grid Operator';
  keyResponsibilities: string[];
  interfacePoints: string[];
}

export interface RaciItem {
  id: string;
  activityOrDeliverableId: string;
  scopeTitle: string;
  responsible: string; // 'R'
  accountable: string;  // 'A'
  consulted: string;    // 'C'
  informed: string;     // 'I'
}

export interface RiskItem {
  id: string;
  title: string;
  category: 'Technical' | 'Ground / Geotechnical' | 'Permitting' | 'Supply Chain' | 'Grid Outage Window' | 'Safety / Environmental';
  probability: 1 | 2 | 3 | 4 | 5;
  impact: 1 | 2 | 3 | 4 | 5;
  score: number; // probability * impact
  mitigation: string;
  contingencyPlan: string;
  owner: string;
  status: 'Identified' | 'Active Mitigation' | 'Closed';
  epistemicType: EpistemicStatus;
}

export interface CostItem {
  id: string;
  wbsCode: string;
  title: string;
  costCategory: 'Engineering' | 'Procurement' | 'Civil Works' | 'Electrical Installation' | 'Testing & Commissioning' | 'Project Management & Contingency';
  baselineEur: number;
  actualEur?: number;
  forecastEur: number;
  epistemicType: EpistemicStatus;
  basisOfEstimate: string;
}

export interface QualityTestItem {
  id: string;
  code: string; // e.g., "FAT-CBL-01", "SAT-HV-01"
  stage: 'Factory Acceptance (FAT)' | 'Site Material Inward' | 'Civil Handover' | 'Jointing QA' | 'Site Acceptance (SAT) / Commissioning';
  title: string;
  standardReference: string;
  description: string;
  acceptanceCriteria: string;
  status: 'Planned' | 'In Progress' | 'Passed' | 'Action Required';
  epistemicType: EpistemicStatus;
}

export interface HandoverItem {
  id: string;
  category: 'As-Built Documentation' | 'Test Certificates' | 'Punch-List Item' | 'Operation & Maintenance Manual' | 'Regulatory Certificate';
  title: string;
  description: string;
  owner: string;
  targetDate: string;
  status: 'Pending' | 'Draft Submitted' | 'Client Accepted';
  epistemicType: EpistemicStatus;
}

export interface HighVoltageProject {
  overview: ProjectOverview;
  references: ReferenceSource[];
  scopeItems: ScopeItem[];
  deliverables: Deliverable[];
  wbs: WbsNode[];
  activities: Activity[];
  milestones: Milestone[];
  stakeholders: ProjectStakeholder[];
  raci: RaciItem[];
  risks: RiskItem[];
  costs: CostItem[];
  qualityTests: QualityTestItem[];
  handoverItems: HandoverItem[];
}
