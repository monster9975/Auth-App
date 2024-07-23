import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { registerUser } from "../Auth/authSlice";

const Register = () => {
  let { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Password do not match");
    }

    dispatch(registerUser(formData));
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
      <h1 className="text-center display-5">Register here</h1>
      <div className="card my-3 p-2">
        <form onSubmit={handleSubmit}>
          <form>
            <input
              type="text"
              placeholder="enter name"
              className="form-control my-2 "
              required
              onChange={handleChange}
              value={name}
              name="name"
            />
            <input
              type="email"
              placeholder="enter email"
              className="form-control my-2 "
              required
              onChange={handleChange}
              value={email}
              name="email"
            />
            <input
              type="password"
              placeholder="enter password"
              className="form-control my-2 "
              required
              onChange={handleChange}
              value={password}
              name="password"
            />
            <input
              type="password"
              placeholder="confirm password"
              className="form-control my-2 "
              required
              onChange={handleChange}
              value={password2}
              name="password2"
            />
          </form>
          <button className="btn btn-success w-100 my-2">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
