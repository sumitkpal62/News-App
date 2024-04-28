import { useEffect, useState } from "react";
import { fetchNews } from "./utils/api";
import Navbar from "./components/HeaderNavbar";
import NewsFeed from "./components/NewsFeed";

const App = () => {
  const [newsList, setNewsList] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  console.log(activeCategory);

  useEffect(() => {
    (async () => {
      const data = await fetchNews(activeCategory);
      setNewsList(data);
    })();
  }, [activeCategory]);
  console.log(newsList);

  return (
    <div>
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <NewsFeed newsList={newsList} />
    </div>
  );
};

export default App;
