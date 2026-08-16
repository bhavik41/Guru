import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'
import Modal from './Modal'
import { services } from '../data'

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section id="services" className="services">
      <Reveal y={0} className="field-banner">
        <div className="field-photo">
          <img src="/plant/plant-hydrogen-shed-truck.jpg" alt="Guru Industries cylinder consignment ready for dispatch" />
        </div>
        <div className="field-scrim" />
        <span className="field-rail">01 / FIELD ATLAS</span>
        <div className="section-inner field-banner-inner">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-line" />Delivery Discipline</p>
          <h2 className="field-title">Prepared To Move<br />When You Need It.</h2>
          <p className="field-sub">
            Our networks, internal coordination and infrastructure are
            structured around prompt, dependable delivery and support.
          </p>
          <div className="field-facts">
            <div><span>Base</span><strong>Palanpur, Gujarat</strong></div>
            <div><span>Rental</span><strong>08 Equipment Formats</strong></div>
            <div><span>Field</span><strong>{services.length.toString().padStart(2, '0')} Service Disciplines</strong></div>
          </div>
          <a href="#contact" className="field-cta">Start a Supply Conversation <Icon name="arrow" size={15} /></a>
        </div>
      </Reveal>

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
            <Reveal key={s.num} delay={i * 0.06}>
              <div className="service-card" onClick={() => setActive(s)} role="button" tabIndex={0}>
                <span className="service-num">{s.num}</span>
                <div className="service-icon"><Icon name={s.icon} size={22} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-link">Learn more <Icon name="arrow" size={13} /></span>
              </div>
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
