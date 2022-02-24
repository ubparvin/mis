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

type OverviewProps = {
  position?: string;
  dateHired?: string;
  currentAddress?: string;
  email?: string;
  dateOfBirth?: string;
  mobile?: string;
  gender?: string;
  civilStatus?: string;
};

const Overview: React.FC<OverviewProps> = ({
  position,
  dateHired,
  dateOfBirth,
  currentAddress,
  civilStatus,
  email,
  mobile,
  gender,
}) => {
  return (
    <div className="grid grid-cols-2 pt-4">
      <div className="flex flex-row mb-10 ml-10">
        <BriefcaseIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-500"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-500">{position}</p>
          <p className="text-xs text-gray-500 font-light">Position</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <CalendarIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-500"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-500">
            {moment(dateHired).format("MMMM DD, YYYY")}
          </p>
          <p className="text-xs text-gray-500 font-light">Date Hired</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <LocationMarkerIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-500"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-500">{currentAddress}</p>
          <p className="text-xs text-gray-500 font-light">Current Address</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <InboxInIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-500"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-500">{email}</p>
          <p className="text-xs text-gray-500 font-light">Email Address</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <CakeIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-500"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-500">
            {moment(dateOfBirth).format("MMMM DD, YYYY")}
          </p>
          <p className="text-xs text-gray-500 font-light">Birth Date</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <PhoneIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-500"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-500">{mobile}</p>
          <p className="text-xs text-gray-500 font-light">Mobile</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <UserIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-500"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-500">{gender}</p>
          <p className="text-xs text-gray-500 font-light">Gender</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <HeartIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-500"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-500">{civilStatus}</p>
          <p className="text-xs text-gray-500 font-light">Civil Status</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
