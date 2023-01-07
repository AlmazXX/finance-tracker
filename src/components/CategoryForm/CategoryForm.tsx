import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../../types";

interface Props {
  existingCategory?: Category;
  onSubmit: (category: Category) => void;
}

const initialState: Category = {
  type: "income",
  name: "",
};

const CategoryForm: FC<Props> = ({
  existingCategory = initialState,
  onSubmit,
}) => {
  const [category, setCategory] = useState<Category>(existingCategory);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(category);
    setCategory(initialState);
  };

  return (
    <form onSubmit={onFormSubmit} style={{ maxWidth: "540px" }}>
      <div className="form-group mb-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={category.name}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          className="form-select"
          value={category.type}
          onChange={onChange}
          required
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="d-flex gap-3">
        <button className="btn btn-primary">Submit</button>
        <Link to="/categories" className="btn btn-outline-danger">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default CategoryForm;