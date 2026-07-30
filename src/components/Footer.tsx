import styles from './Footer.module.css'

const socials = [
  { label: 'Instagram', url: 'https://www.instagram.com/_quyana_' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@foxywitdafro' },
  { label: 'YouTube', url: 'https://www.youtube.com/@Foxywitdafro' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>QUYANA</span>

        <nav className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <span className={styles.copy}>© {year}</span>
      </div>
    </footer>
  )
}
