import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Author&nbsp;·&nbsp;Performer</p>
        <h1 className={styles.name}>QUYANA</h1>
        <p className={styles.tagline}>
          from the stage to the page
        </p>
        <div className={styles.ctaRow}>
          <a href="#books" className={styles.ctaPrimary}>
            Read the book
          </a>
          <a href="#about" className={styles.ctaGhost}>
            Her story
          </a>
        </div>
      </div>
      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
