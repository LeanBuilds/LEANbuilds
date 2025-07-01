import React, { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div style={{ backgroundColor: "#111111", minHeight: "100vh", overflowX: "hidden" }}>
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
          color: "#ffffff"
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
              backgroundColor: "#222",
              padding: "12px",
              borderRadius: "8px"
            }}
          >
            🏗️ CONTRACTORS
          </h2>
          {activeSection === "contractors" && (
            <div
              style={{
                backgroundColor: "#1b1b1b",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px"
              }}
            >
              <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                High-Tech Solutions to Execute with Precision
                <br />
                Using Drones, GNSS, Total Stations & 3D Modeling
              </p>

              <h3>📐 Construction Layout & Field Execution</h3>
              <ul>
                <li>GPS & Total Station layout for footings, gridlines, services, curb, and grading</li>
                <li>Precision staking for excavation, concrete, and utility installation</li>
              </ul>

              <h3>📊 Quantities & Modeling</h3>
              <ul>
                <li>Cut/Fill & stockpile volume calculations using drone data</li>
                <li>3D execution modeling for site coordination and staging</li>
                <li>Conflict & clash detection modeling to identify issues before they arise</li>
              </ul>

              <h3>📸 Site Documentation</h3>
              <ul>
                <li>Drone-based as-built capture and progress tracking</li>
                <li>Orthomosaics, point clouds, and georeferenced site data</li>
                <li>High-precision as-built measurements for record or verification</li>
              </ul>

              <h3>📄 Preconstruction Support</h3>
              <ul>
                <li>Drawing & plan reviews for constructability and clarity</li>
                <li>Material takeoffs and quantity estimates directly from models</li>
                <li>Assistance with RFIs and field coordination</li>
              </ul>
            </div>
          )}

          {/* AEC DESIGNERS */}
          <h2
            onClick={() => toggleSection("designers")}
            onMouseEnter={() => toggleSection("designers")}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              marginBottom: "10px",
              backgroundColor: "#222",
              padding: "12px",
              borderRadius: "8px"
            }}
          >
            📐 AEC DESIGNERS
          </h2>
          {activeSection === "designers" && (
            <div
              style={{
                backgroundColor: "#1b1b1b",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px"
              }}
            >
              <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                Digital Precision to Empower Creative Intent
                <br />
                We support architects, engineers, and technologists with tools and services that reduce site uncertainty and improve design coordination.
              </p>

              <h3>📏 Site Reality Capture</h3>
              <ul>
                <li>Drone-based photogrammetry and 3D scans for existing conditions</li>
                <li>Topographic mapping with georeferenced elevation data</li>
                <li>As-built documentation to verify construction against design</li>
              </ul>

              <h3>🧱 Design Validation & Coordination</h3>
              <ul>
                <li>Overlay models on site data to detect geometric or spatial conflicts</li>
                <li>Rapid comparison of plans against surveyed benchmarks</li>
                <li>Clash detection with existing infrastructure, grade, or structure</li>
              </ul>

              <h3>🧰 Technical Integration</h3>
              <ul>
                <li>DXF, RVT, DWG, and point cloud support</li>
                <li>Annotated plan markups and shared design visuals</li>
                <li>Assistance with BIM/CAD model prep for field execution</li>
              </ul>

              <h3>🔄 Design Development & Review</h3>
              <ul>
                <li>Remote or on-site support during concept, DD, or CD stages</li>
                <li>Constructability feedback from field experience</li>
                <li>Visual tools to communicate complex ideas to clients or stakeholders</li>
              </ul>
            </div>
          )}

          {/* OWNERS / STAKEHOLDERS */}
          <h2
            onClick={() => toggleSection("owners")}
            onMouseEnter={() => toggleSection("owners")}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              marginBottom: "10px",
              backgroundColor: "#222",
              padding: "12px",
              borderRadius: "8px"
            }}
          >
            🧭 OWNERS / STAKEHOLDERS
          </h2>
          {activeSection === "owners" && (
            <div
              style={{
                backgroundColor: "#1b1b1b",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px"
              }}
            >
              <p>Placeholder for OWNERS / STAKEHOLDERS content...</p>
            </div>
          )}
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
          color: "#999",
          backgroundColor: "#111",
          borderTop: "1px solid #333"
        }}
      >
        <div>Serving North Bay and nearby regions.</div>
        <div>jesse.graham@leanbuilds.ca</div>
      </div>
    </div>
  );
}

export default App;
