import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './BreakfastModal.css'


const BreakfastModal = ({ open, handleClose, breakfast }) => {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    const text = () => {
        console.log('hello')
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    width: {
                        xs: 'auto',
                        sm: 'auto',
                        lg: 'auto',
                        md: 'auto'
                    },
                    overflow: 'auto',
                }}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="row d-flex justify-content-lg-center">
                            <div className="col-lg-5 d-flex justify-content-center">
                                <img className='w-75' src={breakfast.img} alt="" />
                            </div>
                            <div className="col-lg-5">
                                <h5>{breakfast.name}</h5>
                                <p className='text-black-50'>{breakfast.shortDescription}</p>
                                <div className='d-flex align-items-center '>
                                    <h5>${breakfast.price}</h5>
                                    <div className='ms-3 quantity-btn d-flex align-items-center'>
                                        <button className='counter-btn' onClick={decrementCounter}><i className="fas fa-minus"></i></button><span className='counter'>{counter}</span><button className='counter-btn' onClick={incrementCounter}><i className="fas fa-plus"></i></button>
                                    </div>
                                </div>
                                <button onClick={text} on className='add-btn mt-2 d-flex align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart me-1" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg> Add</button>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default BreakfastModal;