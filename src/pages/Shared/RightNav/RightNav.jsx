import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import bg from "../../../assets/bg.png";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h4 className="text-center mt-4">Login With</h4>
      <div className="d-flex flex-column">
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> GitHub
        </Button>
      </div>
      <div>
        <h4 className="text-center mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <img src={bg} alt="" />
    </div>
  );
};

export default RightNav;
