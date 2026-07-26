import Icon from './Icon'
import { contact, products, services } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark"><span>G</span></span>
            <span className="brand-text">GURU<em>INDUSTRIES</em></span>
          </div>
          <p>
            Leading manufacturer, trader &amp; supplier of industrial gases,
            medical gases &amp; chemicals since 2011 — serving the Indian
            subcontinent with globally benchmarked quality.
          </p>
          <a href={contact.whatsapp} target="_blank" rel="noopener" className="btn btn-wa">
            <span className="wa-dot" /> WhatsApp Chat
          </a>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            {products.slice(0, 6).map((p) => (
              <li key={p.name}><a href="#products">{p.name}</a></li>
            ))}
            <li><a href="#products" className="footer-more">View all 21 products <Icon name="arrow" size={12} /></a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.title}><a href="#services">{s.title}</a></li>
            ))}
            <li><a href="#about">About Us</a></li>
            <li><a href="#clients">Our Clients</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li><Icon name="phone" size={14} /> {contact.phones[0]}</li>
            <li><Icon name="mail" size={14} /> {contact.emails[0]}</li>
            <li><Icon name="pin" size={14} /> {contact.address.join(' ')}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <div className="section-inner footer-bar-inner">
          <p>© {new Date().getFullYear()} Guru Industries. All rights reserved.</p>
          <p>Industrial Gases · Medical Gases · Chemicals</p>
        </div>
      </div>
    </footer>
  )
}
