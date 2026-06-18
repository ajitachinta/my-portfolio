import './Projects.css'

const programs = [
  {
    title: 'Pet Insurance Platform Migration',
    company: 'Moneysupermarket Group · 2023–2025',
    description:
      'Led the migration of the Pet Insurance platform to a TypeScript/Vue framework — managing scope, timeline, and stakeholder communication — cutting time-to-market for product configuration changes by ~40% across a 6-month cycle. Coordinated 4 cross-functional teams (product, design, QA, engineering) across 3 time zones on a platform serving millions of users.',
    tech: ['TypeScript', 'Vue.js', 'AWS Lambda', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'Power Trading Application Redesign',
    company: 'EDF Trading · 2022–2023',
    description:
      'Directed the full redesign program for a Power trading application on Azure (AKS, Service Bus, Azure DevOps), serving as technical point of contact and program coordinator across architecture, backend, and DevOps workstreams for a 4-engineer team. Cut design-to-dev handoff cycles from ~3 rounds to 1 via a weekly technical decision log reviewed with stakeholders.',
    tech: ['Azure AKS', 'Azure Service Bus', 'Azure DevOps', '.NET Core'],
  },
  {
    title: 'Pre-Hire Onboarding Platform',
    company: 'Deloitte · 2019–2021',
    description:
      'Served as Release Train Engineer and delivery lead for a $1M pre-hire onboarding platform — managing a 15-engineer team, facilitating PI planning across 4 PIs, and coordinating with 6+ executive stakeholders from discovery through production launch. Defined architectural boundaries (microservices, DB design, identity, cloud deployments) and accelerated requirements signoff.',
    tech: ['SAFe / Agile', 'Microservices', 'Cloud Deployments', 'JIRA'],
  },
  {
    title: 'Recognition Portal — Cross-Timezone Delivery',
    company: 'Deloitte · 2019–2021',
    description:
      'Led a 5-engineer cross-functional team — including a remote team in Argentina — to deliver a Recognition Portal on schedule, establishing async communication rhythms that reduced status-meeting overhead by ~30%. Owned the full program lifecycle: scope, risk, sprint planning, release management, and post-launch support.',
    tech: ['Cross-timezone Coordination', 'Scrum', 'Azure DevOps', 'REST APIs'],
  },
]

export default function Projects() {
  return (
    <section id="programs">
      <h2 className="section-title reveal">Featured Programs</h2>
      <div className="projects-grid">
        {programs.map((p, i) => (
          <article
            className="project-card reveal"
            key={p.title}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="project-card-top">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-company">{p.company}</p>
              <p className="project-desc">{p.description}</p>
            </div>
            <div className="project-card-bottom">
              <ul className="project-tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
