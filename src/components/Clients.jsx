import Reveal from './Reveal'
import { clients } from '../data'

function monogram(name) {
  const words = name.split(/\s+/)
  return words.length > 1 ? (words[0][0] + words[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase()
}

function Badge({ name }) {
  return (
    <span className="client-badge">
      <span className="client-mono">{monogram(name)}</span>
      {name}
    </span>
  )
}

export default function Clients() {
  const row1 = clients.slice(0, 10)
  const row2 = clients.slice(10)

  return (
    <section id="clients" className="clients">
      <div className="section-inner">
        <div className="section-head section-head-center">
          <Reveal><p className="eyebrow"><span className="eyebrow-line" />Trusted By</p></Reveal>
          <Reveal delay={0.05}><h2>Powering India's <span className="grad-text">Biggest Names</span></h2></Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">
              From energy majors to healthcare institutions — two decades of
              enterprises rely on our supply chain.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} y={0}>
        <div className="marquee">
          <div className="marquee-track">
            {[...row1, ...row1].map((c, i) => <Badge key={i} name={c} />)}
          </div>
        </div>
        <div className="marquee marquee-rev">
          <div className="marquee-track">
            {[...row2, ...row2].map((c, i) => <Badge key={i} name={c} />)}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
