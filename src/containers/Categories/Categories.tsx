import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import Spinner from "../../components/Spinner/Spinner";
import {
  selectCategories,
  selectCategoriesReceived,
} from "../../store/categSlice";
import { fetchCategories } from "../../store/categThunk";

const Categories = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const categoriesReceived = useAppSelector(selectCategoriesReceived);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <h2>Categories</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column gap-3">
            {categoriesReceived === "pending" ? (
              <Spinner />
            ) : categories.length ? (
              categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
              ))
            ) : (
              <p>No categories created</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;