import { motion } from 'framer-motion'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import Icon from './Icon'
import { values, missionVision, principles } from '../data'

const chipV = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 20 } },
}

const CHECKS = [
  'Manufacturer, Trader & Supplier since 2011',
  'Synchronized with global industry regulations',
  'Uninterrupted supply for business-critical needs',
  'Significant client base across the Indian subcontinent',
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner about-grid">
        <Reveal className="about-visual" y={0}>
          <TiltCard className="molecule-card">
            <div className="orb orb-o2">O<sub>2</sub></div>
            <div className="orb orb-n2">N<sub>2</sub></div>
            <div className="orb orb-co2">CO<sub>2</sub></div>
            <div className="orb orb-ar">Ar</div>
            <div className="orb orb-h2">H<sub>2</sub></div>
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
          </TiltCard>
          <motion.div
            className="exp-card"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: 'spring', stiffness: 230, damping: 17, delay: 0.25 }}
          >
            <span className="exp-num">14<i>+</i></span>
            <span className="exp-label">Years of<br />Excellence</span>
          </motion.div>
        </Reveal>

        <div className="about-text">
          <Reveal><p className="eyebrow"><span className="eyebrow-line" />Who We Are</p></Reveal>
          <Reveal delay={0.05}><h2>Why Choose <span className="grad-text">Guru Industries?</span></h2></Reveal>
          <Reveal delay={0.1}>
            <p className="about-lead">
              We are counted amongst the leading manufacturers, traders &amp; suppliers of
              industrial gases, medical gases &amp; chemicals — serving an ever-growing
              client base with uncompromising quality.
            </p>
          </Reveal>

          <ul className="check-list">
            {CHECKS.map((c, i) => (
              <Reveal key={c} delay={0.12 + i * 0.06} as="li">
                <span className="check-icon"><Icon name="check" size={13} stroke={2.6} /></span>
                {c}
              </Reveal>
            ))}
          </ul>

          <div className="value-cards">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.15 + i * 0.08}>
                <TiltCard className="value-card">
                  <div className="value-icon"><Icon name={v.icon} size={24} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <div className="mv-cards">
            {missionVision.map((v, i) => (
              <Reveal key={v.title} delay={0.2 + i * 0.08}>
                <TiltCard className="mv-card">
                  <div className="value-icon"><Icon name={v.icon} size={24} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <motion.div
            className="principle-chips"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
          >
            {principles.map((p) => (
              <motion.span
                className="principle-chip"
                key={p}
                variants={chipV}
                whileHover={{ y: -3, scale: 1.04 }}
              >
                <Icon name="check" size={12} stroke={2.6} />{p}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
