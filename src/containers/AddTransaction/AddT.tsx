import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { close } from "../../store/modalSlice";

const CreateT = () => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      dispatch(close())
    }
  }, [pathname, dispatch])
  
  return (
    <Modal title="Add Expense/Income">
      <TransactionForm/>
    </Modal>
  );
};

export default CreateT;