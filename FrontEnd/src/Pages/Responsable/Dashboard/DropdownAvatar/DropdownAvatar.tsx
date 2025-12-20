import { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, HelpCircle, FileText } from 'lucide-react';
import './DropdownAvatar.css';

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
    onSettings
}: DropdownAvatarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
    const dropdownRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Calculate dropdown position to keep it in viewport
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const buttonRect = dropdownRef.current.getBoundingClientRect();
            const dropdownWidth = 280;
            const viewportWidth = window.innerWidth;
            const padding = 10;

            // Check if dropdown would overflow on the right
            const rightOverflow = buttonRect.right - dropdownWidth < padding;
            const leftOverflow = buttonRect.left + dropdownWidth > viewportWidth - padding;

            let style: React.CSSProperties = {};

            if (leftOverflow && !rightOverflow) {
                // Position to the left of the button
                style = { right: 0, left: 'auto' };
            } else if (rightOverflow && !leftOverflow) {
                // Position to the right of the button
                style = { left: 0, right: 'auto' };
            } else {
                // Default: align right edge with button
                style = { right: 0, left: 'auto' };
            }

            // Ensure dropdown doesn't go off-screen on right
            const potentialRight = viewportWidth - buttonRect.right;
            if (potentialRight < 0) {
                style.right = `${potentialRight + padding}px`;
            }

            setDropdownStyle(style);
        }
    }, [isOpen]);

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="dropdown-avatar-container" ref={dropdownRef}>
            <button
                className="avatar-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="User menu"
            >
                {avatarSrc ? (
                    <img src={avatarSrc} alt={userName} className="avatar-image" />
                ) : (
                    <div className="avatar-fallback">
                        {getInitials(userName)}
                    </div>
                )}
            </button>

            {isOpen && (
                <div className="dropdown-menu" ref={menuRef} style={dropdownStyle}>
                    <div className="dropdown-header">
                        <div className="dropdown-avatar-info">
                            {avatarSrc ? (
                                <img src={avatarSrc} alt={userName} className="dropdown-avatar-image" />
                            ) : (
                                <div className="dropdown-avatar-fallback">
                                    {getInitials(userName)}
                                </div>
                            )}
                            <div className="dropdown-user-info">
                                <p className="dropdown-user-name">{userName}</p>
                                <p className="dropdown-user-email">{userEmail}</p>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-section">
                        <button
                            className="dropdown-item"
                            onClick={() => {
                                onViewProfile?.();
                                setIsOpen(false);
                            }}
                        >
                            <User className="dropdown-icon" size={18} />
                            <span>View profile</span>
                        </button>
                        <button
                            className="dropdown-item"
                            onClick={() => {
                                onSettings?.();
                                setIsOpen(false);
                            }}
                        >
                            <Settings className="dropdown-icon" size={18} />
                            <span>Settings</span>
                        </button>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-section">
                        <button className="dropdown-item">
                            <FileText className="dropdown-icon" size={18} />
                            <span>Changelog</span>
                        </button>
                        <button className="dropdown-item">
                            <HelpCircle className="dropdown-icon" size={18} />
                            <span>Support</span>
                        </button>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-section">
                        <button
                            className="dropdown-item dropdown-item-danger"
                            onClick={() => {
                                onLogout?.();
                                setIsOpen(false);
                            }}
                        >
                            <LogOut className="dropdown-icon" size={18} />
                            <span>Log out</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
