import { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import amploraLogo from "../assets/amploraLogo.svg"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src={amploraLogo} alt="" />
        Amplo<span>ra</span>
      </div>
      <div className="navbar-badge">
        <div className="pulse-dot" />
        Early Access Open
      </div>
    </nav>
  )
}
