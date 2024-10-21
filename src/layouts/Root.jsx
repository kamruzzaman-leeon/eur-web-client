import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../assets/logo/eur-transBG.png";


const Root = () => {

    const navItems = [
        { id: 1, label: 'About Us', path: '/about-us' },
        { id: 2, label: 'Services', path: '/services' },
        { id: 3, label: 'Contact', path: '/contact' },
        { id: 4, label: 'Booking', path: '/booking' }
    ];

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    
                    <div className="navbar w-full max-w-screen-2xl mx-auto">

                        {/* Company Logo on the left side */}
                        <div className="mx-2 flex-1 py-2">
                            <img src={logo} alt="EUR Logo" className="h-8 lg:h-10" />
                        </div>

                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        
                        {/* Navbar Items */}
                        <div className="bg-scroll hidden flex-none lg:block">
                            <ul className="menu menu-horizontal font-poppins text-lg">
                                {navItems.map((item) => (
                                    <li key={item.id} >
                                        <NavLink
                                            to={item.path}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Page content here */}
                    <Outlet />
                </div>

                {/* Sidebar Drawer */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-100 min-h-full w-80 p-0 font-lato text-md">
                        {/* Sidebar content */}
                        <div className='flex flex-row p-2'>
                            <div className="mx-2 flex-1 p-2">
                                <Link to="/home">
                                    <img src={logo} alt="EUR Logo" className="h-8" />
                                </Link>
                            </div>

                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay">
                                    <svg
                                        className="swap-on fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 512 512">
                                        <polygon
                                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                    </svg>
                                </label>
                            </div>
                        </div>
                        <hr />
                        {navItems.map((item) => (
                            <li key={item.id} >
                                <NavLink
                                    to={item.path}

                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Root;

// Define propTypes correctly
Root.propTypes = {
    navItems: PropTypes.array,
};
