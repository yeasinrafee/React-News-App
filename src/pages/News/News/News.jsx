import { useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  return (
    <div>
      <h2>News is coming soon....</h2>
    </div>
  );
};

export default News;
