export const NAV_LINKS = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
];

export const FEATURES = [
  {
    id: 'ai-triage',
    title: 'AI Issue Triage & Auto-Routing',
    description:
      'Automatically categorize incoming bugs, assign priority scores, and route tasks to the right engineer based on historical code ownership.',
    metric: '64% faster triage',
    iconType: 'bolt',
  },
  {
    id: 'pr-health',
    title: 'Live Pull Request Health',
    description:
      'Detect review bottlenecks before they stall releases. Get instant Slack nudges when high-priority PRs sit unreviewed past your SLA.',
    metric: '2.3x review speed',
    iconType: 'shield',
  },
  {
    id: 'sprint-forecast',
    title: 'Predictive Sprint Forecasting',
    description:
      'Monte Carlo simulations analyze team velocity and scope creep in real time to give engineering leads reliable delivery confidence intervals.',
    metric: '94% on-time delivery',
    iconType: 'chart',
  },
  {
    id: 'zero-friction-sync',
    title: 'Bi-Directional Tool Sync',
    description:
      'Connect GitHub, GitLab, Jira, Linear, and Slack in two clicks without forcing developers to change how they commit or review code.',
    metric: '5-minute setup',
    iconType: 'sync',
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Connect Your Engineering Stack',
    summary:
      'Authorize read-only metadata access for GitHub, Linear, or Jira using OAuth. Zero code leaves your repositories.',
    previewTitle: 'Connected Integrations',
    items: [
      { name: 'GitHub Enterprise', status: 'Synced • 42 repos', badge: 'bg-emerald-100 text-emerald-700' },
      { name: 'Linear Workspace', status: 'Synced • 6 active teams', badge: 'bg-emerald-100 text-emerald-700' },
      { name: 'Slack #eng-alerts', status: 'Webhook active', badge: 'bg-indigo-100 text-indigo-700' },
    ],
  },
  {
    step: '02',
    title: 'Calibrate Sprint Guardrails',
    summary:
      'Set review SLA thresholds, WIP limits, and automatic risk alerts tailored to each squad’s cadence.',
    previewTitle: 'Active Guardrail Rules',
    items: [
      { name: 'PR Review SLA > 12h', status: 'Ping code owner in Slack', badge: 'bg-amber-100 text-amber-800' },
      { name: 'Scope Creep > 15%', status: 'Flag sprint risk to EM', badge: 'bg-rose-100 text-rose-700' },
      { name: 'Stale Branch > 7d', status: 'Auto-label cleanup', badge: 'bg-slate-200 text-slate-700' },
    ],
  },
  {
    step: '03',
    title: 'Ship With Real-Time Clarity',
    summary:
      'Replace status meetings with automated daily standup digests and live release readiness scorecards.',
    previewTitle: 'Sprint 24 Release Scorecard',
    items: [
      { name: 'Completion Probability', status: '94% on-schedule', badge: 'bg-emerald-100 text-emerald-700' },
      { name: 'Cycle Time Trend', status: '-18% vs last sprint', badge: 'bg-indigo-100 text-indigo-700' },
      { name: 'Open Blockers', status: '0 critical issues', badge: 'bg-emerald-100 text-emerald-700' },
    ],
  },
];

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For early-stage squads shipping their first product.',
    monthlyPrice: 19,
    annualPrice: 15,
    popular: false,
    ctaText: 'Start Free Trial',
    features: [
      'Up to 10 active contributors',
      'GitHub & Slack integration',
      'Automated daily standup digests',
      '14-day sprint velocity history',
      'Community & email support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'For scaling engineering orgs optimizing cycle time.',
    monthlyPrice: 49,
    annualPrice: 39,
    popular: true,
    ctaText: 'Start 14-Day Free Trial',
    features: [
      'Up to 50 active contributors',
      'AI Issue Triage & PR bottleneck alerts',
      'Predictive Monte Carlo sprint forecasts',
      'Jira, Linear & GitLab bi-directional sync',
      'Priority Slack support & onboarding',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'For multi-team organizations needing custom controls.',
    monthlyPrice: 99,
    annualPrice: 79,
    popular: false,
    ctaText: 'Book Scale Demo',
    features: [
      'Unlimited contributors & workspaces',
      'Custom DORA metrics & executive rollups',
      'SAML SSO & SOC2 Type II compliance',
      'Custom webhook & GraphQL API access',
      'Dedicated Solutions Architect',
    ],
  },
];