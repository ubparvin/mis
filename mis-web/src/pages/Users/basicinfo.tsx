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

type BasicInfoProps = {
  position?: string;
  dateHired?: string;
  dateOfBirth?: string;
  gender?: string;
  civilStatus?: string;
};

const BasicInfo: React.FC<BasicInfoProps> = ({
  position,
  dateHired,
  dateOfBirth,
  gender,
  civilStatus,
}) => {
  return (
    <div className="grid grid-cols-2 mt-4">
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
            {" "}
            {moment(dateHired).format("MMMM DD, YYYY")}
          </p>
          <p className="text-xs text-gray-500 font-light">Date Hired</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <CakeIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-500"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-500">
            {" "}
            {moment(dateOfBirth).format("MMMM DD, YYYY")}
          </p>
          <p className="text-xs text-gray-500 font-light">Birth Date</p>
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

export default BasicInfo;
