import HomeLayout from "../../Layouts/HomeLayouts/HomeLayout";
import { Link } from "react-router-dom";
import homePageImg from "../../Assets/Images/homePageMainImage.png";

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh] ">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find Out best
            <span className="text-yellow-500 font-bold">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200">
            We have a large library of courses taught by highly skilled and
            qualified faculties at affordable-price.
          </p>
          <div className="space-x-6">
            <Link to="/courses">
              <button className="bg-yellow-500 cursor-pointer rounded-md font-semibold text-lg hover:bg-yellow-600 px-5 py-3 transition-all ease-in-out duration-300 ">
                {" "}
                Explore Courses
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-yellow-500 cursor-pointer rounded-md font-semibold text-lg hover:bg-yellow-600 px-5 py-3 transition-all ease-in-out duration-300 ">
                {" "}
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-center rounded-md">
          <img alt="homePageImg" src={homePageImg} />
        </div>
      </div>
    </HomeLayout>
  );
}
export default HomePage;
