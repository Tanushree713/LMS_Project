import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Signup from "./Pages/SignupPage/SignupPage";
import Signin from "./Pages/LoginPage/LoginPage";
import ContactPage from "./Pages/ContactPage/Contact";
import CourseList from "./Pages/Courses/CourseLists";
import CourseDescriptions from "./Pages/Courses/CourseDescriptions";
import RequireAuth from "./Components/Auth/RequireAuth";
import CreateCourse from "./Pages/Courses/CreatingCourse";
import Profile from "./Pages/User/Profile";
import EditProfile from "./Pages/User/EditProfile";
import Denied from './Pages/DeniedPage/Denied';
import Checkout from "./Pages/Payment/Checkout";
import Displaylectures from "./Pages/DashBoard/DisplayLectures";
import AddLecture from "./Pages/DashBoard/AddedLectures";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/denied' element={<Denied/>} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/course/descriptions" element={<CourseDescriptions/>} />
        <Route element={<RequireAuth allowedRoles={["ADMIN" , "USER"]}/>}>
        <Route path="/user/profile"  element={<Profile />}  />
        <Route path='/user/editprofile' element={<EditProfile />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/course/displaylectures" element={<Displaylectures/>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
          <Route path="/course/create" element={<CreateCourse/>} />
          <Route path="/course/addlecture" element={<AddLecture />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
