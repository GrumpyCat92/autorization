import { useEffect, useState } from "react";
import { url } from "../Constants";

export default function News({ token, setKnow, setToken, logout }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`${url}/private/news`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json)
      .then((data) => {
        setNews(data);
      })
      .catch((er) => {
        logout();
      });
  }, []);

  return (
    <div>
      {news.map((i) => (
        <div className="card" key={i.id}>
          <img src={i.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{i.title}</h5>
            <p className="card-text">{i.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
