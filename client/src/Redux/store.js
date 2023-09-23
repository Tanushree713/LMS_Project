import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import CourseSliceReducer from "./Slices/CourseSlice";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
  course: CourseSliceReducer,

  },
  devtools: true,
});

export default store;
