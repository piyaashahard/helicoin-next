"use client";

import React, { useEffect, useState } from "react";
import {
  home_icon,
  sign_up_logo,
  profile_icon,
  fuel_balance_checker,
  export_order_icon,
  home_page_banner,
  wallet,
  invite,
} from "@/Images/index";
import Image from "next/image";
import { FaPlusCircle } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Slider from "react-slick";
import Link from "next/link";

const HomePage = () => {
  const [points, setPoints] = useState(20175.32);
  const [fuel, setFuel] = useState(26);
  const [rotate, setRotate] = useState(45);
  const [refilTime, setRefilTime] = useState("3:48:56");
  const [mining, setMining] = useState("Mining");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(
      "HELI-COIN_USER_PUBLIC_INFORMATIONS"
    );
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user info from localStorage:", error);
      }
    }
  }, []);

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
            <Image src={sign_up_logo} alt="Points Logo" />
            <p>{points}</p>
          </div>
          <p className="fuel">
            Available fuel : {fuel} L <FaPlusCircle />
          </p>
        </div>

        <div className="icons">
          <Link className="left" href={"/"}>
            <Image src={home_icon} alt="Home Icon" />
            <p>Home</p>
          </Link>
          {user && (
            <Link
              className="right"
              href={`/profile?id=${user.user_id_public_information._id}`}
            >
              <Image src={profile_icon} alt="Profile Icon" />
              <p>Profile</p>
            </Link>
          )}
        </div>
      </div>

      <div className="middle">
        <div className="fuel_balance_checker">
          <Image src={fuel_balance_checker} alt="Fuel Checker" />
          <div
            className="round"
            style={{ transform: `rotate(${rotate}deg)` }}
          ></div>
        </div>

        <div className="liter-balance">
          <button>
            <span className="red">3.9</span>/10 L
          </button>
          <Image src={export_order_icon} alt="Export Order Icon" />
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
              <Image src={home_page_banner} alt="Banner 1" />
            </div>
            <div>
              <Image src={home_page_banner} alt="Banner 2" />
            </div>
            <div>
              <Image src={home_page_banner} alt="Banner 3" />
            </div>
          </Slider>
        </div>

        <div className="at-last-of-the-home-page">
          <div className="status">
            <div
              className="circle"
              style={{
                backgroundColor: mining === "Mining" ? "green" : "gray",
              }}
            ></div>
            Status : {mining}...
          </div>

          <div className="left">
            <div className="img">
              <Image src={wallet} alt="Wallet Icon" />
              <span>Wallet</span>
            </div>
            <Link href={"/"}>
              Check the whitepaper <IoIosArrowDroprightCircle />
            </Link>
          </div>

          <div className="right">
            <div className="img">
              <Image src={invite} alt="Invite Icon" />
              <span>Invite</span>
            </div>
            <Link href={"/"}>
              Participate in whitepaper <IoIosArrowDroprightCircle />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
