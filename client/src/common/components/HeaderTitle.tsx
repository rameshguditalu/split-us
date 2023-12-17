import BackButton from "./BackButton";

const HeaderTitle = (props : { title:any, icon:any }) => {
  return (
    <div className="md:text-3xl text-2xl bg-white font-bold flex items-center py-2 w-full md:px-16 px-4 mb-5 ">
      <BackButton />
      <div className="ml-5">{props.icon}</div>
      <span className=" ml-2 flex items-center">{props.title}</span>
    </div>
  );
};

export default HeaderTitle;