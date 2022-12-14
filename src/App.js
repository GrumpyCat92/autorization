import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import News from "./Components/News";
import Profile from "./Components/Profile";
import { url } from "./Constants";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [know, setKnow] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    checkAuth() && setKnow(true);
  }, []);

  useEffect(() => {
    checkAuth();
  }, [know]);

  const checkAuth = () => {
    const authToken = localStorage.getItem("token");
    if (authToken != null) {
      setToken(authToken);
      return true;
    } else {
      return false;
    }
  };

  const loginClick = (e) => {
    e.preventDefault();
    fetch(`${url}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        sessionStorage.setItem("authToken", data.token);
        setKnow(true);
      });
  };

  const logoutClick = (e) => {
    e.preventDefault();
    logout();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setKnow(false);
  };

  return (
    <div className="container">
      {!know && (
        <Login
          loginClick={loginClick}
          login={login}
          setLogin={setLogin}
          password={password}
          setPassword={setPassword}
          logout={logout}
        />
      )}
      {know && (
        <div>
          <Profile
            token={token}
            logoutClick={logoutClick}
            setKnow={setKnow}
            setToken={setToken}
            logout={logout}
          />
          <News
            token={token}
            setKnow={setKnow}
            setToken={setToken}
            logout={logout}
          />
        </div>
      )}
    </div>
  );
}

export default App;
