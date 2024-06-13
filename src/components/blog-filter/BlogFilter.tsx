import { useState } from "react";
import { SetURLSearchParams } from "react-router-dom";

const BlogFilter = ({
  postQuery,
  setSearchParams,
}: {
  postQuery: string;
  setSearchParams: SetURLSearchParams;
}) => {
  const [search, setSearch] = useState(postQuery);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    const form = e.target;

    const query: string = form.search.value;

    const params = { post: ""};

    if (query.length) params.post = query;

    setSearchParams(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" value="Поиск" />
    </form>
  );
};

export default BlogFilter;
