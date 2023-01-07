import { FC } from "react";
import { Link } from "react-router-dom";
import { ApiCategory } from "../../types";
import BtnSpinner from "../Spinner/BtnSpinner";

interface Props {
  category: ApiCategory;
}

const CategoryItem: FC<Props> = ({ category }) => {
  return (
    <div className="card" style={{maxWidth: '540px'}}>
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
              <Link to={`edit/${category.id}`} className={`btn btn-primary `}>
                {<BtnSpinner />}Edit
              </Link>
              <button className="btn btn-outline-danger">
                {<BtnSpinner />}Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;