import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content reveal">
        <p className="about-greeting">Hi, I'm</p>
        <h1 className="about-name">Ajita Chinta</h1>
        <h2 className="about-role">Technical Program Manager &amp; Senior Software Engineer</h2>
        <p className="about-bio">
          13+ years driving full-stack engineering and complex cross-functional programs to
          delivery. I combine deep technical fluency in .NET, Azure, and cloud-native
          architectures with hands-on program leadership — stakeholder alignment, roadmap
          execution, risk management, and multi-timezone team coordination. Based in Seattle, WA.
        </p>
        <div className="about-cta">
          <a href="#programs" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className="about-decoration" aria-hidden="true">
        <div className="blob" />
      </div>
    </section>
  )
}
