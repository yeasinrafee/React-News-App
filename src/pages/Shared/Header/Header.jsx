import moment from "moment/moment";
import logo from "../../../assets/logo.png";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum odio
          eaque reiciendis molestias quis necessitatibus, aperiam voluptas ad
          sapiente quibusdam!........
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
