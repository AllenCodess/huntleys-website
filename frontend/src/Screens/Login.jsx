import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success(`Welcome back ${res.name}!`);
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Header />
      <div className="login-page-container container">
        <div className="login-form-container">
          <h1 className="login-header">SIGN IN</h1>
          <form onSubmit={submitHandler}>
            <input
              className="login-inputs"
              type="email"
              name="email"
              value={formData.email}
              placeholder="email"
              onChange={handleChange}
            />
            <input
              className="login-inputs"
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button className="login-btn">Login</button>
            <p className="register-text">
              No Account? <Link to={"/register"}>Register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
