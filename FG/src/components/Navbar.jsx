import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {

    setIsMenuOpen(!isMenuOpen) 
  }
  const navItems =[

    {path: "/", title: "Search here"},
    {path: "/my-job", title: "My Jobs"},
    {path: "/salary", title: "salary Estimated"},
    {path: "/post-job", title: "Post a job"},
  ]
  return (
    <header>                          
      <nav>
          <a href="/" className='flex items-center gap-2 text-2xl' > Job opportunities</a>
            {/*for larger devces */}
             <ul className='hidden md:flex gap-12'>
                  {
                    navItems.map(({path, title}) => (
                        <li key={path}  className='text-base text-primary'>
                             <NavLink
                               to={path}
                                className={({ isActive }) =>  isActive ? "active" : "" }  
                              >
                             {title}
                              </NavLink> 

                        </li>
                    )  )
                  }
             </ul>
             {/*register and login  */}
             <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
              
              
             </div>
      </nav>
    </header>
  )
}

export default Navbar