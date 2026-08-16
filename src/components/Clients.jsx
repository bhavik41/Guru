import Reveal from './Reveal'
import { clients, plantGallery } from '../data'

function Badge({ name, logo }) {
  return (
    <span className="client-badge" title={name}>
      <img className="client-logo" src={logo} alt={`${name} logo`} loading="lazy" />
    </span>
  )
}

export default function Clients() {
  const mid = Math.ceil(clients.length / 2)
  const row1 = clients.slice(0, mid)
  const row2 = clients.slice(mid)

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
            {[...row1, ...row1].map((c, i) => <Badge key={i} name={c.name} logo={c.logo} />)}
          </div>
        </div>
        <div className="marquee marquee-rev">
          <div className="marquee-track">
            {[...row2, ...row2].map((c, i) => <Badge key={i} name={c.name} logo={c.logo} />)}
          </div>
        </div>
      </Reveal>

      <div className="section-inner plant-gallery">
        <div className="section-head section-head-center">
          <Reveal><p className="eyebrow"><span className="eyebrow-line" />On The Ground</p></Reveal>
          <Reveal delay={0.05}><h2>Real Sites. <span className="grad-text">Real Deliveries.</span></h2></Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">
              Our tankers, cylinders & crews at work — inside our facility and at
              client plants across the region.
            </p>
          </Reveal>
        </div>
        <div className="plant-grid">
          {plantGallery.map((p, i) => (
            <Reveal key={p.src} delay={0.08 + i * 0.05} y={16} className="plant-item">
              <img src={p.src} alt={p.caption} loading="lazy" />
              <span className="plant-caption">{p.caption}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
