import {
  /* useParams, */ Link,
  useNavigate,
  NavigateFunction,
  useLoaderData,
} from "react-router-dom";
/* import { useState, useEffect } from "react"; */
import { IPost } from "../utils/types";

const SinglePage = () => {
  /* const { id } = useParams(); */

  /*  const [post, setPost] = useState<IPost | null>(null); */

  const navigate: NavigateFunction = useNavigate();
  const goBack = () => navigate(-1);

  const { post, id } = useLoaderData() as {
    post: IPost;
    id: string;
  };

  /* useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]); */

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to={`/posts/${id}/edit`}>Изменить</Link>
      <button onClick={goBack}>Назад</button>
    </div>
  );
};

export const postLoader = async ({ params }: { params: any }) => {
  const id: string = params.id;

  const res: Response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const post: IPost = await res.json();

  return { post, id };
};

export default SinglePage;
