import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import BlogFilter from "../components/blog-filter/BlogFilter";
import { IPost } from "../utils/types";

const BlogPage = () => {

  const posts: IPost[] = useLoaderData() as IPost[];

  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery: string = searchParams.get("post") || "";

  /* useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []); */

  return (
    <div>
      <h1>Новости</h1>

      <BlogFilter postQuery={postQuery} setSearchParams={setSearchParams} />

      <Link
        to="/posts/new"
        style={{ margin: "1rem 0", display: "inline-block" }}
      >
        Добавить новый пост
      </Link>

      {posts
        .filter((post) => post.title.includes(postQuery))
        .map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>more</Link>
          </div>
        ))}
    </div>
  );
};

export const blogLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return res.json();
};

export default BlogPage;
