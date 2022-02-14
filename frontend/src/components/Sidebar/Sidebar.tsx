import { Route, routes } from "routes";
import { SVGProps, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "assets/images/logo.png";

const SideBar = () => {
  const [userCode] = useState("EM");
  const navigate = useNavigate();
  return (
    <div className="w-2/12 shadow-lg px-8 py-5 min-h-screen border">
      <div className="flex place-items-center place-content-center">
        <img src={logo} alt="logo.png" width={140} height={35} />
      </div>
      <div className="flex flex-col gap-2 my-24">
        {routes.map(({ name, Icon, path, access }: Route, idx: number) => {
          if (access?.includes(userCode)) {
            return (
              <NavLink
                key={idx}
                to={`/${path}`}
                className={({ isActive }) =>
                  `flex gap-4 place-items-center cursor-pointer my-2 text-base capitalize hover:text-sky-600 ${
                    isActive ? "text-sky-600" : "text-gray-500"
                  } `
                }
              >
                {Icon && <Icon className="h-5 w-5" />}
                {name}
              </NavLink>
            );
          }
          return false;
        })}
      </div>
      <p className="text-xs text-sky-600 absolute bottom-8">
        © TechByte System Inc.
      </p>
    </div>
  );
};

export default SideBar;
