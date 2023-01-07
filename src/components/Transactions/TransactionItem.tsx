import { FC } from "react";
import { Link } from "react-router-dom";
import { currency } from "../../constants";
import { ApiTransaction } from "../../types";
import BtnSpinner from "../Spinner/BtnSpinner";

interface Props {
  transaction: ApiTransaction;
}

const TransactionItem: FC<Props> = ({ transaction }) => {
  return (
    <div className="card" style={{ maxWidth: "540px" }}>
      <div className="card-body">
        <p className="card-text float-end">{transaction.date}</p>
        <h5 className="card-title">{transaction.category}</h5>
        <p
          className={`card-text ${
            transaction.type === "income" ? "text-success" : "text-danger"
          }`}
        >
          <strong>
            {transaction.type === "expense" ? "-" : ""} {transaction.amount}
          </strong>{" "}
          {currency}
        </p>
        <div className="d-flex gap-3">
          <Link to={`edit/${transaction.id}`} className={`btn btn-primary `}>
            {<BtnSpinner />}Edit
          </Link>
          <button className="btn btn-outline-danger">
            {<BtnSpinner />}Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;