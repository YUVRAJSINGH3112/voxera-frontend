import { useNavigate } from "react-router-dom";
import "../../style/css/Dashboard.css";
const DashboardHome = () => {
  const navigate = useNavigate();

  return (
    <div className="dash-container">
      <h1>Create Your Bot</h1>

      <div className="grid">
        <div className="card" onClick={() => navigate("/dashboard/create/chatbot")}>
          💬 Create Chatbot
        </div>

        <div className="card" onClick={() => navigate("/dashboard/create/voice")}>
          🎙️ Create Voice Bot
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
