import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import '../Pages/LogIn.css';
import farmGuardianLogo from '../assets/images/FarmGuardian.png';
import profilePic from '../assets/images/profilePic.png'; // Import profile picture here, from register, sampl pic for now
import { useAuth } from '../contexts/authContext';


const Navbar = () => {
  const { currentUser } = useAuth()
  const UserName = currentUser.displayName ? currentUser.displayName : currentUser.email
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/AnimalCaretaker', title: 'Search here' },
    { path: '/my-job', title: 'My Jobs' },
    { path: '/post-job', title: 'Post a Job' },
  ];

  return (
    <header className='max-w-screen-2x1 container mt-8 mx-auto xl:px-0 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <Link to='/' className='logo'>
          <img src={farmGuardianLogo} alt='Farm Guardian Logo' />
        </Link>
        {/*for larger devices */}
        <ul className='hidden md:flex gap-12'>
          {navItems.map(({ path, title }) => (
            <li key={path} className='text-base text-primary'>
              <NavLink to={path} activeClassName='active'>
                {title}
              </NavLink>
            </li>
          ))}
          {/* Log out for large screens */}

        </ul>
        {/* Register and login */}
        <div className='text-base text-[#1f7c3e] font-medium space-x-5 hidden lg:block'> <li className='flex items-center'>
          <NavLink to='/login' activeClassName='active'>
            Log out
          </NavLink>
          <img src={profilePic} className='h-8 w-8 rounded-full ml-2' alt='Profile' />
        </li></div>
        {/* Mobile menu */}
        <div className='md:hidden block'>
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className='w=5 h=5 text-black' />
            ) : (
              <FaBarsStaggered className='w=5 h=5 text-black' />
            )}
          </button>
        </div>
      </nav>

      {/* Navigation items on mobile */}
      <div className={`px-4 bg-slate-400 py-5  rounded-sm ${isMenuOpen ? '' : 'hidden'}`}>
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className='text-base text-primary'>
              <NavLink to={path} activeClassName='active'>
                {title}
              </NavLink>
            </li>
          ))}
          {/* Log out for small screens */}
          <li>
            <NavLink to='/login' activeClassName='active' className='text-[#1f7c3e]'>
              Log out
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
