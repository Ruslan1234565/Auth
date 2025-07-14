import React, { useState } from "react";

export default function AuthForm({ mode, setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    let url, body;
    if (mode === "signup") {
      url = "/api/user/register";
      body = JSON.stringify({ email, password });
    } else {
      url = "/api/user/login";
      body = JSON.stringify({ email, password });
    }
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    const text = await res.text();
    setMessage(text);
    if (mode === "signin" && res.ok && setLoggedIn) {
      setLoggedIn(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <h2>{mode === "signup" ? "Sign Up" : "Sign In"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{mode === "signup" ? "Register" : "Login"}</button>
      {message && <div>{message}</div>}
    </form>
  );
} 