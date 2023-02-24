import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Spinner from "../../../components/Spinner/Spinner";
import TransactionForm from "../../../components/TransactionForm/TransactionForm";
import { clientUrl } from "../../../constants";
import {
  selectOneTransaction,
  selectOneTransactionReceived,
} from "../../../store/transSlice";
import {
  editTransaction,
  fetchOneTransaction,
} from "../../../store/transThunk";
import { Transaction } from "../../../types";

const EditT = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const transaction = useAppSelector(selectOneTransaction);
  const transactionReceived = useAppSelector(selectOneTransactionReceived);

  useEffect(() => {
    dispatch(fetchOneTransaction(id));
  }, [id, dispatch]);

  const onSubmit = async (transaction: Transaction) => {
    await dispatch(editTransaction({ id, transaction }));
    navigate(clientUrl + "/");
  };

  const existingTransaction = transaction && {
    ...transaction,
    amount: transaction.amount.toString(),
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <h2>Edit transaction</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {transactionReceived === "pending" ? (
            <Spinner />
          ) : existingTransaction ? (
            <TransactionForm
              existingType={transaction.type}
              existingTransaction={existingTransaction}
              onSubmit={onSubmit}
            />
          ) : (
            <p>Transaction is not found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default EditT;