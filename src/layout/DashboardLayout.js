import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { AuthContext } from '../context/AuthProvider/AuthProvider'
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';

const DashboardLayout = () => {
    const { user } = useContext( AuthContext )
    const [ isAdmin ] = useAdmin( user?.email )
    const [ isBuyer ] = useBuyer( user?.email )
    const [ isSeller ] = useSeller( user?.email )

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-4xl text-blue-700 font-semibold mt-10 mb-5'>Here is your Dashboard</h2>
                    <hr /> <hr />
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin && <>
                                <li className='font-semibold'><Link to='/dashboard/sellers/Seller'>All Seller</Link> </li>
                                <li className='font-semibold'><Link to='/dashboard/buyers/Buyer'>All Buyer</Link> </li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li className='font-semibold'><Link to='/dashboard/myOrder'>My Orders</Link> </li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className='font-semibold'><Link to='/dashboard/addProduct'>Add a Product</Link> </li>
                                <li className='font-semibold'><Link to='/dashboard/myProduct'>My Product</Link> </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;
