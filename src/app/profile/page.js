"use client";

import { avaterJ, home_icon, loading_gif, sign_up_logo } from "@/Images";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
import { LuRadioReceiver } from "react-icons/lu";
import { MdLightMode, MdNightlight, MdOutlinePrivacyTip } from "react-icons/md";
import { TbHelpOctagonFilled } from "react-icons/tb";
import { GrContact } from "react-icons/gr";
import Link from "next/link";
import { FiBarChart2 } from "react-icons/fi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import Error from "../not-found";
import Statistics from "@/assets/afterLogin/Statistics";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState("Profile");

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("HELI_COIN_Theme") || "Light";
  });

  useEffect(() => {
    localStorage.setItem("HELI_COIN_THEME", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
  };

  useEffect(() => {
    if (!id) return <Error />;

    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/user/${id}`); // ✅ Corrected API endpoint
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  // Split email safely after data is loaded
  const splitedEmail = userData?.email?.split("@")[0];

  return (
    <>
      <nav>
        <Image src={home_icon} alt="Home Icon" />
        <div className="bar">Pilot's Profile</div>
      </nav>

      {page === "Profile" ? (
        <>
          {loading ? (
            <div className="Loading">
              <Image src={loading_gif} alt="" />
            </div>
          ) : error ? (
            <p>Error: {error}</p>
          ) : userData ? (
            <>
              <div className="user-info">
                <div className="color"></div>
                <div className="img">
                  <Image src={avaterJ} alt="Avatar" />
                </div>
                <div className="name-email">
                  <p>{userData.name}</p>
                  <p>@{splitedEmail}</p>
                </div>
              </div>

              <main>
                <div className="main-div">
                  <div className="top">
                    <p>
                      <FaRegAddressCard /> UID - {userData?._id}
                    </p>
                    <p>
                      <RiNotification3Line />
                      Notifications
                      <span className="report">ON</span>
                    </p>
                    <p>
                      <IoLanguage /> Language
                      <span className="report">English</span>
                    </p>
                  </div>
                  <div className="middle">
                    <p>
                      <LuRadioReceiver /> Sequrity
                    </p>
                    <p>
                      {theme === "Light" ? <MdNightlight /> : <MdLightMode />}{" "}
                      Theme{" "}
                      <span onClick={toggleTheme} className="report">
                        {theme} mode
                      </span>
                    </p>
                  </div>
                  <div className="bottom">
                    <p>
                      <TbHelpOctagonFilled /> Help & Support
                    </p>
                    <p>
                      <GrContact /> Contact
                    </p>
                    <p>
                      <MdOutlinePrivacyTip /> Privacy & Policy
                    </p>
                  </div>
                </div>
              </main>
            </>
          ) : (
            <p>User not found.</p>
          )}
        </>
      ) : (
        <Statistics />
      )}

      <footer>
        <Link href={"/"} className="main-logo">
          <Image src={sign_up_logo} alt="" />
        </Link>
        <div
          onClick={() => setPage("Statistic")}
          className={`left ${page === "Statistic" && "active"}`}
        >
          <FiBarChart2 />
          Statistic
        </div>
        <div
          onClick={() => setPage("Profile")}
          className={`right ${page === "Profile" && "active"}`}
        >
          <RiAccountPinCircleLine />
          Profile
        </div>
        <div className="bar"></div>
      </footer>
    </>
  );
};

export default Page;
