import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { buildCreateApi } from "@reduxjs/toolkit/query";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userExist ? userExist : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, function (state, action) {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      //login

      .addCase(loginUser.pending, function (state, action) {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
        state.isSuccess = false;
      });
  },
});

export default authSlice.reducer;

//register user

export const registerUser = createAsyncThunk(
  "AUTH/REGISTER",
  async (FormData, thunkAPI) => {
    try {
      return await authService.register(FormData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//login
export const loginUser = createAsyncThunk(
  "AUTH/LOGIN",
  async (FormData, thunkAPI) => {
    try {
      return await authService.login(FormData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//logout

export const logOutUser = createAsyncThunk("AUTH/LOGOUT", async () => {
  localStorage.removeItem("user");
});
