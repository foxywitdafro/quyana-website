import styles from './Books.module.css'

const featured = {
  title: 'Not Just a Trick',
  subtitle: 'Finding Confidence Beyond the Stage',
  synopsis:
    'Quyana’s guide for dancers who battle imposter syndrome — a candid, encouraging playbook for building real confidence, on the pole and off it. Drawn from her own journey from first showcase to championship stages.',
  buyUrl: 'https://www.amazon.com/dp/B0FGVZ7RYH',
  coverUrl: '/covers/not-just-a-trick-cover.jpg',
  coverAlt: 'Cover of Not Just a Trick: Finding Confidence Beyond the Stage by Quyana',
}

interface ComingBook {
  title: string
  coverUrl: string
  coverAlt: string
}

const comingSoon: ComingBook[] = [
  {
    title: 'Love, Death, & High Heels',
    coverUrl: '/covers/love-death-high-heels.svg',
    coverAlt: 'Love, Death, & High Heels by Quyana — cover coming soon',
  },
  {
    title: 'Beneath His Smile',
    coverUrl: '/covers/beneath-his-smile.svg',
    coverAlt: 'Beneath His Smile by Quyana — cover coming soon',
  },
]

function BuyLink() {
  return (
    <div className={styles.links}>
      <a
        href={featured.buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkPrimary}
      >
        Buy on Amazon
      </a>
    </div>
  )
}

export default function Books() {
  return (
    <section className={styles.section} id="books">
      <div className="container">
        <p className="section-label">The books</p>
        <h2 className={styles.heading}>by Quyana</h2>

        {/* Featured published book — wide layout (hidden on small screens) */}
        <article className={`${styles.featured} ${styles.wideOnly}`}>
          <div className={styles.featuredMedia}>
            <img src={featured.coverUrl} alt={featured.coverAlt} className={styles.featuredImg} />
          </div>
          <div className={styles.featuredBody}>
            <span className={styles.badge}>Available now</span>
            <h3 className={styles.bookTitle}>{featured.title}</h3>
            <p className={styles.bookSubtitle}>{featured.subtitle}</p>
            <p className={styles.synopsis}>{featured.synopsis}</p>
            <BuyLink />
          </div>
        </article>

        {/* Featured published book — compact card (small screens only) */}
        <article className={`${styles.card} ${styles.smallOnly}`}>
          <div className={`${styles.cover} ${styles.coverLight}`}>
            <img src={featured.coverUrl} alt={featured.coverAlt} className={styles.coverImg} />
          </div>
          <div className={styles.cardBody}>
            <span className={styles.badge}>Available now</span>
            <h3 className={styles.bookTitle}>{featured.title}</h3>
            <p className={styles.bookSubtitle}>{featured.subtitle}</p>
            <p className={styles.synopsis}>{featured.synopsis}</p>
            <BuyLink />
          </div>
        </article>

        {/* Coming soon */}
        <div className={styles.grid}>
          {comingSoon.map((book) => (
            <article key={book.title} className={`${styles.card} ${styles.comingCard}`}>
              <div className={styles.cover}>
                <img src={book.coverUrl} alt={book.coverAlt} className={styles.coverImg} />
              </div>
              <div className={styles.cardBody}>
                <span className={`${styles.badge} ${styles.badgeSoon}`}>Coming soon</span>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.synopsis}>
                  Cover reveal and release details coming soon.{' '}
                  <a href="#contact">Get in touch</a> to be the first to know.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
