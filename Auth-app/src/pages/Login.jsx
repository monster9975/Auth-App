import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { loginUser } from "../Auth/authSlice";

const Login = () => {
  let { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container p-5">
      <h1 className="text-center display-5">Login here</h1>
      <div className="card my-3 p-2">
        <form onSubmit={handleSubmit}>
          <form>
            <input
              type="email"
              placeholder="enter email"
              className="form-control my-2 required"
              value={email}
              onChange={handleChange}
              name="email"
            />
            <input
              type="password"
              placeholder="enter password"
              className="form-control my-2 required"
              value={password}
              onChange={handleChange}
              name="password"
            />
          </form>
          <button className="btn btn-success w-100 my-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
