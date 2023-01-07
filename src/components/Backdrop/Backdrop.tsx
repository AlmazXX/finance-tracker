import { useAppSelector } from "../../app/hooks";
import { selectModalIsOpen } from "../../store/modalSlice";

const Backdrop = () => {
  const modalIsOpen = useAppSelector(selectModalIsOpen);

  return modalIsOpen ? <div className="modal-backdrop show" /> : null;
};

export default Backdrop;