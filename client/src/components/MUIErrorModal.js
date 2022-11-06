import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Alert, AlertTitle, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorModal() {
    const { store } = useContext(GlobalStoreContext);

    let message = store.getErrorMessage();

    return (
        <Modal
            open={message != null}
        >
            <Box sx={style}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {message}
                </Alert>
                <Box textAlign='center'>
                    <Button
                        variant='contained'
                        onClick={() => {
                            store.closeError();
                        }}
                        >
                        Close
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}