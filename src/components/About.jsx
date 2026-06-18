import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content reveal">
        <p className="about-greeting">Hi, I'm</p>
        <h1 className="about-name">Ajita Chinta</h1>
        <h2 className="about-role">Technical Program Manager / Engineering Lead</h2>
        <p className="about-bio">
          13+ years driving complex, cross-functional programs from discovery through production —
          stakeholder alignment, roadmap execution, risk management, and multi-timezone team
          coordination. I pair program leadership with deep technical fluency in .NET, Azure, and
          cloud-native architectures, enabling credible technical decision-making alongside
          delivery. Based in Seattle, WA.
        </p>
        <div className="about-cta">
          <a href="#programs" className="btn btn-primary">View My Work</a>
          <a
            href={`${import.meta.env.BASE_URL}Ajita_Chinta_Resume.pdf`}
            className="btn btn-outline btn-resume"
            download
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Résumé
          </a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className="about-decoration" aria-hidden="true">
        <div className="blob" />
      </div>
    </section>
  )
}
