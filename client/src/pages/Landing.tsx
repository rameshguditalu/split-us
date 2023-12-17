import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import SplitLogo from "../assets/images/SplitLogo.png";
import PhoneExpense from "../assets/images/phoneExpenses.png";
import PhoneHome from "../assets/images/phoneHome.png";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden outlet">
      <div className=" flex justify-between flex-wrap items-center px-4 py-12 max-w-6xl mx-auto">
        <div className="w-full md:w-[67%] lg:w-[40%] flex flex-col sm:justify-start justify-center sm:text-left text-center m-auto">
          <div className="flex items-center sm:justify-start justify-center mb-2">
            <img
              src={SplitLogo}
              className="text-center flex items-center justify-center h-[80px]"
              alt=" Logo"
            />
            <span className="lg:text-5xl  md:text-4xl text-3xl font-bold text-black mb-2">
              Split Us
            </span>
          </div>
          <div className="lg:text-6xl  md:text-4xl text-3xl font-bold text-black w-full">
            Organize expenses with your
            <span className="text-bluegg">
              <Typewriter
                options={{
                  strings: [
                    "friends.",
                    "roommates.",
                    "partner.",
                    "colleagues.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="lg:text-3xl md:text-xl text-lg font-semibold text-gray-500 w-full md:mt-8 mt-4">
            Make sharing expenses simple for travel, activities and daily life.
          </div>
          <div
            onClick={() => navigate("/signup")}
            className="md:mt-8 mt-4 flex sm:mx-0 mx-auto items-center mb-6 w-[200px] justify-center px-7 py-3 bg-zinc-700 text-white text-lg font-medium text-base uppercase rounded-md shadow-md cursor-pointer"
          >
            Get Started
          </div>
        </div>
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 flex justify-center items-center m-auto">
          <img
            src={PhoneExpense}
            alt="key"
            className="  w-[320px] h-[550px] rotate-[25deg] "
          />
          <img
            src={PhoneHome}
            alt="key"
            className="  w-[320px] h-[550px] rotate-[25deg]"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
