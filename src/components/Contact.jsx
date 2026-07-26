import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'
import { contact, inquiryPurposes } from '../data'

const INFO = [
  { icon: 'phone', title: 'Call Us', lines: contact.phones, href: 'tel:+912742283393' },
  { icon: 'mail', title: 'Email Us', lines: contact.emails, href: `mailto:${contact.emails[0]}` },
  { icon: 'pin', title: 'Visit Us', lines: contact.address },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <div className="contact-panel">
          <div className="contact-panel-glow" />
          <div className="contact-grid">
            <div className="contact-info">
              <Reveal><p className="eyebrow eyebrow-light"><span className="eyebrow-line" />Get In Touch</p></Reveal>
              <Reveal delay={0.05}><h2>Let's Build Your<br />Supply Line</h2></Reveal>
              <Reveal delay={0.1}>
                <p className="contact-lead">
                  Quotations, bulk supply, equipment rental or on-site plants —
                  our team responds fast.
                </p>
              </Reveal>

              <div className="info-list">
                {INFO.map((item, i) => {
                  const Tag = item.href ? 'a' : 'div'
                  return (
                    <Reveal key={item.title} delay={0.12 + i * 0.06}>
                      <Tag className="info-item" href={item.href}>
                        <span className="info-icon"><Icon name={item.icon} size={19} /></span>
                        <span>
                          <strong>{item.title}</strong>
                          {item.lines.map((l) => <span className="info-line" key={l}>{l}</span>)}
                        </span>
                      </Tag>
                    </Reveal>
                  )
                })}
              </div>

              <Reveal delay={0.3}>
                <a href={contact.whatsapp} target="_blank" rel="noopener" className="btn btn-wa btn-lg">
                  <span className="wa-dot" /> Chat on WhatsApp
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.15} y={30}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Request a Quote</h3>
                <p className="form-sub">Tell us what you need — we'll get back within a working day.</p>
                <div className="form-row">
                  <label>Name<input type="text" placeholder="Your name" required /></label>
                  <label>Phone<input type="tel" placeholder="+91" required /></label>
                </div>
                <div className="form-row">
                  <label>Email<input type="email" placeholder="you@company.com" required /></label>
                  <label>City<input type="text" placeholder="Your city" /></label>
                </div>
                <label>
                  Purpose of Inquiry
                  <select defaultValue="">
                    <option value="" disabled>Select a product or service…</option>
                    {inquiryPurposes.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </label>
                <label>Message<textarea rows="3" placeholder="Volumes, location, timelines…"></textarea></label>
                <button type="submit" className="btn btn-solid btn-lg btn-block">
                  {sent ? 'Received — we’ll be in touch ✓' : 'Send Inquiry'}
                </button>
                <p className="form-note">Demo form — no data is transmitted.</p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
