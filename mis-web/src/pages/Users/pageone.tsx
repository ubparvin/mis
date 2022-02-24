import DropdownGender from "./DropdownGender";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseFormRegister } from "react-hook-form";
import { User } from "types";

const civilStatusOptions = [
  "Single",
  "Married",
  "Divorced",
  "Separated",
  "Widowed",
];

type EditUserPageOneProps = {
  choices: string[];
  setGender?: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
  register?: UseFormRegister<User>;
  gender?: string;
};

const PageOne: React.FC<EditUserPageOneProps> = ({
  choices,
  nextStep,
  register,
}) => {
  const navigate = useNavigate();

  return (
    <div className="py-6 px-8 shadow-md sm:rounded-lg bg-white border">
      <div className="grid grid-cols-3 gap-4 mb-7">
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">First Name</label>
          <input
            {...register!("firstName")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Middle Name</label>
          <input
            {...register!("middleName")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Last Name</label>
          <input
            {...register!("lastName")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-7 ...">
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Position</label>
          <input
            {...register!("position")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Date Hired</label>
          <input
            {...register!("dateHired")}
            type="date"
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Gender</label>

          <select
            {...register!("gender")}
            className="outline-0 pr-3 border appearance-none border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          >
            <option value="" disabled selected hidden>
              Select
            </option>
            {choices.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Civil Status</label>
          <select
            {...register!("civilStatus")}
            className="outline-0 pr-3 border appearance-none border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          >
            <option value="" disabled selected hidden>
              Select
            </option>
            {civilStatusOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-7 ...">
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Home Address</label>
          <input
            {...register!("homeAddress")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">
            Provincial Address(optional)
          </label>
          <input
            {...register!("provincialAddress")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-7...">
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Telephone Number</label>
          <input
            {...register!("telephone")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Mobile Number</label>
          <input
            {...register!("mobile")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-10 mb-6 ...">
        <div className="grid grid-cols-1 col-start-2 ...">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 border border-gray-500 hover:text-gray-700 hover:border-gray-700 outline-0 pr-3  h-12 px-3 rounded-lg text-sm focus:outline-none w-full"
          >
            Cancel
          </button>
        </div>
        <div className="grid grid-cols-1 col-start-5 ...">
          <button
            onClick={nextStep}
            className="outline-0 pr-3 border bg-sky-600 h-12 px-3 rounded-lg text-sm hover:bg-sky-700 focus:bg-sky-700 focus:outline-none w-full text-white "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
