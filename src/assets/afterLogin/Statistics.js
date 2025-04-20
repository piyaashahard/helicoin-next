import React, { useState } from "react";
import { stock_down, stock_up } from "@/Images"; // Ensure these are imported image paths, not components
import Image from "next/image";

const Statistics = () => {
  const statisticsList = [
    {
      h1: "Total Mined",
      count: "24,700.46",
      stock: "+9.15%",
    },
    {
      h1: "Total Burned",
      count: "12,350.22",
      stock: "-4.67%",
    },
    {
      h1: "Current Volume",
      count: "87,122.10",
      stock: "+2.43%",
    },
    {
      h1: "Previous Volume",
      count: "56,321.00",
      stock: "-1.78%",
    },
    {
      h1: "New Users",
      count: "4,312",
      stock: "+5.26%",
    },
    {
      h1: "Active Users",
      count: "18,540",
      stock: "+1.82%",
    },
    {
      h1: "Transactions",
      count: "91,245.30",
      stock: "-0.74%",
    },
    {
      h1: "Revenue",
      count: "134,700.00",
      stock: "+6.55%",
    },
    {
      h1: "Expenses",
      count: "68,400.50",
      stock: "-3.12%",
    },
    {
      h1: "Net Profit",
      count: "66,299.50",
      stock: "+7.90%",
    },
    {
      h1: "Deposits",
      count: "22,140.10",
      stock: "+2.10%",
    },
    {
      h1: "Withdrawals",
      count: "17,980.75",
      stock: "-2.35%",
    },
    {
      h1: "Daily Volume",
      count: "75,821.90",
      stock: "+3.48%",
    },
    {
      h1: "Monthly Growth",
      count: "15.00%",
      stock: "+0.95%",
    },
    {
      h1: "Daily Visits",
      count: "23,450",
      stock: "+4.23%",
    },
    {
      h1: "Customer Complaints",
      count: "420",
      stock: "-1.15%",
    },
  ];
  const [mining, setMining] = useState("Mining");

  return (
    <>
      <div className="statistic">
        {statisticsList.map((li, index) => {
          const isPositive = li.stock.startsWith("+");

          return (
            <div key={index} className="statisticsList">
              <p>{li.h1}</p>
              <h1>{li.count}</h1>
              <p className={`stock ${isPositive ? "green" : "red"}`}>
                {li.stock}
                <Image
                  src={isPositive ? stock_up : stock_down}
                  alt={isPositive ? "Stock Up" : "Stock Down"}
                />
              </p>
            </div>
          );
        })}
      </div>

      <div className="status">
        <div
          className="circle"
          style={{
            backgroundColor: mining === "Mining" ? "green" : "gray",
          }}
        ></div>
        Status : {mining}...
      </div>
    </>
  );
};

export default Statistics;
