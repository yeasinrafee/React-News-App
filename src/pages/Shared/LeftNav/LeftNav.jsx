import { useEffect, useState } from "react";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <h3>All Categories</h3>
    </div>
  );
};

export default LeftNav;
