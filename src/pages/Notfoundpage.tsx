import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Страница не найдена. <Link to="/">Домой</Link>
    </div>
  );
};

export default NotFoundPage;
