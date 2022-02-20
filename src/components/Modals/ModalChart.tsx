import React, { FC } from 'react'
import { Box, Modal } from "@mui/material";

type ModalProp = {
    open: boolean;
    styles?: any;
    handleClose: () => void;
}

const defaultStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadious: 20,
    width: 400,
    height: 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
  };

const ModalChart:FC<ModalProp> = ({open, handleClose, styles = defaultStyle, children}) => {
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          {children}
        </Box>
      </Modal>
    )
}

export default ModalChart