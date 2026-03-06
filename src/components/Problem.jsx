import { useReveal } from './useReveal'

const cards = [
  {
    num: '01',
    title: 'Your best posts bring likes, not clients',
    body: 'The posts that go "viral" in your niche attract other coaches — not the clients who actually pay you. You\'re optimising for the wrong metric.',
  },
  {
    num: '02',
    title: 'You\'re guessing what to post next',
    body: 'Without knowing what\'s worked before, every post is a coin flip. You\'re spending hours creating content with no real direction.',
  },
  {
    num: '03',
    title: 'Engagement doesn\'t pay your bills',
    body: 'Comments from fans feel great. But if those people never become clients, your content strategy has a silent leak you can\'t see.',
  },
]

export default function Problem() {
  const headerRef = useReveal()
  const gridRef   = useReveal()

  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-header reveal" ref={headerRef}>
          <div className="section-label">The real problem</div>
          <h2 className="problem-headline">
            You're working hard on content.<br />
            Your audience isn't turning into clients.
          </h2>
          <p className="problem-sub">
            Most coaches post consistently for months with no idea which posts
            are actually bringing client inquiries — and which ones just feed
            the algorithm with zero return.
          </p>
        </div>

        <div className="problem-grid reveal" ref={gridRef}>
          {cards.map((c) => (
            <div className="problem-card" key={c.num}>
              <div className="problem-num">{c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
