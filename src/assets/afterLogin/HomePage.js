import React, { useState } from "react";
import {
  home_icon,
  sign_up_logo,
  profile_icon,
  fuel_balance_checker,
  export_order_icon,
  home_page_banner,
} from "@/Images/index";
import Image from "next/image";
import { FaPlusCircle } from "react-icons/fa";
import Slider from "react-slick";

const HomePage = () => {
  const [points, setPoints] = useState(20175.32);
  const [fuel, setFuel] = useState(26);
  const [rotate, setRotate] = useState(45);
  const [refilTime, setRefilTime] = useState("3:48:56");

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="after-login-home-page">
      <div className="top">
        <div className="number">
          <div className="points-shower">
            <Image src={sign_up_logo} alt="" />
            <p>{points}</p>
          </div>
          <p className="fuel">
            Available fuel : {fuel} L <FaPlusCircle />
          </p>
        </div>

        <div className="icons">
          <div className="left">
            <Image src={home_icon} alt="" />
            <p>Home</p>
          </div>
          <div className="right">
            <Image src={profile_icon} alt="" />
            <p>Profile</p>
          </div>
        </div>
      </div>

      <div className="middle">
        <div className="fuel_balance_checker">
          <Image src={fuel_balance_checker} alt="" />
          <div
            className="round"
            style={{ "--rotation-degree": `${rotate}deg` }}
          ></div>
        </div>

        <div className="liter-balance">
          <button>
            <span className="red">3.9</span>/10 L
          </button>
          <Image src={export_order_icon} alt="" />
        </div>

        <p>
          Estimated time till next Refill -{" "}
          <span className="red">{refilTime}</span>
        </p>
      </div>

      <div className="bottom">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <Image src={home_page_banner} alt="" />
            </div>
            <div>
              <Image src={home_page_banner} alt="" />
            </div>
            <div>
              <Image src={home_page_banner} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
