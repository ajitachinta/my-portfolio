import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'Why the move from engineering to TPM?',
    a: `Honestly, I've been doing the work for years — just without the title. As a Release Train Engineer and delivery lead, the parts of the job I gravitated toward were never just writing code: aligning stakeholders, untangling dependencies, de-risking timelines, and getting cross-functional teams pulling in the same direction. After 13+ years building software and leading teams of up to 15 engineers, moving into TPM isn't a pivot away from engineering — it's leaning fully into the part I'm best at, with the technical depth to back it up.`,
  },
  {
    q: 'Are you still hands-on technical?',
    a: `Yes. My fluency in .NET, Azure, TypeScript, and cloud-native architecture is current — I was shipping and reviewing code through 2025. I see that depth as the core of good technical program management: I can read the architecture, ask the right questions, and earn engineers' trust because I've sat where they sit.`,
  },
  {
    q: 'What kind of programs are you best suited to lead?',
    a: `Complex, cross-functional delivery on cloud-based SaaS platforms — the messier the dependencies, the more I'm in my element. I've led platform migrations, full application redesigns on Azure and AWS, and enterprise programs north of $1M from discovery to production. I work especially well across distributed, multi-timezone teams.`,
  },
  {
    q: 'What are you looking for next?',
    a: `A dedicated TPM role in Seattle — hybrid or onsite — where I can own end-to-end program delivery and influence roadmap and strategy. I'm currently pursuing PMI-ACP / PMP to formalize the program-management side of my experience.`,
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq">
      <h2 className="section-title reveal">A Few Questions, Answered</h2>
      <div className="faq-list">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              className={`faq-item reveal ${isOpen ? 'open' : ''}`}
              key={item.q}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
