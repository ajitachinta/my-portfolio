import { useEffect } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            // Use a data attribute (not a class) so React re-renders that
            // rewrite className — e.g. the FAQ accordion toggling 'open' —
            // don't wipe out the revealed state.
            el.setAttribute('data-revealed', 'true')
            io.unobserve(el)
            // Clear the stagger delay after the reveal finishes so it
            // doesn't lag later hover/state transitions on the same element.
            const delay = parseFloat(el.style.transitionDelay) || 0
            setTimeout(() => {
              el.style.transitionDelay = ''
            }, delay + 700)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <About />
        <Projects />
        <Skills />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
