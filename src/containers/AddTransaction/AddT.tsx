import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import Modal from '../../components/Modal/Modal';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { close } from "../../store/modalSlice";
import { createTransaction } from '../../store/transThunk';
import { Transaction } from '../../types';

const CreateT = () => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      dispatch(close())
    }
  }, [pathname, dispatch])

  const onSubmit = async (transaction: Transaction) => {
    await dispatch(createTransaction(transaction));
    dispatch(close())
  }
  
  return (
    <Modal title="Add Expense/Income">
      <TransactionForm/>
    </Modal>
  );
};

export default CreateT;