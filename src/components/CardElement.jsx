import { Button, Card, Col, Row } from "react-bootstrap";
import DefaultNewsImage from "../assets/news.jpg";

const CardElement = ({ newsList }) => {
  return (
    <div className="d-flex gap-2 flex-wrap m-4 justify-content-between">
      {newsList.map((news, idx) =>
        news.title && news.description && news.urlToImage && news.url ? (
          <div key={idx} className="d-flex justify-content-wrap">
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
