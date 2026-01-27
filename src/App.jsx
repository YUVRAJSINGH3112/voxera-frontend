import React from "react"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Docs from "./components/Docs"
import About from "./components/About"

import BotType from "./components/dashboard/BotType"
import BotMode from "./components/dashboard/BotMode"
import RagKnowledge from "./components/dashboard/RagKnowledge"
import BotCreated from "./components/dashboard/BotCreated"
import DashboardMain from "./components/dashboard/DashboardMain"

import AuthSkeleton from "./components/AuthSkeleton"
import { useAuth } from "./AuthContext"

import "./style/css/App.css"

function App() {
  const location = useLocation()
  const { user, loading, hasBots } = useAuth()

  const isDashboardRoute = location.pathname.startsWith("/dashboard")

  if (loading) {
    return <AuthSkeleton />
  }

  return (
    <div className="app">
      {!isDashboardRoute && <Navbar />}

      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}

        <Route
          path="/"
          element={
            user ? (
              hasBots ? (
                <Navigate to="/dashboard/main" replace />
              ) : (
                <Navigate to="/dashboard/home" replace />
              )
            ) : (
              <Home />
            )
          }
        />

        <Route
          path="/login"
          element={
            user ? (
              hasBots ? (
                <Navigate to="/dashboard/main" replace />
              ) : (
                <Navigate to="/dashboard/home" replace />
              )
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/signup"
          element={
            user ? (
              hasBots ? (
                <Navigate to="/dashboard/main" replace />
              ) : (
                <Navigate to="/dashboard/home" replace />
              )
            ) : (
              <Signup />
            )
          }
        />

        <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Signup />} />

        {/* ================= DASHBOARD DECISION ================= */}

        <Route
          path="/dashboard"
          element={
            user ? (
              hasBots ? (
                <Navigate to="/dashboard/main" replace />
              ) : (
                <Navigate to="/dashboard/home" replace />
              )
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* ================= DASHBOARD PAGES ================= */}

        {/* Dashboard Main (Analytics) */}
        <Route
          path="/dashboard/main"
          element={
            user ? (
              hasBots ? (
                <DashboardMain />
              ) : (
                <Navigate to="/dashboard/home" replace />
              )
            ) : (
              <Navigate to="/" replace />
            )
          }
        />


        {/* Dashboard Home (Create Bot Start) */}
        <Route
          path="/dashboard/home"
          element={user ? <BotType /> : <Navigate to="/login" replace />}
        />

        {/* Create Bot Flow */}
        <Route
          path="/dashboard/create/:botType"
          element={user ? <BotMode /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/dashboard/create/:botType/rag"
          element={user ? <RagKnowledge /> : <Navigate to="/login" replace />}
        />

        {/* Bot Created */}
        <Route
          path="/dashboard/bot-created"
          element={user ? <BotCreated /> : <Navigate to="/login" replace />}
        />
      </Routes>

      {!isDashboardRoute && <Footer />}
    </div>
  )
}

export default App
