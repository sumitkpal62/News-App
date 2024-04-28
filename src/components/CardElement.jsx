import { Button, Card } from "react-bootstrap";
import DefaultNewsImage from "../assets/news.jpg";

const CardElement = ({ newsList }) => {
  return (
    <div className="d-flex gap-4 flex-wrap m-4">
      {newsList.map((news, idx) =>
        news.title && news.description && news.urlToImage && news.url ? (
          <div key={idx} className="">
            <Card
              style={{
                maxWidth: "28rem",
              }}
              data-bs-theme="dark"
            >
              <Card.Img
                variant="top"
                src={news?.urlToImage ? news.urlToImage : DefaultNewsImage}
                style={{ height: "250px" }}
              />
              <Card.Body>
                <Card.Title style={{ height: "5rem" }}>
                  {news.title.slice(0, 100)}
                </Card.Title>
                <Card.Text>{news.description.slice(0, 80)}</Card.Text>
                <Button href={news.url}>Read More</Button>
              </Card.Body>
            </Card>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CardElement;
