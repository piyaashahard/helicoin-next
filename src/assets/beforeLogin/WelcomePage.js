"use client";

import { welcome_page_big_logo } from "@/Images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGetStarted = () => {
    setIsLoading(true);
    router.push("/signup");
  };

  return (
    <div className="welcome-page-main">
      <div className="welcome-page-main-image-div">
        <Image
          className="welcome-page-main-image"
          src={welcome_page_big_logo}
          alt=""
        />
      </div>

      <div className="welcome-page-main-text">
        <h1>
          Welcome to <br /> <Link href="/">HeliCoin</Link>
        </h1>
        <p>
          "Be brave ! Strap in, grab the mic, gear up, and fly the chopper.....
          because the crypto skies are yours to conquer!"
        </p>

        <button onClick={handleGetStarted} className="button">
          {isLoading ? "Loading..." : "Get Started"}
        </button>
      </div>
    </div>
  );
}
