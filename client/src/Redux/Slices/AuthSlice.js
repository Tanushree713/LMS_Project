import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {

    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {},
};



export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = axiosInstance.post("/user/register", data);
    toast.promise(res, {
      loading: "Wait ! Creating Your Account ",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to create an account",
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const login = createAsyncThunk("/auth/signin", async (data) => {
  try {
    const res = axiosInstance.post("user/login", data);
    toast.promise(res, {
      loading: "Wait! authenticating your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to authenticate your account",
    });
    return await res;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
});

export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
    const res = axiosInstance.get("user/logout");
    toast.promise(res, {
      loading: "Wait! Logout in Progress...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to Logout",
    });
    return await res;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});


export const getUserData = createAsyncThunk("/user/details", async () => {
  try {
      const res = axiosInstance.get("user/me");
      return (await res).data;
  } catch(error) {
      toast.error(error.message);
  }
})



export const updateProfile = createAsyncThunk("/user/update/profile", async (data) => {
  try {
      const res = axiosInstance.put(`user/update/${data[0]}`, data[1]);
      toast.promise(res, {
          loading: "Wait! profile update in progress...",
          success: (data) => {
              return data?.data?.message;
          },
          error: "Failed to update profile"
      });
      return (await res).data;
  } catch(error) {
      toast.error(error?.response?.data?.message);
  }
})




const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.data = {};
        state.isLoggedIn = false;
        state.role = " ";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        if(!action?.payload?.user) return;
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role
    });
}
});


export const {} = AuthSlice.actions;
export default AuthSlice.reducer;