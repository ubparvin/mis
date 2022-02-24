import { getInitials } from "utils/getInitials";

const AdminLeaveSummary = () => {
  const employees = [
    {
      name: "Jayla Kramer",
      dateText: "Nov 8 - Nov 10",
      leaveType: "VL",
    },
    {
      name: "Harrison Strong",
      dateText: "Nov 8 - Nov 10",
      leaveType: "VL",
    },
    {
      name: "Taryn Boone",
      dateText: "Today",
      leaveType: "VL",
    },
    {
      name: "Uriah Rojas",
      dateText: "Today",
      leaveType: "VL",
    },
    {
      name: "Harper Owens",
      dateText: "Nov 8 - Nov 10",
      leaveType: "VL",
    },
  ];
  return (
    <>
      <div className="col-span-2 text-black pt-6 text-sm">
        Employees On Leave
      </div>
      {employees?.map((em, i) => (
        <div className="grid grid-cols-5 gap-2 my-6 font-light">
          <div className="col-span-2 flex flex-row items-center ">
            <div className="inline-flex items-center justify-center w-8 h-8 text-xs text-white bg-sky-600 rounded-full">
              {getInitials(em.name)}
            </div>
            <p className="text-sky-600 text-xs ml-2">{em.name}</p>
          </div>
          <div className="col-span-2 flex flex-row items-center justify-center ">
            <p className="text-sky-600 text-xs ml-2">{em.dateText}</p>
          </div>
          <div className="col-span-1 flex flex-row items-center justify-end ">
            <p className="text-sky-600 text-xs ml-2">{em.leaveType}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AdminLeaveSummary;
