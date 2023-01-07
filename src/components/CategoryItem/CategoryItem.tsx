import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectOneCategoryDeleted } from "../../store/categSlice";
import { deleteCategory, fetchCategories } from "../../store/categThunk";
import { ApiCategory } from "../../types";
import BtnSpinner from "../Spinner/BtnSpinner";

interface Props {
  category: ApiCategory;
}

const CategoryItem: FC<Props> = ({ category }) => {
  const dispatch = useAppDispatch();
  const categoryDeleted = useAppSelector(selectOneCategoryDeleted);

  const onDelete = async () => {
    await dispatch(deleteCategory(category.id));
    dispatch(fetchCategories());
  };

  return (
    <div className="card" style={{ maxWidth: "540px" }}>
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col col-sm-3">
            <h5 className="card-title">{category.name}</h5>
          </div>
          <div className="col col-sm-3">
            <p
              className={`card-text ${
                category.type === "income" ? "text-success" : "text-danger"
              }`}
            >
              {category.type}
            </p>
          </div>
          <div className="col-12 col-sm-6">
            <div className="d-flex gap-3">
              <Link
                to={`/edit-category/${category.id}`}
                className={`btn btn-primary ${
                  categoryDeleted === category.id ? "disabled" : ""
                }`}
              >
                {categoryDeleted === category.id && <BtnSpinner />}Edit
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={onDelete}
                disabled={categoryDeleted === category.id}
              >
                {categoryDeleted === category.id && <BtnSpinner />}Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;