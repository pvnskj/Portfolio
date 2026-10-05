export type EomMetric = {
  value: string;
  label: string;
  type: 'Measured' | 'Actual' | 'Projected';
  detail: string;
};

export type EomFocusArea = {
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  purpose: string;
  whyItMatters: string;
  capabilities: string[];
  challenges: string[];
  ownership: string[];
  decisions: { title: string; body: string }[];
  flow: string[];
  evidence: EomMetric[];
  learning: string;
};

export const eomMetrics: EomMetric[] = [
  {
    value: '20%',
    label: 'Faster logic mapping',
    type: 'Measured',
    detail: 'Measured in a proof-of-concept comparison between dependency-driven self-assembly and manually modeled fulfillment logic.',
  },
  {
    value: '19+',
    label: 'Teams coordinated',
    type: 'Actual',
    detail: 'Actual cross-team delivery complexity required to preserve service behavior while the orchestration model changed underneath it.',
  },
  {
    value: '18',
    label: 'Service intents in scope',
    type: 'Actual',
    detail: 'Existing service behaviors that had to remain functionally intact during migration to the new orchestration model.',
  },
  {
    value: '75K/day',
    label: 'Target order capacity',
    type: 'Projected',
    detail: 'A modeled scale target for the event-driven architecture, not a claim of achieved production throughput.',
  },
];

export const eomDecisions = [
  {
    title: 'Dependencies over diagrams',
    body: 'Capabilities declare what they require and what they can execute, allowing the platform to resolve sequence and parallelism instead of manually redrawing every product path.',
  },
  {
    title: 'Assess before execution',
    body: 'Product decomposition, identifiers, configuration, and enrichment are resolved before fulfillment begins so downstream work does not consume incomplete technical state.',
  },
  {
    title: 'One shared order context',
    body: 'A governed lifecycle context lets capabilities contribute controlled enrichment without creating divergent versions of the same order.',
  },
  {
    title: 'Configuration over repeated customization',
    body: 'Product and orchestration policy move toward governed configuration while the core execution model stays stable as service combinations change.',
  },
];

export const eomFocusAreas: EomFocusArea[] = [
  {
    slug: 'orchestration-foundation',
    code: 'FOCUS-01',
    title: 'Orchestration Foundation',
    shortTitle: 'Orchestration',
    purpose: 'We needed to stop drawing a new fulfillment path every time a product or service changed. The first step was proving that capabilities could declare their dependencies and let the platform work out the execution order.',
    whyItMatters: 'The old approach worked, but it did not scale with the number of product combinations we were introducing. A relatively small business change could turn into workflow updates, deployments, coordination across teams, and another regression cycle.',
    capabilities: [
      'Capability registration and dependency declarations',
      'Dynamic execution-graph assembly',
      'Parallel work derived from dependency topology',
      'Deterministic execution boundaries',
    ],
    challenges: [
      'Changing the orchestration model without changing what existing services actually did',
      'Getting teams to define their real upstream and downstream dependencies',
      'Allowing parallel execution without making order behavior unpredictable',
      'Keeping configuration simple enough that we did not recreate the old workflow problem in a different form',
    ],
    ownership: [
      'Set the direction to move away from manually maintained fulfillment paths',
      'Worked with capability teams to identify what each service needed before it could run',
      'Used the proof of concept to test the riskiest dependency and execution assumptions first',
      'Tracked the measured 20% mapping improvement separately from the longer-term capacity target',
    ],
    decisions: [
      {
        title: 'Declare intent, not traversal',
        body: 'The engine should understand what must happen and what each capability depends on rather than being told every step of every path in advance.',
      },
      {
        title: 'Use the dependency graph as the execution contract',
        body: 'Parallelism and sequence should emerge from topology so new product combinations do not require equivalent structural redesign.',
      },
    ],
    flow: ['Product intent', 'Capability proposals', 'Dependency resolution', 'Execution graph', 'Coordinated fulfillment'],
    evidence: [eomMetrics[0]!],
    learning: 'The important shift was getting teams to define dependencies clearly. Once that was explicit, we could change product behavior without rebuilding the entire path around it.',
  },
  {
    slug: 'product-decomposition',
    code: 'FOCUS-02',
    title: 'Product Decomposition',
    shortTitle: 'Decomposition',
    purpose: 'A customer order still arrives in business terms: change a plan, add a service, remove an add-on. We had to translate that request into the technical work each fulfillment capability actually needed to perform.',
    whyItMatters: 'Moving away from static workflows only helps if product variation can be handled before execution. Otherwise the same plan-specific branching simply moves into the new orchestration engine.',
    capabilities: [
      'Intent-to-capability decomposition',
      'Product and service relationship interpretation',
      'Technical work proposal generation',
      'Compatibility with existing service behaviors',
    ],
    challenges: [
      'Maintaining behavior across many existing service intents',
      'Avoiding product-specific branching inside the orchestration engine',
      'Separating commercial variation from execution mechanics',
      'Coordinating changes across teams that owned different parts of the fulfillment chain',
    ],
    ownership: [
      'Defined how product intent should decompose into reusable technical work',
      'Prioritized preservation of existing outcomes over a clean-sheet rewrite',
      'Coordinated migration decisions across teams with different service responsibilities',
      'Used service-intent coverage as an explicit scope measure',
    ],
    decisions: [
      {
        title: 'Keep product variation outside core execution',
        body: 'Differences in plans and services should change decomposition and configuration before they require structural changes to the orchestration engine.',
      },
      {
        title: 'Preserve outcomes during migration',
        body: 'The new model had to prove that existing service behaviors remained intact before platform elegance or future scale could count as success.',
      },
    ],
    flow: ['Customer intent', 'Product interpretation', 'Technical decomposition', 'Capability set', 'Orchestration input'],
    evidence: [eomMetrics[2]!],
    learning: 'Keeping product interpretation separate from execution made the model easier to extend. New offers could change what work was proposed without forcing us to redesign how the engine executed that work.',
  },
  {
    slug: 'shared-order-context',
    code: 'FOCUS-03',
    title: 'Shared Order Context',
    shortTitle: 'Order Context',
    purpose: 'Several capabilities needed to read and add information to the same order. We created one shared order context so identifiers, configuration, and enrichment did not get rebuilt differently by every team.',
    whyItMatters: 'Without a shared context, one capability could move ahead with data another capability had not finished enriching yet. That created exactly the kind of timing and data issues we were trying to remove.',
    capabilities: [
      'Canonical lifecycle context',
      'Controlled enrichment across capabilities',
      'Assessment before fulfillment',
      'Readiness gating before downstream execution',
    ],
    challenges: [
      'Defining ownership of shared fields across many teams',
      'Preventing partially enriched state from reaching execution',
      'Keeping the common model useful without making it excessively broad',
      'Coordinating contract changes across independently delivered capabilities',
    ],
    ownership: [
      'Standardized the shared context as a product contract',
      'Introduced a readiness boundary between assessment and execution',
      'Balanced local team autonomy against common lifecycle governance',
      'Coordinated adoption across the teams contributing to the order lifecycle',
    ],
    decisions: [
      {
        title: 'One context, controlled enrichment',
        body: 'Capabilities contribute to the same governed representation instead of creating local copies and repeated translation logic.',
      },
      {
        title: 'Readiness before execution',
        body: 'Required identifiers, configuration, and enrichment should be resolved before fulfillment can consume the order state.',
      },
    ],
    flow: ['Initial order', 'Assessment', 'Controlled enrichment', 'Readiness gate', 'Execution-ready context'],
    evidence: [eomMetrics[1]!],
    learning: 'A shared object by itself was not enough. We also had to agree on who owned each part of the data and when the order was complete enough for fulfillment to begin.',
  },
  {
    slug: 'scale-observability',
    code: 'FOCUS-04',
    title: 'Scale & Observability',
    shortTitle: 'Scale & Control',
    purpose: 'Once the engine could assemble work dynamically, the next question was operational: can teams see what it assembled, where an order is waiting, and what rule or dependency caused that behavior?',
    whyItMatters: 'A flexible engine is not useful if production support has to guess what happened. Visibility, traceability, and controlled configuration had to grow with the orchestration model.',
    capabilities: [
      'Event-driven work coordination',
      'Execution-path visibility',
      'Configuration-driven policy controls',
      'Capacity modeling and operational instrumentation',
    ],
    challenges: [
      'Keeping dynamic execution understandable to operators and delivery teams',
      'Separating modeled capacity from observed production performance',
      'Designing configuration guardrails for policy changes',
      'Maintaining traceability as concurrency and service combinations increase',
    ],
    ownership: [
      'Prioritized observability as part of the product rather than post-launch tooling',
      'Defined the distinction between measured delivery evidence and projected capacity',
      'Pushed policy toward governed configuration where repeat customization added little value',
      'Kept scale claims qualified to what the evidence actually supported',
    ],
    decisions: [
      {
        title: 'Make dynamic execution visible',
        body: 'A system that assembles work dynamically must also expose enough of that assembly for teams to reason about behavior and exceptions.',
      },
      {
        title: 'Qualify scale evidence',
        body: 'Capacity modeling can guide architecture decisions, but projected throughput must remain visibly distinct from achieved production performance.',
      },
    ],
    flow: ['Configured policy', 'Event coordination', 'Dynamic execution', 'Operational visibility', 'Measured feedback'],
    evidence: [eomMetrics[3]!],
    learning: 'Dynamic execution made observability more important, not less. Teams needed a clear view of the path the system created, while we kept projected capacity separate from performance we had actually measured.',
  },
];

export const eomEpic = {
  code: 'EPIC-01',
  title: 'Enterprise Order Management',
  category: 'Platform modernization · Order orchestration',
  headline: 'Turn fulfillment from manually modeled paths into a configurable orchestration platform.',
  bigPicture:
    'The legacy operating model made product change expensive because each new service combination could require another modeled fulfillment path. I led the product shift toward dependency-driven orchestration: capabilities declare what they need, shared order context is governed before execution, and product variation moves toward configuration instead of repeated structural redesign.',
  problem: 'Product change had become workflow change, increasing modeling effort, deployment dependency, and regression surface as service combinations grew.',
  decision: 'Move the platform from prescribed paths to declared dependencies, governed context, and configurable policy so execution can assemble from product intent.',
  outcome: 'A reusable orchestration model reduced logic-mapping effort while creating a foundation for broader service variation and substantially higher target scale.',
};
