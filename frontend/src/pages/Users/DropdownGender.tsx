import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  choices: string[];
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
}

const DropdownGender: React.FC<ModalProps> = ({
  choices,
  gender,
  setGender,
}) => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className="flex flex-row w-64 justify-between items-center outline-0 border border-gray-300 bg-white h-12 px-3 rounded-lg text-sm hover:border-sky-600 focus:border-sky-600">
            <p className="mr-18">{gender}</p>
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-slate-300 hover:text-black-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {choices?.map((item, index) => (
            <div className="px-1 py-1 " key={index}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-sky-600 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => setGender(item)}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropdownGender;
