import { useLocation, useNavigate } from "react-router-dom";
import "../../style/css/Dashboard.css";

const BotCreated = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const code = `npm i voxera

import { Chatbot } from "voxera";

export default function App() {
  return (
    <div>
      <Chatbot botId="${state?.code}" />
    </div>
  );
}`;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied!");
      navigate("/dashboard/main", { replace: true });
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="dash-container">
      <h1 className="dash-title">Your Bot is Ready</h1>

      <p className="dash-subtitle">
        Copy and paste the following code into your React application.
      </p>

      <pre className="code-box">
        <code>{code}</code>
      </pre>

      <button className="primary-btn" onClick={copyCode}>
        Copy Code
      </button>
    </div>
  );
};

export default BotCreated;
