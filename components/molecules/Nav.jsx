"use client";

// components/molecules/Nav.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavItem from '../atoms/NavItem';

const Nav = () => {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('/dashboardpage');

    useEffect(() => {
        // Set the active item to the current pathname on initial load
        setActiveItem(router.pathname);
    }, [router.pathname]);

    const handleItemClick = (href) => {
        setActiveItem(href);
    };

    return (
        <nav className="w-[250px] text-white">
            <ul className="flex flex-col gap-[5px] list-none">
                <NavItem
                    href="/dashboardpage"
                    isActive={activeItem === '/dashboardpage' || router.pathname === '/'}
                    onClick={() => handleItemClick('/dashboardpage')}
                    className='bg-orange-500'
                >
                    Dashboard
                </NavItem>
                <NavItem
                    href="/orderpage"
                    isActive={activeItem === '/orderpage'}
                    onClick={() => handleItemClick('/orderpage')}
                >
                    Orders
                </NavItem>
                <NavItem
                    href="/downloadpage"
                    isActive={activeItem === '/downloadpage'}
                    onClick={() => handleItemClick('/downloadpage')}
                >
                    Downloads
                </NavItem>
                <NavItem
                    href="/addressepage"
                    isActive={activeItem === '/addressepage'}
                    onClick={() => handleItemClick('/addressepage')}
                >
                    Addresses
                </NavItem>
                <NavItem
                    href="/accountpage"
                    isActive={activeItem === '/accountpage'}
                    onClick={() => handleItemClick('/accountpage')}
                >
                    Account Details
                </NavItem>
                <NavItem
                    href="/login"
                    isActive={activeItem === '/login'}
                    onClick={() => handleItemClick('/login')}
                >
                    Logout
                </NavItem>
            </ul>
        </nav>
    );
};

export default Nav;
