import { useState } from "react";
import Adminchart from "./adminchart";
import AdminDash from "./admindash";
import AdminLeaveSummary from "./adminLeaveSummary";
import EmployeeDash from "./employeedash";
import EmployeeBarchart from "./employeebarchart";
import EmployeeDoughnutChart from "./employeedoughnut";
import { useOutletContext } from "react-router-dom";

type ContextType = {
  firstName: string | null;
};

const Dashboard = () => {
  const [access] = useState("EM");
  const { firstName } = useOutletContext<ContextType>();

  return (
    <>
      {access === "SA" || access === "CA" ? (
        <AdminDash firstName={firstName} />
      ) : (
        <EmployeeDash firstName={firstName} />
      )}
      <div className="mt-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 flex flex-col justify-between flex-1 pb-2 px-8 shadow-lg sm:rounded-lg bg-white border">
            {access === "SA" || access === "CA" ? (
              <Adminchart />
            ) : (
              <EmployeeBarchart />
            )}
          </div>
          <div className="col-span-2 pb-4 px-8 shadow-lg sm:rounded-lg bg-white border">
            {access === "SA" || access === "CA" ? (
              <AdminLeaveSummary />
            ) : (
              <EmployeeDoughnutChart />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
