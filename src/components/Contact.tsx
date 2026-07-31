import { useState } from 'react'
import styles from './Contact.module.css'

// To enable this form:
// 1. Quyana creates a free account at https://formspree.io using foxywitdafro@gmail.com
// 2. Create a new form; set the notification email to foxywitdafro@gmail.com
// 3. Copy the form ID (looks like "xabc1234") and replace 'YOUR_FORM_ID' below
const FORMSPREE_ID = 'mjgndzre'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.inner}>
          <p className="section-label">Say hello</p>
          <h2 className={styles.heading}>Get in touch</h2>
          <p className={styles.subtext}>
            For readers, event and performance bookings, press, or speaking &mdash;
            drop a note and Quyana will get back to you.
          </p>

          {status === 'sent' ? (
            <div className={styles.successMessage}>
              <p>Thank you for your message &mdash; I&rsquo;ll be in touch soon.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    disabled={status === 'sending'}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="What's on your mind?"
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'error' && (
                <p className={styles.errorMessage}>
                  Something went wrong. Please try again, or email directly at{' '}
                  <a href="mailto:foxywitdafro@gmail.com">foxywitdafro@gmail.com</a>.
                </p>
              )}

              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
