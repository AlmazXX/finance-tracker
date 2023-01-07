import { FC, PropsWithChildren } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { close, selectModalIsOpen } from "../../store/modalSlice";
import Backdrop from "../Backdrop/Backdrop";

interface Props extends PropsWithChildren {
  title: string;
}

const Modal: FC<Props> = ({ title, children }) => {
  const dispatch = useAppDispatch();
  const modalIsOpen = useAppSelector(selectModalIsOpen);

  return (
    <>
      <Backdrop />
      {modalIsOpen ? (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title fs-5">{title}</h3>
                <button
                  className="btn-close"
                  onClick={() => dispatch(close())}
                ></button>
              </div>
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;