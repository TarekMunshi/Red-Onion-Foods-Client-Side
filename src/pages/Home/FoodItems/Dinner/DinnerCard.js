import React from 'react';
import DinnerModal from './DinnerModal';

const DinnerCard = ({ dinner }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="col-lg-4 d-flex flex-column  align-items-center" onClick={handleOpen}>
                <div className=' b-card w-75'>
                    <div className=' d-flex justify-content-center'>
                        <img className='w-50' src={dinner.img} alt="" />
                    </div>
                    <div className='mt-4'>
                        <h6 className='text-center'>{dinner.name}</h6>
                        <p className='text-center text-black-50'>{dinner.shortDescription}</p>
                        <h6 className='text-center'>${dinner.price}</h6>
                    </div>
                </div>
            </div>
            <DinnerModal open={open} handleClose={handleClose} dinner={dinner}></DinnerModal>
        </>
    );
};

export default DinnerCard;