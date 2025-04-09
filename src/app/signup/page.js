"use client";

import { sign_up_logo } from "@/Images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        setMessage(data.message || "Something went wrong.");
        return;
      }

      setMessage("✅ Account created! Please Wait...");
      window.location.href = "/signin";
    } catch (err) {
      setIsLoading(false);
      setMessage("❌ Failed to sign up. Try again.");
    }
  };

  return (
    <>
      <Image src={sign_up_logo} alt="Sign Up Logo" className="sign-up-logo" />
      <h2 className="blue">Get ready for flight!</h2>
      <p>Let the license made by your hands</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="button">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </form>

      {message && <p className="message">{message}</p>}

      <Link href="/signin" className="text">
        Already have an account?
      </Link>
    </>
  );
};

export default SignUpPage;
