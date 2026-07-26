import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'
import Magnetic from './Magnetic'
import { contact, stats } from '../data'

const H1_LINES = [
  [{ t: 'Industrial' }, { t: '&' }, { t: 'Medical' }],
  [{ t: 'Gases,' }, { t: 'Engineered', grad: true }],
  [{ t: 'for' }, { t: 'Reliability' }],
]

const wordV = {
  hidden: { opacity: 0, y: '0.55em', rotate: 3, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function useCountUp(target, start) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf
    const duration = 1400
    const t0 = performance.now()
    function tick(now) {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target])
  return value
}

function Stat({ value, label, suffix }) {
  const [inView, setInView] = useState(false)
  const num = useCountUp(value, inView)
  return (
    <motion.div
      className="stat"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.8 }}
    >
      <span className="stat-num">{num}<em>{suffix}</em></span>
      <span className="stat-label">{label}</span>
    </motion.div>
  )
}

const FEATURES = [
  { icon: 'shield', title: 'Certified Quality', desc: 'ISO & BIS compliant products meeting global standards' },
  { icon: 'truck', title: '24×7 Supply Chain', desc: 'Uninterrupted delivery across Gujarat & beyond' },
  { icon: 'bolt', title: 'On-Site Generation', desc: 'PSA plants for continuous oxygen & nitrogen supply' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-blob hero-blob-a" />
      <div className="hero-blob hero-blob-b" />
      <div className="hero-grid-dots" />

      <div className="section-inner hero-center">
        <motion.div className="hero-badge" variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <span className="pulse-dot" />
          Manufacturer · Trader · Supplier — Since 2011
        </motion.div>

        <motion.h1
          className="hero-h1-center"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
        >
          {H1_LINES.map((line, li) => (
            <span className="h1-line" key={li}>
              {line.map((w) => (
                <motion.span
                  key={w.t}
                  className={`h1-word ${w.grad ? 'grad-text' : ''}`}
                  variants={wordV}
                >
                  {w.t}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p className="hero-sub hero-sub-center" variants={fadeUp} initial="hidden" animate="show" custom={0.2}>
          From oxygen to rare noble gases — Guru Industries delivers the full
          spectrum of industrial gases, medical gases &amp; chemicals, synchronized
          with global quality standards.
        </motion.p>

        <motion.div className="hero-cta hero-cta-center" variants={fadeUp} initial="hidden" animate="show" custom={0.3}>
          <Magnetic>
            <a href="#products" className="btn btn-solid btn-lg">Explore Products <Icon name="arrow" size={16} /></a>
          </Magnetic>
          <Magnetic>
            <a href={contact.whatsapp} target="_blank" rel="noopener" className="btn btn-ghost btn-lg">
              <span className="wa-dot" /> WhatsApp Us
            </a>
          </Magnetic>
        </motion.div>

        <motion.div className="hero-trust hero-trust-center" variants={fadeUp} initial="hidden" animate="show" custom={0.45}>
          <span className="hero-trust-label">Trusted by</span>
          <span className="hero-trust-names">Reliance · Cairn · Linde · Vedanta · Halliburton <b>+15 more</b></span>
        </motion.div>

        <motion.div
          className="hero-features"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.55 } } }}
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              className="hero-feature-card"
              variants={fadeUp}
              custom={0}
            >
              <span className="hero-feature-icon"><Icon name={f.icon} size={22} /></span>
              <div>
                <strong>{f.title}</strong>
                <p>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="section-inner hero-stats-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-stats">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
