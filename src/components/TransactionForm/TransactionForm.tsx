import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { currency } from "../../constants";
import { selectCategories } from "../../store/categSlice";
import { fetchCategories } from "../../store/categThunk";
import { selectTransactionIsSubmitted } from "../../store/transSlice";
import { Transaction } from "../../types";
import BtnSpinner from "../Spinner/BtnSpinner";

interface TransactionMutation {
  date: string;
  category: string;
  amount: string;
}

interface Props {
  existingType?: "income" | "expense";
  existingTransaction?: TransactionMutation;
  onSubmit: (transaction: Transaction) => void;
}

const initialState = {
  date: "",
  category: "",
  amount: "",
};

const TransactionForm: FC<Props> = ({
  existingType = "income",
  existingTransaction = initialState,
  onSubmit,
}) => {
  const dispatch = useAppDispatch();
  const transactionSubmitted = useAppSelector(selectTransactionIsSubmitted);
  const categories = useAppSelector(selectCategories);
  const [transaction, setTransaction] =
    useState<TransactionMutation>(existingTransaction);
  const [type, setType] = useState<string>(existingType);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [type, dispatch]);

  useEffect(() => {
    setTransaction(initialState)
  }, [type])

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const categoryOptions = categories
    .filter((category) => category.type === type)
    .map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ));

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...transaction,
      amount: parseInt(transaction.amount),
      date: new Date().toISOString(),
    });
    setTransaction(initialState);
  };

  return (
    <form onSubmit={onFormSubmit} style={{ maxWidth: "540px" }}>
      <div className="form-group mb-2">
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          className="form-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
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
          {categoryOptions}
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
      <div className="d-flex gap-3">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={transactionSubmitted === "pending"}
        >
          {transactionSubmitted === "pending" && <BtnSpinner />}Submit
        </button>
        <Link
          to="/"
          className={`btn btn-outline-danger ${
            transactionSubmitted === "pending" ? "disabled" : ""
          }`}
        >
          {transactionSubmitted === "pending" && <BtnSpinner />}Cancel
        </Link>
      </div>
    </form>
  );
};

export default TransactionForm;