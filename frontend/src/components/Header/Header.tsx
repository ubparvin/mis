import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInitials } from "utils/getInitials";

type HeaderProps = {
  firstName: string;
  lastName: string;
  email: string;
};

const Header: React.FC<HeaderProps> = ({ firstName, lastName, email }) => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  return (
    <div className="flex items-center justify-between flex-wrap p-4 sticky">
      <div className="w-full flex-grow flex items-center place-items-end">
        <div className="text-sm flex-grow">
          <button
            type="button"
            className="bg-sky-600 mx-4 hover:bg-sky-700 focus:bg-sky-700 py-2 px-8 font-semibold text-white rounded cursor-pointer text-sm"
          >
            Time in
          </button>
          <button
            type="button"
            disabled
            className="space-x-2 border-sky-600 border text-sky-600 py-1.5 px-8 rounded text-sm font-semibold text-center"
          >
            <p className="inline-block">
              {date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>

            <p className="inline-block">
              {date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </button>
        </div>
        <div className="flex flex-row place-items-center">
          <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-sky-600 rounded-full">
            {getInitials(firstName + " " + lastName)}
          </div>
          <div className="mx-2">
            <p className="text-gray-500">
              {firstName} {lastName}
            </p>
            <p className="text-xs text-sky-700">{email}</p>
          </div>
          <div>
            <Menu as="div">
              <div>
                <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <ChevronDownIcon
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-5 w-56 mt-6 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-sky-600 text-white" : "text-gray-900"
                          } group flex rounded-md  w-full px-2 py-2 text-sm`}
                        >
                          Switch to admin
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => (window.location.href = "/profile")}
                          className={`${
                            active ? "bg-sky-600 text-white" : "text-gray-900"
                          } group flex rounded-md  w-full px-2 py-2 text-sm`}
                        >
                          Profile
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-sky-600 text-white" : "text-gray-900"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          onClick={() => {
                            localStorage.clear();
                            window.location.replace("/");
                          }}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
