import { useNavigate } from "react-router-dom";
import { MessageSquare, Mic } from "lucide-react";
import "../../style/css/Dashboard.css";

const BotType = () => {
  const navigate = useNavigate();

  return (
    <div className="dash-container">
      <h1>Create a Bot</h1>
      <p className="subtitle">Choose the type of bot you want to build</p>

      <div className="grid">
        {/* Chatbot Card */}
        <div
          className="card"
          onClick={() => navigate("/dashboard/create/chatbot")}
        >
          <MessageSquare size={36} />
          <h3>Chatbot</h3>
          <p>
            Website & app chatbot for customer support, FAQs, lead capture
          </p>
        </div>

        {/* Voice Bot Card */}
        <div
          className="card"
          onClick={() => navigate("/dashboard/create/voice")}
        >
          <Mic size={36} />
          <h3>Voice Bot</h3>
          <p>
            AI voice agent for calls, IVR, booking & automation
          </p>
        </div>
      </div>
    </div>
  );
};

export default BotType;
