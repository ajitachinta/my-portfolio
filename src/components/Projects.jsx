import './Projects.css'

const programs = [
  {
    title: 'Pet Insurance Platform Migration',
    company: 'Moneysupermarket Group · 2023–2025',
    description:
      'Led the migration of the Pet Insurance platform to a new TypeScript/Vue framework. Managed scope, timelines, and stakeholder communication — reducing time-to-market by eliminating manual configuration overhead. Coordinated across product, design, QA, and engineering on a platform serving millions of users.',
    tech: ['TypeScript', 'Vue.js', 'AWS Lambda', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'Power Trading Application Redesign',
    company: 'EDF Trading · 2022–2023',
    description:
      'Delivered a full redesign of a Power trading application on Azure, coordinating technical delivery across architecture, backend, and DevOps workstreams. Acted as technical point of contact — translating business requirements into architectural decisions and aligning stakeholders with engineering execution.',
    tech: ['Azure AKS', 'Azure Service Bus', 'Azure DevOps', '.NET Core'],
  },
  {
    title: '$1M Pre-Hire Onboarding Platform',
    company: 'Deloitte · 2019–2021',
    description:
      'Served as Release Train Engineer and delivery lead for a $1M enterprise onboarding platform. Managed a 15-engineer team, facilitated PI planning, ran client whiteboarding sessions, made architectural decisions, and drove end-to-end delivery from discovery to production.',
    tech: ['SAFe / Agile', 'Microservices', 'Cloud Deployments', 'JIRA', 'ADO'],
  },
  {
    title: 'Recognition Portal — Cross-Timezone Delivery',
    company: 'Deloitte · 2019–2021',
    description:
      'Led a 5-engineer cross-functional team — including a remote team in Argentina — to deliver a Recognition Portal on schedule. Owned full program lifecycle: scope definition, risk identification, sprint planning, dependency tracking, release management, and post-launch support.',
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
