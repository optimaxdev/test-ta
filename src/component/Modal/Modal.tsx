import './Modal.scss';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

type ModalP = {
  close: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalP> = ({ close, children }) => {
  return (
    <div className={'modal'} onClick={close} data-testid={'modal'}>
      <div
        className="modal__inside"
        onClick={(e) => {
          e.stopPropagation();
        }}
        data-testid={'modal-inside'}
      >
        <CloseIcon
          fontSize="large"
          className="modal__close-btn"
          onClick={close}
        />
        {children}
      </div>
    </div>
  );
};
