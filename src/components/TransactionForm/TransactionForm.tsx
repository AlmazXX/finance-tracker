import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { currency } from "../../constants";
import { close } from "../../store/modalSlice";
import { Transaction } from "../../types";

interface TransactionMutation {
  type: string;
  category: string;
  amount: string;
}

interface Props {
  existingTransaction?: TransactionMutation;
  onSubmit: (transaction: Transaction) => void;
}

const initialState = {
  type: "",
  category: "",
  amount: "",
};

const TransactionForm: FC<Props> = ({
  existingTransaction = initialState,
  onSubmit,
}) => {
  const dispatch = useAppDispatch();
  const [transaction, setTransaction] =
    useState<TransactionMutation>(existingTransaction);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ ...transaction, amount: parseInt(transaction.amount) });
    setTransaction(initialState);
  };

  return (
    <form onSubmit={onFormSubmit}>
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
            <option value="food">Food</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="amount">Amount</label>
          <div className="input-group">
            <input
              type="number"
              name="amount"
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