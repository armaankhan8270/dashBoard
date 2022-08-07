import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/contextProvider";
import product9 from "../data/product9.jpg";
import { BiBorderRadius } from "react-icons/bi";

const Employees = () => {
  return (
    <div className=" mt-24"  >
      <div className="  bg-red scroll-smooth bg-teal-700 flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="  flex justify-between items-center"></div>
          <p className="font-bold text-gray-600">Earnings</p>
          <p className="font-bolder text-3xl">$63,90,845</p>
        </div>
        </div>
      <div className="mt-6">
      <Button
        color="white"
        bgColor="blue"
        text="download"
        borderRadius="10px"
        size='md'
        />

      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {earningData.map((item)=>(
          <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2x1">
 <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Employees;
