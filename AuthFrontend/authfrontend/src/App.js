import React, { useState } from "react";
import AuthForm from "./AuthForm";
import './App.css';

function App() {
  const [mode, setMode] = useState("signin");
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <div style={{ maxWidth: 400, margin: "auto", padding: 20, textAlign: "center" }}>
        <h1>Добро пожаловать</h1>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={() => setMode("signin")}>Sign In</button>
        <button onClick={() => setMode("signup")}>Sign Up</button>
      </div>
      <AuthForm mode={mode} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
