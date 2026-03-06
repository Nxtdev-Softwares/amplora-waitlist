import { useState } from 'react'
import { useReveal } from './useReveal'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const headlineRef = useReveal()
  const formRef     = useReveal()

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
    <section className="final-cta">
      <div className="container">
        <div className="section-label reveal" style={{ justifyContent: 'center' }}>
          Limited early access spots
        </div>

        <h2 className="final-headline reveal" ref={headlineRef}>
          Your content should be<br />
          <span className="gradient-text">bringing you clients.</span>
        </h2>

        <p className="final-sub reveal">
          Join the waitlist and be the first to know exactly what to post next.
        </p>

        <div className="final-form-wrapper reveal" ref={formRef}>
         <form onSubmit={handleSubmit}>
              <div
                className="final-form"
                style={error ? { borderColor: '#f87171', boxShadow: '0 0 0 4px rgba(248,113,113,0.12)' } : {}}>

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
              <p className="spots-left">
                Only <strong>14 spots</strong> remaining in this early access cohort.
              </p>
        </div>
      </div>
    </section>
  )
}
