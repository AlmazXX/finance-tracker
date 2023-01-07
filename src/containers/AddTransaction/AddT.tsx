import Modal from '../../components/Modal/Modal';
import TransactionForm from '../../components/TransactionForm/TransactionForm';

const CreateT = () => {
  return (
    <Modal title="Add Expense/Income">
      <TransactionForm/>
    </Modal>
  );
};

export default CreateT;