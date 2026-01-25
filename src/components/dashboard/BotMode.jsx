import { useNavigate, useParams } from "react-router-dom";
import "../../style/css/Dashboard.css";

const BotMode = () => {
  const { botType } = useParams();
  const navigate = useNavigate();

  return (
    <div className="dash-container">
      <h2>Select Bot Type</h2>

      <div className="grid">
        <div
          className="card"
          onClick={() => navigate(`/dashboard/create/${botType}/rag`)}
        >
          🧠 RAG Bot
          <p>Answer from your knowledge base</p>
        </div>

        <div className="card">
          ⚙️ Fully Functional Bot
          <p>Tools, APIs, Actions</p>
        </div>
      </div>
    </div>
  );
};

export default BotMode;
