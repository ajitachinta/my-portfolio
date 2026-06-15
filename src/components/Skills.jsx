import './Skills.css'

const categories = [
  {
    label: 'Languages & Frameworks',
    skills: ['C#', '.NET Core', 'TypeScript', 'JavaScript', 'Vue.js', 'Angular', 'SQL'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['Azure App Services', 'Azure Service Bus', 'Azure DevOps', 'AWS Lambda', 'CI/CD', 'GitHub Actions'],
  },
  {
    label: 'Databases',
    skills: ['SQL Server', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Program Management',
    skills: ['SAFe / Agile', 'Scrum', 'JIRA', 'Azure DevOps', 'Roadmapping', 'Risk Management'],
  },
  {
    label: 'Leadership & Strategy',
    skills: ['Stakeholder Alignment', 'Cross-functional Delivery', 'Release Train Engineering', 'Team Mentoring'],
  },
  {
    label: 'AI Tooling',
    skills: ['GitHub Copilot', 'Claude Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title reveal">Skills</h2>
      <div className="skills-grid">
        {categories.map((cat, i) => (
          <div
            className="skill-category reveal"
            key={cat.label}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <h3 className="skill-category-label">{cat.label}</h3>
            <ul className="skill-list">
              {cat.skills.map((s) => (
                <li key={s} className="skill-badge">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
