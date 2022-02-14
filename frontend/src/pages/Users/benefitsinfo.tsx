import {
  BriefcaseIcon,
  CalendarIcon,
  LocationMarkerIcon,
  CakeIcon,
  PhoneIcon,
  UserIcon,
  HeartIcon,
  InboxInIcon,
} from "@heroicons/react/outline";
import moment from "moment";
import React from "react";
import { Beneficiary } from "types";

type BenefitsInfoProps = {
  SSS?: string;
  TIN?: string;
  HDMF?: string;
  philHealth?: string;
  beneficiaries?: Beneficiary[];
};

const BenefitsInfo: React.FC<BenefitsInfoProps> = ({
  SSS,
  TIN,
  HDMF,
  philHealth,
  beneficiaries,
}) => {
  return (
    <div className="grid grid-cols-2">
      <p className="col-span-2 mb-4 ml-6 text-gray-500 font-semibold">
        Government Mandated Benefits Info
      </p>
      <div className="flex flex-row mb-7 ml-10">
        <div className="ml-3">
          <p className="text-sm text-gray-600">{SSS}</p>
          <p className="text-xs text-gray-500 font-light">SSS Number</p>
        </div>
      </div>
      <div className="flex flex-row mb-7 ml-10">
        <div className="ml-3">
          <p className="text-sm text-gray-600">{TIN}</p>
          <p className="text-xs text-gray-500 font-light">TIN Number</p>
        </div>
      </div>
      <div className="flex flex-row mb-7 ml-10">
        <div className="ml-3">
          <p className="text-sm text-gray-600">{HDMF}</p>
          <p className="text-xs text-gray-500 font-light">HDMF Number</p>
        </div>
      </div>
      <div className="flex flex-row mb-7 ml-10">
        <div className="ml-3">
          <p className="text-sm text-gray-600">{philHealth}</p>
          <p className="text-xs text-gray-500 font-light">PhilHealth Number</p>
        </div>
      </div>
      <p className="col-span-2 mb-4 ml-6 text-gray-500 font-semibold">
        Dependents and Benefeciaries
      </p>
      {beneficiaries?.map(
        ({ name, dateOfBirth, relationToEmployee }, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-row mb-7 ml-10">
              <div className="ml-3">
                <p className="text-sm text-gray-600">{name}</p>
                <p className="text-xs text-gray-500 font-light">
                  {relationToEmployee} Name
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-7 ml-10">
              <div className="ml-3">
                <p className="text-sm text-gray-600">
                  {moment(dateOfBirth).format("MMMM DD, YYYY")}
                </p>
                <p className="text-xs text-gray-500 font-light">
                  {relationToEmployee} Birth Date
                </p>
              </div>
            </div>
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default BenefitsInfo;
