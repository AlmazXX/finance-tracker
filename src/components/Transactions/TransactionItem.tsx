import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { currency } from "../../constants";
import { convertDate } from "../../helpers";
import { selectOneTransactionDeleted } from "../../store/transSlice";
import { deleteTransaction, fetchTransactions } from "../../store/transThunk";
import { ApiTransaction } from "../../types";
import BtnSpinner from "../Spinner/BtnSpinner";

interface Props {
  transaction: ApiTransaction;
}

const TransactionItem: FC<Props> = ({ transaction }) => {
  const dispatch = useAppDispatch();
  const transactionDeleted = useAppSelector(selectOneTransactionDeleted);

  const onDelete = async () => {
    if (window.confirm("Do you really want to delete this transaction?")) {
      await dispatch(deleteTransaction(transaction.id));
      dispatch(fetchTransactions());
    }
  };

  return (
    <div className="card" style={{ maxWidth: "540px" }}>
      <div className="card-body">
        <p className="card-text float-end">{convertDate(transaction.date)}</p>
        <h5 className="card-title">{transaction.category}</h5>
        <p
          className={`card-text ${
            transaction.type === "income" ? "text-success" : "text-danger"
          }`}
        >
          <strong>
            {transaction.type === "income" ? "+" : "-"} {transaction.amount}
          </strong>{" "}
          {currency}
        </p>
        <div className="d-flex gap-3">
          <Link
            to={`edit-transaction/${transaction.id}`}
            className={`btn btn-primary ${
              transactionDeleted === transaction.id ? "disabled" : ""
            }`}
          >
            {transactionDeleted === transaction.id && <BtnSpinner />}Edit
          </Link>
          <button
            className="btn btn-outline-danger"
            onClick={onDelete}
            disabled={transactionDeleted === transaction.id}
          >
            {transactionDeleted === transaction.id && <BtnSpinner />}Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;