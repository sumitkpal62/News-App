import { useEffect, useState } from "react";
import { fetchNews } from "./utils/api";
import Navbar from "./components/HeaderNavbar";
import NewsFeed from "./components/NewsFeed";
import { Spinner } from "react-bootstrap";

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
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center gap-4"
          style={{ height: "90vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h2>Loading...</h2>
        </div>
      ) : (
        <NewsFeed newsList={newsList} />
      )}
    </div>
  );
};

export default App;
