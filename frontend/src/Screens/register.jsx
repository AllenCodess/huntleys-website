import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

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

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }).unwrap();

      dispatch(setCredentials({ ...res }));
      toast.success(`Welcome ${res.name}!`);
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Header />
      <div className="register-page-container container">
        <div className="register-form-container">
          <h1 className="register-header">CREATE ACCOUNT</h1>

          <form onSubmit={submitHandler}>
            <input
              className="register-inputs"
              type="text"
              name="name"
              value={formData.name}
              placeholder="name"
              onChange={handleChange}
            />

            <input
              className="register-inputs"
              type="email"
              name="email"
              value={formData.email}
              placeholder="email"
              onChange={handleChange}
            />

            <input
              className="register-inputs"
              type="password"
              name="password"
              value={formData.password}
              placeholder="password"
              onChange={handleChange}
            />

            <input
              className="register-inputs"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="confirm password"
              onChange={handleChange}
            />

            <button disabled={isLoading} className="register-btn" type="submit">
              {isLoading ? "Creating Account..." : "Register"}
            </button>
          </form>

          <p className="register-login-text">
            Already have an account?
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}> Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
