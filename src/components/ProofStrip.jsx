import { useReveal } from './useReveal'
import '../styles/Sections.css'

const items = [
  { icon: '⚡', text: 'Built for Instagram coaches' },
  { icon: '🎯', text: 'No more content guesswork' },
  { icon: '🚀', text: 'Personal onboarding included' },
  { icon: '🔒', text: 'First access before public launch' },
]

export default function ProofStrip() {
  const ref = useReveal()

  return (
    <div className="proof-strip reveal" ref={ref}>
      <div className="proof-track">
        {items.map((item, i) => (
          <div className="proof-item" key={i}>
            <span className="proof-item-icon">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}
