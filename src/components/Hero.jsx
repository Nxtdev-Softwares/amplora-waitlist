import { useState } from 'react'
import '../styles/Hero.css'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(false)

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

      setTimeout(() => setError(""), 3000);

    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission failed: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
  )
}
