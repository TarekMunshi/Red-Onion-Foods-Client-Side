import React from 'react';
import LunchModal from './LunchModal';

const LunchCard = ({ lunch }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="col-lg-4 d-flex flex-column  align-items-center" onClick={handleOpen}>
                <div className=' b-card w-75'>
                    <div className=' d-flex justify-content-center'>
                        <img className='w-50' src={lunch.img} alt="" />
                    </div>
                    <div className='mt-4'>
                        <h6 className='text-center'>{lunch.name}</h6>
                        <p className='text-center text-black-50'>{lunch.shortDescription}</p>
                        <h6 className='text-center'>${lunch.price}</h6>
                    </div>
                </div>
            </div>
            <LunchModal open={open} handleClose={handleClose} lunch={lunch}></LunchModal>
        </>
    );
};

export default LunchCard;