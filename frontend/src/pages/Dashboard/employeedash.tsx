const greeting = () => {
  const date = new Date().getHours();
  return date < 12
    ? "Good Morning"
    : date < 18
    ? "Good Afternoon"
    : "Good Evening";
};

const EmployeeDash: React.FC<{ firstName: string | null }> = ({
  firstName,
}) => {
  return (
    <>
      <div>
        <div className="text-2xl">
          {greeting()}, {firstName}!
        </div>
        <div className="text-sm text-gray-600 font-light mt-2">
          Your current work schedule is Monday to Friday, 8m to 5pm
        </div>
      </div>
      <div className="grid grid-cols-5 mt-6 gap-2 text-white ">
        <div className="bg-sky-900 rounded-md flex flex-col items-center py-6">
          <p className="text-5xl ">200</p>
          <p className="mt-2 text-light text-sm">Remaining VL</p>
        </div>
        <div className="bg-sky-600 rounded-md flex flex-col items-center py-6">
          <p className="text-5xl ">5</p>
          <p className="mt-2 text-light text-sm">Remaining SL</p>
        </div>
        <div className="bg-sky-500 rounded-md flex flex-col items-center py-6">
          <p className="text-5xl ">2</p>
          <p className="mt-2 text-light text-sm">Remaining EL</p>
        </div>
        <div className="bg-sky-400 rounded-md flex flex-col items-center py-6">
          <p className="text-5xl ">5</p>
          <p className="mt-2 text-light text-sm">Leaves This Month</p>
        </div>
        <div className="bg-sky-300 rounded-md flex flex-col items-center py-6">
          <p className="text-5xl ">2</p>
          <p className="mt-2 text-light text-sm">Lates This Month</p>
        </div>
      </div>
    </>
  );
};

export default EmployeeDash;
