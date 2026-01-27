import React from "react";
import "../style/css/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Header */}
        <span className="about-badge">About Voxera</span>

        <h2 className="about-title">Conversations That Convert</h2>

        <p className="about-description">
          Voxera is an AI-powered conversational platform built to transform how
          businesses interact with users. By combining intelligent voice and
          chat systems, Voxera enables seamless, human-like conversations that
          drive engagement, automate support, and increase conversions.
        </p>

        <p className="about-description">
          Our goal is simple — help businesses communicate smarter, faster, and
          more effectively using AI. Whether it’s customer support, lead
          generation, onboarding, or sales automation, Voxera adapts to your
          needs while maintaining a natural conversational experience.
        </p>

        {/* Feature Cards */}
        <div className="about-cards">
          <div className="about-card">
            <h4>AI Voice & Chat</h4>
            <p>
              Advanced voice and chat agents designed to understand intent,
              respond naturally, and handle real-world business conversations.
            </p>
          </div>

          <div className="about-card">
            <h4>Seamless Integration</h4>
            <p>
              Easily integrate Voxera into your website or product using flexible
              APIs and simple setup — no complex infrastructure required.
            </p>
          </div>

          <div className="about-card">
            <h4>Built for Scale</h4>
            <p>
              From early-stage startups to growing enterprises, Voxera is built
              to scale with your traffic, users, and business demands.
            </p>
          </div>
        </div>

        {/* Founders */}
        <div className="founders-section">
          <h3 className="founders-title">Meet the Team</h3>

          <p className="founders-description">
            Voxera is built by passionate developers focused on creating
            practical, scalable AI products that solve real problems — not just
            demos.
          </p>

          <div className="founders-cards">
            <div className="founder-card">
              <h4>Yuvraj Singh</h4>
              <span>Co-Founder & Developer</span>
              <p>
                AI and full-stack developer focused on intelligent systems,
                scalable architectures, and clean user experiences.
              </p>
            </div>

            <div className="founder-card">
              <h4>Yogesh</h4>
              <span>Co-Founder</span>
              <p>
                Drives product vision and execution, aligning AI technology with
                real-world business needs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
