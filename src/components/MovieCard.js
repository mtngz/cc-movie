import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card
      style={{ width: "16rem" }}
      bg="danger"
      text="white"
      border="primary"
      className="mb-5"
    >
      <Card.Body>
        <Card.Title>
          {movie.title} ({movie.release_date})
        </Card.Title>
      </Card.Body>
      <Card.Img
        width={256}
        height={414}
        src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
      />
    </Card>
  );
};

export default MovieCard;
