import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Products from '../pages/Home/Category/Products/Products';
import Home from '../pages/Home/Home/Home';

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
            }

        ]
    }
] )

export default router
