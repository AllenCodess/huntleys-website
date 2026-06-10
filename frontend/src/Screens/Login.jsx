import Header from "../components/Header";
import { useState } from "react";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="login-page-container container">
        <div className="login-form-container">
          <h1 className="login-header">SIGN IN</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="login-inputs"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="login-inputs"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
