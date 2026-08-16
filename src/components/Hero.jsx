import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'
import Magnetic from './Magnetic'
import { contact, stats } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] } }),
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

function HeroStat({ value, label, suffix }) {
  const [inView, setInView] = useState(false)
  const num = useCountUp(value, inView)
  return (
    <motion.div
      className="hstat"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.8 }}
    >
      <span className="hstat-num">{num}<em>{suffix}</em></span>
      <span className="hstat-label">{label}</span>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-photo">
        <img src="/plant/plant-refinery-delivery.jpg" alt="Guru Industries tanker delivering at a client refinery" />
      </div>
      <div className="hero-scrim" />

      <div className="section-inner hero-inner">
        <motion.div
          className="hero-meta"
          variants={fadeUp} initial="hidden" animate="show" custom={0.05}
        >
          <span>GJ / India</span>
          <i />
          <span>Est. 2011</span>
          <i />
          <span>Industrial &amp; Medical Gases</span>
        </motion.div>

        <motion.h1
          className="hero-h1"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
        >
          <motion.span className="h1-row" variants={fadeUp} custom={0}>GAS SUPPLY FOR</motion.span>
          <motion.span className="h1-row h1-accent" variants={fadeUp} custom={0.08}>OPERATIONS THAT</motion.span>
          <motion.span className="h1-row" variants={fadeUp} custom={0.16}>NEVER STOP.</motion.span>
        </motion.h1>

        <motion.p className="hero-sub" variants={fadeUp} initial="hidden" animate="show" custom={0.4}>
          Industrial &amp; medical gases, chemical supply and field services —
          configured for exacting, uninterrupted operations across India.
        </motion.p>

        <motion.div className="hero-cta" variants={fadeUp} initial="hidden" animate="show" custom={0.5}>
          <Magnetic>
            <a href="#contact" className="btn btn-solid btn-lg">Get a Quote <Icon name="arrow" size={16} /></a>
          </Magnetic>
          <Magnetic>
            <a href="#products" className="btn btn-outline-light btn-lg">Explore Products</a>
          </Magnetic>
        </motion.div>

        <motion.div className="hero-trust" variants={fadeUp} initial="hidden" animate="show" custom={0.6}>
          <span className="hero-trust-label">Trusted by</span>
          <span className="hero-trust-names">Reliance · Cairn · Linde · Vedanta · Halliburton <b>+15 more</b></span>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats-strip"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {stats.slice(1, 4).map((s) => (
          <HeroStat key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
        ))}
      </motion.div>
    </section>
  )
}
