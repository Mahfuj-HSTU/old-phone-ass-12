import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import logo from '../../../images/logo.png';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log( user )

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      <li className='font-semibold'>
        <Link to='/'>Home</Link>{' '}
      </li>
      <li className='font-semibold'>
        <Link to='/blog'>Blog</Link>{' '}
      </li>
      {user?.email ? (
        <>
          <li className='font-semibold'>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li className='font-semibold'>
            <button
              onClick={handleLogOut}
              className='btn-ghost'>
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li className='font-semibold'>
          <Link to='/login'>Login</Link>{' '}
        </li>
      )}
    </>
  );

  return (
    <div className='navbar bg-base-300 py-3 fixed top-0 z-30 left-0 right-0 lg:px-20'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label
            tabIndex={0}
            className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg'>
            {menuItems}
          </ul>
        </div>
        <Link
          to='/'
          className='btn btn-ghost normal-case text-xl'>
          <img
            src={logo}
            alt=''
            width='50px'
            height='50px'
          />{' '}
          Super Sale
        </Link>
        <label
          htmlFor='dashboard-drawer'
          tabIndex={0}
          className='btn btn-ghost lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>
        </label>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal p-0 text-lg'>{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
