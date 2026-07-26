import { useState } from 'react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import Icon from './Icon'
import Modal from './Modal'
import { services } from '../data'

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section id="services" className="services">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <Reveal><p className="eyebrow"><span className="eyebrow-line" />Beyond Supply</p></Reveal>
            <Reveal delay={0.05}><h2>Services that Keep<br />Plants <span className="grad-text">Running</span></h2></Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="section-sub">
              More than a supplier — an operations partner for purging, testing
              and on-site gas infrastructure.
            </p>
          </Reveal>
        </div>

        <div className="service-grid">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <TiltCard className="service-card" onClick={() => setActive(s)}>
                <span className="service-num">{s.num}</span>
                <div className="service-icon"><Icon name={s.icon} size={26} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-link">Learn more <Icon name="arrow" size={14} /></span>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div className="modal-detail">
            <div className="modal-detail-head">
              <div className="service-icon"><Icon name={active.icon} size={26} /></div>
              <div>
                <h3>{active.title}</h3>
              </div>
            </div>

            <p className="modal-detail-desc">{active.details || active.desc}</p>

            {active.methods && (
              <div className="method-grid">
                {active.methods.map((m) => (
                  <div className="method-card" key={m.title}>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {active.list && (
              <ul className="modal-list">
                {active.list.map((item) => (
                  <li key={item}><Icon name="check" size={12} stroke={2.6} />{item}</li>
                ))}
              </ul>
            )}

            <a className="btn btn-solid btn-lg" href="#contact" onClick={() => setActive(null)}>
              Request {active.title} <Icon name="arrow" size={15} />
            </a>
          </div>
        )}
      </Modal>
    </section>
  )
}
