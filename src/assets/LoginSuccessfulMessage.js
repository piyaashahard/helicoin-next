"use client";

import { successful_login_gif, successfully_logged_in } from "@/Images";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const LoginSuccessfulMessage = () => {
  return (
    <div
      className="sucessful-login" // Ensure class name is correct
    >
      <motion.div
        className="sucessful-login-div "
        variants={zoomIn(0, 0.3)} // Apply the zoom-in animation
        initial="hidden"
        whileInView="show"
      >
        <Image
          src={successful_login_gif}
          alt="Successful login gif"
          className="gif"
        />
        <h2>Congratulations!</h2>
        <p>License creation successful!</p>
        <Image
          src={successfully_logged_in}
          alt="Successfully logged in"
          className="success-image"
        />

        <h3>Welcome Aboard, Pioneer!</h3>
        <p>
          {
            "Congratulations! You've successfully joined the Heli-Coin ecosystem, where innovation meets opportunity. Your account is now ready to explore the world of decentralized possibilities."
          }
        </p>

        <h4>Please wait for a while...</h4>
      </motion.div>
    </div>
  );
};

export default LoginSuccessfulMessage;
