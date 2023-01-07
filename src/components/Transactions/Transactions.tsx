import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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

  return (
    <div className="d-flex flex-column gap-3">
      {transactionsReceived === "pending" ? (
        <Spinner />
      ) : (
        transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))
      )}
    </div>
  );
};

export default Transactions;