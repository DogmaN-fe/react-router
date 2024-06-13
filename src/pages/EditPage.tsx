import { useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Изменить пост {id}</h1>
    </div>
  );
};

export default EditPage;
