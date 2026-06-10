import Header from "../components/Header";

const LoginScreen = () => {
  return (
    <>
      <Header />
      <div className="login-page-container container">
        <div className="login-form-container">
          <h1 className="login-header">LOGIN</h1>
          <form>
            <input className="login-inputs" type="email" name="email" placeholder="Email" />
            <input
              className="login-inputs"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
