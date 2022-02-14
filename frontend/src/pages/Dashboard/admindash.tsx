const greeting = () => {
  const date = new Date().getHours();
  return date < 12
    ? "Good Morning"
    : date < 18
    ? "Good Afternoon"
    : "Good Evening";
};

type AdminDash = {
  firstName: string | null;
};

const AdminDash: React.FC<AdminDash> = ({ firstName }) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="text-2xl">
          {greeting()}, {firstName}!
        </div>
        <div className="text-sm text-right text-gray-600 font-light align-center">
          Your current work schedule is Monday to Friday, 8m to 5pm
        </div>
      </div>
      <div className="grid grid-cols-3 mt-6 gap-8 text-white ">
        <div className="bg-sky-900 rounded-md flex flex-col items-center py-10 shadow-lg">
          <p className="text-6xl ">200</p>
          <p className="mt-4 text-light text-sm">Number of Employees</p>
        </div>
        <div className="bg-sky-600 rounded-md flex flex-col items-center py-10 shadow-lg">
          <p className="text-6xl ">5</p>
          <p className="mt-4 text-light text-sm">Employees on Leave</p>
        </div>
        <div className="bg-sky-500 rounded-md flex flex-col items-center py-10 shadow-lg">
          <p className="text-6xl ">2</p>
          <p className="mt-4 text-light text-sm">Leave Requests</p>
        </div>
      </div>
    </>
  );
};

export default AdminDash;
