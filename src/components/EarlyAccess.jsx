import { useReveal } from './useReveal'

const perks = [
  {
    emoji: '🚀',
    title: 'First access before public launch',
    body: 'Use Amplora before anyone else. Shape how it works based on your real needs.',
  },
  {
    emoji: '🎯',
    title: 'Personal onboarding from the founder',
    body: 'Not a help doc. A real conversation with the person who built this — so it actually works for your business.',
  },
  {
    emoji: '💬',
    title: 'Direct feedback line',
    body: 'Your problems become features. Early members directly influence the product roadmap.',
  },
]

export default function EarlyAccess() {
  const ref = useReveal()

  return (
    <section className="early-section">
      <div className="container">
        <div className="early-inner reveal" ref={ref}>
          <div className="section-label">Early access</div>
          <h2 className="early-headline">
            Join now. Get more than<br />everyone else will.
          </h2>
          <p className="early-sub">
            The first coaches on Amplora get direct access to the founder and
            perks that won't be available once we open publicly.
          </p>

          <div className="perks-grid">
            {perks.map((p, i) => (
              <div className="perk-card" key={i}>
                <span className="perk-emoji">{p.emoji}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>

          <div className="testimonial-card">
            <p className="testimonial-quote">
              I had no idea which of my posts were actually bringing clients.
              I was optimising for the wrong thing entirely.
            </p>
            <cite className="testimonial-author">
              — <strong>Early Waitlist Member</strong>, Online Coach
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}
