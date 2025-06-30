import React from "react";

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>LEANBuilds</h1>
      <p>Welcome to the LEANBuilds website.</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          marginTop: "40px"
        }}
      >
        <a href="#" style={{ color: "blue", fontWeight: "bold" }}>
          CONTRACTORS
        </a>
        <a href="#" style={{ color: "blue", fontWeight: "bold" }}>
          AEC DESIGNERS
        </a>
        <a href="#" style={{ color: "blue", fontWeight: "bold" }}>
          OWNERS/STAKEHOLDERS
        </a>
      </div>
    </div>
  );
}

export default App;
