import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = () => {
  const [user] = useContext(AuthContext);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default PrivateRoute;
