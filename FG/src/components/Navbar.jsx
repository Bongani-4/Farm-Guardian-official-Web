import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {

    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [

    { path: "/AnimalCaretaker", title: "Search here" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/post-job", title: "Post a Job" },
  ]
  return (
    <header className='max-w-screen-2x1 container mx-auto xl:px-0 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <a href="/AnimalCaretaker" className='flex items-center gap-2 text-3xl' > Job Opportunities</a>
        {/*for larger devces */}
        <ul className='hidden md:flex gap-12'>
          {
            navItems.map(({ path, title }) => (
              <li key={path} className='text-base text-primary'>
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {title}
                </NavLink>

              </li>
            ))
          }
        </ul>
        {/*register and login  */}
        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>

        </div>
        {/**mobile menu */}
        <div className=' md:hidden block'>
          <button onClick={handleMenuToggler}>
            {
              isMenuOpen ? <FaXmark className='w=5 h=5 text-black' /> : <FaBarsStaggered className='w=5 h=5 text-black' />

            }
          </button>
        </div>
      </nav>

      {/**navigagion items on mobile */}

      <div className={`px-4 bg-slate-400 py-5  rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className='text-base text-primary'>
              <NavLink
                to={path}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                {title}
              </NavLink>

            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar