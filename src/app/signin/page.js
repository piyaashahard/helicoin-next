"use client";

import LoginSuccessfulMessage from "@/assets/LoginSuccessfulMessage";
import { sign_up_logo } from "@/Images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track login status

  const router = useRouter(); // Initialize the router

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Something went wrong.");
        return;
      }

      const userData = {
        user_token_number: data.token,
        user_id_public_information: {
          _id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          points: data.user.points,
          lastClickTime: data.user.lastClickTime,
        },
      };

      localStorage.setItem(
        "HELI-COIN_USER_PUBLIC_INFORMATIONS",
        JSON.stringify(userData)
      );

      setMessage("✅ Successfully logged in! Redirecting...");
      setIsLoggedIn(true); // Set login status to true

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      setMessage("❌ Failed to log in. Try again.");
    }
  };

  return (
    <>
      <Image src={sign_up_logo} alt="Sign In Logo" className="sign-up-logo" />
      <h2 className="blue">Welcome back!</h2>
      <p>Log in to continue</p>
      <form onSubmit={handleSubmit}>
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
        <Link href={"/"} className="forget-password">
          Forgot your password?
        </Link>
        <button type="submit" className="button">
          Sign In
        </button>
      </form>
      {isLoggedIn && <LoginSuccessfulMessage />}

      <Link href={"/signup"} className="text">
        Create an account
      </Link>
    </>
  );
};

export default SignInPage;
