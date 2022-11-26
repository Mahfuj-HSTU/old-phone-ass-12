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
                loader: ( { params } ) => fetch( `http://localhost:5000/products/${ params.brand }` ),
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
            {
                path: '/myOrders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/myProduct',
                element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
            },
            {
                path: '/sellers',
                element: <PrivateRoute><Sellers></Sellers> </PrivateRoute>
            },
            {
                path: '/buyers/:role',
                loader: ( { params } ) => fetch( `http://localhost:5000/users/buyers/${ params.role }` ),
                element: <PrivateRoute><Buyers></Buyers> </PrivateRoute>
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
