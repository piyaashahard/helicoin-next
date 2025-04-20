import { error, sign_up_logo } from "@/Images";
import Image from "next/image";
import React from "react";
import "@/style/404.css";

import { FaFacebook } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BiSolidMessageDetail } from "react-icons/bi";

const Error = () => {
  return (
    <div className="error-page">
      <Image className="logo" src={sign_up_logo} alt="Logo" />

      <h3>Oops!</h3>
      <h1>
        <span>4</span>
        <Image src={error} alt="Logo" />
        <span className="right">4</span>
      </h1>

      <p className="bold">Sorry for inconvenience we will be back soon!</p>
      <p className="bottom">If you facing any issue please contact or report</p>
      <div className="icons">
        <FaFacebook />
        <BiSolidMessageDetail />
        <ImCross className="cross" />
      </div>
      <button>Report here</button>
    </div>
  );
};

export default Error;
