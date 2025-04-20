import { error, sign_up_logo } from "@/Images";
import Image from "next/image";
import React from "react";
import "@/style/404.css";

const Error = () => {
  return (
    <div className="error-page">
      <Image className="logo" src={sign_up_logo} alt="Logo" />

      <h3>Oops!</h3>
      <h1>
        <span>4</span>
        <Image src={error} alt="Logo" />
        <span>4</span>
      </h1>

      <p>Sorry for inconvenience we will be back soon!</p>
      <p>If you facing any issue please contact or report</p>
      <div className="icons"></div>
      <button>Report here</button>
    </div>
  );
};

export default Error;
