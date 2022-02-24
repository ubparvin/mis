import { SearchIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const users = [
  {
    name: "Marjon Camba",
    email: "marjon.camba@techbytesystem.com",
    position: "Software Engineer",
    department: "Engineering",
    status: "active",
    role: "employee",
  },
  {
    name: "Marjon Camba",
    email: "marjon.camba@techbytesystem.com",
    position: "Software Engineer",
    department: "Engineering",
    status: "active",
    role: "employee",
  },
  {
    name: "Marjon Camba",
    email: "marjon.camba@techbytesystem.com",
    position: "Software Engineer",
    department: "Engineering",
    status: "active",
    role: "employee",
  },
  {
    name: "Marjon Camba",
    email: "marjon.camba@techbytesystem.com",
    position: "Software Engineer",
    department: "Engineering",
    status: "active",
    role: "employee",
  },
  {
    name: "Marjon Camba",
    email: "marjon.camba@techbytesystem.com",
    position: "Software Engineer",
    department: "Engineering",
    status: "active",
    role: "employee",
  },
];

const Users = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-full flex-grow flex items-center place-items-end">
          <div className="relative mx-auto mr-10">
            <input
              className="peer border border-gray-300 bg-white h-10 px-6 pr-16 py-6 rounded-lg text-sm hover:border-sky-600 focus:outline-none focus:border-sky-600 "
              type="text"
              name="search"
              placeholder="Search"
            />
            <SearchIcon className="absolute text-gray-400 peer-hover:text-sky-600 peer-focus:text-sky-600 right-0 top-0 mt-4 mr-4 h-5 w-5" />
          </div>
          <div>
            <a
              href="/users/new"
              className="py-4 px-12 rounded-lg bg-sky-600 text-sm text-white font-semibold hover:bg-sky-700 focus:outline-none focus:bg-sky-700"
            >
              Add User
            </a>
          </div>
        </div>
      </div>
      <div className="flex relative flex-col mt-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow border-b overflow-hidden border-gray-200 sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-sky-600">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Email Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {users.map((person) => (
                    <tr
                      key={person.email}
                      className="even:bg-sky-600 even:bg-opacity-10 hover:bg-sky-600 hover:bg-opacity-10"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm text-gray-500">
                          {person.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm text-gray-500">
                          {person.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm  text-gray-500">
                          {person.position}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm text-gray-500">
                          {person.role}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center underline">
                        <a
                          href="/users/view"
                          className="text-center text-sm text-sky-600 hover:text-sky-700"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
