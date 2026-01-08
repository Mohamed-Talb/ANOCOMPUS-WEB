import {
  LayoutDashboardIcon,
  AlertCircleIcon,
  ArchiveIcon,
  TimerIcon,
  BellIcon,
  Users,
  Megaphone,
  Menu,
  X,
} from "lucide-react";
import { DropdownAvatar } from "../../Pages/Dashboard/DropdownAvatar/DropdownAvatar";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../public/logoWebsite.png";

function MainMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Common classes for navigation items to avoid repetition
  const navItemClasses =
    "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-orange-500/10 text-white font-['Poppins']";
  const iconClasses = "w-[22px] h-[22px] text-[#ff6b35] shrink-0";

  return (
    <>
      {/* Custom Animation Style for Mobile Menu Slide-in */}
      <style>{`
                @keyframes slideInRight {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
            `}</style>

      {/* Header Container 
               - Fixed position, z-index 1000
               - Height changes based on breakpoints (65px base, 70px sm, 80px md) to match your CSS logic
            */}
      <header
        className="fixed top-0 left-0 w-full z-[1000] bg-[#222831] shadow-[0_2px_5px_rgba(255,255,255,0.7)] border-white rounded-md transition-all duration-300
                               h-[70px] md:h-[80px] lg:h-[65px] 
                               flex items-center justify-between px-3 md:px-5 font-['Poppins']"
      >
        {/* Logo Section */}
        <div className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Management System Logo"
            className="max-h-[10px] md:max-h-[10px] lg:max-h-[140px] w-auto transition-all duration-300 ml-0 lg:ml-5"
          />
        </div>

        {/* Desktop Navigation - Hidden on Mobile/Tablet (< 768px) */}
        <nav className="hidden lg:flex flex-row items-center justify-center text-[16px] font-medium text-[#191919]">
          <div className="flex flex-row items-center gap-2">
            <Link to="/dashboard" className={navItemClasses}>
              <LayoutDashboardIcon className={iconClasses} />
              <span>Dashboard</span>
            </Link>

            <Link to="/reports" className={navItemClasses}>
              <AlertCircleIcon className={iconClasses} />
              <span>Reports</span>
            </Link>

            <Link to="/archive" className={navItemClasses}>
              <ArchiveIcon className={iconClasses} />
              <span>Archive</span>
            </Link>

            <div className={navItemClasses}>
              <TimerIcon className={iconClasses} />
              <span>Schedule</span>
            </div>

            <div className={navItemClasses}>
              <Megaphone className={iconClasses} />
              <span>Announcements</span>
            </div>

            <div className={navItemClasses}>
              <Users className={iconClasses} />
              <span>Teams</span>
            </div>
          </div>
        </nav>

        {/* Right Side: User & Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-10 mr-0 lg:mr-5">
          {/* Notification Bell */}
          <div className="cursor-pointer flex items-center">
            <BellIcon
              className={`${iconClasses} w-[20px] h-[20px] md:w-[20px] md:h-[22px]`}
            />
          </div>

          {/* User Avatar Dropdown */}
          <div className="flex items-center cursor-pointer">
            <DropdownAvatar
              userName="Olivia Rhye"
              userEmail="olivia@example.com"
              avatarSrc="/avatarUser.png"
              onViewProfile={() => console.log("View profile")}
              onSettings={() => console.log("Settings")}
              onLogout={() => console.log("Logout")}
            />
          </div>

          {/* Mobile Menu Toggle Button (Visible < 1024px based on 'lg' break used above) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="flex items-center justify-center p-2 rounded-lg border-2 border-gray-200 bg-transparent 
                                       transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#333]" />
              ) : (
                <Menu className="w-6 h-6 text-[#333]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 w-full h-full bg-black/50 z-[1000] flex justify-end"
            onClick={closeMobileMenu}
          >
            {/* Mobile Drawer */}
            <div
              className="bg-white w-[250px] md:w-[280px] h-full p-5 shadow-[-2px_0_10px_rgba(0,0,0,0.1)] 
                                       animate-[slideInRight_0.3s_ease-out]"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-2 mt-[60px]">
                <Link
                  to="/dashboard"
                  className={navItemClasses}
                  onClick={closeMobileMenu}
                >
                  <LayoutDashboardIcon className={iconClasses} />
                  <span>Dashboard</span>
                </Link>

                <Link
                  to="/reports"
                  className={navItemClasses}
                  onClick={closeMobileMenu}
                >
                  <AlertCircleIcon className={iconClasses} />
                  <span>Reports</span>
                </Link>

                <Link
                  to="/archive"
                  className={navItemClasses}
                  onClick={closeMobileMenu}
                >
                  <ArchiveIcon className={iconClasses} />
                  <span>Archive</span>
                </Link>

                <div className={navItemClasses} onClick={closeMobileMenu}>
                  <TimerIcon className={iconClasses} />
                  <span>Schedule</span>
                </div>

                <div className={navItemClasses} onClick={closeMobileMenu}>
                  <Megaphone className={iconClasses} />
                  <span>Announcements</span>
                </div>

                <div className={navItemClasses} onClick={closeMobileMenu}>
                  <Users className={iconClasses} />
                  <span>Teams</span>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding behind fixed header 
                (Matches standard desktop height 65px) */}
      <div className="h-[70px] md:h-[80px] lg:h-[65px]"></div>
    </>
  );
}

export default MainMenu;
