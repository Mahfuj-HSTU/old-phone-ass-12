import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';

const MyBookingModal = ( { product } ) => {
    const { user } = useContext( AuthContext )
    // console.log( user );

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        toast.success( 'Booked the item' )
        form.reset();
    }

    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={ handleBooking } className='grid grid-cols-1 gap-3 mt-10'>

                        <input type="text" value={ user?.displayName } readOnly placeholder="Your Name" name='name' className="input input-bordered w-full " />

                        <input type="text" placeholder="Your email" defaultValue={ user?.email } readOnly name='email' className="input input-bordered w-full " />

                        <input type="email" name='email' defaultValue={ product?.name } readOnly placeholder="Product name" className="input input-bordered w-full " />

                        <input type="email" name='email' defaultValue={ product?.resale_price } readOnly placeholder="Product price" className="input input-bordered w-full " />

                        <input type="text" name='phone' placeholder="Give your contact number" className="input input-bordered w-full " required />

                        <input type="text" name='location' placeholder="Give meeting location" className="input input-bordered w-full " required />

                        <input className='btn btn-accent w-full mt-3' type="submit" value="Submit" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingModal;
