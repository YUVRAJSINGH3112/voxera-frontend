import { useLocation } from "react-router-dom";
import "../../style/css/Dashboard.css";

const BotCreated = () => {
  const { state } = useLocation();
  const code = state?.code;

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  return (
    <div className="dash-container">
      <h1>🎉 Your Bot is Ready</h1>

      <pre className="code-box">
        {code}
      </pre>

      <button onClick={copyCode}>Copy Code</button>
    </div>
  );
};

export default BotCreated;
