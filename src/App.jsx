import React from "react"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Docs from "./components/Docs"
import About from "./components/About"

// Dashboard flow components
import BotType from "./components/dashboard/BotType"
import BotMode from "./components/dashboard/BotMode"
import RagKnowledge from "./components/dashboard/RagKnowledge"
import BotCreated from "./components/dashboard/BotCreated"
import AuthSkeleton from "./components/AuthSkeleton"

import { useAuth } from "./AuthContext"

import "./style/css/App.css"

function App() {
  const location = useLocation()
  const { user, loading } = useAuth()

  const hideLayout = location.pathname.startsWith("/dashboard")

  if (loading) {
    return <AuthSkeleton />
  }

  return (
    <div className="app">
      {!hideLayout && <Navbar />}

      <Routes>
        
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Home />}
        />

        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" /> : <Signup />}
        />

        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />

        <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Signup />} />

        
        <Route
          path="/dashboard"
          element={user ? <BotType /> : <Navigate to="/" />}
        />

        <Route
          path="/dashboard/create/:botType"
          element={user ? <BotMode /> : <Navigate to="/" />}
        />

        <Route
          path="/dashboard/create/:botType/rag"
          element={user ? <RagKnowledge /> : <Navigate to="/" />}
        />

        <Route
          path="/dashboard/bot-created"
          element={user ? <BotCreated /> : <Navigate to="/" />}
        />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  )
}

export default App
