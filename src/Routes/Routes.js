import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Products from '../pages/Home/Category/Products/Products';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

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
                path: '/category/:id',
                loader: ( { params } ) => fetch( `http://localhost:5000/categories/${ params.id }` ),
                element: <Products></Products >
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Register></Register>
            }

        ]
    }
] )

export default router
