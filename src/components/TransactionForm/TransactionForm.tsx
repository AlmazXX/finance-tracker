import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { currency } from "../../constants";
import { close } from "../../store/modalSlice";

interface TransactionMutation {
  type: string;
  category: string;
  amount: string;
}

const initialState = {
  type: "",
  category: "",
  amount: "",
};

const TransactionForm = () => {
  const dispatch = useAppDispatch();
  const [transaction, setTransaction] =
    useState<TransactionMutation>(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  return (
      <form>
        <div className="modal-body">
          <div className="form-group mb-2">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              className="form-select"
              value={transaction.type}
              onChange={onChange}
              required
            >
              <option value="" disabled>
                Please select type
              </option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-select"
              value={transaction.category}
              onChange={onChange}
              required
            >
              <option value="" disabled>
                Please select category
              </option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="amount">Amount</label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                value={transaction.amount}
                onChange={onChange}
                required
              />
              <span className="input-group-text">{currency}</span>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch(close())}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
  );
};

export default TransactionForm;