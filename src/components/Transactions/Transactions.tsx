import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { currency } from "../../constants";
import {
  selectTransactions,
  selectTransactionsReceived,
} from "../../store/transSlice";
import { fetchTransactions } from "../../store/transThunk";
import Spinner from "../Spinner/Spinner";
import TransactionItem from "./TransactionItem";

const Transactions = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactions);
  const transactionsReceived = useAppSelector(selectTransactionsReceived);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const total = transactions.reduce(
    (acc, transaction) =>
      transaction.type === "income"
        ? acc + transaction.amount
        : acc - transaction.amount,
    0
  );

  return (
    <>
      <div
        className="p-2 border border-1 rounded-2 text-center mb-3 fs-3"
        style={{ maxWidth: "300px" }}
      >
        <p className="m-0">
          Total:{" "}
          <strong className={total < 0 ? "text-danger" : "text-success"}>
            {total} {currency}
          </strong>
        </p>
      </div>
      <div className="d-flex flex-column gap-3">
        {transactionsReceived === "pending" ? (
          <Spinner />
        ) : transactions.length ? (
          transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <p>No transactions yet</p>
        )}
      </div>
    </>
  );
};

export default Transactions;