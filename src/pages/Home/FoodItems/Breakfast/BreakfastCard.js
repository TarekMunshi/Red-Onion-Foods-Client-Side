import React from 'react';
import BreakfastModal from './BreakfastModal';

const BreakfastCard = ({ breakfast }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="col-lg-4 d-flex flex-column  align-items-center" onClick={handleOpen}>
                <div className=' b-card w-75'>
                    <div className=' d-flex justify-content-center'>
                        <img className='w-50' src={breakfast.img} alt="" />
                    </div>
                    <div className='mt-4'>
                        <h6 className='text-center'>{breakfast.name}</h6>
                        <p className='text-center text-black-50'>{breakfast.shortDescription}</p>
                        <h6 className='text-center'>${breakfast.price}</h6>
                    </div>
                </div>
            </div>
            <BreakfastModal open={open} handleOpen={handleOpen} handleClose={handleClose} breakfast={breakfast}></BreakfastModal>
        </>
    );
};

export default BreakfastCard;