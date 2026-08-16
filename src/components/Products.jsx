import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import Icon from './Icon'
import Modal from './Modal'
import { products, productCategories } from '../data'

export default function Products() {
  const [cat, setCat] = useState('All')
  const [active, setActive] = useState(null)
  const shown = cat === 'All' ? products : products.filter((p) => p.cat === cat)

  return (
    <section id="products" className="products">
      <div className="products-glow" />
      <div className="section-inner">
        <div className="section-head">
          <div>
            <Reveal><p className="eyebrow eyebrow-light"><span className="eyebrow-line" />What We Supply</p></Reveal>
            <Reveal delay={0.05}><h2>The Product <span className="grad-text-warm">Universe</span></h2></Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="section-sub">
              21 product lines spanning pure, mixed &amp; specialty gases, equipment
              and bulk chemicals — for industrial, medical and laboratory use.
            </p>
          </Reveal>
        </div>

        <div className="products-layout">
          <Reveal delay={0.1} className="filter-rail">
            {productCategories.map((c, i) => (
              <button
                key={c}
                className={`filter-tab ${cat === c ? 'is-active' : ''}`}
                onClick={() => setCat(c)}
              >
                <span className="tab-idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="tab-label">{c}</span>
                <span className="filter-count">
                  {c === 'All' ? products.length : products.filter((p) => p.cat === c).length}
                </span>
                {cat === c && <Icon name="arrow" size={14} className="tab-arrow" />}
              </button>
            ))}
          </Reveal>

        <motion.div className="product-grid" layout>
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min((i % 8) * 0.05, 0.35),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="product-card" onClick={() => setActive(p)} role="button" tabIndex={0}>
                  <div className="product-top">
                    <span className="product-symbol">{p.symbol}</span>
                    <span className="product-cat">{p.cat}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span className="product-link">
                    {p.details || p.list || p.chemLists ? 'View Details' : 'Enquire'} <Icon name="arrow" size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div className="modal-detail">
            <div className="modal-detail-head">
              <span className="product-symbol">{active.symbol}</span>
              <div>
                <span className="product-cat">{active.cat}</span>
                <h3>{active.name}</h3>
              </div>
            </div>

            <p className="modal-detail-desc">{active.details || active.desc}</p>

            {active.specs && (
              <table className="spec-table">
                <tbody>
                  {active.specs.map((s) => (
                    <tr key={s.label}>
                      <th>{s.label}</th>
                      <td>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {active.specTable && (
              <>
                <h4 className="modal-sub-title">{active.specTable.caption}</h4>
                <div className="table-scroll">
                  <table className="spec-table spec-table-grid">
                    <thead>
                      <tr>
                        {active.specTable.columns.map((c) => <th key={c}>{c}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {active.specTable.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => <td key={j}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {active.list && (
              <ul className="modal-list">
                {active.list.map((item) => (
                  <li key={item}><Icon name="check" size={12} stroke={2.6} />{item}</li>
                ))}
              </ul>
            )}

            {active.chemLists && (
              <div className="chem-columns">
                <div>
                  <h4 className="modal-sub-title">Industrial Grade</h4>
                  <div className="chip-list">
                    {active.chemLists.industrial.map((c) => <span key={c} className="chip">{c}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="modal-sub-title">Laboratory Grade</h4>
                  <div className="chip-list">
                    {active.chemLists.lab.map((c) => <span key={c} className="chip">{c}</span>)}
                  </div>
                </div>
              </div>
            )}

            <a className="btn btn-solid btn-lg" href="#contact" onClick={() => setActive(null)}>
              Enquire About {active.name} <Icon name="arrow" size={15} />
            </a>
          </div>
        )}
      </Modal>
    </section>
  )
}
