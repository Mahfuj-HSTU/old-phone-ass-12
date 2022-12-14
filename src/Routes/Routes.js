import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import AddProduct from '../pages/Dashboard/AddProduct/AddProduct';
import MyOrders from '../pages/Dashboard/MyOrders/MyOrders';
import MyProduct from '../pages/Dashboard/MyProduct/MyProduct';
import Products from '../pages/Home/Category/Products/Products';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import error from '../images/images.png'
import Sellers from '../pages/Dashboard/Sellers';
import Buyers from '../pages/Dashboard/Buyers';
import AdminRoute from './AdminRoute/AdminRoute';
import BuyerRoute from './BuyerRoute/BuyerRoute';
import SellerRoute from './SellerRoute/SellerRoute';
import DashboardLayout from '../layout/DashboardLayout';

const router = createBrowserRouter( [
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:brand',
                loader: ( { params } ) => fetch( `https://old-phone-server.vercel.app/products/${ params.brand }` ),
                element: <PrivateRoute><Products></Products ></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Register></Register>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myOrder',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/dashboard/sellers/:role',
                loader: ( { params } ) => fetch( `https://old-phone-server.vercel.app/users/sellers/${ params.role }` ),
                element: <AdminRoute><Sellers></Sellers></AdminRoute>
            },
            {
                path: '/dashboard/buyers/:role',
                loader: ( { params } ) => fetch( `https://old-phone-server.vercel.app/users/buyers/${ params.role }` ),
                element: <AdminRoute><Buyers></Buyers></AdminRoute>
            }

        ]
    },
    {
        path: '*',
        element: <div className='flex justify-center mt-10'>
            <img src={ error } alt="" width='500px' />
        </div>
    }
] )

export default router
