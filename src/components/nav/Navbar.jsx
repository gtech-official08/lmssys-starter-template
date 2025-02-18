import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import navItems from "../../constants/navbarData";
import { FiBookOpen } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation(); // Get the current location

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Adding event listener on mount and removing on unmount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            id="navbar"
            className={`w-full h-[8ch] backdrop-blur-sm flex items-center justify-between md:px-16 sm:px-10 px-4 fixed top-0 transition-all ease-in-out duration-300 z-50 ${isScrolled ? "bg-sky-50/30 border-b border-neutral-200" : "bg-transparent"
                }`}
        >
            {/* Logo */}
            <div className="flex items-center gap-2 md:pr-16 pr-0">
                <Link to="/" className="text-lg font-semibold text-sky-700 flex items-center gap-x-2">
                    <FiBookOpen size={24} />
                    LearnHub
                </Link>
            </div>

            {/* Hamburger Menu for Mobile */}

            <div className="md:hidden">
                <button
                    onClick={toggleNavbar}
                    className="text-neutral-600 focus:outline-none"
                >
                    <FaBars size={24} />
                </button>
            </div>

            {/* Navbar items and buttons */}
            <div
                className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-sky-50 border-l md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none transition-transform duration-300 ease-in-out transform flex-1 ${isOpen ? "translate-x-0" : "translate-x-full"
                    } md:translate-x-0 z-60`}
            >

                {/* Logo and close icon Inside Toggle Menu */}
                <div className="w-full md:hidden flex items-center justify-between px-4">
                    {/* Logo */}
                    <Link to="/" className="text-lg font-semibold text-sky-700 flex items-center gap-x-2">
                        <FiBookOpen size={24} />
                        LearnHub
                    </Link>

                    {/* Close Icon */}
                    <div className="md:hidden flex justify-end py-6">
                        <button
                            onClick={toggleNavbar}
                            className="text-red-600 focus:outline-none"
                        >
                            <IoMdClose size={28} />
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-b border-neutral-300 md:hidden"></div>

                <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-0">
                    {/* Navbar items */}
                    <ul className="flex flex-col md:flex-row items-center md:gap-7 gap-4 md:text-base text-lg text-neutral-700 md:font-normal font-medium">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link to={item.path} onClick={closeNavbar} className={`hover:text-sky-700 ease-in-out duration-300 ${location.pathname === item.path
                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 font-semibold"
                                    : ""
                                    }`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Link to="/signin" className="w-fit px-6 py-2 rounded-full md:text-base text-xl text-neutral-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 font-medium bg-transparent transition-colors duration-200 cursor-pointer">
                            Sign In
                        </Link>
                        <button className="w-fit bg-gradient-to-tr hover:bg-gradient-to-tl from-indigo-500 via-sky-700 via-20% to-purple-700 text-neutral-50 cursor-pointer py-2 px-6 rounded-xl text-base font-semibold ease-in-out duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
