import { useAppDispatch } from "../../app/hooks";
import { currency } from "../../constants";
import { close } from "../../store/modalSlice";
import Modal from "../Modal/Modal";

const TransactionForm = () => {
  const dispatch = useAppDispatch();

  return (
    <Modal title="Add Expense/Income">
      <form>
        <div className="modal-body">
          <div className="form-group mb-2">
            <label htmlFor="type">Type</label>
            <select name="type" id="type" className="form-control" required>
              <option value="" disabled selected>
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
              className="form-control"
              required
            >
              <option value="" disabled selected>
                Please select category
              </option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="amount">Amount</label>
            <div className="input-group">
              <input type="number" className="form-control" required />
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
    </Modal>
  );
};

export default TransactionForm;