import './Mainmenu.css'
import './DarkMode.css'
import { LayoutDashboardIcon } from 'lucide-react';
import { AlertCircleIcon } from 'lucide-react';
import { ArchiveIcon } from 'lucide-react';
import { TimerIcon } from 'lucide-react';
import { BellIcon } from 'lucide-react'
import { MoonIcon } from 'lucide-react';
import { SunIcon } from 'lucide-react';
import { Users } from 'lucide-react';
import { Megaphone } from 'lucide-react';
import { Menu, X } from 'lucide-react';

import { useState } from 'react';

function mainMenu() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="container">

            <div className="logo-el">
                <img
                    src="../Public/logoWebsite.png"
                    alt="Management System Logo"
                    className="logo-image"
                />
            </div>

            <div className="navigation-el desktop-nav">
                <div className='content-menu-el'>
                    <div className='content-1'>
                        <LayoutDashboardIcon className="LayoutDashboardIcon" />
                        <p>Dashboard</p>
                    </div>

                    <div className='content-2'>
                        <AlertCircleIcon className='AlertCircleIcon' />
                        <p>Reports</p>
                    </div>

                    <div className='content-2'>
                        <ArchiveIcon className='ArchiveIcon' />
                        <p>Archive</p>
                    </div>

                    <div className='content-3'>
                        <TimerIcon className='TimerIcon' />
                        <p>Schedule</p>
                    </div>


                    <div className='content-5'>
                        <Megaphone className='MegaphoneIcon' />
                        <p>Announcements</p>
                    </div>

                    <div className='content-4'>
                        <Users className='UsersIcon' />
                        <p>My Team</p>
                    </div>

                </div>
            </div>

            <div className="user-el">
                <div className='dark-mode-toggle'>
                    <button
                        onClick={toggleDarkMode}
                        className='dark-mode-btn'
                        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDarkMode ? <SunIcon className='mode-icon' /> : <MoonIcon className='mode-icon' />}
                    </button>
                </div>
                <div className='user-el-content-1'>
                    <BellIcon className='BellIcon' />
                </div>
                <div className='user-el-content-2'>
                    <img src="../Public/avatarUser.png" alt="user image" />
                </div>

                <div className='mobile-menu-toggle'>
                    <button
                        onClick={toggleMobileMenu}
                        className='mobile-menu-btn'
                        aria-label='Toggle mobile menu'
                    >
                        {isMobileMenuOpen ? <X className='menu-icon' /> : <Menu className='menu-icon' />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="mobile-nav-overlay" onClick={closeMobileMenu}>
                    <div className="mobile-nav-menu" onClick={(e) => e.stopPropagation()}>
                        <div className='mobile-content-menu'>
                            <div className='mobile-content-item' onClick={closeMobileMenu}>
                                <LayoutDashboardIcon className="mobile-icon" />
                                <p>Dashboard</p>
                            </div>

                            <div className='mobile-content-item' onClick={closeMobileMenu}>
                                <AlertCircleIcon className='mobile-icon' />
                                <p>Reports</p>
                            </div>

                            <div className='mobile-content-item' onClick={closeMobileMenu}>
                                <ArchiveIcon className='mobile-icon' />
                                <p>Archive</p>
                            </div>

                            <div className='mobile-content-item' onClick={closeMobileMenu}>
                                <TimerIcon className='mobile-icon' />
                                <p>Schedule</p>
                            </div>

                            <div className='mobile-content-item' onClick={closeMobileMenu}>
                                <Users className='mobile-icon' />
                                <p>My Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default mainMenu;