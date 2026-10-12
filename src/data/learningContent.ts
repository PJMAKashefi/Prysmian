/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EpistemicStatus, ReferenceSource } from '../types/project';

export interface SubsectionContent {
  id: string;
  sectionId: 'grid' | 'definition' | 'execution' | 'control';
  title: string;
  shortTitle: string;
  summary: string;
  keyTakeaways: string[];
  epistemicType: EpistemicStatus;
  coreConcepts: {
    term: string;
    definition: string;
    projectRelevance: string;
    epistemicType: EpistemicStatus;
  }[];
  technicalStandards: ReferenceSource[];
  workspaceConnection: {
    title: string;
    explanation: string;
    targetTab: string;
  };
}

export const sectionAContent: SubsectionContent[] = [
  {
    id: "a1-transmission-substations",
    sectionId: "grid",
    title: "Power Transmission Grids and Substations",
    shortTitle: "Transmission & Substations",
    summary: "The architectural framework of high-voltage transmission networks, voltage classifications (HV vs EHV), transmission system operators (TSO role), and substation topologies (AIS vs GIS).",
    keyTakeaways: [
      "In the Netherlands and Continental Europe, 110 kV, 150 kV, and 220 kV are classified as High Voltage (HV), while 380 kV is Extra High Voltage (EHV).",
      "Substations act as the vital switching, transformation, and control nodes connecting generation, interconnections, and regional distribution.",
      "Gas-Insulated Switchgear (GIS) utilizes SF6 or clean-air alternatives to achieve footprints up to 85% smaller than Air-Insulated Switchgear (AIS), making it standard for urban grid nodes."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Transmission System Operator (TSO)",
        definition: "The regulated legal entity responsible for bulk electricity transport, system balance, and maintaining cross-border and regional high-voltage transmission assets (e.g., TenneT in NL/DE).",
        projectRelevance: "Acts as the Client / Asset Owner defining employer's technical requirements and system outage windows.",
        epistemicType: "verified_fact"
      },
      {
        term: "Substation Interface (AIS vs GIS)",
        definition: "Air-Insulated Switchgear (AIS) relies on atmospheric air clearance between live conductors; Gas-Insulated Switchgear (GIS) encloses pressurized dielectric gas in metal containment chambers.",
        projectRelevance: "Dictates whether the cable terminates into outdoor air bushings on gantries or directly into SF6/clean-air GIS switchgear sealing ends.",
        epistemicType: "verified_fact"
      },
      {
        term: "Grid Congestion & Feed-in Limits",
        definition: "A physical state where electricity generation or demand exceeds the thermal capacity of existing overhead lines or underground cable corridors.",
        projectRelevance: "The driver behind grid reinforcement projects such as the Tilburg 150 kV underground corridor.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-IEC-61936",
        title: "IEC 61936-1: Power installations exceeding 1 kV a.c. - Part 1: Common rules",
        publisher: "IEC",
        url: "https://webstore.iec.ch/publication/67894",
        relevantSubject: "Substation safety distances, earthing design, and civil containment standards",
        access: "Paid",
        dateChecked: "2026-08-10",
        limitations: "General power installations standard; national annexes apply."
      }
    ],
    workspaceConnection: {
      title: "View Project Objectives & Grid Context",
      explanation: "Examine how client transmission requirements translate into the project purpose and system voltage parameters.",
      targetTab: "overview"
    }
  },
  {
    id: "a2-hv-cable-systems",
    sectionId: "grid",
    title: "HV Cable Systems and Their Components",
    shortTitle: "Cable Components",
    summary: "Layer-by-layer anatomy of modern extruded High-Voltage AC underground cables: conductors, semi-conductive screens, XLPE insulation, moisture barriers, and protective outer sheaths.",
    keyTakeaways: [
      "Modern onshore transmission almost universally employs cross-linked polyethylene (XLPE) extruded insulation due to thermal endurance (up to 90°C continuous conductor temperature) and low dielectric losses.",
      "The triple-extrusion process applies the inner semiconductive screen, XLPE insulation, and outer semiconductive screen simultaneously in a clean nitrogen curing tube to eliminate microscopic voids.",
      "Conductor selection (Copper vs Aluminium) balances electrical conductivity, mechanical weight, pulling forces, and material commodity costs."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Conductor & Milliken Construction",
        definition: "Cross-sectional conductor (typically 800 mm² to 2500 mm²). For areas >= 1000 mm², conductors are segmented (Milliken construction) to mitigate the AC skin effect and proximity losses.",
        projectRelevance: "The Tilburg project specifies 1200 mm² Cu Milliken conductor to meet continuous 150 kV transfer capacity.",
        epistemicType: "planning_assumption"
      },
      {
        term: "XLPE Insulation & Degassing",
        definition: "Cross-linked polyethylene created via peroxide catalysts. After extrusion, cables undergo heat degassing (days to weeks) to expel methane and volatile by-products that cause electrical degradation.",
        projectRelevance: "Factory degassing time is a primary driver in manufacturing lead time and factory delivery schedules.",
        epistemicType: "verified_fact"
      },
      {
        term: "Metallic Barrier & Radial Moisture Seal",
        definition: "Laminated aluminium foil or corrugated metallic sheath preventing water ingress into the XLPE layer while carrying fault return currents.",
        projectRelevance: "Ensures 40+ year expected operational life underground in saturated Dutch water table conditions.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-IEC-60840-SPEC",
        title: "IEC 60840:2020: Extruded insulation cable design requirements",
        publisher: "IEC",
        url: "https://webstore.iec.ch/publication/62313",
        relevantSubject: "Insulation thickness, electrical stress limits, and metallic screen dimensioning",
        access: "Paid",
        dateChecked: "2026-09-15",
        limitations: "Standard for voltages 30 kV < U <= 150 kV."
      }
    ],
    workspaceConnection: {
      title: "Inspect Technical Bill of Materials & Procurement WBS",
      explanation: "Inspect how cable component specifications drive manufacturing work packages (WBS 3.1) and technical deliverables.",
      targetTab: "wbs"
    }
  },
  {
    id: "a3-joints-terminations",
    sectionId: "grid",
    title: "Cable Joints and Terminations",
    shortTitle: "Joints & Terminations",
    summary: "High-voltage cable accessories: prefabricated pre-moulded joints, transition joints, sectionalizing cross-bonding joints, link boxes, and outdoor/GIS terminations.",
    keyTakeaways: [
      "Joints and terminations are the most electrically stressed points in an underground system, requiring precise electrical stress control (geometric cones or resistive field control).",
      "Sectionalizing joints break the continuity of the metallic sheath, enabling cross-bonding schemes that limit circulating sheath currents and boost transmission ampacity.",
      "Assembly must occur in clean-room conditions (filtered jointing shelters) by certified master jointers to prevent particle contamination."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Pre-moulded One-Piece Joint",
        definition: "A factory-tested elastomeric EPDM or silicone rubber sleeve expanded over the cable ends that provides both mechanical protection and radial electrical stress relief.",
        projectRelevance: "Specified for the 12 joint bays along the 8.4 km Tilburg link to minimize on-site assembly errors.",
        epistemicType: "planning_assumption"
      },
      {
        term: "Sheath Cross-Bonding & Link Boxes",
        definition: "An electrical configuration where metallic sheaths of adjacent minor sections are cross-connected in cyclic rotation, causing induced voltages to cancel out and eliminating continuous circulating currents.",
        projectRelevance: "Permits maximum continuous current rating in the conductor without de-rating due to sheath I²R thermal losses.",
        epistemicType: "verified_fact"
      },
      {
        term: "Sheath Voltage Limiter (SVL)",
        definition: "Zinc-oxide surge arresters installed within cross-bonding link boxes to protect sheath insulation from lightning and switching impulse overvoltages.",
        projectRelevance: "Ensures the 10 kV outer jacket remains intact and protected during network transient events.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-CIGRE-TB283",
        title: "CIGRE TB 283: Special bonding of high voltage power cables",
        publisher: "CIGRE",
        url: "https://e-cigre.org/publication/283-special-bonding-of-high-voltage-power-cables",
        relevantSubject: "Cross-bonding calculation, standing sheath voltage limits, and SVL selection",
        access: "Free",
        dateChecked: "2026-07-20",
        limitations: "Comprehensive engineering guidance; client guidelines may impose lower maximum touch voltage limits (e.g., 65 V)."
      }
    ],
    workspaceConnection: {
      title: "View Jointing Work Packages & Schedule",
      explanation: "See how the 12 joint bays dictate installation sequencing (WBS 5.2) and critical path dependencies.",
      targetTab: "activities"
    }
  },
  {
    id: "a4-installation-testing-concepts",
    sectionId: "grid",
    title: "Cable Installation and Testing Concepts",
    shortTitle: "Installation & Testing",
    summary: "Fundamental methodologies for laying underground cables: open-trench versus ducting, Horizontal Directional Drilling (HDD), pulling tension control, and post-installation testing regimes.",
    keyTakeaways: [
      "Cable laying can be direct buried in open trenches or pulled through pre-installed HDPE ducts; ducts allow civil works to precede cable delivery and reduce open trench exposure.",
      "Pulling tension calculations must verify both tensile pull on conductor pulling eyes and sidewall bearing pressure (SWBP) on curved bends.",
      "After installation, testing per IEC 60840 mandates outer sheath DC testing (integrity of jacket) and AC overvoltage resonant testing (integrity of XLPE and accessories)."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Sidewall Bearing Pressure (SWBP)",
        definition: "Radial compressive force exerted on the cable insulation as it is pulled around a bend, measured in kN/m (calculated as Tension / Bend Radius).",
        projectRelevance: "Limits winch pulling speed and minimum duct bend radius to prevent crushing the hot extruded XLPE.",
        epistemicType: "verified_fact"
      },
      {
        term: "Resonant Test Set (Variable Frequency)",
        definition: "A mobile high-voltage test reactor that tunes its inductive reactance to match the large capacitive load of the cable, generating high AC voltage with modest generator power.",
        projectRelevance: "Mandatory on-site acceptance test equipment deployed during commissioning at Tilburg (WBS 6.2).",
        epistemicType: "verified_fact"
      },
      {
        term: "Distributed Temperature Sensing (DTS)",
        definition: "Real-time thermal monitoring of the cable surface utilizing optical fiber Raman backscatter along the entire cable route.",
        projectRelevance: "Provides dynamic line rating (DLR) capabilities for TenneT to operate the link safely near thermal limits.",
        epistemicType: "planning_assumption"
      }
    ],
    technicalStandards: [
      {
        id: "REF-IEC-60840-TEST",
        title: "IEC 60840:2020 Clause 15: Tests after installation",
        publisher: "IEC",
        url: "https://webstore.iec.ch/publication/62313",
        relevantSubject: "DC sheath test criteria and AC overvoltage test parameters",
        access: "Paid",
        dateChecked: "2026-09-15",
        limitations: "Specifies test voltages and durations agreed upon between purchaser and contractor."
      }
    ],
    workspaceConnection: {
      title: "Review Quality & Site Testing Protocol",
      explanation: "Inspect the planned Site Acceptance Tests (SAT) and commissioning milestones in the project workspace.",
      targetTab: "testing"
    }
  },
  {
    id: "a5-industry-terminology",
    sectionId: "grid",
    title: "Industry Terminology and Glossary",
    shortTitle: "Glossary & Terminology",
    summary: "Exhaustive reference of standard acronyms, abbreviations, and specialized engineering vocabulary used in HV cable transmission and EPC delivery.",
    keyTakeaways: [
      "Consistent terminology prevents contractual misinterpretations between EPC contractors, clients, and subcontractors.",
      "Key acronyms span electrical engineering (XLPE, DTS, SVL, PD, BIL), civil engineering (HDD, GPR, SDR), and project management (EPC, FAT, SAT, WBS, COD)."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "BIL (Basic Impulse Insulation Level)",
        definition: "The reference crest value of standard lightning impulse voltage withstand that the electrical insulation must withstand without breakdown.",
        projectRelevance: "Tilburg 150 kV insulation rated for 750 kV crest lightning impulse.",
        epistemicType: "verified_fact"
      },
      {
        term: "Trefoil vs Flat Formation",
        definition: "Arrangement of 3 single-core phases: Trefoil (triangular clover touching) minimizes mutual inductance and magnetic field; Flat formation maximizes thermal dissipation.",
        projectRelevance: "Tilburg design assumes Trefoil in open trench and Flat spacing through HDD conduit bundles.",
        epistemicType: "planning_assumption"
      },
      {
        term: "WIBON / CROW 500 (Netherlands)",
        definition: "Wet informatie-uitwisseling bovengrondse en ondergrondse netten: Statutory Dutch law mandating utility digital notice (KLIC) and excavation damage prevention.",
        projectRelevance: "Strict legal requirement for trial trenches prior to mechanical excavation.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-IEV-VOCAB",
        title: "IEC 60050: International Electrotechnical Vocabulary (IEV)",
        publisher: "IEC",
        url: "https://www.electropedia.org",
        relevantSubject: "Standardized international definitions for power cables and switchgear",
        access: "Free",
        dateChecked: "2026-09-01",
        limitations: "Standard international terminology repository."
      }
    ],
    workspaceConnection: {
      title: "View Technical Scope Items",
      explanation: "Review how technical terms are applied across scope boundaries and contract assumptions.",
      targetTab: "scope"
    }
  },
  {
    id: "a6-reference-tilburg-context",
    sectionId: "grid",
    title: "Reference Project: Tilburg HV Cable & Substation Context",
    shortTitle: "Tilburg Case Context",
    summary: "Real-world engineering context of the Dutch electrical grid in North Brabant, focusing on the high-voltage transmission corridor connecting Tilburg Noord.",
    keyTakeaways: [
      "North Brabant is one of Europe's fastest-growing logistics and manufacturing clusters, resulting in severe regional transmission grid congestion.",
      "TenneT TSO is executing large-scale grid reinforcement programs involving underground 150 kV cable links and substation expansions across the region.",
      "The Tilburg setting provides authentic geotechnical conditions: high sandy groundwater tables, agricultural parcels, canal crossings (Wilhelmina Canal), and arterial highway intersections (A58)."
    ],
    epistemicType: "learning_example",
    coreConcepts: [
      {
        term: "Tilburg Noord 150 kV Substation",
        definition: "A critical high-voltage transmission substation serving industrial and municipal load centers in central Brabant.",
        projectRelevance: "Acts as Node A for our illustrative cable link connection.",
        epistemicType: "learning_example"
      },
      {
        term: "Public Grid Learning Boundary",
        definition: "Public technical facts regarding Dutch 150 kV grid practices are leveraged to create an authentic simulation without disclosing proprietary contractor execution details.",
        projectRelevance: "Reinforces our epistemic discipline: distinguishing verified facts from planning assumptions.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-TENNET-KAPAZ",
        title: "TenneT Grid Capacity & Congestion Management Reports (Noord-Brabant)",
        publisher: "TenneT TSO B.V.",
        url: "https://www.tennet.eu/nl/elektriciteitsnet/capaciteitskaart",
        relevantSubject: "Regional 150 kV capacity constraints and reinforcement projects",
        access: "Free",
        dateChecked: "2026-09-10",
        limitations: "Public capacity maps and general development program notices."
      }
    ],
    workspaceConnection: {
      title: "Open Tilburg Project Overview",
      explanation: "Jump directly into the central workspace dashboard for the Tilburg 150 kV project.",
      targetTab: "overview"
    }
  }
];

export const sectionBContent: SubsectionContent[] = [
  {
    id: "b1-customer-requirements",
    sectionId: "definition",
    title: "Customer Requirements and Project Objectives",
    shortTitle: "Requirements & Objectives",
    summary: "Translating Employer's Requirements (TSO functional specifications) into measurable project performance baselines, continuous rating criteria, and availability metrics.",
    keyTakeaways: [
      "Employer Requirements define the electrical performance (MVA continuous rating, fault withstand, harmonic limits) without prescribing every construction detail.",
      "Clear requirements capture both primary electrical objectives (power transmission) and secondary operational objectives (DTS temperature sensing, asset life expectancy >= 40 years).",
      "Traceability between customer specifications and technical deliverables is fundamental to avoiding scope creep and variation claims."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Continuous Rating (MVA & Amperes)",
        definition: "The steady-state electric power that the cable circuit must carry under specified ambient soil temperature and thermal backfill conditions without exceeding conductor thermal limits (90°C).",
        projectRelevance: "Target requirement for the Tilburg 150 kV link: 2 circuits x 250 MVA continuous rating.",
        epistemicType: "planning_assumption"
      },
      {
        term: "Availability & System Reliability Metric",
        definition: "System availability target (typically > 99.8%) requiring redundancy in bonding link boxes and fiber monitoring channels.",
        projectRelevance: "Drives inclusion of dual redundant DTS fibers in the cable construction.",
        epistemicType: "planning_assumption"
      }
    ],
    technicalStandards: [
      {
        id: "REF-CIGRE-TB680",
        title: "CIGRE TB 680: Implementation of High Voltage Underground Cable Systems",
        publisher: "CIGRE",
        url: "https://e-cigre.org/publication/680-implementation-of-high-voltage-underground-cable-systems",
        relevantSubject: "Customer requirement formulation and turnkey project delivery standards",
        access: "Free",
        dateChecked: "2026-06-12",
        limitations: "General advisory brochure."
      }
    ],
    workspaceConnection: {
      title: "Review Project Objectives",
      explanation: "Check the core project brief and customer purpose defined in the workspace.",
      targetTab: "overview"
    }
  },
  {
    id: "b2-contract-scope",
    sectionId: "definition",
    title: "Contract Scope, Exclusions, Assumptions, and Constraints",
    shortTitle: "Scope & Boundaries",
    summary: "Rigorous definition of project boundaries: battery limits, explicitly excluded works, critical planning assumptions, and statutory constraints.",
    keyTakeaways: [
      "Ambiguity in scope boundaries—such as civil roadway reinstatement limits or substation GIS interface bays—is the single most frequent cause of contractor disputes.",
      "Exclusions must be as clearly documented as inclusions to prevent unexpected cost creep.",
      "Assumptions regarding ground thermal resistivity and groundwater levels must be validated early via site surveys."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Battery Limits (Terminal Points)",
        definition: "The exact physical coordinates or equipment flanges where one party's delivery responsibility ends and another begins.",
        projectRelevance: "In our Tilburg project, EPC scope ends at the cable sealing end terminal clamps inside the substation.",
        epistemicType: "planning_assumption"
      },
      {
        term: "Statutory Environmental Constraints",
        definition: "Legally binding limitations imposed by regional environmental codes, such as bird nesting moratoriums or nitrogen deposition ceilings.",
        projectRelevance: "Directly constrains civil works scheduling in rural parcels between March and July.",
        epistemicType: "planning_assumption"
      }
    ],
    technicalStandards: [
      {
        id: "REF-FIDIC-SILVER",
        title: "FIDIC EPC/Turnkey Contract (Silver Book) Guidelines",
        publisher: "FIDIC",
        url: "https://fidic.org/books/epcturnkey-contract-2nd-ed-2017-silver-book",
        relevantSubject: "Contract boundary conditions, unforeseen ground conditions, and employer risk allocation",
        access: "Paid",
        dateChecked: "2026-05-18",
        limitations: "Standard contract model subject to national adaptations."
      }
    ],
    workspaceConnection: {
      title: "Open Scope Register",
      explanation: "Examine the In-Scope, Exclusions, Assumptions, and Constraints table in the project workspace.",
      targetTab: "scope"
    }
  },
  {
    id: "b3-deliverables-acceptance",
    sectionId: "definition",
    title: "Deliverables and Acceptance Criteria",
    shortTitle: "Deliverables & Criteria",
    summary: "Contractual and engineering deliverables produced across the project lifecycle and the objective criteria governing client sign-off.",
    keyTakeaways: [
      "Every major work stream must culminate in a formal deliverable (e.g., calculation dossier, FAT certificates, SAT test report, as-built GIS).",
      "Acceptance criteria must be quantitative, measurable, and tied to recognized standards (IEC, CIGRE, Dutch NEN standards) rather than subjective language.",
      "Phased sign-off gates prevent work progressing on unapproved engineering baselines."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Formal Acceptance Gate",
        definition: "A scheduled contractual event where the employer formally signs off that a deliverable satisfies contractual conditions.",
        projectRelevance: "Milestone MS-03 represents the design freeze deliverable sign-off that releases cable manufacturing.",
        epistemicType: "planning_assumption"
      },
      {
        term: "Partial Discharge In-Factory Criterion",
        definition: "Quantitative threshold where PD magnitude during routine testing must remain strictly below 5 pC (or 2 pC guarantee).",
        projectRelevance: "DEL-CBL-003 FAT certificate requirement for shipping release.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-ISO-9001",
        title: "ISO 9001:2015: Quality Management Systems - Deliverable Verification",
        publisher: "ISO",
        url: "https://www.iso.org/standard/62085.html",
        relevantSubject: "Design verification and deliverable acceptance protocols",
        access: "Paid",
        dateChecked: "2026-04-10",
        limitations: "Organizational quality framework."
      }
    ],
    workspaceConnection: {
      title: "Inspect Deliverables & Criteria",
      explanation: "Review the formal deliverables register and acceptance conditions in the project workspace.",
      targetTab: "deliverables"
    }
  },
  {
    id: "b4-interfaces-responsibilities",
    sectionId: "definition",
    title: "Project Interfaces and Responsibilities",
    shortTitle: "Interfaces & RACI",
    summary: "Mapping multi-organizational stakeholders (TSO, EPC Consortium, civil contractors, water boards, grid dispatchers) and defining RACI matrices.",
    keyTakeaways: [
      "Onshore cable projects have heavy multi-agency interfaces spanning public road authorities, regional water boards, agricultural landowners, and switchgear contractors.",
      "A RACI matrix (Responsible, Accountable, Consulted, Informed) clarifies governance and removes ambiguity during critical handoffs.",
      "Physical interfaces (e.g., civil pit handover to electrical pulling teams) require formal signed interface check sheets."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "RACI Governance Matrix",
        definition: "A project responsibility assignment matrix that maps roles to activities with single-point accountability.",
        projectRelevance: "Ensures every high-voltage milestone has an unambiguous single accountable owner.",
        epistemicType: "verified_fact"
      },
      {
        term: "Civil-to-Electrical Handover Protocol",
        definition: "A formal handover document confirming trench depth, duct mandrel proving, and pit cleanliness before cable spooling begins.",
        projectRelevance: "Prevents cable damage claims between civil subcontractor and cable pulling crew.",
        epistemicType: "planning_assumption"
      }
    ],
    technicalStandards: [
      {
        id: "REF-PMBOK-7",
        title: "PMI PMBOK Guide 7th Edition: Stakeholder Engagement & Governance",
        publisher: "Project Management Institute",
        url: "https://www.pmi.org/pmbok-guide-standards",
        relevantSubject: "Interface management and RACI structural design",
        access: "Paid",
        dateChecked: "2026-03-25",
        limitations: "General project management body of knowledge."
      }
    ],
    workspaceConnection: {
      title: "View Stakeholders & RACI Matrix",
      explanation: "Explore the stakeholder organizational profiles and RACI matrix in the project workspace.",
      targetTab: "stakeholders"
    }
  },
  {
    id: "b5-wbs",
    sectionId: "definition",
    title: "Work Breakdown Structure (WBS)",
    shortTitle: "WBS Hierarchy",
    summary: "Hierarchical 100% rule decomposition of the entire project scope into logical, manageable work packages from Level 1 down to Level 3/4.",
    keyTakeaways: [
      "The WBS is deliverable-oriented and encompasses 100% of the project scope—nothing more, nothing less.",
      "In our HV project model, Level 1 comprises: 1.0 Project Management, 2.0 Engineering & Permitting, 3.0 Procurement & Manufacturing, 4.0 Civil Works, 5.0 Cable Installation & Jointing, 6.0 Commissioning & Handover.",
      "Work package codes (e.g., 4.1, 5.2) provide the unifying key that ties together schedule activities, cost accounts, and risk registers."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "100% Rule of WBS",
        definition: "A core project management rule stating that the WBS must encompass 100% of the work defined by the scope and capture all deliverables.",
        projectRelevance: "Guarantees no scope gap between civil works, electrical supply, and commissioning.",
        epistemicType: "verified_fact"
      },
      {
        term: "Work Package (WP)",
        definition: "The lowest hierarchical level of the WBS where cost, duration, and resources can be reliably estimated and managed.",
        projectRelevance: "Forms the parent container for detailed operational activities.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-ISO-21500",
        title: "ISO 21500: Project, programme and portfolio management - WBS practices",
        publisher: "ISO",
        url: "https://www.iso.org/standard/74620.html",
        relevantSubject: "Standard WBS decomposition guidelines",
        access: "Paid",
        dateChecked: "2026-05-02",
        limitations: "General standard."
      }
    ],
    workspaceConnection: {
      title: "Explore WBS Tree in Workspace",
      explanation: "Inspect the hierarchical WBS tree structure and ownership roles in the project workspace.",
      targetTab: "wbs"
    }
  },
  {
    id: "b6-work-packages-activities",
    sectionId: "definition",
    title: "Work Packages and Activities",
    shortTitle: "Activities & Structure",
    summary: "Deconstructing work packages into discrete, executable schedule activities with unique identifiers, descriptions, durations, and assignees.",
    keyTakeaways: [
      "Activities represent the actual work executed over time to generate deliverables.",
      "Each activity requires a unique stable identifier (e.g., ACT-ENG-01, ACT-CIV-02) that remains consistent across scheduling tool iterations.",
      "Durations must reflect realistic production rates (e.g., open trench digging at 120 m/day, HDD pullback at 1 bore/week, jointing at 3-4 days/joint bay)."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Stable Activity Identifier",
        definition: "An immutable alphanumeric code assigned to each activity to ensure relational integrity across schedules, databases, and logs.",
        projectRelevance: "Prevents broken dependency references when schedule updates occur.",
        epistemicType: "verified_fact"
      },
      {
        term: "HV Production Rates",
        definition: "Empirical execution velocity benchmarks for specific HV tasks (e.g., joint bay cleanroom preparation = 2 days; jointing 3 phases = 5 days).",
        projectRelevance: "Forms the basis of duration estimates in the Tilburg activities register.",
        epistemicType: "planning_assumption"
      }
    ],
    technicalStandards: [
      {
        id: "REF-AACE-29R-03",
        title: "AACE International Recommended Practice 29R-03: Forensic Schedule Analysis & Activity Definition",
        publisher: "AACE International",
        url: "https://web.aacei.org",
        relevantSubject: "Activity breakdown standards and schedule data structures",
        access: "Paid",
        dateChecked: "2026-06-19",
        limitations: "Professional cost and schedule engineering standard."
      }
    ],
    workspaceConnection: {
      title: "View Activities Register",
      explanation: "Inspect the full activity registry with durations, assignees, and progress percentages.",
      targetTab: "activities"
    }
  },
  {
    id: "b7-risks-cost-estimates",
    sectionId: "definition",
    title: "Risks and Initial Cost Estimates",
    shortTitle: "Risks & Cost Estimates",
    summary: "Qualitative and quantitative risk identification (geotechnical, permitting, supply chain, grid outages) and preparation of the initial cost baseline.",
    keyTakeaways: [
      "Underground HV cable projects face substantial ground uncertainty; unrecorded utilities and geotechnical anomalies rank as primary cost drivers.",
      "Cost baselines must clearly separate EPC direct materials (cable reels, joints), civil construction, specialist subcontractors, and contingency reserves.",
      "Every identified risk requires an active mitigation plan and an owner accountable for execution."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Risk Severity Score (P x I)",
        definition: "Product of probability (1-5) and financial/schedule impact (1-5), prioritizing high-severity risks (score >= 12) for proactive executive management.",
        projectRelevance: "Prioritizes CROW 500 trial trenching to avoid catastrophic utility strikes during urban excavation.",
        epistemicType: "verified_fact"
      },
      {
        term: "Direct vs Indirect Cost Accounts",
        definition: "Direct costs represent physical hardware and field labor; indirect costs cover engineering, insurance, site facilities, and project management.",
        projectRelevance: "Modeled in the Tilburg cost structure (Total baseline ~€20.7M).",
        epistemicType: "planning_assumption"
      }
    ],
    technicalStandards: [
      {
        id: "REF-ISO-31000",
        title: "ISO 31000:2018: Risk Management - Guidelines",
        publisher: "ISO",
        url: "https://www.iso.org/iso-31000-risk-management.html",
        relevantSubject: "Risk registers, risk assessment scoring, and treatment hierarchies",
        access: "Paid",
        dateChecked: "2026-04-18",
        limitations: "Global management guideline."
      }
    ],
    workspaceConnection: {
      title: "Inspect Risks & Cost Accounts",
      explanation: "Open the Risk Register and Cost Baseline in the project workspace.",
      targetTab: "risks"
    }
  },
  {
    id: "b8-milestones-integrated-schedule",
    sectionId: "definition",
    title: "Milestones and Integrated Schedule Planning",
    shortTitle: "Milestones & Scheduling",
    summary: "Establishing critical milestones, logical predecessors (FS, SS, FF, SF), leads/lags, and establishing the Critical Path Method (CPM) baseline.",
    keyTakeaways: [
      "Milestones represent zero-duration marker events of paramount commercial and contractual significance (e.g., NTP, Design Freeze, SAT Passed, Commercial Operation Date).",
      "Activity relationships should favor Finish-to-Start (FS) and Start-to-Start with positive lag (SS+lag) while avoiding overly complex or circular logic.",
      "The Critical Path dictates the absolute shortest timeframe in which the project can be energized without scope acceleration."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Critical Path Method (CPM)",
        definition: "A schedule calculation algorithm that determines the longest sequence of dependent activities and the amount of float on non-critical paths.",
        projectRelevance: "The critical path for Tilburg runs from Geotech -> Design -> Cable Manufacturing -> Pulling -> Jointing -> SAT -> COD.",
        epistemicType: "verified_fact"
      },
      {
        term: "Contractual Key Date / Milestone",
        definition: "A fixed calendar date tied to contractual liquidated damages or milestone payment certificates.",
        projectRelevance: "Tracked across MS-01 through MS-09 in our project schedule data model.",
        epistemicType: "planning_assumption"
      }
    ],
    technicalStandards: [
      {
        id: "REF-CIGRE-TB680-SCHED",
        title: "CIGRE TB 680 Section 4: Project Schedule Integration & Milestones",
        publisher: "CIGRE",
        url: "https://e-cigre.org/publication/680-implementation-of-high-voltage-underground-cable-systems",
        relevantSubject: "Scheduling norms for underground transmission systems",
        access: "Free",
        dateChecked: "2026-06-12",
        limitations: "Industry guideline."
      }
    ],
    workspaceConnection: {
      title: "View Milestones Register",
      explanation: "Examine the project milestones and critical path indicators in the workspace.",
      targetTab: "milestones"
    }
  }
];

export const sectionCContent: SubsectionContent[] = [
  {
    id: "c1-engineering-design",
    sectionId: "execution",
    title: "Engineering and Design",
    shortTitle: "Engineering & Design",
    summary: "Detailed electrical calculations (ampacity, thermal modeling per IEC 60287, induced sheath voltages), route alignment profiles, and civil CAD drawings.",
    keyTakeaways: [
      "Thermal modeling per IEC 60287 determines allowable continuous ampacity based on soil thermal resistivity, burial depth, and proximity to external heat sources.",
      "Thermo-mechanical calculations ensure the cable expands and contracts safely inside ducts and joint bays without buckling.",
      "Pulling tension software calculates maximum winching force and sidewall pressure around every bend along the route."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "IEC 60287 Ampacity Calculation",
        definition: "The international benchmark formula for calculating continuous current ratings of cables under steady-state thermal conditions.",
        projectRelevance: "Governs whether 1200 mm² copper conductor will meet the required 250 MVA throughput under summer dry soil conditions.",
        epistemicType: "verified_fact"
      },
      {
        term: "Sheath Voltage Limiter (SVL) Rating",
        definition: "Calculating maximum standing voltage on metallic screens under normal load and during phase-to-earth external system faults.",
        projectRelevance: "Ensures personnel touch safety at above-ground cross-bonding link boxes.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-IEC-60287",
        title: "IEC 60287: Electric cables - Calculation of the current rating",
        publisher: "IEC",
        url: "https://webstore.iec.ch/publication/1277",
        relevantSubject: "Continuous ampacity, thermal resistance, and dielectric loss equations",
        access: "Paid",
        dateChecked: "2026-07-28",
        limitations: "Applies to steady-state operations; cyclic ratings refer to IEC 60853."
      }
    ],
    workspaceConnection: {
      title: "View Deliverable DEL-01 (Engineering Dossier)",
      explanation: "Review how engineering calculations are tracked in the project deliverables register.",
      targetTab: "deliverables"
    }
  },
  {
    id: "c2-procurement-manufacturing",
    sectionId: "execution",
    title: "Procurement and Manufacturing",
    shortTitle: "Procurement & Factory",
    summary: "Supply chain management for raw materials (copper, XLPE resin), extrusion lines, factory degassing periods, and Factory Acceptance Testing (FAT).",
    keyTakeaways: [
      "HV cable manufacturing is highly capital intensive; cable factories operate continuous extrusion lines in vertical or catenary towers.",
      "Degassing in heated chambers is mandatory to eliminate volatile flammable methane generated during peroxide cross-linking.",
      "Factory routine testing tests 100% of manufactured drum lengths with high voltage and ultra-sensitive partial discharge detectors before factory release."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Continuous Catenary Extrusion (CCV)",
        definition: "High-temperature pressurized nitrogen chamber where conductor, inner semi-con, XLPE insulation, and outer semi-con are simultaneously cross-linked.",
        projectRelevance: "Produces seamless, void-free insulation essential for 150 kV electrical reliability.",
        epistemicType: "verified_fact"
      },
      {
        term: "Factory Acceptance Test (FAT)",
        definition: "Formal inspection witnessed by customer or third-party inspector verifying dimensions, conductor resistance, and electrical withstand.",
        projectRelevance: "Contractual gate MS-05 authorizing release of drum shipments to site.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-IEC-60840-FAT",
        title: "IEC 60840:2020 Clause 9: Routine tests on cables and accessories",
        publisher: "IEC",
        url: "https://webstore.iec.ch/publication/62313",
        relevantSubject: "Factory routine electrical test procedures and spark tests",
        access: "Paid",
        dateChecked: "2026-09-15",
        limitations: "Standard applies to batch routine releases."
      }
    ],
    workspaceConnection: {
      title: "View Procurement Work Packages (WBS 3.0)",
      explanation: "Inspect manufacturing and factory testing work packages in the WBS.",
      targetTab: "wbs"
    }
  },
  {
    id: "c3-civil-works-site-prep",
    sectionId: "execution",
    title: "Civil Works and Site Preparation",
    shortTitle: "Civil Works & Site",
    summary: "Trench excavation, sheeting and shoring, dewatering management, bedding sand placement, and Horizontal Directional Drilling (HDD) execution.",
    keyTakeaways: [
      "Civil works constitute 30% to 50% of total onshore cable system turnkey costs and carry the highest susceptibility to weather and subsurface delays.",
      "Horizontal Directional Drilling (HDD) allows crossing busy infrastructure (motorways, canals, railways) without disrupting surface traffic.",
      "Trench bedding requires certified thermal sand free of sharp stones (grain size <= 2 mm) to prevent puncturing the cable outer jacket."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Horizontal Directional Drilling (HDD)",
        definition: "Steerable trenchless methodology involving pilot bore, back-reaming, and pulling bundled HDPE pipes under obstacles.",
        projectRelevance: "Utilized at 4 critical crossings in the Tilburg link (including Highway A58).",
        epistemicType: "planning_assumption"
      },
      {
        term: "Groundwater Dewatering & Infiltration",
        definition: "Lowering local groundwater tables using well-point suction pumps to allow dry, stable trench excavation.",
        projectRelevance: "Regulated strictly by Dutch Water Boards (Waterschap De Dommel) to prevent ecological drying.",
        epistemicType: "planning_assumption"
      }
    ],
    technicalStandards: [
      {
        id: "REF-NEN-3654",
        title: "NEN 3654: Steel and PE pipelines for transport of fluids and cables - HDD requirements",
        publisher: "NEN (Royal Netherlands Standardization Institute)",
        url: "https://www.nen.nl/nen-3654-2019-nl-263625",
        relevantSubject: "Borehole stability, mud pressure calculations, and duct pullback standards",
        access: "Paid",
        dateChecked: "2026-08-04",
        limitations: "Dutch national civil standard."
      }
    ],
    workspaceConnection: {
      title: "Inspect Civil Activities in Schedule",
      explanation: "Review the civil works excavation and drilling activities in the project schedule.",
      targetTab: "activities"
    }
  },
  {
    id: "c4-logistics-material",
    sectionId: "execution",
    title: "Logistics and Material Readiness",
    shortTitle: "Logistics & Readiness",
    summary: "Transporting oversized heavy cable drums (up to 40-50 tonnes per drum), route permit clearances, on-site storage, and weather protection.",
    keyTakeaways: [
      "Large HV cable reels represent abnormal road transport loads requiring specialized multi-axle low-loader trailers and police escort permissions.",
      "Cable drums must be secured with proper braking jacks during unspooling to prevent uncontrolled runaway rolling.",
      "Accessories, premoulded joints, and cleanroom shelters require temperature-controlled dry storage prior to installation."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Heavy Transport Route Survey",
        definition: "Swept-path analysis of highway roundabouts, overhead bridge clearances, and axle-load weight restrictions along transport corridors.",
        projectRelevance: "Required to deliver 50-tonne reels from European manufacturing plants to Tilburg.",
        epistemicType: "planning_assumption"
      },
      {
        term: "Drum Braking & Deceleration Rig",
        definition: "Mechanical or hydraulic disk brakes mounted to drum jacks that maintain tension and stop rotation instantly if pulling winches halt.",
        projectRelevance: "Crucial site safety protocol to prevent cable kinking.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-CIGRE-TB250-LOG",
        title: "CIGRE TB 250 Chapter 5: Handling and Transportation of HV Cables",
        publisher: "CIGRE",
        url: "https://e-cigre.org/publication/250-cable-systems-in-subsurface-environment",
        relevantSubject: "Drum handling, lifting slings, and maximum transport bend radii",
        access: "Free",
        dateChecked: "2026-08-10",
        limitations: "Advisory engineering brochure."
      }
    ],
    workspaceConnection: {
      title: "Review Logistics Risk RSK-05",
      explanation: "Inspect the logistics risk and mitigation contingencies in the Risk Register.",
      targetTab: "risks"
    }
  },
  {
    id: "c5-cable-installation-assembly",
    sectionId: "execution",
    title: "Cable Installation and Assembly",
    shortTitle: "Pulling & Assembly",
    summary: "Cable winching mechanics, motorized roller setups, pulling force logging, jointing within air-conditioned tents, and termination assembly.",
    keyTakeaways: [
      "Pulling winches must be fitted with calibrated dynamometers recording continuous tensile load and auto-tripping before maximum limits are breached.",
      "Motorized pulling rollers synchronized along the trench minimize peak tensile forces on long runs.",
      "Jointing is a micro-surgical electrical operation performed inside climate-controlled tents maintaining temperature between 18°C-25°C and relative humidity < 60%."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Semi-conductive Layer Stripping",
        definition: "High-precision mechanical peeling of the outer bonded semiconductive screen to expose pristine XLPE insulation without scoring the insulation surface.",
        projectRelevance: "Scratches as shallow as 0.05 mm can induce local electric field concentration and catastrophic breakdown during testing.",
        epistemicType: "verified_fact"
      },
      {
        term: "Controlled Clean Jointing Tent",
        definition: "A sealed, air-conditioned workspace erected over joint bay pits to keep out rain, dust, and airborne particulate contamination during joint sleeve expansion.",
        projectRelevance: "Mandated for all 12 joint bays along the Tilburg route.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-CIGRE-TB680-INST",
        title: "CIGRE TB 680 Chapter 6: High Voltage Cable Jointing & Assembly Quality Protocols",
        publisher: "CIGRE",
        url: "https://e-cigre.org/publication/680-implementation-of-high-voltage-underground-cable-systems",
        relevantSubject: "Jointer certification, environmental controls, and tooling calibrations",
        access: "Free",
        dateChecked: "2026-06-12",
        limitations: "International standard."
      }
    ],
    workspaceConnection: {
      title: "View Jointing Activities (ACT-CBL-02)",
      explanation: "Check the planned jointing activities and predecessor relationships in the schedule.",
      targetTab: "activities"
    }
  },
  {
    id: "c6-subcontractor-interface",
    sectionId: "execution",
    title: "Subcontractor and Interface Coordination",
    shortTitle: "Subcontractors & Interfaces",
    summary: "Day-to-day coordination between civil excavation subcontractors, specialist HDD drillers, master jointer crews, and substation interface engineers.",
    keyTakeaways: [
      "Daily coordination meetings (Toolbox Talks and Daily Progress Meetings) maintain safe concurrent operations across multiple site fronts.",
      "Clear interface milestones establish when civil pits must be clean and dewatered before electrical jointing teams mobilize.",
      "Shared equipment allocations (cranes, excavators, high-capacity winches) require proactive scheduling to avoid demurrage costs."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Daily Interface Coordination Meeting",
        definition: "A daily 15-minute stand-up between civil foreman, cable superintendent, and safety officers to coordinate spatial boundaries and heavy plant movements.",
        projectRelevance: "Prevents plant collisions and unauthorized entry into active high-voltage work areas.",
        epistemicType: "verified_fact"
      },
      {
        term: "Demurrage & Standby Claims",
        definition: "Financial penalties incurred when specialist crews (e.g. certified jointers or HDD drill rigs) are blocked from working due to unready predecessor work.",
        projectRelevance: "Managed through rigorous interface tracking and schedule float monitoring.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-ISO-44001",
        title: "ISO 44001: Collaborative business relationship management systems",
        publisher: "ISO",
        url: "https://www.iso.org/standard/64627.html",
        relevantSubject: "Contractor-subcontractor interface management",
        access: "Paid",
        dateChecked: "2026-03-12",
        limitations: "Management system framework."
      }
    ],
    workspaceConnection: {
      title: "Review Stakeholders & Interfaces",
      explanation: "Inspect the organization profiles and defined interface points in the workspace.",
      targetTab: "stakeholders"
    }
  },
  {
    id: "c7-site-readiness-safety",
    sectionId: "execution",
    title: "Site Readiness, Safety, and Dutch Regulations",
    shortTitle: "Site Safety & Dutch Law",
    summary: "Dutch statutory occupational health and safety (Arbowet), statutory excavation law (WIBON / CROW 500), safety plans (V&G plan), and environmental guidelines.",
    keyTakeaways: [
      "In the Netherlands, every ground excavation requires digital utility notification via the Land Registry (Kadaster KLIC) and verified on-site trial trenches.",
      "The Veiligheids- en Gezondheidsplan (V&G plan) is legally required under the Dutch Working Conditions Decree (Arbobesluit) for construction projects.",
      "Working in deep trenches (> 1.2 m) requires mandatory slope battering or trench box shoring to prevent wall collapse."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "CROW 500 Guideline",
        definition: "The legally binding Dutch industry code requiring systematic ground investigation, utility locating, and hand digging trial pits prior to mechanical digging.",
        projectRelevance: "Non-compliance triggers criminal liability and immediate site shutdown by Dutch labor authorities.",
        epistemicType: "verified_fact"
      },
      {
        term: "V&G Plan (Veiligheids- en Gezondheidsplan)",
        definition: "Health and safety execution plan detailing hazard identification, emergency egress, chemical handling, and coordinator responsibilities under Dutch law.",
        projectRelevance: "Governed under WBS 1.2 and deliverable DEL-CIV-002.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-CROW-500-LAW",
        title: "CROW 500: Damage Prevention for Underground Grids and Cables",
        publisher: "CROW Knowledge Center",
        url: "https://www.crow.nl/publicaties/richtlijn-schadevoorkoming-graafwerkzaamheden",
        relevantSubject: "Dutch statutory rules for pre-excavation trial pits and KLIC compliance",
        access: "Paid",
        dateChecked: "2026-09-01",
        limitations: "Mandatory Dutch national regulation."
      }
    ],
    workspaceConnection: {
      title: "View Risk Register & Safety Controls",
      explanation: "Inspect how underground utility risks and safety controls are tracked in the workspace.",
      targetTab: "risks"
    }
  },
  {
    id: "c8-qa-qc",
    sectionId: "execution",
    title: "Quality Assurance and Quality Control",
    shortTitle: "QA & QC Management",
    summary: "Inspection and Test Plans (ITP), witness hold points, material inwards verification, non-conformance reporting (NCR), and traceability logging.",
    keyTakeaways: [
      "An Inspection and Test Plan (ITP) details every construction step, defining whether the client has a Review (R), Witness (W), or Hold (H) gate.",
      "A Hold Point legally stops construction until the client quality inspector signs the release checklist.",
      "Every cable drum, joint component, and batch of thermal sand must maintain digital batch traceability."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Inspection & Test Plan (ITP)",
        definition: "A master matrix defining inspection frequencies, acceptance standards, test methods, and sign-off parties for every project discipline.",
        projectRelevance: "Ensures no joint bay is backfilled before client QA completes inspection.",
        epistemicType: "verified_fact"
      },
      {
        term: "Non-Conformance Report (NCR)",
        definition: "A formal quality document recording any deviation from specifications, root cause analysis, corrective action, and client engineering disposition.",
        projectRelevance: "Prevents unapproved field modifications from undermining 40-year asset longevity.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-ISO-10005",
        title: "ISO 10005:2018: Quality management - Guidelines for quality plans",
        publisher: "ISO",
        url: "https://www.iso.org/standard/67916.html",
        relevantSubject: "Preparation and governance of Inspection and Test Plans (ITP)",
        access: "Paid",
        dateChecked: "2026-05-15",
        limitations: "Management standard."
      }
    ],
    workspaceConnection: {
      title: "View Quality & Test Protocols",
      explanation: "Check the Quality Tests table with standard references and pass criteria in the workspace.",
      targetTab: "testing"
    }
  },
  {
    id: "c9-testing-commissioning-prep",
    sectionId: "execution",
    title: "Testing and Commissioning Preparation",
    shortTitle: "Commissioning Prep",
    summary: "Pre-commissioning site readiness: mobile resonant test reactor logistics, safety isolation zones, permit-to-test protocols, and coordination with client grid control.",
    keyTakeaways: [
      "On-site high-voltage testing requires strict physical perimeter fencing, warning beacons, and written Permit-to-Test authorization.",
      "High voltage mobile resonant test equipment requires 400 V auxiliary site power and stable level ground for multi-tonne reactor containers.",
      "Close communication with TenneT National Grid Control is essential to coordinate substation isolators and protection relay settings."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "High-Voltage Permit to Test (PTT)",
        definition: "A formal electrical safety permit locking out all non-essential personnel and transferring area safety authority to the High Voltage Test Director.",
        projectRelevance: "Mandatory prerequisite before applying 147 kV test voltage to the installed cable.",
        epistemicType: "verified_fact"
      },
      {
        term: "Cold vs Hot Commissioning",
        definition: "Cold commissioning verifies electrical continuity, insulation resistance, and relay logic without grid power; hot commissioning energizes the system from the transmission grid.",
        projectRelevance: "Structured across activities ACT-TST-01 and ACT-TST-02 in the Tilburg plan.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-EN-50110",
        title: "EN 50110-1: Operation of electrical installations - General safety requirements",
        publisher: "CENELEC",
        url: "https://www.cenelec.eu",
        relevantSubject: "Five safety rules for working on high-voltage electrical installations",
        access: "Paid",
        dateChecked: "2026-06-08",
        limitations: "European standard for electrical safety operations."
      }
    ],
    workspaceConnection: {
      title: "View Testing Schedule & Activities",
      explanation: "Review testing activities and their dependencies in the project schedule.",
      targetTab: "activities"
    }
  }
];

export const sectionDContent: SubsectionContent[] = [
  {
    id: "d1-schedule-monitoring-gantt",
    sectionId: "control",
    title: "Schedule Monitoring and Gantt Chart",
    shortTitle: "Schedule & Gantt",
    summary: "Principles of continuous schedule performance tracking, Critical Path monitoring, baseline variance analysis, and schedule health metrics.",
    keyTakeaways: [
      "Project controls are continuous across the full lifecycle—active from day one of engineering through final handover.",
      "Tracking Earned Value schedule metrics (Schedule Variance SV, Schedule Performance Index SPI) pinpoints emerging delays before milestones are missed.",
      "In this foundation phase, the project activity data model provides stable activity IDs, durations, dependencies (FS/SS/FF), and planned vs actual dates, ready for the dynamic Gantt engine in Stage 2."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Schedule Baseline Freeze",
        definition: "The contractual schedule locked at Notice to Proceed against which all subsequent schedule updates and progress claims are measured.",
        projectRelevance: "Represented by the initial planned start/end dates in our activities model.",
        epistemicType: "verified_fact"
      },
      {
        term: "Total Float vs Free Float",
        definition: "Total float is the amount of time an activity can slip without delaying the project completion date; free float is the slippage without delaying early start of successors.",
        projectRelevance: "Directly determines which non-critical civil activities have schedule flexibility.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-GAO-SCHED",
        title: "GAO Schedule Assessment Guide: Best Practices for Project Schedules",
        publisher: "U.S. Government Accountability Office",
        url: "https://www.gao.gov/products/gao-16-89g",
        relevantSubject: "Schedule logic integrity, critical path validity, and schedule risk analysis",
        access: "Free",
        dateChecked: "2026-05-11",
        limitations: "Comprehensive international schedule benchmark."
      }
    ],
    workspaceConnection: {
      title: "Inspect Schedule & Activities Register",
      explanation: "Review planned versus actual progress, durations, and dependencies in the workspace.",
      targetTab: "activities"
    }
  },
  {
    id: "d2-physical-progress-reporting",
    sectionId: "control",
    title: "Physical Progress and Performance Reporting",
    shortTitle: "Physical Progress",
    summary: "Measuring objective physical progress (meters of trench excavated, meters of cable pulled, number of joints completed) rather than subjective percent complete.",
    keyTakeaways: [
      "Earned physical progress must be weighted by engineering rules of credit (e.g., trench: excavation = 40%, bedding = 20%, backfill = 40%).",
      "Subjective self-reported percent complete leads to the classic '90% done' trap where the remaining 10% takes half the project duration.",
      "Monthly Progress Reports (MPR) synthesize physical S-curves, milestone dashboards, and photographic evidence for client certification."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Rules of Credit",
        definition: "Pre-agreed percentage allocations awarded only upon objective verification of specific physical steps within an activity.",
        projectRelevance: "Ensures cable pulling progress is earned strictly per meter pulled and logged on the winch.",
        epistemicType: "verified_fact"
      },
      {
        term: "Progress S-Curve",
        definition: "Cumulative planned vs earned physical progress plotted over time, revealing acceleration, peak production, and deceleration phases.",
        projectRelevance: "Key performance reporting dashboard tool for the Project Director.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-AACE-EVM",
        title: "AACE International 82R-13: Earned Value Management Overview & Physical Progress",
        publisher: "AACE International",
        url: "https://web.aacei.org",
        relevantSubject: "Physical progress measurement and rules of credit",
        access: "Paid",
        dateChecked: "2026-06-25",
        limitations: "Professional standard."
      }
    ],
    workspaceConnection: {
      title: "View Progress Status across Activities",
      explanation: "Inspect current percent complete values and activity status in the workspace.",
      targetTab: "activities"
    }
  },
  {
    id: "d3-cost-tracking-forecasting",
    sectionId: "control",
    title: "Cost Tracking and Forecasting",
    shortTitle: "Cost & Forecasting",
    summary: "Monitoring actual expenditures, commitments, Estimate at Completion (EAC), Cost Variance (CV), and contingency drawdowns.",
    keyTakeaways: [
      "Tracking committed costs (purchase orders placed) alongside actual invoices paid gives an early warning of future cash flow peaks.",
      "The Estimate at Completion (EAC) updates the total expected cost based on actual performance indices to date.",
      "Contingency reserves must be managed under strict governance rather than treated as slush funds for scope additions."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Estimate at Completion (EAC)",
        definition: "The expected total cost of completing all project work, calculated as Actual Cost + Estimate to Complete (EAC = AC + ETC).",
        projectRelevance: "Modeled in the Tilburg cost table showing baseline vs actual vs forecast.",
        epistemicType: "verified_fact"
      },
      {
        term: "Cost Account Code",
        definition: "A financial ledger account aligned directly with WBS work packages (e.g., Account 4.0 for Civil Works).",
        projectRelevance: "Enables direct correlation between physical completion and financial burn rate.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-ISO-21508",
        title: "ISO 21508:2018: Earned value management in project and programme management",
        publisher: "ISO",
        url: "https://www.iso.org/standard/69545.html",
        relevantSubject: "Cost tracking, variance equations, and forecasting rules",
        access: "Paid",
        dateChecked: "2026-04-30",
        limitations: "Global ISO standard."
      }
    ],
    workspaceConnection: {
      title: "Open Cost Baseline & Tracking",
      explanation: "Inspect baseline, actuals, and forecast amounts across WBS accounts in the workspace.",
      targetTab: "costs"
    }
  },
  {
    id: "d4-risk-issue-change-claims",
    sectionId: "control",
    title: "Risk, Issue, Change, and Claim Management",
    shortTitle: "Risks & Change Control",
    summary: "Differentiating proactive risks from realized issues, administering Variation Orders (VO), and handling contractor delay and disruption claims.",
    keyTakeaways: [
      "A risk is an uncertain future event with a probability and impact; once it occurs, it converts into an active issue requiring immediate containment.",
      "Change control must evaluate the triple constraint (scope, cost, schedule) before any change is instructed or performed on site.",
      "Unforeseen subsurface utilities and delayed environmental permits are frequent triggers for formal Contractor Notice of Claim."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Variation Order (VO) / Change Notice",
        definition: "A formal written modification signed by client and contractor altering scope, price, or completion date.",
        projectRelevance: "Essential legal instrument to ensure fair compensation for unforeseen route alterations.",
        epistemicType: "verified_fact"
      },
      {
        term: "Notice of Claim (Time & Cost)",
        definition: "A contractual notice submitted within a strict time-bar (e.g., 28 days under FIDIC) notifying the client of an event granting extension of time.",
        projectRelevance: "Protects contractor rights in the event of client-caused substation outage delays.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-FIDIC-CLAIMS",
        title: "FIDIC Conditions of Contract: Clause 20 (Employer's and Contractor's Claims)",
        publisher: "FIDIC",
        url: "https://fidic.org",
        relevantSubject: "Contractual claims, contemporary records, and dispute board procedures",
        access: "Paid",
        dateChecked: "2026-05-18",
        limitations: "Standard construction contract clause."
      }
    ],
    workspaceConnection: {
      title: "Review Risk Register & Mitigations",
      explanation: "Inspect active risks, probability/impact scores, and mitigation actions in the workspace.",
      targetTab: "risks"
    }
  },
  {
    id: "d5-corrective-actions-recovery",
    sectionId: "control",
    title: "Corrective Actions and Schedule Recovery",
    shortTitle: "Recovery & Actions",
    summary: "Techniques for schedule compression (fast-tracking and crashing), root-cause analysis of construction slippages, and formal schedule recovery plans.",
    keyTakeaways: [
      "Schedule Crashing adds resources to critical path activities (e.g. mobilizing a second cable pulling spread or dual jointer shifts) at increased cost.",
      "Fast-Tracking overlaps activities that would normally run in sequence (e.g. starting civil joint bay pits before all ducting sections are proven), increasing rework risk.",
      "A Schedule Recovery Plan must be grounded in realistic labor and plant capacity rather than wishful thinking."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Schedule Crashing",
        definition: "Shortening activity duration by applying additional capital or manpower (e.g., weekend work, second shift) to the critical path.",
        projectRelevance: "Primary tool if cable manufacturing FAT slips by 2 weeks.",
        epistemicType: "verified_fact"
      },
      {
        term: "Schedule Fast-Tracking",
        definition: "Performing sequential activities concurrently to recover lost calendar time, trading time for coordination risk.",
        projectRelevance: "Overlapping civil trenching with HDD operations across separate sections.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-PMI-SCHED",
        title: "PMI Practice Standard for Scheduling: Schedule Recovery & Compression",
        publisher: "PMI",
        url: "https://www.pmi.org",
        relevantSubject: "Schedule compression techniques and risk trade-off analysis",
        access: "Paid",
        dateChecked: "2026-06-01",
        limitations: "Professional standard."
      }
    ],
    workspaceConnection: {
      title: "Analyze Critical Path in Activities",
      explanation: "Filter and examine critical path activities to identify potential recovery targets.",
      targetTab: "activities"
    }
  },
  {
    id: "d6-testing-commissioning-completion",
    sectionId: "control",
    title: "Testing and Commissioning Completion",
    shortTitle: "Testing Completion",
    summary: "Execution and verification of final Site Acceptance Tests (SAT): DC sheath withstand, AC resonant overvoltage soak, PD verification, and soak test sign-off.",
    keyTakeaways: [
      "Passing the after-installation AC voltage withstand test without flashover or breakdown is the definitive technical proof of electrical integrity.",
      "Simultaneous partial discharge (PD) measurements verify that hand-assembled joint interfaces are free of electrical treeing or micro-voids.",
      "Formal test certificates signed by the accredited high-voltage testing institute are mandatory for client insurance and energization authorization."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "60-Minute AC Voltage Withstand Test",
        definition: "Applying 1.7 Uo phase-to-ground test voltage at rated test frequency (20-300 Hz) for 60 continuous minutes per IEC 60840.",
        projectRelevance: "Contract milestone MS-08 gating energization at Tilburg.",
        epistemicType: "verified_fact"
      },
      {
        term: "Partial Discharge (PD) Localization",
        definition: "High-frequency sensors (HFCTs) placed at joint earth leads to pinpoint sub-picocoulomb discharge events during voltage testing.",
        projectRelevance: "Ensures no weak accessories enter operational service.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-IEC-60840-SAT",
        title: "IEC 60840:2020 Clause 15.3: AC voltage test of insulation after installation",
        publisher: "IEC",
        url: "https://webstore.iec.ch/publication/62313",
        relevantSubject: "Standard criteria for after-installation AC high voltage tests",
        access: "Paid",
        dateChecked: "2026-09-15",
        limitations: "International test standard."
      }
    ],
    workspaceConnection: {
      title: "View Site Acceptance Test Protocol",
      explanation: "Inspect the planned Site Acceptance Test items and pass criteria in the workspace.",
      targetTab: "testing"
    }
  },
  {
    id: "d7-documentation-as-built",
    sectionId: "control",
    title: "Technical Documentation and As-Built Records",
    shortTitle: "As-Built & Records",
    summary: "Compiling as-built CAD drawings, sub-centimeter RTK-GPS route coordinates, joint bay identification logs, factory test certificates, and O&M manuals.",
    keyTakeaways: [
      "As-built spatial accuracy is legally and operationally vital: future third-party excavation contractors rely on these records to avoid lethal cable strikes.",
      "Joint logs record ambient temperature, humidity, technician ID, component batch numbers, and torque settings for every individual joint.",
      "Final documentation handover transfers full digital data packages into the TSO's Geographic Information System (GIS) and Enterprise Asset Management (EAM)."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "RTK-GPS As-Built Survey",
        definition: "Real-Time Kinematic satellite positioning capturing XYZ coordinates of every cable phase at 5-meter intervals prior to backfilling.",
        projectRelevance: "Deliverable DEL-HND-005 into TenneT asset repository.",
        epistemicType: "verified_fact"
      },
      {
        term: "Operation & Maintenance (O&M) Manual",
        definition: "Comprehensive instruction guide detailing link box sheath testing intervals, PD monitoring protocols, DTS alarm thresholds, and emergency repair procedures.",
        projectRelevance: "Ensures operational reliability throughout the 40-year design life.",
        epistemicType: "verified_fact"
      }
    ],
    technicalStandards: [
      {
        id: "REF-CIGRE-TB250-DOC",
        title: "CIGRE TB 250 Chapter 9: As-Built Records and Documentation Management",
        publisher: "CIGRE",
        url: "https://e-cigre.org/publication/250-cable-systems-in-subsurface-environment",
        relevantSubject: "As-built data requirements and spatial documentation standards",
        access: "Free",
        dateChecked: "2026-08-10",
        limitations: "Advisory engineering standard."
      }
    ],
    workspaceConnection: {
      title: "Inspect Handover Documentation Items",
      explanation: "Review the as-built documentation deliverables in the Handover register.",
      targetTab: "handover"
    }
  },
  {
    id: "d8-punchlist-handover",
    sectionId: "control",
    title: "Punch-List Closure, Customer Acceptance, and Handover",
    shortTitle: "Punch-List & Handover",
    summary: "Managing Category A (critical) and Category B (non-critical) punch-list items, Taking-Over Certificates (TOC), Defects Notification Period (DNP), and commercial closeout.",
    keyTakeaways: [
      "Category A punch items prevent commercial operation and must be 100% resolved before energization; Category B items can be cleared during initial operation.",
      "The Taking-Over Certificate (TOC) marks the legal transfer of asset possession and risk from EPC Contractor to the Transmission System Operator.",
      "The Defects Notification Period (warranty period, typically 24-60 months) commences upon TOC issuance with retention bonds released in stages."
    ],
    epistemicType: "verified_fact",
    coreConcepts: [
      {
        term: "Category A vs B Punch Items",
        definition: "Category A items represent safety, operational, or high-voltage defects that prohibit energization; Category B represent minor cosmetic or documentation omissions.",
        projectRelevance: "Monitored rigorously to achieve Commercial Operation Date (MS-09).",
        epistemicType: "verified_fact"
      },
      {
        term: "Commercial Operation Date (COD)",
        definition: "The date when the cable link is formally energized and accepted into active market transmission dispatch.",
        projectRelevance: "Final milestone MS-09 in the project workspace schedule.",
        epistemicType: "planning_assumption"
      }
    ],
    technicalStandards: [
      {
        id: "REF-FIDIC-SILVER-TOC",
        title: "FIDIC Silver Book Clause 10: Employer's Taking Over",
        publisher: "FIDIC",
        url: "https://fidic.org",
        relevantSubject: "Taking-over certificates, punch lists, and transfer of operational risk",
        access: "Paid",
        dateChecked: "2026-05-18",
        limitations: "Standard turnkey contract conditions."
      }
    ],
    workspaceConnection: {
      title: "View Handover & Punch-List Register",
      explanation: "Inspect punch-list status, handover deliverables, and commercial acceptance items.",
      targetTab: "handover"
    }
  }
];

export const allSubsections = [
  ...sectionAContent,
  ...sectionBContent,
  ...sectionCContent,
  ...sectionDContent
];
