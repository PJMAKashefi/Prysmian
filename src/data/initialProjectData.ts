/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HighVoltageProject } from '../types/project';

export const initialProjectData: HighVoltageProject = {
  overview: {
    id: "PRJ-NL-TIL-150KV",
    name: "Tilburg 150 kV Grid Reinforcement Link",
    code: "NL-TBG-150-CBL",
    purpose: "Provide high-capacity underground transmission capacity between 150/20 kV Tilburg Noord Substation and the regional grid node, mitigating regional grid congestion and supporting energy transition demands.",
    contextSummary: "Illustrative EPC turnkey cable system project set within the real regional transmission context of North Brabant, Netherlands. Employs public grid context from TenneT TSO grid reinforcement schemes around Tilburg.",
    voltageLevelKv: 150,
    transmissionType: "HVAC",
    cableTechnology: "Single-core 150 kV XLPE insulated, 1200 mm² Cu conductor, bonded aluminium laminate barrier, HDPE sheath with extruded conductive layer, integrated DTS fiber optic sensing.",
    routeLengthKm: 8.4,
    circuits: 2,
    client: "TenneT TSO B.V. (Illustrative Client Entity)",
    principalContractor: "Turnkey HV Cable Systems EPC Consortium",
    location: "Tilburg Region, North Brabant, Netherlands",
    epistemicType: "learning_example",
    disclaimer: "PUBLIC CONTEXT NOTICE: Public information regarding Dutch grid reinforcement and the Tilburg transmission area is used solely to provide a realistic engineering setting. Detailed WBS, activities, schedules, cost baselines, and responsibilities presented herein are illustrative planning models designed for project management learning and do not represent proprietary or confidential data of TenneT or Prysmian.",
    createdDate: "2026-03-01",
    lastUpdated: "2026-10-12",
  },

  references: [
    {
      id: "REF-IEC-60840",
      title: "IEC 60840:2020 - Power cables with extruded insulation and their accessories for rated voltages above 30 kV up to 150 kV - Test methods and requirements",
      publisher: "International Electrotechnical Commission (IEC)",
      url: "https://webstore.iec.ch/publication/62313",
      relevantSubject: "Cable system routine tests, sample tests, type tests, and after-installation site commissioning tests (AC overvoltage & sheath test)",
      access: "Paid",
      dateChecked: "2026-09-15",
      limitations: "Applies strictly to rated voltages up to 150 kV (Um = 170 kV). Cables above 150 kV fall under IEC 62067."
    },
    {
      id: "REF-CIGRE-TB250",
      title: "CIGRE Technical Brochure 250: Cable Systems in Subsurface Environment - Installation and Maintenance Techniques",
      publisher: "CIGRE Study Committee B1 (Insulated Cables)",
      url: "https://e-cigre.org/publication/250-cable-systems-in-subsurface-environment",
      relevantSubject: "Civil works, trench bedding, thermal backfill criteria, and joint bay construction techniques",
      access: "Free",
      dateChecked: "2026-08-10",
      limitations: "Engineering recommendation guideline, not a statutory Dutch building regulation."
    },
    {
      id: "REF-CROW-500",
      title: "CROW 500: Richtlijn Schadevoorkoming Graafwerkzaamheden (Dutch Underground Cable & Pipeline Damage Prevention Guideline)",
      publisher: "CROW Knowledge Platform (Netherlands)",
      url: "https://www.crow.nl/publicaties/richtlijn-schadevoorkoming-graafwerkzaamheden",
      relevantSubject: "Dutch statutory rules for pre-excavation trial trenches (proefsleuven), KLIC notification, and underground asset verification",
      access: "Paid",
      dateChecked: "2026-09-01",
      limitations: "Mandatory statutory compliance standard for any ground penetration within the Netherlands (WION / WIBON law)."
    },
    {
      id: "REF-TENNET-TSR",
      title: "TenneT Technical Specification for Onshore High Voltage Cable Systems (110 kV - 380 kV)",
      publisher: "TenneT TSO B.V.",
      url: "https://www.tennet.eu/suppliers-and-partners/technical-guidelines",
      relevantSubject: "Employer's technical requirements: DTS fiber positioning, cross-bonding link boxes, sheath withstand parameters, and substation termination interfaces",
      access: "Free",
      dateChecked: "2026-09-20",
      limitations: "Employer-specific technical requirement; subject to project-specific tender revisions."
    },
    {
      id: "REF-CIGRE-TB660",
      title: "CIGRE Technical Brochure 660: After-installation tests on AC electrical power cable systems",
      publisher: "CIGRE Working Group B1.38",
      url: "https://e-cigre.org/publication/660-after-installation-tests-on-ac-electrical-power-cable-systems",
      relevantSubject: "Variable frequency resonant test sets, partial discharge localization during on-site AC testing",
      access: "Free",
      dateChecked: "2026-07-14",
      limitations: "Comprehensive international best practice; testing protocols must be agreed upon with the asset owner prior to execution."
    }
  ],

  scopeItems: [
    {
      id: "SCP-01",
      title: "Turnkey supply of 150 kV XLPE cable system (2 circuits x 3 single phases = ~51 km single-core cable)",
      description: "Manufacture, factory acceptance testing, shipping, delivery, and spooling to site drum positions.",
      category: "In-Scope",
      epistemicType: "planning_assumption",
      referenceSourceId: "REF-IEC-60840"
    },
    {
      id: "SCP-02",
      title: "Route engineering, permitting, and geotechnical investigations (8.4 km alignment)",
      description: "Thermal resistivity soil survey, ground-penetrating radar, KLIC coordination, and permit acquisitions for agricultural & public highways.",
      category: "In-Scope",
      epistemicType: "planning_assumption",
      referenceSourceId: "REF-CROW-500"
    },
    {
      id: "SCP-03",
      title: "Civil excavation, trenching, ducting, and 4 Horizontal Directional Drillings (HDDs)",
      description: "Trench excavation, bedding, installation of PE protection ducts, installation of 4 HDDs crossing highway A58 and regional water courses, joint bay pits.",
      category: "In-Scope",
      epistemicType: "planning_assumption",
      referenceSourceId: "REF-CIGRE-TB250"
    },
    {
      id: "SCP-04",
      title: "Cable pulling, jointing (12 joint bays), and outdoor / GIS terminations",
      description: "Pulling cables under calculated winching tensions, assembly of pre-moulded joints, link box bonding, and terminations at substation gantries.",
      category: "In-Scope",
      epistemicType: "planning_assumption"
    },
    {
      id: "SCP-05",
      title: "Substation 150 kV GIS bay extension works inside Tilburg Noord",
      description: "Expansion of gas-insulated switchgear bays, circuit breakers, and protection relays inside the existing indoor GIS building.",
      category: "Exclusion",
      epistemicType: "verified_fact",
      rationaleOrImpact: "Performed directly by the TSO under separate substation framework contractor. EPC contractor scope terminates at cable sealing ends."
    },
    {
      id: "SCP-06",
      title: "Site access road permanent asphalt resurfacing beyond permitted trench limits",
      description: "Permanent widening or civic restructuring of municipal roadways outside direct trench restitution line.",
      category: "Exclusion",
      epistemicType: "planning_assumption",
      rationaleOrImpact: "Municipal responsibility; contractor provides temporary reinstatement and certified civil restitution of excavated strip."
    },
    {
      id: "SCP-07",
      title: "Soil thermal resistivity average parameter <= 1.0 K·m/W",
      description: "Assumed natural ground thermal resistivity along the alignment. Selected backfill sand designed with stabilized resistivity <= 0.8 K·m/W.",
      category: "Assumption",
      epistemicType: "planning_assumption",
      rationaleOrImpact: "Critical for continuous ampacity rating. If soil testing reveals hotspots > 1.2 K·m/W, specialized fluidized thermal backfill must be placed."
    },
    {
      id: "SCP-08",
      title: "Maximum continuous cable pulling tension <= 70 N/mm² for copper conductor",
      description: "Adherence to manufacturer pulling tension limits and sidewall bearing pressure limits during bends to prevent insulation micro-deformation.",
      category: "Constraint",
      epistemicType: "verified_fact",
      rationaleOrImpact: "Exceeding allowable pulling forces damages cable integrity; pulling winches must feature calibrated load cells and auto-cutoff."
    },
    {
      id: "SCP-09",
      title: "Environmental working window constraint (Bird nesting & groundwater restrictions)",
      description: "Provincial environmental permitting forbids trenching through specific ecological buffer zones between March 15 and July 15 without protective measures.",
      category: "Constraint",
      epistemicType: "planning_assumption",
      rationaleOrImpact: "Requires schedule phasing of civil works to execute agricultural sections during autumn/winter and urban HDD during spring."
    }
  ],

  deliverables: [
    {
      id: "DEL-01",
      code: "DEL-ENG-001",
      title: "Detailed Cable System Engineering Design Dossier",
      description: "Ampacity calculations (IEC 60287), thermo-mechanical design, bonding design (sheath voltage limiters), pulling calculation dossier, and alignment plan & profile drawings.",
      acceptanceCriteria: [
        "Verified IEC 60287 ampacity modeling under standard and emergency conditions",
        "Pulling tension calculations with safety factors for all bends",
        "Client and TSO design engineer formal approval"
      ],
      responsibleParty: "EPC Lead Cable Systems Engineer",
      targetMilestoneCode: "MS-03",
      status: "Approved",
      epistemicType: "planning_assumption"
    },
    {
      id: "DEL-02",
      code: "DEL-CIV-002",
      title: "Civil Works Method Statement & KLIC Excavation Safety Dossier",
      description: "Detailed method statements for trenching, dewatering, HDD bore profile approvals, trial trench reports complying with Dutch CROW 500.",
      acceptanceCriteria: [
        "Trial trench reports verifying all third-party utility crossings",
        "Water board (Waterschap) approved dewatering discharge permits",
        "Road authority traffic management safety plans"
      ],
      responsibleParty: "EPC Civil Works Manager",
      targetMilestoneCode: "MS-04",
      status: "Approved",
      epistemicType: "planning_assumption"
    },
    {
      id: "DEL-03",
      code: "DEL-CBL-003",
      title: "Factory Acceptance Test (FAT) Certificates for Cable and Accessories",
      description: "Routine test inspection records from cable manufacturing plant: spark test, conductor resistance, partial discharge test, high voltage test per IEC 60840.",
      acceptanceCriteria: [
        "100% reels routine-tested with PD level < 2 pC",
        "Insulation thickness and concentricity conforming to spec",
        "Inspector release certificates signed by Third-Party Inspection Agency"
      ],
      responsibleParty: "Cable Manufacturer QA Lead",
      targetMilestoneCode: "MS-05",
      status: "Approved",
      epistemicType: "verified_fact"
    },
    {
      id: "DEL-04",
      code: "DEL-TST-004",
      title: "Site Acceptance Test (SAT) & Commissioning Completion Dossier",
      description: "On-site testing protocol documentation: outer sheath DC withstand (10 kV, 1 min), AC overvoltage resonant test (1.7 Uo, 1 hr), simultaneous sensitive PD monitoring, and DTS optical attenuation test.",
      acceptanceCriteria: [
        "Zero breakdowns during 60-minute AC high-voltage resonant soak test",
        "Outer sheath withstand passed without breakdown or current leakage",
        "DTS optical fibers intact across full circuit length"
      ],
      responsibleParty: "Commissioning & High Voltage Test Lead",
      targetMilestoneCode: "MS-08",
      status: "Draft",
      epistemicType: "planning_assumption"
    },
    {
      id: "DEL-05",
      code: "DEL-HND-005",
      title: "As-Built GIS Survey, Joint Coordinates & Operation Manual",
      description: "Sub-centimeter RTK-GPS survey of installed cable axis and joint centers, link box wiring schematics, and 40-year life asset maintenance manual.",
      acceptanceCriteria: [
        "Full CAD / GIS delivery into TenneT asset management system format",
        "Joint bay soil temperature loggers baseline calibrated",
        "Punch-list Category A items completely cleared"
      ],
      responsibleParty: "Project Handover Manager",
      targetMilestoneCode: "MS-09",
      status: "Draft",
      epistemicType: "planning_assumption"
    }
  ],

  wbs: [
    {
      id: "WBS-1.0",
      code: "1.0",
      level: 1,
      title: "Project Management & Controls",
      description: "Overall contract management, scheduling, health & safety coordination, QA/QC management, and client interface.",
      ownerRole: "Project Director / PM",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-1.1",
      code: "1.1",
      parentCode: "1.0",
      level: 2,
      title: "Project Planning, Baseline & Controls",
      description: "Integrated schedule management, monthly progress tracking, cost baseline, and change control.",
      ownerRole: "Project Controls Lead",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-1.2",
      code: "1.2",
      parentCode: "1.0",
      level: 2,
      title: "QHSE & Dutch Statutory Compliance",
      description: "Site safety management, V&G plan (Veiligheids- en Gezondheidsplan), environmental audits, and CROW 500 compliance oversight.",
      ownerRole: "QHSE Manager",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-2.0",
      code: "2.0",
      level: 1,
      title: "System Engineering, Studies & Permitting",
      description: "Electrical, civil, thermal, and route design, geotechnical investigations, and public permitting.",
      ownerRole: "Lead System Engineer",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-2.1",
      code: "2.1",
      parentCode: "2.0",
      level: 2,
      title: "Route Survey & Geotechnical Soil Investigation",
      description: "Ground-penetrating radar, trial pits, soil thermal resistivity tests along 8.4 km route.",
      ownerRole: "Survey & Geotech Lead",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-2.2",
      code: "2.2",
      parentCode: "2.0",
      level: 2,
      title: "Detailed Electrical System Design",
      description: "Ampacity calculations per IEC 60287, cable bonding scheme design, induced voltages, and short-circuit thermal stresses.",
      ownerRole: "Electrical Design Specialist",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-2.3",
      code: "2.3",
      parentCode: "2.0",
      level: 2,
      title: "Statutory Approvals & Landowner Wayleaves",
      description: "Municipal permits, water authority (Waterschap) drainage permits, environmental waivers, and landowner easements.",
      ownerRole: "Permits & Wayleave Coordinator",
      epistemicType: "planning_assumption"
    },
    {
      id: "WBS-3.0",
      code: "3.0",
      level: 1,
      title: "Procurement & Factory Manufacturing",
      description: "Sourcing and manufacturing of 150 kV XLPE cable reels, pre-moulded joints, link boxes, and terminations.",
      ownerRole: "Procurement & Supply Chain Lead",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-3.1",
      code: "3.1",
      parentCode: "3.0",
      level: 2,
      title: "150 kV XLPE Cable Production & FAT",
      description: "Conductor extrusion, XLPE triple extrusion, curing, degassing, metallic barrier application, outer sheathing, and IEC 60840 FAT.",
      ownerRole: "Cable Factory QA Lead",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-3.2",
      code: "3.2",
      parentCode: "3.0",
      level: 2,
      title: "HV Accessories Procurement & Factory Testing",
      description: "Manufacturing and routine testing of pre-moulded joint sleeves, bonding link boxes, surge arresters, and sealing ends.",
      ownerRole: "Accessories Product Manager",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-4.0",
      code: "4.0",
      level: 1,
      title: "Civil Works & Site Infrastructure",
      description: "Trenching, duct installation, HDD drillings, joint bay construction, and soil restitution.",
      ownerRole: "Civil Site Construction Manager",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-4.1",
      code: "4.1",
      parentCode: "4.0",
      level: 2,
      title: "Trench Excavation & Thermal Bedding",
      description: "Excavation, sheeting/shoring, dewatering, placing bottom stabilized sand bedding and protective warning covers.",
      ownerRole: "Civil Foreman",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-4.2",
      code: "4.2",
      parentCode: "4.0",
      level: 2,
      title: "Horizontal Directional Drillings (HDD)",
      description: "Pilot drillings, reaming, pull-back of bundled HDPE duct bundles under A58 highway and watercourses.",
      ownerRole: "HDD Specialist Subcontractor",
      epistemicType: "planning_assumption"
    },
    {
      id: "WBS-4.3",
      code: "4.3",
      parentCode: "4.0",
      level: 2,
      title: "Joint Bay Construction & Pit Enclosures",
      description: "Construction of 12 reinforced joint bay pits with gravel drainage base and moisture barrier floors.",
      ownerRole: "Civil Works Engineer",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-5.0",
      code: "5.0",
      level: 1,
      title: "Cable Pulling, Jointing & Terminations",
      description: "Site logistics, drum positioning, pulling under tension monitoring, jointing in controlled tents, and substation termination mounting.",
      ownerRole: "HV Installation Superintendent",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-5.1",
      code: "5.1",
      parentCode: "5.0",
      level: 2,
      title: "Cable Pulling & Laying Operation",
      description: "Drum handling, synchronized winch pulling with motorized rollers, load cell logging, and laying into trefoil or flat formation.",
      ownerRole: "Cable Pulling Supervisor",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-5.2",
      code: "5.2",
      parentCode: "5.0",
      level: 2,
      title: "High Voltage Jointing Operations",
      description: "Certified jointers installing pre-moulded joints in air-conditioned clean shelters, installing link boxes and cross-bonding leads.",
      ownerRole: "Certified Master Jointer Lead",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-5.3",
      code: "5.3",
      parentCode: "5.0",
      level: 2,
      title: "Substation Termination Assembly",
      description: "Mounting sealing ends at Tilburg Noord substation gantry structures and GIS transition interfaces.",
      ownerRole: "Substation Interface Lead",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-6.0",
      code: "6.0",
      level: 1,
      title: "Testing, Commissioning & Handover",
      description: "Site acceptance testing, after-installation high voltage testing, as-built documentation, and client energization sign-off.",
      ownerRole: "Commissioning Manager",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-6.1",
      code: "6.1",
      parentCode: "6.0",
      level: 2,
      title: "Pre-commissioning Checks & Sheath Testing",
      description: "DTS continuity, phase identification, conductor resistance, and 10 kV DC sheath withstand test per IEC 60840.",
      ownerRole: "Test Engineer",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-6.2",
      code: "6.2",
      parentCode: "6.0",
      level: 2,
      title: "High Voltage AC Resonant Commissioning Test",
      description: "Mobilization of mobile resonant test container; 20-300 Hz variable frequency AC soak test at rated test voltage with PD monitoring.",
      ownerRole: "Specialist HV Test Agency",
      epistemicType: "verified_fact"
    },
    {
      id: "WBS-6.3",
      code: "6.3",
      parentCode: "6.0",
      level: 2,
      title: "Punch-list Resolution, As-Built Records & Asset Handover",
      description: "Closeout of punch list, submission of RTK-GIS files, operation manuals, and formal certificate of energization handover.",
      ownerRole: "Project Director",
      epistemicType: "planning_assumption"
    }
  ],

  activities: [
    {
      id: "ACT-PM-01",
      wbsCode: "1.1",
      name: "Project charter, baseline schedule & execution plan sign-off",
      description: "Establish contractual baseline schedule, project execution plan (PEP), and document management registers.",
      durationDays: 20,
      predecessors: [],
      plannedStart: "2026-03-01",
      plannedEnd: "2026-03-21",
      actualStart: "2026-03-01",
      actualEnd: "2026-03-20",
      percentComplete: 100,
      status: "Completed",
      assignedRole: "Project Controls Lead",
      criticalPath: true,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-ENG-01",
      wbsCode: "2.1",
      name: "Geotechnical investigation & soil thermal resistivity survey",
      description: "Perform 42 thermal needle probe soil tests, ground penetrating radar (GPR) scans, and KLIC inquiry mapping along 8.4 km corridor.",
      durationDays: 30,
      predecessors: [{ activityId: "ACT-PM-01", type: "FS", lagDays: 0 }],
      plannedStart: "2026-03-22",
      plannedEnd: "2026-04-21",
      actualStart: "2026-03-22",
      actualEnd: "2026-04-23",
      percentComplete: 100,
      status: "Completed",
      assignedRole: "Survey & Geotech Lead",
      criticalPath: true,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-ENG-02",
      wbsCode: "2.2",
      name: "Cable system engineering, ampacity & thermo-mechanical design",
      description: "Calculate continuous and emergency ampacity according to IEC 60287; determine cross-bonding section lengths and joint bay locations.",
      durationDays: 35,
      predecessors: [{ activityId: "ACT-ENG-01", type: "FS", lagDays: 0 }],
      plannedStart: "2026-04-24",
      plannedEnd: "2026-05-29",
      actualStart: "2026-04-24",
      actualEnd: "2026-05-30",
      percentComplete: 100,
      status: "Completed",
      assignedRole: "Lead Electrical Engineer",
      criticalPath: true,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-PER-01",
      wbsCode: "2.3",
      name: "Statutory permitting, water board approvals & landowner wayleaves",
      description: "Submit environmental exemption, water board dewatering permits, municipal excavation permits, and finalize private agricultural wayleaves.",
      durationDays: 60,
      predecessors: [{ activityId: "ACT-ENG-01", type: "SS", lagDays: 10 }],
      plannedStart: "2026-04-01",
      plannedEnd: "2026-05-31",
      actualStart: "2026-04-01",
      actualEnd: "2026-06-05",
      percentComplete: 100,
      status: "Completed",
      assignedRole: "Permitting Lead",
      criticalPath: false,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-PRC-01",
      wbsCode: "3.1",
      name: "150 kV XLPE cable manufacturing & factory acceptance testing (FAT)",
      description: "Extrude 51 km single-core 150 kV 1200 mm² Cu XLPE cable; execute IEC 60840 routine factory tests (voltage withstand & PD tests).",
      durationDays: 90,
      predecessors: [{ activityId: "ACT-ENG-02", type: "FS", lagDays: 0 }],
      plannedStart: "2026-06-01",
      plannedEnd: "2026-08-30",
      percentComplete: 85,
      status: "In Progress",
      assignedRole: "Cable Manufacturer QA Lead",
      criticalPath: true,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-PRC-02",
      wbsCode: "3.2",
      name: "Joints, terminations, link boxes & DTS sensor procurement",
      description: "Manufacture 36 pre-moulded one-piece joints, 12 substation outdoor/GIS sealing ends, bonding link boxes, and DTS fiber cable bundles.",
      durationDays: 75,
      predecessors: [{ activityId: "ACT-ENG-02", type: "FS", lagDays: 0 }],
      plannedStart: "2026-06-01",
      plannedEnd: "2026-08-15",
      percentComplete: 90,
      status: "In Progress",
      assignedRole: "Accessories Procurement Lead",
      criticalPath: false,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-CIV-01",
      wbsCode: "4.1",
      name: "Civil trench excavation, trial pits & sand bedding (Sections 1-4)",
      description: "Execute CROW 500 trial trenches, excavate trench depth 1.5 m, lay stabilized sand thermal bedding layer.",
      durationDays: 60,
      predecessors: [{ activityId: "ACT-PER-01", type: "FS", lagDays: 0 }],
      plannedStart: "2026-06-10",
      plannedEnd: "2026-08-09",
      percentComplete: 95,
      status: "In Progress",
      assignedRole: "Civil Site Construction Manager",
      criticalPath: false,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-CIV-02",
      wbsCode: "4.2",
      name: "Horizontal Directional Drilling (4 crossings: A58 & canals)",
      description: "Drill pilot holes, reaming, install SDR-11 HDPE duct bundles for high voltage cables and optical sensing conduits.",
      durationDays: 45,
      predecessors: [{ activityId: "ACT-PER-01", type: "FS", lagDays: 5 }],
      plannedStart: "2026-06-15",
      plannedEnd: "2026-07-30",
      percentComplete: 100,
      status: "Completed",
      assignedRole: "HDD Specialist Subcontractor",
      criticalPath: false,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-CIV-03",
      wbsCode: "4.3",
      name: "Construction of 12 joint bay pits & groundwater dewatering",
      description: "Excavate joint bays (length 10m x width 2.5m), install sheet piles, concrete bottom slab/lean concrete, and dewatering pumps.",
      durationDays: 40,
      predecessors: [{ activityId: "ACT-CIV-01", type: "SS", lagDays: 20 }],
      plannedStart: "2026-07-01",
      plannedEnd: "2026-08-10",
      percentComplete: 80,
      status: "In Progress",
      assignedRole: "Civil Foreman",
      criticalPath: false,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-CBL-01",
      wbsCode: "5.1",
      name: "Cable delivery, site logistics & synchronized drum pulling",
      description: "Position drum trailers at joint bay pits, setup motorized rollers, pull cables into open trench and HDD ducts under tension monitoring.",
      durationDays: 50,
      predecessors: [
        { activityId: "ACT-PRC-01", type: "FS", lagDays: 5 },
        { activityId: "ACT-CIV-01", type: "FS", lagDays: 0 }
      ],
      plannedStart: "2026-09-05",
      plannedEnd: "2026-10-25",
      percentComplete: 20,
      status: "In Progress",
      assignedRole: "HV Installation Superintendent",
      criticalPath: true,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-CBL-02",
      wbsCode: "5.2",
      name: "Jointing operations in air-conditioned shelters (12 joint bays)",
      description: "Erect clean jointing shelters, align cables, peel semiconductive layer, assemble pre-moulded joints, install heat shrink covers & link boxes.",
      durationDays: 45,
      predecessors: [{ activityId: "ACT-CBL-01", type: "SS", lagDays: 15 }],
      plannedStart: "2026-09-20",
      plannedEnd: "2026-11-04",
      percentComplete: 0,
      status: "Not Started",
      assignedRole: "Certified Master Jointer Lead",
      criticalPath: true,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-CBL-03",
      wbsCode: "5.3",
      name: "Substation gantry & GIS cable termination assembly",
      description: "Terminate 6 phases at Substation Tilburg Noord and 6 phases at remote grid node; connect grounding and link boxes.",
      durationDays: 20,
      predecessors: [{ activityId: "ACT-CBL-01", type: "FS", lagDays: 0 }],
      plannedStart: "2026-10-26",
      plannedEnd: "2026-11-15",
      percentComplete: 0,
      status: "Not Started",
      assignedRole: "Substation Interface Lead",
      criticalPath: false,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-TST-01",
      wbsCode: "6.1",
      name: "Pre-commissioning sheath DC testing & optical DTS verification",
      description: "Apply 10 kV DC voltage between metallic sheath and earth for 1 minute per IEC 60840; conduct OTDR attenuation tests on fiber tubes.",
      durationDays: 10,
      predecessors: [
        { activityId: "ACT-CBL-02", type: "FS", lagDays: 0 },
        { activityId: "ACT-CBL-03", type: "FS", lagDays: 0 }
      ],
      plannedStart: "2026-11-16",
      plannedEnd: "2026-11-26",
      percentComplete: 0,
      status: "Not Started",
      assignedRole: "Test Engineer",
      criticalPath: true,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-TST-02",
      wbsCode: "6.2",
      name: "High Voltage AC resonant site acceptance test & PD diagnostics",
      description: "Deploy mobile variable frequency resonant test reactor; energize system at 1.7 Uo for 60 min with real-time partial discharge monitoring.",
      durationDays: 8,
      predecessors: [{ activityId: "ACT-TST-01", type: "FS", lagDays: 0 }],
      plannedStart: "2026-11-27",
      plannedEnd: "2026-12-05",
      percentComplete: 0,
      status: "Not Started",
      assignedRole: "Specialist HV Test Agency",
      criticalPath: true,
      epistemicType: "planning_assumption"
    },
    {
      id: "ACT-HND-01",
      wbsCode: "6.3",
      name: "As-built documentation, punch-list closure & energization handover",
      description: "Deliver final RTK-GIS spatial file, test logs, O&M manuals, clear punch-list Category A items, and execute handover protocol with client.",
      durationDays: 15,
      predecessors: [{ activityId: "ACT-TST-02", type: "FS", lagDays: 0 }],
      plannedStart: "2026-12-06",
      plannedEnd: "2026-12-21",
      percentComplete: 0,
      status: "Not Started",
      assignedRole: "Project Director",
      criticalPath: true,
      epistemicType: "planning_assumption"
    }
  ],

  milestones: [
    {
      id: "MS-01",
      code: "MS-01",
      name: "Contract Award & Notice to Proceed (NTP)",
      targetDate: "2026-03-01",
      actualDate: "2026-03-01",
      critical: true,
      status: "Achieved",
      epistemicType: "planning_assumption",
      contractualSignificance: "Triggers commencement of design period and bank guarantees."
    },
    {
      id: "MS-02",
      code: "MS-02",
      name: "Geotechnical Survey & Soil Thermal Report Approved",
      targetDate: "2026-04-22",
      actualDate: "2026-04-23",
      critical: true,
      status: "Achieved",
      epistemicType: "planning_assumption",
      contractualSignificance: "Fixes thermal backfill requirement and trench cross-section design."
    },
    {
      id: "MS-03",
      code: "MS-03",
      name: "Detailed Cable System Engineering Design Freeze",
      targetDate: "2026-05-30",
      actualDate: "2026-05-30",
      critical: true,
      status: "Achieved",
      epistemicType: "planning_assumption",
      contractualSignificance: "Client design approval release for cable manufacturing extrusion."
    },
    {
      id: "MS-04",
      code: "MS-04",
      name: "All Statutory Permits & Road Crossings Authorized",
      targetDate: "2026-06-05",
      actualDate: "2026-06-05",
      critical: false,
      status: "Achieved",
      epistemicType: "planning_assumption",
      contractualSignificance: "Prerequisite for civil trench ground penetration under Dutch law."
    },
    {
      id: "MS-05",
      code: "MS-05",
      name: "Cable Factory Acceptance Test (FAT) Passed & Released",
      targetDate: "2026-08-30",
      critical: true,
      status: "Pending",
      epistemicType: "planning_assumption",
      contractualSignificance: "Release certificate allows dispatch of heavy cable drums to site."
    },
    {
      id: "MS-06",
      code: "MS-06",
      name: "Civil Works & HDD Ready for Cable Pulling",
      targetDate: "2026-09-01",
      critical: true,
      status: "Pending",
      epistemicType: "planning_assumption",
      contractualSignificance: "Civil handover certificate; allows laying crews to occupy trenches."
    },
    {
      id: "MS-07",
      code: "MS-07",
      name: "All Cable Jointing & Terminations Mechanically Complete",
      targetDate: "2026-11-15",
      critical: true,
      status: "Pending",
      epistemicType: "planning_assumption",
      contractualSignificance: "Electrical mechanical completion before applying high voltage."
    },
    {
      id: "MS-08",
      code: "MS-08",
      name: "Site Acceptance Test (SAT) & AC Resonant Withstand Passed",
      targetDate: "2026-12-05",
      critical: true,
      status: "Pending",
      epistemicType: "planning_assumption",
      contractualSignificance: "Official high-voltage integrity milestone before energization."
    },
    {
      id: "MS-09",
      code: "MS-09",
      name: "Final Handover to TSO & Commercial Operation Date (COD)",
      targetDate: "2026-12-21",
      critical: true,
      status: "Pending",
      epistemicType: "planning_assumption",
      contractualSignificance: "Final acceptance certificate issued; transfer of operational control to TenneT."
    }
  ],

  stakeholders: [
    {
      id: "STK-01",
      organization: "TenneT TSO B.V.",
      role: "Asset Owner & Transmission System Operator (Employer)",
      category: "Client / TSO",
      keyResponsibilities: [
        "Defines grid connection requirements and technical specifications",
        "Authorizes design freeze and witness testing (FAT/SAT)",
        "Manages substation grid outage windows and final commercial energization"
      ],
      interfacePoints: [
        "Tilburg Noord 150 kV substation gantry and GIS interface",
        "Grid control center operational dispatch protocol",
        "Statutory spatial plan interface with provincial ministry"
      ]
    },
    {
      id: "STK-02",
      organization: "HV Cable Turnkey Consortium",
      role: "EPC Main Contractor",
      category: "EPC Main Contractor",
      keyResponsibilities: [
        "Single-point turnkey delivery of 150 kV cable connection",
        "Detailed engineering, system calculations, and thermal modeling",
        "Procurement, installation, testing, and full commissioning coordination"
      ],
      interfacePoints: [
        "Primary contractual interface with TenneT project management",
        "Interface with civil subcontractors and jointing specialists",
        "Municipality and stakeholder public relations lead"
      ]
    },
    {
      id: "STK-03",
      organization: "Brabant Infra Civil Works B.V.",
      role: "Civil Engineering & Trenching Subcontractor",
      category: "Specialist Subcontractor",
      keyResponsibilities: [
        "Trench excavation, sheet piling, dewatering, and thermal sand placement",
        "CROW 500 trial trenches and KLIC cable damage prevention",
        "Execution of Horizontal Directional Drillings (HDD)"
      ],
      interfacePoints: [
        "Handover of civil ducts to cable pulling crews",
        "Joint bay pit enclosure readiness for clean jointing tents"
      ]
    },
    {
      id: "STK-04",
      organization: "Gemeente Tilburg & Waterschap De Dommel",
      role: "Municipal Authority & Regional Water Board",
      category: "Authority / Municipality",
      keyResponsibilities: [
        "Issuance of public space excavation and road closure permits",
        "Groundwater dewatering discharge licenses and monitoring",
        "Inspection of reinstated agricultural and municipal land"
      ],
      interfacePoints: [
        "Traffic diversion plans around A58 arterial link",
        "Discharge permits into local watercourses during trench dewatering"
      ]
    }
  ],

  raci: [
    {
      id: "RACI-01",
      activityOrDeliverableId: "DEL-ENG-001",
      scopeTitle: "Detailed Cable System Engineering & Ampacity Dossier",
      responsible: "EPC Lead Cable Systems Engineer",
      accountable: "EPC Project Director",
      consulted: "TenneT Grid Design Specialist",
      informed: "Civil Subcontractor Lead"
    },
    {
      id: "RACI-02",
      activityOrDeliverableId: "ACT-CIV-02",
      scopeTitle: "Horizontal Directional Drilling Execution (A58 Highway)",
      responsible: "HDD Specialist Subcontractor",
      accountable: "Civil Works Manager",
      consulted: "Rijkswaterstaat & Municipal Highway Authority",
      informed: "TenneT Asset Manager"
    },
    {
      id: "RACI-03",
      activityOrDeliverableId: "DEL-TST-004",
      scopeTitle: "Site Acceptance Test (SAT) & Resonant Overvoltage Soak",
      responsible: "Specialist HV Test Agency",
      accountable: "Commissioning & Test Lead",
      consulted: "TenneT High Voltage Commissioning Engineer",
      informed: "Local Emergency Services / Control Center"
    },
    {
      id: "RACI-04",
      activityOrDeliverableId: "DEL-HND-005",
      scopeTitle: "Commercial Energization & Asset Handover Certificate",
      responsible: "Project Handover Manager",
      accountable: "TenneT Senior Project Manager",
      consulted: "EPC Consortium Legal & Commercial Lead",
      informed: "Regional Distribution Network Operator"
    }
  ],

  risks: [
    {
      id: "RSK-01",
      title: "Discovery of unrecorded underground utilities during urban trenching",
      category: "Ground / Geotechnical",
      probability: 4,
      impact: 4,
      score: 16,
      mitigation: "Mandatory CROW 500 protocol: complete vacuum excavation trial trenches (proefsleuven) at all crossings prior to civil mobilization.",
      contingencyPlan: "Pre-engineered micro-realignments and reserve flexible duct bends ready for immediate on-site deployment.",
      owner: "Civil Site Construction Manager",
      status: "Active Mitigation",
      epistemicType: "planning_assumption"
    },
    {
      id: "RSK-02",
      title: "Soil thermal resistivity exceeds 1.0 K·m/W along dry sandy sections",
      category: "Technical",
      probability: 3,
      impact: 4,
      score: 12,
      mitigation: "Execute 42 thermal needle tests during spring. Where values exceed threshold, specify fluidized thermal backfill (cement-sand slurry) with certified lambda <= 0.8 K·m/W.",
      contingencyPlan: "Increase spacing between phases or install localized fluidized thermal backfill surround.",
      owner: "Lead System Engineer",
      status: "Active Mitigation",
      epistemicType: "planning_assumption"
    },
    {
      id: "RSK-03",
      title: "Delayed statutory groundwater dewatering permit from Water Board",
      category: "Permitting",
      probability: 3,
      impact: 3,
      score: 9,
      mitigation: "Engage Waterschap De Dommel early with localized closed-loop re-infiltration engineering方案.",
      contingencyPlan: "Resequence civil trenching to start in elevated agricultural parcels that require minimal dewatering.",
      owner: "Permitting Lead",
      status: "Identified",
      epistemicType: "planning_assumption"
    },
    {
      id: "RSK-04",
      title: "TenneT substation grid outage window postponed due to regional winter peak",
      category: "Grid Outage Window",
      probability: 2,
      impact: 5,
      score: 10,
      mitigation: "Maintain weekly operational interface with TenneT National Grid Control; conduct cold-commissioning pre-checks prior to outage window.",
      contingencyPlan: "Cold-commission terminations under isolator lock-out and schedule live connection during secondary scheduled window.",
      owner: "Project Director",
      status: "Identified",
      epistemicType: "planning_assumption"
    },
    {
      id: "RSK-05",
      title: "Cable reel transport disruption due to heavy transport axle-load road permits",
      category: "Supply Chain",
      probability: 2,
      impact: 4,
      score: 8,
      mitigation: "Submit special transport corridor permits 90 days in advance with North Brabant transport police.",
      contingencyPlan: "Reserve alternative barge offloading point on Wilhelmina Canal and transfer to site via short haul.",
      owner: "Logistics Coordinator",
      status: "Identified",
      epistemicType: "planning_assumption"
    }
  ],

  costs: [
    {
      id: "CST-01",
      wbsCode: "1.0",
      title: "Project Management, QHSE & Project Controls",
      costCategory: "Project Management & Contingency",
      baselineEur: 1450000,
      actualEur: 710000,
      forecastEur: 1450000,
      epistemicType: "planning_assumption",
      basisOfEstimate: "Illustrative EPC team staffing model across 12-month delivery window."
    },
    {
      id: "CST-02",
      wbsCode: "2.0",
      title: "System Engineering, Geotech Survey & Permitting",
      costCategory: "Engineering",
      baselineEur: 820000,
      actualEur: 810000,
      forecastEur: 820000,
      epistemicType: "planning_assumption",
      basisOfEstimate: "Route surveying, soil thermal probing, IEC 60287 ampacity modeling, and municipal permit fees."
    },
    {
      id: "CST-03",
      wbsCode: "3.0",
      title: "150 kV Cable & Accessories Manufacturing Supply",
      costCategory: "Procurement",
      baselineEur: 9800000,
      actualEur: 8500000,
      forecastEur: 9800000,
      epistemicType: "planning_assumption",
      basisOfEstimate: "51 km 150 kV 1200 mm² Cu XLPE cable + 36 premoulded joints + 12 terminations + link boxes & DTS fibers."
    },
    {
      id: "CST-04",
      wbsCode: "4.0",
      title: "Civil Works, Trenching, Dewatering & 4 HDDs",
      costCategory: "Civil Works",
      baselineEur: 5200000,
      actualEur: 4100000,
      forecastEur: 5350000,
      epistemicType: "planning_assumption",
      basisOfEstimate: "8.4 km trench excavation, thermal backfill, 4 major horizontal directional drillings, and 12 joint bay pits."
    },
    {
      id: "CST-05",
      wbsCode: "5.0",
      title: "Cable Pulling, Jointing Shelters & Termination Assembly",
      costCategory: "Electrical Installation",
      baselineEur: 2650000,
      actualEur: 620000,
      forecastEur: 2650000,
      epistemicType: "planning_assumption",
      basisOfEstimate: "Specialist pulling crews, winch equipment, master jointer hours in air-conditioned clean shelters."
    },
    {
      id: "CST-06",
      wbsCode: "6.0",
      title: "Site Testing (FAT/SAT), Resonant Test Set & Handover",
      costCategory: "Testing & Commissioning",
      baselineEur: 780000,
      actualEur: 65000,
      forecastEur: 780000,
      epistemicType: "planning_assumption",
      basisOfEstimate: "Mobile variable frequency resonant test set mobilization, PD diagnostics, DTS calibration, and as-built survey."
    }
  ],

  qualityTests: [
    {
      id: "TST-01",
      code: "FAT-CBL-ROUTINE",
      stage: "Factory Acceptance (FAT)",
      title: "Cable Factory Routine Voltage & Partial Discharge Test",
      standardReference: "IEC 60840:2020 Clause 9",
      description: "Each manufactured reel subjected to 2.5 Uo AC voltage for 30 minutes, followed by partial discharge measurement at 1.5 Uo.",
      acceptanceCriteria: "Zero breakdown; PD magnitude strictly <= 5 pC (manufacturer guarantee < 2 pC).",
      status: "Passed",
      epistemicType: "verified_fact"
    },
    {
      id: "TST-02",
      code: "SITE-SHEATH-DC",
      stage: "Site Acceptance (SAT) / Commissioning",
      title: "Outer Sheath DC Voltage Withstand Test",
      standardReference: "IEC 60840:2020 Clause 15.2",
      description: "Direct voltage of 10 kV DC applied between outer metallic screen and earth for 1 minute to detect outer HDPE jacket mechanical scratches or damage during pulling.",
      acceptanceCriteria: "No electrical breakdown; leakage current remains stable and negligible during full 60 seconds.",
      status: "Planned",
      epistemicType: "verified_fact"
    },
    {
      id: "TST-03",
      code: "SITE-HV-AC-RESONANT",
      stage: "Site Acceptance (SAT) / Commissioning",
      title: "Main Insulation AC Resonant Overvoltage Test & Sensitive PD",
      standardReference: "IEC 60840:2020 Clause 15.3 & CIGRE TB 660",
      description: "Application of AC test voltage (typically 1.7 Uo = ~147 kV phase-to-ground for 150 kV rated system) at frequency between 20 Hz and 300 Hz for 60 minutes via mobile series resonant reactor.",
      acceptanceCriteria: "No insulation breakdown occurs across full 60 minutes duration on any phase; concurrent PD monitoring shows no localized recurring discharge in joints.",
      status: "Planned",
      epistemicType: "verified_fact"
    },
    {
      id: "TST-04",
      code: "SITE-DTS-OTDR",
      stage: "Site Acceptance (SAT) / Commissioning",
      title: "DTS Fiber Optic Loop Attenuation & Temperature Baseline Calibration",
      standardReference: "TenneT Technical Specification Annex C",
      description: "Optical Time Domain Reflectometer (OTDR) verification across internal fiber optic sensing tubes; temperature calibration against calibrated PT100 sensor in joint bays.",
      acceptanceCriteria: "Total optical loss < 0.25 dB/km at 1550 nm; continuous temperature profile baseline with +-1.0 deg C accuracy.",
      status: "Planned",
      epistemicType: "planning_assumption"
    }
  ],

  handoverItems: [
    {
      id: "HND-01",
      category: "As-Built Documentation",
      title: "Sub-centimeter RTK-GPS Spatial Route CAD/GIS Dataset",
      description: "Complete geo-referenced spatial file containing exact X, Y, Z coordinates of cable axis, joint centers, link boxes, and third-party utility clearances.",
      owner: "Survey & GIS Specialist",
      targetDate: "2026-12-10",
      status: "Draft Submitted",
      epistemicType: "planning_assumption"
    },
    {
      id: "HND-02",
      category: "Test Certificates",
      title: "Consolidated High Voltage Testing & Commissioning Dossier",
      description: "Factory FAT certificates, site jointing logs, 10 kV sheath test logs, AC resonant test recordings, and PD calibration traces signed by accredited test authority.",
      owner: "Commissioning & Test Lead",
      targetDate: "2026-12-15",
      status: "Pending",
      epistemicType: "planning_assumption"
    },
    {
      id: "HND-03",
      category: "Punch-List Item",
      title: "Category A Punch-List Clearance Certificate",
      description: "Verification that zero critical safety, environmental, or electrical operational deficiencies remain prior to client energization permit.",
      owner: "Project Director",
      targetDate: "2026-12-18",
      status: "Pending",
      epistemicType: "planning_assumption"
    },
    {
      id: "HND-04",
      category: "Operation & Maintenance Manual",
      title: "Asset Lifecycle Operation & Maintenance Manual",
      description: "Link box inspection intervals, sheath voltage limiter (SVL) test protocol, DTS alarm set-points, emergency repair joint spares allocation, and supplier warranty terms.",
      owner: "Asset Handover Lead",
      targetDate: "2026-12-21",
      status: "Pending",
      epistemicType: "planning_assumption"
    }
  ]
};
