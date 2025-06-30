import React, { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Page content */}
      <div
        style={{
          fontFamily: "Segoe UI",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px",
          paddingBottom: "120px",
          textAlign: "center",
          color: "#ffffff",
          textShadow: "0 1px 4px rgba(0,0,0,0.8)"
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "0.5rem" }}>
          LEANBuilds.ca
        </h1>

        <p style={{ fontSize: "1.25rem", marginBottom: "3rem" }}>
          Less waste. More clarity. Better decisions.
        </p>

        {/* Section Block */}
        <div style={{ maxWidth: "900px", width: "100%", textAlign: "left" }}>
          {/* CONTRACTORS */}
          <h2
            onClick={() => toggleSection("contractors")}
            onMouseEnter={() => toggleSection("contractors")}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              marginBottom: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "12px",
              borderRadius: "8px"
            }}
          >
            🏗️ CONTRACTORS
          </h2>
          {activeSection === "contractors" && (
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "20
