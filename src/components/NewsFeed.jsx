import { useEffect, useState } from "react";
import { fetchNews } from "../utils/api";
import CardElement from "./CardElement";

const NewsFeed = () => {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    fetchNews()
      .then((response) => {
        setNewsList(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <h1 className="text-center">
        Latest <span className="badge text-white bg-danger">News</span>{" "}
      </h1>
      <CardElement newsList={newsList} />
    </div>
  );
};

export default NewsFeed;
