import { FaRegArrowAltCircleDown, FaSearch } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="bg-[#275D2B] pt-5 pb-48 px-24 text-center">
      <div className="flex justify-end items-center gap-5 text-xl text-white">
        <h1 className="cursor-pointer">Gmail</h1>
        <h1 className="cursor-pointer">Images</h1>
        <FaRegArrowAltCircleDown className="cursor-pointer" />
        {/* <CgProfile className="cursor-pointer" /> */}
        <Navbar/>
      </div>

      <div className="py-20">
        <h1 className="font-semibold text-8xl text-white">Google</h1>
        <input
          type="text"
          name=""
          className="rounded-full my-12 py-3 pl-12 w-2/3"
          placeholder="Search Google or type URL"
          id=""
        />
        <div className="relative flex justify-between">
          <FaSearch className="absolute -mt-20 ml-52" />
        </div>
      </div>
    </div>
  );
};

export default Home;
