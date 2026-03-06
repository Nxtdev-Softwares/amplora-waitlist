import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import ProofStrip from './components/ProofStrip'
import Problem    from './components/Problem'
import HowItWorks from './components/HowItWorks'
import ForWho     from './components/ForWho'
import EarlyAccess from './components/EarlyAccess'
import FinalCTA   from './components/FinalCTA'
import Footer     from './components/Footer'
import './styles/Sections.css'

export default function App() {
  return (
    <>
      {/* Background layers */}
      <div className="noise-overlay" />
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <Navbar />
      <Hero />
      <ProofStrip />
      <div className="divider" />
      <Problem />
      <div className="divider" />
      <HowItWorks />
      <div className="divider" />
      <ForWho />
      <div className="divider" />
      <EarlyAccess />
      <div className="divider" />
      <FinalCTA />
      <Footer />
    </>
  )
}
