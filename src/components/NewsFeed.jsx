import CardElement from "./CardElement";

const NewsFeed = ({ newsList }) => {
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
