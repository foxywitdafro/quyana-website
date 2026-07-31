import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.photoCol}>
            <div className={styles.frame}>
              <img src="/headshot.jpg" alt="Portrait of Quyana" className={styles.photo} />
            </div>
            <div className={styles.frame}>
              <img src="/performance.jpg" alt="Quyana performing" className={styles.photo} />
            </div>
          </div>

          <div className={styles.textCol}>
            <p className="section-label">From the stage to the page</p>
            <h2 className={styles.heading}>About Quyana</h2>

            <div className={styles.bio}>
              <p>
                Quyana is an author and performer based in Minneapolis. Her first book,{' '}
                <em>Not Just a Trick: Finding Confidence Beyond the Stage</em>, distills
                everything she has learned about beating imposter syndrome and building
                real confidence into a guide for dancers finding their footing.
              </p>
              <p>
                She came to writing the way she comes to everything, by diving in headfirst.
                Since her first showcase just a month into training in 2021, Quyana has grown
                into a dynamic pole artist and model, sharing stages across the country with
                the likes of <em>Usher</em>, <em>Jeremih</em>, and <em>Steel Panther</em>, and
                appearing on screen in <em>P-Valley</em>. That life is exactly what she writes
                about: the nerves, the spotlight, the reinvention. As an instructor, she keeps
                a supportive, inclusive space where students build confidence, explore
                creativity, and move authentically, the same spirit that runs through
                everything she writes.
              </p>
              <p>
                Now she&rsquo;s turning the page to her first works of fiction:{' '}
                <em>Love, Death, &amp; High Heels</em>, and <em>Beneath His Smile</em>. Keep
                your eyes on this space or get in touch to be the first to know when they
                arrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
