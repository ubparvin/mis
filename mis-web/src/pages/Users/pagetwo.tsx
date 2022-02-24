import { UseFormRegister } from "react-hook-form";
import { User } from "types";

type EditUserPageTwoProps = {
  nextStep: () => void;
  prevStep: () => void;
  register?: UseFormRegister<User>;
};

const PageTwo: React.FC<EditUserPageTwoProps> = ({
  nextStep,
  prevStep,
  register,
}) => {
  return (
    <div className="py-6 px-8 shadow-md sm:rounded-lg bg-white border">
      <div className="grid grid-cols-2 gap-4 mb-7 ...">
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Date of Birth</label>
          <input
            {...register!("dateOfBirth")}
            type="date"
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Place of Birth</label>
          <input
            {...register!("placeOfBirth")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-7 ...">
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">Contact Person</label>
          <input
            {...register!("contactPerson")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">
            Contact Person Number
          </label>
          <input
            {...register!("contactPersonNumber")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-7 ...">
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">SSS Number</label>
          <input
            {...register!("SSS")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">PhilHealth Number</label>
          <input
            {...register!("philHealth")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-7 ...">
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">HDMF Number</label>
          <input
            {...register!("HDMF")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
        <div className="grid grid-cols-1 ...">
          <label className="text-xs text-sky-600 my-2">TIN Number</label>
          <input
            {...register!("TIN")}
            className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-10 mb-6 ...">
        <div className="grid grid-cols-1 col-start-2 ...">
          <button
            onClick={prevStep}
            className="text-gray-500 border border-gray-500 hover:text-gray-700 hover:border-gray-700 outline-0 pr-3  h-12 px-3 rounded-lg text-sm focus:outline-none w-full"
          >
            Back
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

export default PageTwo;
