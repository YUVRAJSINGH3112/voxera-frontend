import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../style/css/Dashboard.css";

const RagKnowledge = () => {
  const { botType } = useParams();
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
        "http://localhost:8000/bot/create/rag",
        {
          botType,
          knowledge: text,
        },
        { withCredentials: true }
      );

      navigate("/dashboard/bot-created", {
        state: { code: res.data.embedCode },
      });

    } catch (err) {
      console.error(err);
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
