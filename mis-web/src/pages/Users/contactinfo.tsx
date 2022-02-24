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

type ContactInfoProps = {
  email?: string;
  mobile?: string;
  homeAddress?: string;
  provincialAddress?: string;
  contactPerson?: string;
  contactPersonNumber?: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  mobile,
  homeAddress,
  provincialAddress,
  contactPerson,
  contactPersonNumber,
}) => {
  return (
    <div className="grid grid-cols-2 mt-4">
      <div className="flex flex-row mb-10 ml-10">
        <PhoneIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-600"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-600">{mobile}</p>
          <p className="text-xs text-gray-500 font-light">Mobile</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <InboxInIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-600"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-600">{email}</p>
          <p className="text-xs text-gray-500 font-light">Email Address</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <LocationMarkerIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-600"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-600">{homeAddress}</p>
          <p className="text-xs text-gray-500 font-light">Home Address</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <LocationMarkerIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-600"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-600">{provincialAddress}</p>
          <p className="text-xs text-gray-500 font-light">Provincial Address</p>
        </div>
      </div>
      <p className="col-span-2 mb-8 ml-6">In Case of Emergency</p>
      <div className="flex flex-row mb-10 ml-10">
        <UserIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-600"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-600">{contactPerson}</p>
          <p className="text-xs text-gray-500 font-light">Contact Person</p>
        </div>
      </div>
      <div className="flex flex-row mb-10 ml-10">
        <PhoneIcon
          className="w-6 h-6 ml-2 -mr-1 text-gray-500 hover:text-gray-600"
          aria-hidden="true"
        />
        <div className="ml-3">
          <p className="text-sm text-gray-600">{contactPersonNumber} </p>
          <p className="text-xs text-gray-500 font-light">Contact Number</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
