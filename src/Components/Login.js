export default function Login({
  login,
  password,
  loginClick,
  setLogin,
  setPassword,
}) {
  const changeLogin = ({ target }) => {
    setLogin(target.value);
  };

  const changePassword = ({ target }) => {
    setPassword(target.value);
  };
  return (
    <div>
      <form className="row" onSubmit={loginClick}>
        <div className="col-7">
          <h3>Neto social</h3>
        </div>
        <div className="col-2">
          <label htmlFor="login" className="visually-hidden">
            Login
          </label>
          <input
            type="text"
            className="form-control"
            id="login"
            placeholder="Login"
            value={login}
            onChange={changeLogin}
          />
        </div>
        <div className="col-2">
          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={changePassword}
          />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-outline-success">
            Login
          </button>
        </div>
      </form>
      <div className="row gray">
        <div className="col-auto">
          <h1>Neto Social</h1>
          <h3>Facebook and VK killer.</h3>
        </div>
      </div>
    </div>
  );
}
