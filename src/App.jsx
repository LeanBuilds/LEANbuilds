import React, { useState } from "react";

function App() {
  const [hoverText, setHoverText] = useState("");

  return (
    <div
      style={{
        fontFamily: "Segoe UI",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "40px",
        backgroundColor: "#ffffff"
      }}
    >
      <div style={{ maxWidth: "800px", width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "0.5rem" }}>
          LEANBuilds.ca
        </h1>

        <p style={{ fontSize: "1.25rem", color: "#333", marginBottom: "3rem" }}>
          Less waste. More clarity. Better decisions.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "20px"
          }}
        >
          <a
            href="#"
            onMouseEnter={() =>
              setHoverText("Streamline site prep, layout, and material coordination.")
            }
            onMouseLeave={() => setHoverText("")}
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#0044cc",
              transition: "color 0.2s"
            }}
          >
            CONTRACTORS
          </a>
          <a
            href="#"
            onMouseEnter={() =>
              setHoverText("Support your design process with topographic data and cut/fill insight.")
            }
            onMouseLeave={() => setHoverText("")}
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#0044cc",
              transition: "color 0.2s"
            }}
          >
            AEC DESIGNERS
          </a>
          <a
            href="#"
            onMouseEnter={() =>
              setHoverText("Gain project clarity with visuals and metrics tailored for decision-makers.")
            }
            onMouseLeave={() => setHoverText("")}
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#0044cc",
              transition: "color 0.2s"
            }}
          >
            OWNERS / STAKEHOLDERS
          </a>
        </div>

        {hoverText && (
          <p style={{ fontSize: "1rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
            {hoverText}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
