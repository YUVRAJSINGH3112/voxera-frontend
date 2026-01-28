import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../style/css/Dashboard.css";
import {useAuth} from "../../AuthContext"

const RagKnowledge = () => {
  const {refreshAuth} = useAuth();
  const { botType } = useParams();
  console.log(botType);
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateBot = async () => {
    if (!text.trim()) {
      alert("Please add knowledge before creating the bot");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `https://voxera-backend-4cga.onrender.com/${botType}/create/rag`,
        {
          botType,
          knowledgeBase: text,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      refreshAuth();
      navigate("/dashboard/bot-created", {
        state: { code: res.data.botId},
      });

    } catch (err) {
      console.error(err.message);
      alert("Failed to create bot");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dash-container">
      <h2>Add Knowledge Base</h2>
      <p className="subtitle">
        Paste documents, FAQs, or any text your bot should learn from
      </p>

      <textarea
        placeholder="Paste your knowledge here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="knowledge-textarea"
      />

      {/* CTA Button */}
      <button
        className="primary-btn"
        onClick={handleCreateBot}
        disabled={loading}
      >
        {loading ? "Creating Bot..." : "Create RAG Bot"}
      </button>
    </div>
  );
};

export default RagKnowledge;
