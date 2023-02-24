import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import CategoryForm from "../../../components/CategoryForm/CategoryForm";
import Spinner from "../../../components/Spinner/Spinner";
import { clientUrl } from "../../../constants";
import {
  selectOneCategory,
  selectOneCategoryReceived,
} from "../../../store/categSlice";
import { editCategory, fetchOneCategory } from "../../../store/categThunk";
import { Category } from "../../../types";

const EditC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const existingCategory = useAppSelector(selectOneCategory);
  const categoryReceived = useAppSelector(selectOneCategoryReceived);

  useEffect(() => {
    dispatch(fetchOneCategory(id));
  }, [id, dispatch]);

  const onSubmit = async (category: Category) => {
    await dispatch(editCategory({ id, category }));
    navigate(clientUrl + "/categories");
  };
  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Edit category</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {categoryReceived === "pending" ? (
            <Spinner />
          ) : existingCategory ? (
            <CategoryForm
              onSubmit={onSubmit}
              existingCategory={existingCategory}
            />
          ) : (
            <p>Category not found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default EditC;