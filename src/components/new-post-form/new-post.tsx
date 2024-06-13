import { Form } from "react-router-dom";

const NewPost = ({ submitting }: { submitting: boolean }) => {
  return (
    <Form action="/posts/new" method="post">
      <label>
        Заголовок:
        <input type="text" name="title" />
      </label>
      <label>
        Текст:
        <input type="text" name="body" />
      </label>
      <input type="hidden" name="userId" value="1" />
      <input type="submit" value="Добавить" disabled={submitting} />
    </Form>
  );
};

export default NewPost;
