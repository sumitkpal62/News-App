import { Container } from "react-bootstrap";
import CardElement from "./CardElement";

const NewsFeed = ({ newsList }) => {
  return (
    <div>
      <h1 className="text-center">
        Latest <span className="badge text-white bg-danger">News</span>{" "}
      </h1>
      {newsList?.length === 0 ? (
        <Container>
          <h1>No news available</h1>
        </Container>
      ) : (
        <CardElement newsList={newsList} />
      )}
    </div>
  );
};

export default NewsFeed;
