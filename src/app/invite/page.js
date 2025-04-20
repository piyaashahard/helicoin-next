"use client";

import React, { useEffect, useState } from "react";
import {
  copy_icon,
  home_icon,
  invite,
  invite_gift_wrapper,
  sign_up_logo,
  stock_up,
  wallet,
} from "@/Images";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Page = () => {
  const [mining, setMining] = useState("Mining");
  const [totalRefferal, setTotalRefferal] = useState(42);
  const [id, setId] = useState("");
  const [inviteLink, setInviteLink] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem(
      "HELI-COIN_USER_PUBLIC_INFORMATIONS"
    );
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const userId = parsedUser?.user_id_public_information?._id;
        setId(userId);
        const origin = window.location.origin;
        setInviteLink(`${origin}/signup?.sent_invitation_from=${userId}`);
      } catch (error) {
        console.error("Error parsing user info from localStorage:", error);
      }
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <Link href={"/"}>
        <Image src={home_icon} alt="Home Icon" className="home-icon" />
      </Link>
      <Image src={sign_up_logo} alt="Sign Up Logo" />

      <h1>Heli Referral Programs</h1>
      <p className="detail">
        Use the link below to refer your friends to sign up. You will receive
        15% from their all-time earnings for lifetime.
      </p>

      <section className="black-div">
        <div className="up">
          <Image
            src={invite_gift_wrapper}
            alt="Invite Gift"
            className="invite"
          />
          <div className="right">
            <h3>For every invited mate!</h3>
            <ul>
              <li>
                You will receive <Image src={sign_up_logo} alt="Coin" /> 1000
                Helicoin in rewards
              </li>
            </ul>
          </div>
        </div>
        <div className="down">
          <Image
            src={invite_gift_wrapper}
            alt="Invite Gift"
            className="invite"
          />
          <div className="right">
            <h3>For every invited mate!</h3>
            <ul>
              <li>
                The mate invited by you will receive{" "}
                <Image src={sign_up_logo} alt="Coin" /> 100 Helicoin in rewards
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="copy-invite-link">
        <div className="copy-image" onClick={handleCopy}>
          <Image src={copy_icon} alt="Copy Icon" />
          {copied ? "Link is copied" : "Copy invite link"}
        </div>
        <div className="refferal">
          Total Referral
          <br />
          {totalRefferal}
        </div>
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
          <Link href={"/invite"} className="img">
            <Image src={invite} alt="Invite Icon" />
            <span>Invite</span>
          </Link>
          <Link href={"/"}>
            Participate in whitepaper <IoIosArrowDroprightCircle />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
