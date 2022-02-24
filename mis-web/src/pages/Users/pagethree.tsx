import {
  FieldArrayMethodProps,
  FieldArrayWithId,
  UseFormRegister,
} from "react-hook-form";
import { Beneficiary, User } from "types";

type EditUserPageThreeProps = {
  nextStep: () => void;
  prevStep: () => void;
  register?: UseFormRegister<User>;
  fields?: FieldArrayWithId<User, "beneficiaries", "id">[];
  append?: (
    value: Partial<Beneficiary> | Partial<Beneficiary>[],
    options?: FieldArrayMethodProps | undefined
  ) => void;
  remove?: (index?: number | number[] | undefined) => void;
  submitting?: boolean;
  setSubmitting?: React.Dispatch<React.SetStateAction<boolean>>;
};

const PageThree: React.FC<EditUserPageThreeProps> = ({
  prevStep,
  fields,
  register,
  append,
  remove,
  submitting,
  setSubmitting,
}) => {
  return (
    <div className="px-8 py-6 h-2/3 shadow-md sm:rounded-lg border">
      {fields?.map((field, index) => (
        <div key={field.id} className="grid grid-cols-2 gap-4 mb-7 ...">
          <div className="grid grid-cols-1 ...">
            <label className="text-xs text-sky-600 my-2">
              {field.relationToEmployee} Name
            </label>
            <input
              {...register!(`beneficiaries.${index}.name` as const)}
              className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
            />
          </div>
          <div className="grid grid-cols-1 ...">
            <label className="text-xs text-sky-600 my-2">
              {field.relationToEmployee} Date of Birth
            </label>
            <input
              {...register!(`beneficiaries.${index}.dateOfBirth` as const)}
              type="date"
              className="outline-0 pr-3 border border-gray-300 text-gray-500 bg-white h-12 px-3 rounded-lg text-sm focus:outline-none w-full hover:border-sky-600 focus:border-sky-600"
            />
          </div>
        </div>
      ))}
      <div className="grid grid-cols-2 gap-4 mb-7 ...">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              let lastIndex = fields!.length - 1;
              remove!(lastIndex);
            }}
            className="text-xs bg-rose-500 text-white rounded border-rose-500 hover:bg-rose-600 focus:bg-rose-600 my-2 px-3 h-12 w-1/4"
          >
            Remove Child
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              append!({
                name: "",
                dateOfBirth: "",
                relationToEmployee: "Child",
              });
            }}
            className="text-xs text-white rounded bg-sky-600 hover:bg-sky-700 focus:bg-sky-700 my-2 px-3 h-12 w-1/4"
          >
            Add Child
          </button>
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
            type="submit"
            className="outline-0 pr-3 bg-sky-600 h-12 px-3 rounded-lg text-sm hover:bg-sky-700 focus:bg-sky-700 focus:outline-none w-full text-white "
          >
            {!submitting ? (
              "Save"
            ) : (
              <div className="flex justify-center">
                <div className="w-6 h-6 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
