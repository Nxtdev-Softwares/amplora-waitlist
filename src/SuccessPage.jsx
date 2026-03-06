function SuccessPage () {
    return (
        <>
        <div className="ws-container">
      <div className="ws-card">
        <p className="ws-badge">You’re in</p>

        <h1 className="ws-title">
          You’re officially on the <strong>Amplora Waitlist</strong>
        </h1>

        {/* NEW: Waitlist Position */}
        <div className="ws-position">
          <span>You’re</span>
          <strong>#6</strong>
          <span>on the waitlist</span>
        </div>

        <p className="ws-subtitle">
          Your spot is reserved. From now on, <strong>your inbox is where everything happens</strong>.
        </p>

        <div className="ws-spots">
          <span className="ws-spots-number">14</span>
          <span className="ws-spots-text">
            <strong>Founder spots remaining</strong>
          </span>
        </div>

        <div className="ws-divider" />

        <h2 className="ws-section-title">
          Check your inbox <strong>right now</strong>
        </h2>

        <p className="ws-text">
          We’ve just sent you a <strong>welcome email</strong>.
          This email confirms your spot and explains what happens next.
        </p>

        <ul className="ws-checklist">
          <li><strong>Open the welcome email</strong> from Amplora</li>
          <li>If you don’t see it, <strong>wait 1–2 minutes</strong> and refresh</li>
          <li>Still not there? <strong>Check Spam / Promotions</strong></li>
          <li>Once you find it, <strong>move it to Primary</strong></li>
        </ul>

        <div className="ws-highlight">
          <p>
            Every important update - early access, prototype previews,
            and <strong>founder-only invites</strong> - will be sent by email.
          </p>
        </div>

        <p className="ws-footer">
          Missing an email means missing your chance to see Amplora early.
          <br />
          <strong>Check your inbox daily.</strong>
        </p>
      </div>
    </div>
        </>
    )
}
export default SuccessPage;