import { useEffect, useState } from "react";
import { fetchNews } from "./utils/api";
import Navbar from "./components/HeaderNavbar";
import NewsFeed from "./components/NewsFeed";

const App = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("general");
  const [selectedCountry, setSelectedCountry] = useState("in");
  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetchNews(activeCategory, selectedCountry);
      setNewsList(data);
      setLoading(false);
    })();
  }, [activeCategory, selectedCountry]);

  return (
    <div>
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      {loading ? <h1>Loading...</h1> : <NewsFeed newsList={newsList} />}
    </div>
  );
};

export default App;
