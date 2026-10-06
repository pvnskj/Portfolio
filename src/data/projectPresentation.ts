import type { Project } from './projects';

type Presentation = {
  group: string;
  tone: string;
  role: string;
  contribution: string;
  problem: string;
  decision: string;
  outcome: string;
  before: string;
  after: string;
  flow: string[];
  proofIndex: number;
  proofNote: string;
  evidence: [string, string][];
};

// Concise editorial summaries. All numeric values come from the project record.
export const projectPresentation: Record<string, Presentation> = {
  "enterprise-order-management": {
    "group": "Platforms",
    "tone": "blue",
    "role": "Product strategy & orchestration",
    "contribution": "I led the shift to dependency-driven execution and a shared order contract across 19+ teams.",
    "problem": "A vendor-owned orchestration product was costing us on every order. We needed to reduce that dependency while building an intelligent orchestration capability we could control and scale.",
    "decision": "Let capabilities declare dependencies so the platform assembles the execution path.",
    "outcome": "Faster logic mapping, with existing service behavior preserved as a migration requirement.",
    "before": "Manually modeled paths",
    "after": "Dependency-driven execution",
    "flow": [
      "Product intent",
      "Dependency graph",
      "Readiness gate",
      "Fulfillment"
    ],
    "proofIndex": 0,
    "proofNote": "Proof-of-concept comparison",
    "evidence": [
      [
        "Measured",
        "Faster logic mapping"
      ],
      [
        "Projected",
        "Target order capacity"
      ],
      [
        "Actual scope",
        "Teams coordinated"
      ],
      [
        "Actual scope",
        "Service intents"
      ]
    ]
  },
  "rag-analysis-agent": {
    "group": "AI",
    "tone": "violet",
    "role": "Builder · product & engineering",
    "contribution": "I personally designed and built the working analysis agent and introduced it into the analyst workflow.",
    "problem": "Business and technical analysis together consumed about 10 days before development could start.",
    "decision": "Unify fragmented business and technical knowledge into one grounded, human-validated analysis workflow.",
    "outcome": "About 6 hours of analysis work, with stories typically moving forward in 1–2 days after validation.",
    "before": "~10 days of analysis",
    "after": "~6 hours with the agent",
    "flow": [
      "Engineering sources",
      "Permission-aware retrieval",
      "Grounding gate",
      "Cited answer"
    ],
    "proofIndex": 0,
    "proofNote": "Prior workflow compared with agent-assisted analysis",
    "evidence": [
      [
        "Measured",
        "Analysis work"
      ],
      [
        "Observed workflow",
        "Story movement"
      ],
      [
        "Observed",
        "Knowledge corpus"
      ],
      [
        "Observed",
        "Projects searchable"
      ]
    ]
  },
  "build-plus": {
    "group": "Operations",
    "tone": "teal",
    "role": "Product ownership · supply chain",
    "contribution": "I established the part-data foundation and sequenced planning, fulfillment, and asset recovery around it.",
    "problem": "Part data, demand, shipments, and asset recovery lived in disconnected workflows.",
    "decision": "Give every process a governed part identity before automating the lifecycle.",
    "outcome": "Connected planning and fulfillment, with custody tracked through recovery or retirement.",
    "before": "Disconnected workflows",
    "after": "One asset lifecycle",
    "flow": [
      "Part identity",
      "Demand planning",
      "Validated fulfillment",
      "Recovery"
    ],
    "proofIndex": 1,
    "proofNote": "Implemented planning capability",
    "evidence": [
      [
        "Measured baseline",
        "MRO in spreadsheets before"
      ],
      [
        "Implemented",
        "Rolling demand horizon"
      ],
      [
        "Projected",
        "Program hours returned / year"
      ],
      [
        "Actual scope",
        "Manual handoffs addressed"
      ]
    ]
  },
  "rfds": {
    "group": "Operations",
    "tone": "cyan",
    "role": "Product ownership · field operations",
    "contribution": "I identified the fragmented site-information problem and designed the governed workflow connecting engineering data, field execution, milestones, and payment.",
    "problem": "Critical site-installation information lived across local repositories with inconsistent versions and no dependable operational source of truth.",
    "decision": "Generate current site information from trusted enterprise data and let the milestone drive when contractor work begins.",
    "outcome": "Single-site generation dropped from 2–4 hours to under 30 seconds, with bulk milestone-driven processing added for network-scale updates.",
    "before": "Fragmented site documents",
    "after": "Milestone-driven field workflow",
    "flow": [
      "Site milestone",
      "Trusted enterprise data",
      "Contractor execution",
      "Payment trigger"
    ],
    "proofIndex": 1,
    "proofNote": "Measured per individual site in the automated workflow",
    "evidence": [
      [
        "Measured",
        "Annual cost avoidance"
      ],
      [
        "Measured",
        "Single-site generation"
      ],
      [
        "Observed",
        "Bulk processing"
      ],
      [
        "Observed",
        "Designs per month"
      ]
    ]
  },
  "gl-coding": {
    "group": "Finance",
    "tone": "amber",
    "role": "Product ownership · financial systems",
    "contribution": "I backed a four-month redesign and aligned project identity across operations, warehouse, and ERP.",
    "problem": "Every new portfolio risked another engineering change to hard-coded accounting logic.",
    "decision": "Move accounting policy into governed configuration and validate financial codes before posting.",
    "outcome": "Faster month-end close and a reusable routing model adopted across 4+ portfolios.",
    "before": "Policy embedded in code",
    "after": "Configurable financial routing",
    "flow": [
      "Project identity",
      "Policy lookup",
      "Code validation",
      "ERP posting"
    ],
    "proofIndex": 0,
    "proofNote": "Post-implementation scenario analysis",
    "evidence": [
      [
        "Measured",
        "Faster month-end close"
      ],
      [
        "Observed",
        "Portfolio adoption"
      ],
      [
        "Actual scope",
        "Enterprise systems aligned"
      ],
      [
        "Estimated",
        "Supported-scenario enablement"
      ]
    ]
  },
  "lease-vendor-management": {
    "group": "Finance",
    "tone": "rose",
    "role": "Product ownership · lease-to-pay",
    "contribution": "I defined payment eligibility controls and replaced the three-address vendor limit with a scalable model.",
    "problem": "Fragmented lease data and vendor restrictions created recurring payment workarounds.",
    "decision": "Check vendor, address, and financial identifiers before a payment reaches Finance.",
    "outcome": "A governed lease-to-pay process with scalable vendor addresses and upstream payment controls.",
    "before": "Payment workarounds",
    "after": "Eligibility-gated payments",
    "flow": [
      "Lease obligation",
      "Vendor eligibility",
      "Payment approval",
      "Reconciliation"
    ],
    "proofIndex": 0,
    "proofNote": "Recurring financial scale governed",
    "evidence": [
      [
        "Actual scale",
        "Monthly rent roll governed"
      ],
      [
        "Implemented",
        "Vendor address model"
      ],
      [
        "Estimated",
        "Business-case ROI"
      ],
      [
        "Actual scope",
        "Stories delivered"
      ]
    ]
  }
};

export const publicText = (text: string) => text
  .replace(/Hansen/gi, 'catalog configuration')
  .replace(/Camunda/gi, 'legacy workflow engine')
  .replace(/Change Bucket/gi, 'service-change')
  .replace(/VendorOne/gi, 'vendor-management platform')
  .replace(/NexsysOne/gi, 'operations platform')
  .replace(/GitLab/gi, 'engineering repositories')
  .replace(/Jira/gi, 'work management')
  .replace(/Confluence/gi, 'knowledge base')
  .replace(/Claude via Bedrock/gi, 'private LLM runtime')
  .replace(/AWS Bedrock/gi, 'private model runtime')
  .replace(/Bedrock/gi, 'private model runtime')
  .replace(/Oracle Finance/gi, 'ERP finance')
  .replace(/Oracle IDs/gi, 'ERP identifiers')
  .replace(/Oracle/gi, 'ERP')
  .replace(/\bN1\b/g, 'operations platform')
  .replace(/\bQDS\b/g, 'engineering system')
  .replace(/\bMCP\b/g, 'live connectors')
  .replace(/FastAPI/gi, 'service API')
  .replace(/\bOMS\b/g, 'order-management platform')
  .replace(/\bWMS\b/g, 'warehouse platform')
  .replace(/\bFSLs\b/g, 'field stocking locations')
  .replace(/\bIHS\b/g, 'in-house service teams')
  .replace(/\bGCs\b/g, 'field partners')
  .replace(/\bHubs\b/g, 'distribution hubs');

export function getEvidence(project: Project) {
  const presentation = projectPresentation[project.slug]!;
  return project.metrics.map((metric, index) => ({
    ...metric,
    type: presentation.evidence[index]?.[0] ?? 'Evidence',
    label: presentation.evidence[index]?.[1] ?? publicText(metric.label),
    detail: publicText(metric.detail),
  }));
}
