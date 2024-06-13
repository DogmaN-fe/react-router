import { redirect, useNavigation } from "react-router-dom";
import NewPost from "../components/new-post-form/new-post";

const CreatePage = () => {
  const navigation = useNavigation();

  return (
    <div>
      <h1>Создать пост</h1>
      <NewPost submitting={navigation.state === "submitting"} />
    </div>
  );
};

export const createPost = async ({
  title,
  body,
  userId,
}: {
  title: FormDataEntryValue | null;
  body: FormDataEntryValue | null;
  userId: FormDataEntryValue | null;
}) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, userId }),
  });
  const newPost = await res.json();

  return newPost;
};

export const CreatePostAction = async ({ request }: { request: Request }) => {
  const formData: FormData = await request.formData();
  const newPost = {
    title: formData.get("title"),
    body: formData.get("body"),
    userId: formData.get("userId"),
  };
  const post = await createPost(newPost);

  return redirect("/posts/" + post.id);
};

export default CreatePage;
