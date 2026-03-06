import { useReveal } from './useReveal'

const checks = [
  'You post consistently but can\'t tell which posts are actually bringing you client inquiries',
  'You\'ve had months where your engagement was great but client acquisition was flat',
  'You decide what to post based on what performed well — not what converted',
  'You want content to be a reliable client acquisition channel, not just a branding exercise',
  'You\'re tired of creating content that disappears with nothing to show for it',
  'You want to stop guessing and start making data-backed decisions about your content',
]

export default function ForWho() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section className="forwho-section">
      <div className="container">
        <div className="forwho-inner">
          <div className="reveal" ref={leftRef}>
            <div className="section-label">This is for you</div>
            <h2 className="forwho-headline">
              Amplora is for you if you recognise yourself here.
            </h2>
            <p className="forwho-sub">
              If any of these hit close to home, you're exactly who Amplora was built for.
              Stop creating content in the dark.
            </p>
          </div>

          <div className="checks-list reveal" ref={rightRef}>
            {checks.map((text, i) => (
              <div className="check-item" key={i}>
                <div className="check-icon-wrap">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                    stroke="#818cf8" strokeWidth="2.5">
                    <polyline points="10 3 5 9 2 6" />
                  </svg>
                </div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
