import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SplitLogo from "../assets/images/SplitLogo.png";
import { sidebarItems } from "../utils/constants";
const BigSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="md:block hidden h-full w-full border-r-2">
      {/* RENDERING THE APP LOGO */}
      <header className="pt-4">
        <div className="flex items-center ml-5 cursor-pointer" onClick={() => navigate("/dashboard")}>
          <img
            src={SplitLogo}
            className="text-center flex items-center justify-center w-18 h-16"
            alt=" Logo"
          />
          <span className="lg:text-4xl  md:text-4xl text-3xl font-bold text-black mb-2">Split Us</span>
        </div>
      </header>
      {/* RENDERING ALL THE OPTIONS */}
      <main className="mt-5">
        {/* HOME OPTION */}
        <div
          onClick={() => {
            navigate("/dashboard");
          }}
          className={`flex items-center py-3 px-6 ${(window.location.pathname === "/dashboard" ||
              window.location.pathname === "/dashboard/") &&
            "bg-blue-200 rounded-r-[32px] text-black"
            }
              md:text-xl
              text-lg
              font-semibold
              hover:bg-gray-200 hover:rounded-r-[32px] cursor-pointer text-gray-600`}
        >
          <div className="mr-3 ">
            {window.location.pathname === "/dashboard" ||
              window.location.pathname === "/dashboard/" ? (
              <MdDashboard />
            ) : (
              <MdOutlineDashboard />
            )}
          </div>
          <div>Home</div>
        </div>
        {/* ALL OTHER OPTIONS */}
        {sidebarItems.map((item, index) => {
          const { iconAbled, iconDisabled, title, link } = item;
          return (
            <div
              onClick={() => {
                navigate(link);
              }}
              key={index}
              className={`flex items-center py-3 px-6 ${window.location.pathname.indexOf(link) !== -1 &&
                "bg-blue-200 rounded-r-[32px] text-black"
                }
              md:text-xl
              text-lg
              font-semibold
              hover:bg-gray-200 hover:rounded-r-[32px] cursor-pointer text-gray-600`}
            >
              <div className="mr-3 ">
                {window.location.pathname.indexOf(link) !== -1
                  ? iconAbled
                  : iconDisabled}
              </div>
              <div>{title}</div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default BigSidebar;