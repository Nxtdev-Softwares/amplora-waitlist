import { useReveal } from './useReveal'

const steps = [
  {
    n: '1',
    title: 'Connect your content',
    body: 'Amplora analyses your recent Instagram posts and maps what actually happened after each one — inquiries, DMs from potential clients, real signals.',
  },
  {
    n: '2',
    title: 'See what\'s actually working',
    body: 'Get a clear breakdown of which posts drove real client interest versus which ones just performed on vanity metrics.',
  },
  {
    n: '3',
    title: 'Know exactly what to post next',
    body: 'Amplora tells you what to create next based on what has actually brought you clients — not what the algorithm rewards.',
  },
]

export default function HowItWorks() {
  const headerRef = useReveal()
  const stepsRef  = useReveal()

  return (
    <section className="how-section">
      <div className="container">
        <div className="how-header reveal" ref={headerRef}>
          <div className="section-label">How Amplora works</div>
          <h2 className="how-headline">
            From guesswork to a clear content plan<br />that gets you clients.
          </h2>
        </div>

        <div className="how-steps reveal" ref={stepsRef}>
          {steps.map((s) => (
            <div className="step-card" key={s.n}>
              <div className="step-number-wrap">
                <span className="step-number">{s.n}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
