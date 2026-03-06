import { useState } from 'react'
import '../styles/Hero.css'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const [showPopup, setShowPopup] = useState(false)

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email.");
      return;
    }

    const IS_TEST_MODE = false;

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      if (!IS_TEST_MODE) {
        // Real submission to Sheety
        const url = "https://api.sheety.co/13000793e3eae1c815a1c576886bea71/waitlistSignups/sheet1";

        const body = {
          sheet1: {
            timestamp: new Date().toISOString(),
            email: trimmedEmail,
          },
        };

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (!response.ok) throw new Error("Sheety submission failed");

        const json = await response.json();
        console.log("Sheety response:", json);

      } else {
        // Simulate a successful submission in test mode
        console.log("Test mode active — skipping Sheety");
        await new Promise((resolve) => setTimeout(resolve, 500)); // small delay for UX
      }

      // Common after-success logic
      setEmail("");
      setShowPopup(true);
      setTimeout(() => setError(""), 3000);

    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission failed: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <section className="hero">
      {/* Decorative rings */}
      <div className="hero-ring" />
      <div className="hero-ring hero-ring-2" />

      <div className="hero-eyebrow">
        <div className="hero-eyebrow-dot d-none d-md-flex" />
        For coaches growing on Instagram
      </div>

      <h1 className="hero-headline">
        Stop posting
        <span className="hero-headline-accent">into the void.</span>
      </h1>

      <p className="hero-sub">
        Amplora tells you exactly what to post next to get clients -
        not more likes from people who will never buy from you.
      </p>

      <div className="hero-form-wrapper">
        <form onSubmit={handleSubmit}>
            <div
              className="hero-form"
              style={error ? { borderColor: '#f87171', boxShadow: '0 0 0 4px rgba(248,113,113,0.12)' } : {}}
            >
              {error && <p className="error-text">{error}</p>}

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                required
              />
              <button className="btn-primary" type="submit">
                {isSubmitting ? "Submitting..." : "Join Waitlist →"}
              </button>
            </div>
        </form>
      </div>

      <div className="hero-trust">
        <div className="hero-trust-inner">
          <div className="hero-trust-avatars">
            <div className="trust-avatar trust-avatar-1">JM</div>
            <div className="trust-avatar trust-avatar-2">AK</div>
            <div className="trust-avatar trust-avatar-3">SL</div>
            <div className="trust-avatar trust-avatar-4">+3</div>
          </div>
          <span className="trust-text">
            <strong>6+ coaches</strong> already on early access · Personal onboarding included
          </span>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section> 

    {/* ── EMAIL REMINDER POPUP ── */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-card" onClick={e => e.stopPropagation()}>

            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="popup-icon-wrap">
              <div className="popup-icon-ring" />
              <div className="popup-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
              </div>
            </div>

            <h3 className="popup-title">Check your inbox!</h3>
            <p className="popup-body">
              We just sent a confirmation email to{' '}
              <strong>{email}</strong>.<br />
              It should arrive within the next few minutes.
            </p>

            <div className="popup-steps">
              <div className="popup-step">
                <div className="popup-step-num">1</div>
                <span>Open your inbox</span>
              </div>
              <div className="popup-step-arrow">→</div>
              <div className="popup-step">
                <div className="popup-step-num">2</div>
                <span>Find the email from Amplora</span>
              </div>
              <div className="popup-step-arrow">→</div>
              <div className="popup-step">
                <div className="popup-step-num">3</div>
                <span>Confirm your spot</span>
              </div>
            </div>

            <p className="popup-spam">
              <svg className="d-none d-md-flex" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Can't find it? Check your spam or promotions folder.
            </p>

            <button className="popup-cta" onClick={() => setShowPopup(false)}>
              Got it, I'll check my inbox
            </button>
          </div>
        </div>
      )}

  </>
  )
}
