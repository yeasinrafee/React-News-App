import moment from "moment";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-3 flex-grow-1">
          <p className="mb-0">{author.name}</p>
          <p>
            <small>{moment(author.published_date).format("YYYY-MM-D")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark /> <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}
              <Link to={`/news/${_id}`}>...read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex ">
        <div className=" d-flex flex-grow-1 align-items-center gap-2">
          <span>
            <Rating
              style={{ maxWidth: 90 }}
              value={Math.floor(rating?.number || 0)}
              readOnly
            />
          </span>
          <span className="">{rating?.number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
