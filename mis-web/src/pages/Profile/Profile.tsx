import { Tab } from "@headlessui/react";
import { useState } from "react";
import Overview from "../Users/overview";
import BasicInfo from "../Users/basicinfo";
import ContactInfo from "../Users/contactinfo";
import BenefitsInfo from "../Users//benefitsinfo";
import Barchart from "../Users/barchart";
import DoughnutChart from "../Users/doughnutchart";
import { useOutletContext } from "react-router-dom";
import { User } from "types";
import { getInitials } from "utils/getInitials";

type ContextType = User;

const Profile = () => {
  const [selected, setSelected] = useState("PersonalInformation");
  const [selectedTab, setSelectedTab] = useState("Overview");
  const {
    firstName,
    lastName,
    position,
    dateHired,
    dateOfBirth,
    homeAddress,
    provincialAddress,
    contactPerson,
    contactPersonNumber,
    civilStatus,
    email,
    mobile,
    gender,
    SSS,
    TIN,
    HDMF,
    philHealth,
    beneficiaries,
  } = useOutletContext<ContextType>();

  return (
    <>
      <div className="pt-12 pb-4 px-8 shadow-md sm:rounded-lg bg-white border">
        <div className="">
          <div className="flex flex-row justify-between items-center pb-6">
            <div className=" w-1/4 flex flex-row items-center ">
              <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-sky-600 rounded-full">
                {getInitials(firstName + " " + lastName)}
              </div>
              <p className="ml-4">
                {firstName} {lastName}
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => (window.location.href = "/profile/edit")}
                className="bg-sky-600 mx-4 hover:bg-sky-700 focus:bg-sky-700 py-3.5 px-14 font-semibold text-white rounded cursor-pointer text-xs"
              >
                Edit Profile
              </button>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => setSelected("PersonalInformation")}
              className={`h-10 px-4 py-2 -mb-px text-sm text-center sm:text-base whitespace-nowrap cursor-base focus:outline-none  hover:text-sky-600 ${
                selected === "PersonalInformation"
                  ? "text-sky-600 border-b-2 border-sky-600"
                  : "text-gray-500"
              } focus:text-sky-600 focus:border-b-2 focus:border-sky-600`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setSelected("Statistics")}
              className={`h-10 px-4 py-2 -mb-px text-sm text-center sm:text-base whitespace-nowrap cursor-base focus:outline-none  hover:text-sky-600 ${
                selected === "Statistics"
                  ? "text-sky-600 border-b-2 border-sky-600"
                  : "text-gray-500"
              } focus:text-sky-600 focus:border-b-2 focus:border-sky-600`}
            >
              Statistics
            </button>
          </div>
        </div>
      </div>
      {selected === "PersonalInformation" ? (
        <div className="mt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col justify-between flex-1 pt-8 pb-20 px-8 shadow-md sm:rounded-lg bg-white border ">
              <button
                onClick={() => setSelectedTab("Overview")}
                className={`flex items-center px-4 py-4 transition-colors duration-200 transform rounded-md ${
                  selectedTab === "Overview"
                    ? "text-sky-600 bg-sky-100"
                    : "text-gray-500"
                } hover:bg-sky-100 hover:text-sky-600 focus:bg-sky-100 focus:text-sky-600`}
              >
                Overview
              </button>
              <button
                onClick={() => setSelectedTab("BasicInfo")}
                className={`flex items-center px-4 py-4 mt-5 transition-colors duration-200 transform rounded-md ${
                  selectedTab === "BasicInfo"
                    ? "text-sky-600 bg-sky-100"
                    : "text-gray-500"
                } hover:bg-sky-100   hover:text-sky-600 focus:bg-sky-100 focus:text-sky-600`}
              >
                Basic Info
              </button>
              <button
                onClick={() => setSelectedTab("ContactInfo")}
                className={`flex items-center px-4 py-4 mt-5 transition-colors duration-200 transform rounded-md ${
                  selectedTab === "ContactInfo"
                    ? "text-sky-600 bg-sky-100"
                    : "text-gray-500"
                } hover:bg-sky-100  hover:text-sky-600 focus:bg-sky-100 focus:text-sky-600`}
              >
                Contact and Address Info
              </button>
              <button
                onClick={() => setSelectedTab("BenefitsInfo")}
                className={`flex items-center px-4 py-4 mt-5 transition-colors duration-200 transform rounded-md ${
                  selectedTab === "BenefitsInfo"
                    ? "text-sky-600 bg-sky-100"
                    : "text-gray-500"
                } hover:bg-sky-100  hover:text-sky-600 focus:bg-sky-100 focus:text-sky-600"`}
              >
                Benefits Info
              </button>
            </div>
            <div className="col-span-2 pt-8 pb-4 px-8 shadow-md sm:rounded-lg bg-white border ">
              {selectedTab === "Overview" ? (
                <Overview
                  position={position}
                  dateHired={dateHired}
                  dateOfBirth={dateOfBirth}
                  currentAddress={homeAddress}
                  civilStatus={civilStatus}
                  email={email}
                  mobile={mobile}
                  gender={gender}
                />
              ) : selectedTab === "BasicInfo" ? (
                <BasicInfo
                  position={position}
                  dateHired={dateHired}
                  dateOfBirth={dateOfBirth}
                  civilStatus={civilStatus}
                  gender={gender}
                />
              ) : selectedTab === "ContactInfo" ? (
                <ContactInfo
                  mobile={mobile}
                  email={email}
                  homeAddress={homeAddress}
                  provincialAddress={provincialAddress}
                  contactPerson={contactPerson}
                  contactPersonNumber={contactPersonNumber}
                />
              ) : (
                <BenefitsInfo
                  SSS={SSS}
                  TIN={TIN}
                  HDMF={HDMF}
                  philHealth={philHealth}
                  beneficiaries={beneficiaries}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 flex flex-col justify-between flex-1 pt-6 pb-2 px-8 shadow-md sm:rounded-lg bg-white border">
              <Barchart />
            </div>
            <div className="col-span-2 pt-6 pb-4 px-8 shadow-md sm:rounded-lg bg-white border">
              <DoughnutChart />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
