import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '50%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  closeIcon: {
    cursor: 'pointer',
    position: 'absolute',
    right: '7px',
    top: '7px',
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center'
  }
}));

export default function SimpleModal({ open, handleClose, children }) {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <div className={classes.closeIcon}>
        <CloseIcon onClick={handleClose} />
      </div>
      <h2 className={classes.title} id="simple-modal-title">Modifica dati personali</h2>
      {children}
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}