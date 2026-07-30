import styles from './Books.module.css'

interface Book {
  title: string
  subtitle?: string
  status: string
  synopsis: string
  coverUrl: string
  coverAlt: string
  buyUrl?: string
}

const publishedBooks: Book[] = [
  {
    title: 'Not Just a Trick',
    subtitle: 'Finding Confidence Beyond the Stage',
    status: 'Available now',
    synopsis:
      'Quyana’s guide for dancers who battle imposter syndrome — a candid, encouraging playbook for building real confidence, on the pole and off it. Drawn from her own journey from first showcase to championship stages.',
    coverUrl: '/covers/not-just-a-trick-cover.jpg',
    coverAlt: 'Cover of Not Just a Trick: Finding Confidence Beyond the Stage by Quyana',
    buyUrl: 'https://www.amazon.com/dp/B0FGVZ7RYH',
  },
]

export default function Books() {
  return (
    <section className={styles.section} id="books">
      <div className="container">
        <p className="section-label">The books</p>
        <h2 className={styles.heading}>by Quyana</h2>

        <div className={styles.grid}>
          {publishedBooks.map((book) => (
            <article key={book.title} className={styles.card}>
              <div className={`${styles.cover} ${styles.coverLight}`}>
                <img src={book.coverUrl} alt={book.coverAlt} className={styles.coverImg} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.badge}>{book.status}</span>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                {book.subtitle && <p className={styles.bookSubtitle}>{book.subtitle}</p>}
                <p className={styles.synopsis}>{book.synopsis}</p>
                {book.buyUrl && (
                  <div className={styles.links}>
                    <a
                      href={book.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkPrimary}
                    >
                      Buy on Amazon
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}

          {/* Coming soon — placeholder until the cover arrives */}
          <article className={`${styles.card} ${styles.comingCard}`}>
            <div className={styles.cover}>
              <img
                src="/covers/love-death-high-heels.svg"
                alt="Love, Death, & High Heels by Quyana — cover coming soon"
                className={styles.coverImg}
              />
            </div>
            <div className={styles.cardBody}>
              <span className={`${styles.badge} ${styles.badgeSoon}`}>Coming soon</span>
              <h3 className={styles.bookTitle}>Love, Death, &amp; High Heels</h3>
              <p className={styles.synopsis}>
                Quyana&rsquo;s next book. Cover reveal and release details coming soon &mdash;{' '}
                <a href="#contact">get in touch</a> to be the first to know.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
