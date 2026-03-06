import amploraLogo from "../assets/amploraLogo.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={amploraLogo} alt="" />
        Amplo<span>ra</span>
      </div>
      <p>Content intelligence for coaches. Built with intention.</p>
      <p>© 2026 Amplora. All rights reserved.</p>
    </footer>
  )
}
