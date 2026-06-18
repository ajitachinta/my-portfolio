import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'Why the move from engineering to TPM?',
    a: `Honestly, I've been doing the work for years. As a Release Train Engineer and delivery lead, the part I gravitated toward was never just writing code — it was aligning stakeholders, untangling dependencies, de-risking timelines, and getting cross-functional teams moving in one direction. Across 13+ years I've led teams of up to 15 engineers and delivered $1M programs end to end. Stepping fully into TPM isn't a pivot away from engineering — it's leaning into what I'm best at, with the technical depth to back it up.`,
  },
  {
    q: 'Are you still hands-on technical?',
    a: `Yes. My fluency in .NET, Azure, TypeScript, and cloud-native architecture is current — I was shipping and reviewing code through 2025. That depth is the core of how I run programs: I can read the architecture, ask the right questions, assess risk credibly, and earn engineers' trust because I've sat where they sit.`,
  },
  {
    q: 'What kind of programs are you best suited to lead?',
    a: `Complex, cross-functional delivery on cloud-based SaaS platforms — the messier the dependencies, the more I'm in my element. I've led platform migrations (cutting time-to-market ~40%), full application redesigns on Azure and AWS, and enterprise programs north of $1M from discovery to production. I'm especially strong coordinating distributed, multi-timezone teams.`,
  },
  {
    q: 'What are you looking for next?',
    a: `A Technical Program Manager or Engineering Lead role in Seattle — hybrid or onsite — where I can own end-to-end program delivery and shape roadmap and strategy. I'm currently pursuing PMI-ACP / PMP to formalize the program-management side of my experience.`,
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
