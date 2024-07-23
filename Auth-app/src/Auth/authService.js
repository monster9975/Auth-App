import axios from "axios";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { loginUser } from "./authSlice";

const API_URL = "/api/user/";

const register = async (formData) => {
  const response = await axios.post(API_URL + "register", formData);

  localStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
};
const login = async (formData) => {
  const response = await axios.post(API_URL + "login", formData);

  localStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
