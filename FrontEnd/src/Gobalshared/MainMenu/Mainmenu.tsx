import './Mainmenu.css'
import { LayoutDashboardIcon, AlertCircleIcon, ArchiveIcon, TimerIcon, BellIcon, MoonIcon, SunIcon, Users, Megaphone, Menu, X } from 'lucide-react';
import { DropdownAvatar } from '../../Pages/Responsable/Dashboard/DropdownAvatar/DropdownAvatar';
import { Link } from 'react-router-dom';
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
                    <Link to="/dashboard" className='content-1'>
                        <LayoutDashboardIcon className="LayoutDashboardIcon" />
                        <p>Dashboard</p>
                    </Link>

                    <Link to="/reports" className='content-2'>
                        <AlertCircleIcon className='AlertCircleIcon' />
                        <p>Reports</p>
                    </Link>

                    <Link to="/archive" className='content-2'>
                        <ArchiveIcon className='ArchiveIcon' />
                        <p>Archive</p>
                    </Link>

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
                    <DropdownAvatar
                        userName="Olivia Rhye"
                        userEmail="olivia@example.com"
                        avatarSrc="../Public/avatarUser.png"
                        onViewProfile={() => console.log('View profile')}
                        onSettings={() => console.log('Settings')}
                        onLogout={() => console.log('Logout')}
                    />
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
                            <Link to="/dashboard" className='mobile-content-item' onClick={closeMobileMenu}>
                                <LayoutDashboardIcon className="mobile-icon" />
                                <p>Dashboard</p>
                            </Link>

                            <Link to="/reports" className='mobile-content-item' onClick={closeMobileMenu}>
                                <AlertCircleIcon className='mobile-icon' />
                                <p>Reports</p>
                            </Link>

                            <Link to="/archive" className='mobile-content-item' onClick={closeMobileMenu}>
                                <ArchiveIcon className='mobile-icon' />
                                <p>Archive</p>
                            </Link>

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