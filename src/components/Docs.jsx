import "../style/css/Docs.css";

const Docs = () => {
  const copyCode = (id) => {
    const code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code);
  };

  return (
    <section className="docs">
      <div className="docs-container">

        {/* SIDEBAR */}
        <aside className="docs-sidebar">
          <h4>Getting Started</h4>
          <a className="active">Introduction</a>
          <a>Installation</a>
          <a>Quick Start</a>
        </aside>

        {/* CONTENT */}
        <main className="docs-content">
          <h1>Introduction</h1>
          <p>
            Welcome to the Voxera Docs. This documentation will help you
            integrate our AI-powered customer support system into your product
            within minutes.
          </p>

          <h3>Install Package</h3>

          <div className="code-block">
            <button onClick={() => copyCode("install")}>Copy</button>
            <pre id="install">
npm install voxera-ai
            </pre>
          </div>

          <h3>Basic Usage</h3>

          <div className="code-block">
            <button onClick={() => copyCode("usage")}>Copy</button>
            <pre id="usage">
{`import { Voxera } from "voxera-ai";

const bot = new Voxera({
  apiKey: "YOUR_API_KEY",
});

bot.start();`}
            </pre>
          </div>

          <p>
            That’s it 🚀 Your AI assistant is now live and ready to handle
            customer conversations.
          </p>
        </main>

      </div>
    </section>
  );
};

export default Docs;
