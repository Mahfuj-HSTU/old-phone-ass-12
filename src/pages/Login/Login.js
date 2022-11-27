import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { providerLogin, login, user } = useContext( AuthContext )
    const [ loginEmail, setLoginEmail ] = useState( '' )
    const [ token ] = useToken( loginEmail );
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    // console.log( user )

    const from = location.state?.from?.pathname || '/';

    if ( token ) {
        navigate( from, { replace: true } )
    }


    // handle created user login
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log( user )
        login( email, password )
            .then( result => {
                const user = result.user
                // console.log( user );
                setLoginEmail( user?.email )
                form.reset();
            } )
            .catch( error => {
                console.error( 'error ', error )
                toast.error( 'Register first to login' )
                form.reset();
            } )
    }

    // handle google login
    const handleGoogleSignIn = () => {
        providerLogin( googleProvider )
            .then( result => {
                const user = result.user;
                saveUsers( user?.displayName, user?.email, 'Buyer' );
                // console.log( user );
                navigate( from, { replace: true } )
            } )
            .catch( error => console.error( 'error ', error ) )

        const saveUsers = ( name, email, role ) => {
            const info = { name, email, role };
            console.log( info )
            fetch( 'http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify( info )
            } )
                .then( res => res.json() )
                .then( data => {
                    setLoginEmail( email )
                } )
        }
    }


    return (
        <div className="hero w-full my-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                <h1 className="text-5xl text-center font-bold">Login </h1>
                <form onSubmit={ handleLogin } className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>New to Super Sale <Link className='text-orange-600 font-bold' to='/registration'>Sign Up</Link></p>

                <div className="divider">OR</div>

                <button onClick={ handleGoogleSignIn } className="btn btn-outline btn-info mx-9 mt-5"><FaGoogle /> <span className='ml-2'>Google</span></button>

            </div>
        </div>
    );
};

export default Login;
