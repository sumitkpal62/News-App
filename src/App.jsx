import { useEffect, useState } from "react";
import { fetchNews } from "./utils/api";
import Navbar from "./components/HeaderNavbar";
import NewsFeed from "./components/NewsFeed";

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews()
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(news);

  return (
    <div>
      <Navbar />
      <NewsFeed />
    </div>
  );
};

export default App;
