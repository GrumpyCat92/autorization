import { useEffect, useState } from "react";
import { url } from "../Constants";

export default function Profile({
  token,
  logoutClick,
  setKnow,
  setToken,
  logout,
}) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    fetch(`${url}/private/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json)
      .then((data) => {
        setImg(data.avatar);
        setName(data.name);
      })
      .catch((er) => {
        logout();
      });
  }, []);

  return (
    <div>
      <form className="row" onSubmit={logoutClick}>
        <div className="col-7">
          <h3>Neto social</h3>
        </div>
        <div className="col-2">{name}</div>
        <div className="col-2">
          <img src={img} />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-outline-danger">
            Logout
          </button>
        </div>
      </form>
    </div>
  );
}
