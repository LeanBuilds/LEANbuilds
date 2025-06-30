import React from "react";

function App() {
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
          LEANBuilds
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#333", marginBottom: "3rem" }}>
          Welcome to the LEANBuilds website.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px"
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#0044cc",
              transition: "color 0.2s"
            }}
            onMouseOver={e => (e.target.style.color = "#001f66")}
            onMouseOut={e => (e.target.style.color = "#0044cc")}
          >
            CONTRACTORS
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#0044cc",
              transition: "color 0.2s"
            }}
            onMouseOver={e => (e.target.style.color = "#001f66")}
            onMouseOut={e => (e.target.style.color = "#0044cc")}
          >
            AEC DESIGNERS
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#0044cc",
              transition: "color 0.2s"
            }}
            onMouseOver={e => (e.target.style.color = "#001f66")}
            onMouseOut={e => (e.target.style.color = "#0044cc")}
          >
            OWNERS / STAKEHOLDERS
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
