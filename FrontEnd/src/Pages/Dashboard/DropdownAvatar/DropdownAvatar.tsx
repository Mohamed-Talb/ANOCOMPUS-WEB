// import { useState, useRef, useEffect } from "react";
// import { User, Settings, LogOut, HelpCircle, FileText } from "lucide-react";
// import "./DropdownAvatar.css";

// interface DropdownAvatarProps {
//   userName?: string;
//   userEmail?: string;
//   avatarSrc?: string;
//   onLogout?: () => void;
//   onViewProfile?: () => void;
//   onSettings?: () => void;
// }

// export function DropdownAvatar({
//   userName = "User Name",
//   userEmail = "user@example.com",
//   avatarSrc,
//   onLogout,
//   onViewProfile,
//   onSettings,
// }: DropdownAvatarProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const menuRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   // Calculate dropdown position to keep it in viewport
//   useEffect(() => {
//     if (isOpen && dropdownRef.current) {
//       const buttonRect = dropdownRef.current.getBoundingClientRect();
//       const dropdownWidth = 280;
//       const viewportWidth = window.innerWidth;
//       const padding = 10;

//       // Check if dropdown would overflow on the right
//       const rightOverflow = buttonRect.right - dropdownWidth < padding;
//       const leftOverflow =
//         buttonRect.left + dropdownWidth > viewportWidth - padding;

//       let style: React.CSSProperties = {};

//       if (leftOverflow && !rightOverflow) {
//         // Position to the left of the button
//         style = { right: 0, left: "auto" };
//       } else if (rightOverflow && !leftOverflow) {
//         // Position to the right of the button
//         style = { left: 0, right: "auto" };
//       } else {
//         // Default: align right edge with button
//         style = { right: 0, left: "auto" };
//       }

//       // Ensure dropdown doesn't go off-screen on right
//       const potentialRight = viewportWidth - buttonRect.right;
//       if (potentialRight < 0) {
//         style.right = `${potentialRight + padding}px`;
//       }

//       setDropdownStyle(style);
//     }
//   }, [isOpen]);

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase()
//       .slice(0, 2);
//   };

//   return (
//     <div className="dropdown-avatar-container" ref={dropdownRef}>
//       <button
//         className="avatar-button"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="User menu"
//       >
//         {avatarSrc ? (
//           <img src={avatarSrc} alt={userName} className="avatar-image" />
//         ) : (
//           <div className="avatar-fallback">{getInitials(userName)}</div>
//         )}
//       </button>

//       {isOpen && (
//         <div className="dropdown-menu" ref={menuRef} style={dropdownStyle}>
//           <div className="dropdown-header">
//             <div className="dropdown-avatar-info">
//               {avatarSrc ? (
//                 <img
//                   src={avatarSrc}
//                   alt={userName}
//                   className="dropdown-avatar-image"
//                 />
//               ) : (
//                 <div className="dropdown-avatar-fallback">
//                   {getInitials(userName)}
//                 </div>
//               )}
//               <div className="dropdown-user-info">
//                 <p className="dropdown-user-name">{userName}</p>
//                 <p className="dropdown-user-email">{userEmail}</p>
//               </div>
//             </div>
//           </div>

//           <div className="dropdown-section">
//             <button
//               className="dropdown-item"
//               onClick={() => {
//                 onViewProfile?.();
//                 setIsOpen(false);
//               }}
//             >
//               <User className="dropdown-icon" size={18} />
//               <span>View profile</span>
//             </button>
//             <button
//               className="dropdown-item"
//               onClick={() => {
//                 onSettings?.();
//                 setIsOpen(false);
//               }}
//             >
//               <Settings className="dropdown-icon" size={18} />
//               <span>Settings</span>
//             </button>
//           </div>
//           <div className="dropdown-divider"></div>
//           <div className="dropdown-section">
//             <button className="dropdown-item">
//               <FileText className="dropdown-icon" size={18} />
//               <span>Changelog</span>
//             </button>
//             <button className="dropdown-item">
//               <HelpCircle className="dropdown-icon" size={18} />
//               <span>Support</span>
//             </button>
//           </div>
//           <div className="dropdown-divider"></div>
//           <div className="dropdown-section">
//             <button
//               className="dropdown-item dropdown-item-danger"
//               onClick={() => {
//                 onLogout?.();
//                 setIsOpen(false);
//               }}
//             >
//               <LogOut className="dropdown-icon" size={18} />
//               <span>Log out</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut, HelpCircle, FileText } from "lucide-react";

interface DropdownAvatarProps {
  userName?: string;
  userEmail?: string;
  avatarSrc?: string;
  onLogout?: () => void;
  onViewProfile?: () => void;
  onSettings?: () => void;
}

export function DropdownAvatar({
  userName = "User Name",
  userEmail = "user@example.com",
  avatarSrc,
  onLogout,
  onViewProfile,
  onSettings,
}: DropdownAvatarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Calculate dropdown position to keep it in viewport (Mainly for Desktop absolute positioning)
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const buttonRect = dropdownRef.current.getBoundingClientRect();
      const dropdownWidth = 280;
      const viewportWidth = window.innerWidth;
      const padding = 10;

      // Check if dropdown would overflow on the right
      const rightOverflow = buttonRect.right - dropdownWidth < padding;
      const leftOverflow =
        buttonRect.left + dropdownWidth > viewportWidth - padding;

      let style: React.CSSProperties = {};

      // Only apply complex positioning logic on desktop where it's absolute
      if (window.innerWidth >= 768) {
          if (leftOverflow && !rightOverflow) {
            style = { right: 0, left: "auto" };
          } else if (rightOverflow && !leftOverflow) {
            style = { left: 0, right: "auto" };
          } else {
            style = { right: 0, left: "auto" };
          }

          const potentialRight = viewportWidth - buttonRect.right;
          if (potentialRight < 0) {
            style.right = `${potentialRight + padding}px`;
          }
      }

      setDropdownStyle(style);
    }
  }, [isOpen]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative inline-flex items-center justify-center font-['Poppins']" ref={dropdownRef}>
      
      {/* Custom Styles for Animation and Scrollbar */}
      <style>{`
        @keyframes dropdownSlideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>

      {/* Avatar Button */}
      <button
        className="relative rounded-full border-2 border-transparent bg-transparent cursor-pointer p-0 transition-all duration-200 outline-none 
                   hover:scale-105 focus:outline-none
                   w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User menu"
      >
        {avatarSrc ? (
          <img src={avatarSrc} alt={userName} className="w-[55px] h-[55px] rounded-full object-cover" />
        ) : (
          <div className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] text-white font-semibold text-[18px] md:text-2xl">
            {getInitials(userName)}
          </div>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
            className="fixed md:absolute z-[9999] bg-white rounded-xl border border-gray-200 
                       shadow-[0_10px_40px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.05)] 
                       animate-[dropdownSlideIn_0.2s_ease-out] overflow-y-auto custom-scrollbar
                       
                       /* Mobile Positioning (<480px) */
                       top-[100px] right-[10px] left-[10px] w-auto max-h-[calc(100vh-120px)]
                       
                       /* Tablet Positioning (480px - 768px) */
                       min-[480px]:left-auto min-[480px]:w-[280px] min-[480px]:max-w-[calc(100vw-20px)]
                       
                       /* Desktop Positioning (>=768px) */
                       md:top-[calc(100%+10px)] md:right-0 md:left-auto md:w-[280px] md:max-w-none md:max-h-[calc(100vh-120px)]"
            ref={menuRef} 
            style={dropdownStyle}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex gap-3 items-center">
              {avatarSrc ? (
                <img
                  src={avatarSrc}
                  alt={userName}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] text-white font-semibold text-sm">
                  {getInitials(userName)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 m-0 whitespace-nowrap overflow-hidden text-ellipsis">
                    {userName}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                    {userEmail}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <button
              className="group flex items-center gap-3 w-full p-2.5 bg-transparent border-none rounded-lg text-sm font-medium text-gray-700 text-left cursor-pointer transition-all duration-150 hover:bg-gray-50 hover:text-[#ff6b35]"
              onClick={() => {
                onViewProfile?.();
                setIsOpen(false);
              }}
            >
              <User className="text-gray-500 shrink-0 transition-colors duration-150 group-hover:text-[#ff6b35]" size={18} />
              <span>View profile</span>
            </button>
            <button
              className="group flex items-center gap-3 w-full p-2.5 bg-transparent border-none rounded-lg text-sm font-medium text-gray-700 text-left cursor-pointer transition-all duration-150 hover:bg-gray-50 hover:text-[#ff6b35]"
              onClick={() => {
                onSettings?.();
                setIsOpen(false);
              }}
            >
              <Settings className="text-gray-500 shrink-0 transition-colors duration-150 group-hover:text-[#ff6b35]" size={18} />
              <span>Settings</span>
            </button>
          </div>

          <div className="h-px bg-gray-200 my-1"></div>

          <div className="p-2">
            <button className="group flex items-center gap-3 w-full p-2.5 bg-transparent border-none rounded-lg text-sm font-medium text-gray-700 text-left cursor-pointer transition-all duration-150 hover:bg-gray-50 hover:text-[#ff6b35]">
              <FileText className="text-gray-500 shrink-0 transition-colors duration-150 group-hover:text-[#ff6b35]" size={18} />
              <span>Changelog</span>
            </button>
            <button className="group flex items-center gap-3 w-full p-2.5 bg-transparent border-none rounded-lg text-sm font-medium text-gray-700 text-left cursor-pointer transition-all duration-150 hover:bg-gray-50 hover:text-[#ff6b35]">
              <HelpCircle className="text-gray-500 shrink-0 transition-colors duration-150 group-hover:text-[#ff6b35]" size={18} />
              <span>Support</span>
            </button>
          </div>

          <div className="h-px bg-gray-200 my-1"></div>

          <div className="p-2">
            <button
              className="group flex items-center gap-3 w-full p-2.5 bg-transparent border-none rounded-lg text-sm font-medium text-red-600 text-left cursor-pointer transition-all duration-150 hover:bg-red-50 hover:text-red-600"
              onClick={() => {
                onLogout?.();
                setIsOpen(false);
              }}
            >
              <LogOut className="text-red-600 shrink-0 transition-colors duration-150" size={18} />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
