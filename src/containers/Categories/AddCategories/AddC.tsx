import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import CategoryForm from "../../../components/CategoryForm/CategoryForm";
import { createCategory } from "../../../store/categThunk";
import { Category } from "../../../types";

const AddC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (category: Category) => {
    await dispatch(createCategory(category));
    navigate("/categories");
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <h2>Create category</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <CategoryForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default AddC;