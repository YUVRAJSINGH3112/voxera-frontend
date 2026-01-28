import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [hasBots, setHasBots] = useState(false)

    const checkAuth = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "https://voxera-backend-4cga.onrender.com/auth/me",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setUser(res.data);

        const botRes = await axios.get(
          "https://voxera-backend-4cga.onrender.com/chatbot/get/bots",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setHasBots((botRes.data.bots || []).length > 0);
      } catch (err) {
        setUser(null);
        setHasBots(false);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      checkAuth();
    }, []);


    return (
      <AuthContext.Provider value={{ user, setUser, loading, hasBots,refreshAuth: checkAuth }}>
        {children}
      </AuthContext.Provider>
    )
  }

  export const useAuth = () => useContext(AuthContext)
