import React, { useCallback, useState } from 'react';
import Lightbox, { LightboxImage } from './Lightbox';

// Honesty rules for this page (keep when editing):
// - n8n images are workflow canvases re-rendered from exports, the glossary is real
//   sheet text redrawn. Never call either a "screenshot".
// - The three funnel / retention / email charts use synthetic numbers and carry a
//   baked-in "Illustrative / anonymised data" label. Never crop it or call them real.
// - Diagrams are generic: no company names or logos inside images.
// - Every figure in the copy comes from the owner's spec or CV. Add none.

type Img = LightboxImage;

const img = (file: string, width: number, height: number, alt: string, caption: string): Img => ({
  src: `/work/${file}`,
  width,
  height,
  alt,
  caption,
  illustrative: file.includes('illustrative'),
});

const IMAGES = {
  glossary: img(
    'wonderwriter-events-glossary.png', 3800, 1008,
    'Events glossary table with columns for event name, category, status, description, layer, source file, trigger, properties, destination, PII and funnels, showing six events such as landing_viewed and create_story_submitted.',
    'Events glossary: real sheet text, redrawn. Owner and notes columns left out.'
  ),
  funnel: img(
    'posthog-funnel-illustrative.png', 1800, 960,
    'Illustrative bar chart of a seven-step create funnel from create flow started to story generated, labelled illustrative and anonymised data.',
    'Create funnel. Illustrative chart: step names are real, all numbers are synthetic.'
  ),
  retention: img(
    'posthog-retention-illustrative.png', 1800, 920,
    'Illustrative activation retention chart, labelled illustrative and anonymised data.',
    'Activation retention. Illustrative chart: real layout, synthetic numbers.'
  ),
  email: img(
    'posthog-email-delivery-health-illustrative.png', 1800, 840,
    'Illustrative email delivery health chart, labelled illustrative and anonymised data.',
    'Email delivery health. Illustrative chart: real layout, synthetic numbers.'
  ),
  n8nPerformance: img(
    'n8n-performance-monitoring.png', 2932, 1572,
    'n8n workflow canvas: a daily trigger feeds date windows, product funnel data and Meta and Pinterest ad insights into KPI and verdict steps that write to a performance sheet.',
    'Workflow canvas, re-rendered from the n8n export. Performance monitoring and verdict.'
  ),
  n8nCopy: img(
    'n8n-ai-ad-copy-generation.png', 3502, 842,
    'n8n workflow canvas: a weekly trigger reads hooks, learnings, audiences, placement profiles and past performance, builds concepts, calls an LLM for copy variants and appends rows to ad sheets.',
    'Workflow canvas, re-rendered from the n8n export. AI ad-copy generation.'
  ),
  n8nCapi: img(
    'n8n-conversion-api-drain.png', 1872, 932,
    'n8n workflow canvas: every 10 minutes pending conversion events are fetched, routed to the Meta or Pinterest conversions API and marked sent or failed.',
    'Workflow canvas, re-rendered from the n8n export. Conversion-API outbox drain.'
  ),
  medallion: img(
    'medallion-architecture.png', 3000, 1000,
    'Medallion data architecture: product databases and website events flow through an event stream and persistent storage into bronze, silver and gold layers in a cloud warehouse, then to BI.',
    'Medallion architecture. Redrawn generic diagram.'
  ),
  valueChain: img(
    'data-value-chain.png', 3000, 1040,
    'Data value chain in five steps: generation, storage, transformation, analysis and predictions, activation, each with example outputs and an owning team.',
    'Data value chain. Redrawn generic diagram.'
  ),
};

const WORKFLOWS: { title: string; summary: string; image: Img }[] = [
  {
    title: 'Performance monitoring and verdict',
    summary:
      'Daily 18:00 trigger → pulls the date windows, funnel-by-campaign data from the product database, and Meta and Pinterest ad insights → computes KPIs and a keep/pause verdict per ad → upserts the results to a performance sheet.',
    image: IMAGES.n8nPerformance,
  },
  {
    title: 'AI ad-copy generation',
    summary:
      'Monday 06:00 trigger → reads hooks, learnings, audiences, placement profiles and past ad performance → builds concept combinations → an LLM (Haiku) writes copy variants → rows are appended to the Meta or Pinterest ad sheet, ready for review.',
    image: IMAGES.n8nCopy,
  },
  {
    title: 'Conversion-API outbox drain',
    summary:
      'Every 10 min → fetches pending conversion events → routes each to the Meta or Pinterest conversions API → marks events sent or failed in the outbox.',
    image: IMAGES.n8nCapi,
  },
];

const PROOF = [
  { value: '~$2M', label: 'Incremental profit from a reactivation programme' },
  { value: '6x', label: 'Revenue growth supported in 12 months' },
  { value: '4 → 10', label: 'Analytics team scaled during hypergrowth' },
  { value: '+5%', label: 'LTV12 from multi-discount experimentation' },
];

const CASES: { value: string; unit?: string; title: string; company: string; note?: string }[] = [
  { value: '~$2M', unit: 'incremental profit', title: 'Reactivation via risk-based incentives', company: 'HeliosX' },
  { value: '~$300K', unit: 'CM3 preserved', title: 'Pack size and pricing', company: 'HeliosX' },
  { value: '~$500K', title: 'ED funnel turnaround', company: 'HeliosX' },
  {
    value: '+5%', unit: 'LTV12', title: 'Multi-discount experimentation', company: 'HelloFresh',
    note: 'A/B tests across discounting, loyalty and notification programmes.',
  },
  {
    value: 'Shorter', unit: 'payback', title: 'CAC/LTV compression', company: 'HelloFresh',
    note: 'CAC and CLV analysis with Marketing and Operations.',
  },
  {
    value: '+7%', unit: 'SMS ROI', title: 'CRM triggered campaigns', company: 'Lime',
    note: 'CRM roadmap revised with Customer Success toward personalised triggered campaigns.',
  },
];

const STACKS: { company: string; role: string; tools: string[] }[] = [
  {
    company: 'SM.AI',
    role: 'Head of Analytics & AI, 2025 to now',
    tools: ['Claude Code', 'Codex', 'Cursor', 'MCP', 'n8n', 'Make', 'PostHog', 'Supabase', 'Postgres', 'Snowflake', 'BigQuery', 'ElevenLabs', 'GitHub', 'Jira'],
  },
  {
    company: 'HeliosX',
    role: 'Head of Analytics, 2024 to 2025',
    tools: ['Kinesis', 'S3', 'Snowflake', 'Metabase', 'Select Star', 'LLM integration'],
  },
  {
    company: 'Bridge-U',
    role: 'Head of Analytics, 2023 to 2024',
    tools: ['BigQuery', 'dbt', 'Looker'],
  },
];

// ---------- building blocks ----------

const SectionHeader: React.FC<{ kicker: string; title: string; intro?: string }> = ({ kicker, title, intro }) => (
  <div className="mb-12 md:mb-16">
    <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-4">{kicker}</h2>
    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{title}</h3>
    {intro && <p className="mt-6 text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-3xl">{intro}</p>}
  </div>
);

const Figure: React.FC<{ image: Img; onOpen: (i: Img) => void; caption?: React.ReactNode; className?: string }> = ({
  image, onOpen, caption, className = '',
}) => (
  <figure className={`min-w-0 ${className}`}>
    <button
      type="button"
      onClick={() => onOpen(image)}
      aria-label={`Enlarge: ${image.alt}`}
      className="group relative block w-full bg-white rounded-lg p-1.5 md:p-2 border border-white/10 hover:border-blue-500/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-colors cursor-zoom-in"
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto rounded"
      />
      <span className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-1.5 py-0.5 md:px-2 md:py-1 bg-black/75 text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase rounded-sm opacity-90 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity">
        Enlarge
      </span>
    </button>
    <figcaption className="mt-3 text-xs md:text-sm text-gray-500 leading-relaxed">{caption ?? image.caption}</figcaption>
  </figure>
);

const Facts: React.FC<{ rows: { label: string; body: React.ReactNode }[] }> = ({ rows }) => (
  <dl className="grid gap-6 md:grid-cols-2">
    {rows.map((r) => (
      <div key={r.label} className="min-w-0">
        <dt className="text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{r.label}</dt>
        <dd className="text-gray-300 text-sm md:text-base font-light leading-relaxed">{r.body}</dd>
      </div>
    ))}
  </dl>
);

const Chips: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((t) => (
      <li key={t} className="text-xs text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm">
        {t}
      </li>
    ))}
  </ul>
);

const CaseCard: React.FC<{
  kicker: string;
  title: string;
  tag?: string;
  children: React.ReactNode;
}> = ({ kicker, title, tag, children }) => (
  <article className="border border-white/5 bg-[#0a0a0a] p-5 sm:p-8 md:p-10 rounded-sm">
    <div className="flex flex-wrap items-center gap-3 mb-3">
      <span className="text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase">{kicker}</span>
      {tag && (
        <span className="text-[10px] font-bold tracking-widest uppercase text-amber-300 border border-amber-300/30 bg-amber-300/5 px-2 py-0.5 rounded-sm">
          {tag}
        </span>
      )}
    </div>
    <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">{title}</h4>
    <div className="space-y-10">{children}</div>
  </article>
);

// ---------- page ----------

const WorkUseCases: React.FC = () => {
  const [open, setOpen] = useState<Img | null>(null);
  const close = useCallback(() => setOpen(null), []);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      {/* Hero */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-6">Work &amp; Use Cases</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] max-w-5xl">
            Data platforms, measurement and AI workflows that change commercial decisions.
          </h1>
          <p className="mt-6 text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-3xl">
            Selected work from analytics leadership roles and from building an AI product end to end. Diagrams and
            workflow canvases are redrawn from real work. Charts marked illustrative use synthetic numbers.
          </p>

          <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-white/5">
            {PROOF.map((p) => (
              <div key={p.label} className="p-4 sm:p-6 border-r border-b border-white/5 min-w-0">
                <dd className="text-3xl md:text-5xl font-bold text-white tracking-tighter">{p.value}</dd>
                <dt className="mt-2 text-xs md:text-sm text-gray-400 leading-snug">{p.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* AI deployment */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="AI deployment"
            title="Recent AI and automation work"
            intro="Measurement, reporting and AI workflows, from tracking plan to automated decisions."
          />

          <div className="space-y-8">
            <CaseCard kicker="WonderWriter · SM.AI" title="An AI product, built and measured end to end">
              <Facts
                rows={[
                  {
                    label: 'Problem',
                    body: 'A new consumer AI product, personalised children’s storybooks, needed measurement and marketing operations from launch.',
                  },
                  {
                    label: 'What I built',
                    body: 'The event taxonomy and glossary, the create funnel and activation retention views, and n8n workflows for ad performance, ad copy and conversion tracking.',
                  },
                  {
                    label: 'How it works',
                    body: 'Each event is defined once: trigger, source file, properties, PII level and the funnels it feeds. Funnels are built on those events, and n8n workflows turn ad and funnel data into daily keep/pause verdicts and weekly copy drafts.',
                  },
                  {
                    label: 'Tooling',
                    body: <Chips items={['PostHog', 'n8n', 'Supabase', 'Google Sheets', 'Meta and Pinterest APIs', 'Claude Haiku']} />,
                  },
                ]}
              />

              <Figure image={IMAGES.glossary} onOpen={setOpen} />

              <div>
                <p className="text-gray-400 text-sm mb-4">
                  Funnel, retention and delivery views. These are illustrative charts with synthetic numbers, not
                  product data.
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                  <Figure image={IMAGES.funnel} onOpen={setOpen} />
                  <Figure image={IMAGES.retention} onOpen={setOpen} />
                  <Figure image={IMAGES.email} onOpen={setOpen} />
                </div>
              </div>

              <div className="space-y-10">
                {WORKFLOWS.map((w) => (
                  <Figure
                    key={w.title}
                    image={w.image}
                    onOpen={setOpen}
                    caption={
                      <>
                        <span className="block text-gray-300 font-medium mb-1">{w.title}</span>
                        <span className="block">{w.summary}</span>
                        <span className="block mt-1 text-gray-600">Workflow canvas, re-rendered from the n8n export.</span>
                      </>
                    }
                  />
                ))}
              </div>
            </CaseCard>

            <CaseCard kicker="Self-service governance · HeliosX" title="Shared definitions and faster data requests">
              <Facts
                rows={[
                  {
                    label: 'Problem',
                    body: 'Growth and Operations teams needed self-service answers from shared definitions while revenue grew 6x and the analytics team grew from 4 to 10.',
                  },
                  {
                    label: 'What I built',
                    body: 'A business glossary and data catalogue in Select Star, LLM-assisted request intake and data extraction, and AI-assisted code review.',
                  },
                  {
                    label: 'How it works',
                    body: 'Glossary term → metric → mart: business terms link to metric definitions, and metrics to the gold-layer marts that compute them. Governance aligned with GDPR and the EU AI Act.',
                  },
                  { label: 'Tooling', body: <Chips items={['Select Star', 'Snowflake', 'LLM integration', 'Workflow automation']} /> },
                ]}
              />
            </CaseCard>

            <CaseCard kicker="AI voice assistant · Scalable Impact client" title="Reception call analytics for a clinic group" tag="In progress · visuals coming soon">
              <Facts
                rows={[
                  {
                    label: 'Problem',
                    body: 'Clinic reception teams handle calls for bookings, rescheduling and follow-ups.',
                  },
                  {
                    label: 'What I am building',
                    body: 'Agentic AI, automation and an analytics layer to automate bookings, follow-ups and upselling.',
                  },
                  {
                    label: 'How it works',
                    body: 'Call conversations come from the voice platform into an insights view of call topics and conversations.',
                  },
                  { label: 'Tooling', body: <Chips items={['ElevenLabs voice agents', 'Agentic workflows', 'Analytics layer']} /> },
                ]}
              />
            </CaseCard>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="Data platform"
            title="Architecture I have run"
            intro="Raw events land near real time (about 15 minutes) and move through bronze, silver and gold layers before they reach BI."
          />
          <div className="space-y-12">
            <Figure
              image={IMAGES.medallion}
              onOpen={setOpen}
              caption="Pattern run at HeliosX: Kinesis and S3, bronze, silver and gold layers in Snowflake, Metabase for BI. Same layering on BigQuery and dbt at Bridge-U. Redrawn generic diagram."
            />
            <Figure
              image={IMAGES.valueChain}
              onOpen={setOpen}
              caption="Data value chain: generation, storage, transformation, analysis, activation, with the team that owns each step. Redrawn generic diagram."
            />
          </div>
        </div>
      </section>

      {/* Commercial case studies */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Commercial impact" title="Case studies" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <li key={c.title} className="border border-white/5 bg-[#0a0a0a] p-6 md:p-8 rounded-sm flex flex-col min-w-0">
                <p className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">{c.value}</span>
                  {c.unit && <span className="text-sm text-teal-400 font-medium">{c.unit}</span>}
                </p>
                <h4 className="mt-5 text-lg font-bold text-white tracking-tight">{c.title}</h4>
                <p className="mt-1 text-xs tracking-widest uppercase text-gray-500">{c.company}</p>
                {c.note && <p className="mt-4 text-sm text-gray-400 font-light leading-relaxed">{c.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stacks */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Tooling" title="Stacks I have built on" />
          <div className="border-t border-white/5">
            {STACKS.map((s) => (
              <div key={s.company} className="grid gap-4 md:grid-cols-[16rem_1fr] py-6 border-b border-white/5">
                <div>
                  <p className="text-white font-bold">{s.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.role}</p>
                </div>
                <Chips items={s.tools} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-black font-bold tracking-widest text-xs uppercase hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-sm"
          >
            Get in touch
          </button>
        </div>
      </section>

      <Lightbox image={open} onClose={close} />
    </>
  );
};

export default WorkUseCases;
