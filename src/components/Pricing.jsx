import "../style/css/Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">

        <div className="pricing-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>No hidden charges. Scale as you grow.</p>
        </div>

        <div className="pricing-grid">

          {/* BASIC */}
          <div className="pricing-card">
            <h3 className="plan-name">Starter</h3>
            <div className="plan-price">
              ₹0 <span>/ month</span>
            </div>
            <p className="plan-desc">
              Perfect for testing our AI platform.
            </p>

            <ul className="plan-features">
              <li>✓ 100 AI conversations</li>
              <li>✓ Basic analytics</li>
              <li>✓ Email support</li>
            </ul>

            <a href="#" className="plan-btn">Get Started</a>
          </div>

          {/* POPULAR */}
          <div className="pricing-card popular">
            <h3 className="plan-name">Pro</h3>
            <div className="plan-price">
              ₹999 <span>/ month</span>
            </div>
            <p className="plan-desc">
              For growing startups & SaaS teams.
            </p>

            <ul className="plan-features">
              <li>✓ Unlimited conversations</li>
              <li>✓ Voice + Chat AI</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Priority support</li>
            </ul>

            <a href="#" className="plan-btn">Start Free Trial</a>
          </div>

          {/* ENTERPRISE */}
          <div className="pricing-card">
            <h3 className="plan-name">Enterprise</h3>
            <div className="plan-price">
              Custom <span>/ month</span>
            </div>
            <p className="plan-desc">
              Tailored solutions for large teams.
            </p>

            <ul className="plan-features">
              <li>✓ Custom AI workflows</li>
              <li>✓ Dedicated infra</li>
              <li>✓ SLA & onboarding</li>
            </ul>

            <a href="#" className="plan-btn">Contact Sales</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
