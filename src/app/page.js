"use client";

import React, { useEffect, useState } from "react";
import WelcomePage from "@/assets/beforeLogin/WelcomePage";
import HomePage from "@/assets/afterLogin/HomePage";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const userData = localStorage.getItem(
          "HELI-COIN_USER_PUBLIC_INFORMATIONS"
        );
        if (userData) {
          const parsed = JSON.parse(userData);
          if (parsed?.user_id_public_information?.email) {
            setShowWelcome(false);
          } else {
            setShowWelcome(true);
          }
        } else {
          setShowWelcome(true);
        }
      } catch (err) {
        console.error("Failed to parse localStorage data", err);
        setShowWelcome(true);
      }
    }
  }, []);

  if (showWelcome === null) return null;

  return <>{showWelcome ? <WelcomePage /> : <HomePage />}</>;
}
