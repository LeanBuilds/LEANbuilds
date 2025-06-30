import React from "react";

function App() {
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
          justifyContent: "flex-start",
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

        {/* CONTRACTORS Section */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "900px",
            width: "100%",
            textAlign: "left"
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>🏗️ CONTRACTORS</h2>
          <p style={{ fontWeight: "600", fontSize: "1.1rem", marginBottom: "1rem" }}>
            High-Tech Solutions to Execute with Precision
            <br />
            Using Drones, GNSS, Total Stations & 3D Modeling
          </p>

          <h3 style={{ fontSize: "1rem", marginTop: "1.5rem" }}>📐 Construction Layout & Field Execution</h3>
          <ul>
            <li>GPS & Total Station layout for footings, gridlines, services, curb, and grading</li>
            <li>Precision staking for excavation, concrete, and utility installation</li>
          </ul>

          <h3 style={{ fontSize: "1rem", marginTop: "1.5rem" }}>📊 Quantities & Modeling</h3>
          <ul>
            <li>Cut/Fill & stockpile volume calculations using drone data</li>
            <li>3D execution modeling for site coordination and staging</li>
            <li>Conflict & clash detection modeling to identify issues before they arise</li>
          </ul>

          <h3 style={{ fontSize: "1rem", marginTop: "1.5rem" }}>📸 Site Documentation</h3>
          <ul>
            <li>Drone-based as-built capture and progress tracking</li>
            <li>Orthomosaics, point clouds, and georeferenced site data</li>
            <li>High-precision as-built measurements for record or verification</li>
          </ul>

          <h3 style={{ fontSize: "1rem", marginTop: "1.5rem" }}>📄 Preconstruction Support</h3>
          <ul>
            <li>Drawing & plan reviews for constructability and clarity</li>
            <li>Material takeoffs and quantity estimates directly from models</li>
            <li>Assistance with RFIs and field coordination</li>
          </ul>
        </div>
      </div>

      {/* Sticky footer */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "10px 0",
          fontSize: "0.85rem",
          color: "#ccc",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderTop: "1px solid #444"
        }}
      >
        <div>Serving North Bay and nearby regions.</div>
        <div>jesse.graham@leanbuilds.ca</div>
      </div>
    </div>
  );
}

export default App;
