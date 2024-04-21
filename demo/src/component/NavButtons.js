import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavButtons = () => {
  const navigate = useNavigate();
  const [formType, setFormType] = useState("businessInfo");

  const BusinessInfo = () => {
    setFormType("businessInfo");
    navigate("/");
  };

  const PayoutDetails = () => {
    setFormType("paymentDetailsForm");
    navigate("/paymentDetails");
  };

  return (
    <div className="">
      <div className="">
        <div className="bg-white ">
          <div className="flex md:gap-6 gap-3 p-6  ">
            <button
              className={`${
                formType === "businessInfo"
                  ? "bg-blue-900 text-white"
                  : "bg-transparent text-richblack-200"
              } py-2 px-5 rounded-lg  border-black border transition-all duration-200`}
              onClick={BusinessInfo}
            >
              BusinessInfo
            </button>

            <button
              className={`${
                formType === "paymentDetailsForm"
                  ? "bg-blue-900 text-white"
                  : "bg-transparent text-richblack-200"
              } py-2 px-5 rounded-lg  border-black border transition-all duration-200`}
              onClick={PayoutDetails}
            >
              Payout Details
            </button>
          </div>
          <p className=" border"></p>
        </div>
      </div>
    </div>
  );
};

export default NavButtons;
