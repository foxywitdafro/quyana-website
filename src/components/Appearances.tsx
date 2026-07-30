import styles from './Appearances.module.css'

interface Appearance {
  name: string
  detail: string
}

const appearances: Appearance[] = [
  { name: 'Usher', detail: 'Live show' },
  { name: 'Concrete Boys x Lil Yachty', detail: '“Millionaire” — music video' },
  { name: 'Jeremih', detail: 'Concert' },
  { name: 'P-Valley', detail: 'Television series' },
  { name: 'Steel Panther', detail: 'Concert' },
  { name: 'Kevin Langue Show', detail: 'Episode' },
  { name: 'Progeny', detail: 'Film' },
  { name: 'Pole Masters Playhouse', detail: 'Event' },
  { name: 'Symmetry Music Festival', detail: 'Music festival' },
]

export default function Appearances() {
  return (
    <section className={styles.section} id="appearances">
      <div className="container">
        <p className="section-label">The life behind the books</p>
        <h2 className={styles.heading}>Notable Appearances</h2>

        <ul className={styles.grid}>
          {appearances.map((a) => (
            <li key={a.name} className={styles.item}>
              <span className={styles.name}>{a.name}</span>
              <span className={styles.detail}>{a.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
