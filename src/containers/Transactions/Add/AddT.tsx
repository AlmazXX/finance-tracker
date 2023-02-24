import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import TransactionForm from "../../../components/TransactionForm/TransactionForm";
import { clientUrl } from "../../../constants";
import { createTransaction } from "../../../store/transThunk";
import { Transaction } from "../../../types";

const AddT = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (transaction: Transaction) => {
    await dispatch(createTransaction(transaction));
    navigate(clientUrl + "/");
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <h2>Create transaction</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TransactionForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default AddT;