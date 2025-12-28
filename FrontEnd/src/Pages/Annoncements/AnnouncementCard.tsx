import { useState } from 'react';
import './styles/AnnouncementCard.css';
import { NoticePopup } from './NoticePopup';

type InfoItemType = 'local' | 'datetime' | 'expiry';

interface InfoItemData {
  type: InfoItemType;
  value: string;
  isExpired?: boolean;
}

interface AnnouncementCardProps {
    title: string;
    description: string;
    link?: string;
    location?: string;
    date?: string;
    time?: string;
    expiry?: string;
    isExpired?: boolean;
    onEdit?: () => void;
    onDelete?: () => void;
}

const AnnouncementCard = ({ 
    title, 
    description, 
    link = "#",
    location,
    date,
    time,
    expiry,
    isExpired,
    onEdit,
    onDelete
}: AnnouncementCardProps) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleShowMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsPopupOpen(true);
    };

    // Build infoItems array from available props
    const infoItems: InfoItemData[] = [];
    if (location) infoItems.push({ type: 'local' as const, value: location });
    if (date && time) infoItems.push({ type: 'datetime' as const, value: `${date} ${time}` });
    else if (date) infoItems.push({ type: 'datetime' as const, value: date });
    if (expiry) infoItems.push({ type: 'expiry' as const, value: expiry, isExpired: isExpired });

    return (
        <>
            <div className="announcement-card">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <a href={link} className="learn-more" onClick={handleShowMore}>
                    <span className="arrow-icon">&gt;</span>
                    <span className="link-text">SHOW MORE</span>
                </a>
            </div>

            <NoticePopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                title={title}
                infoItems={infoItems}
                details={description}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </>
    );
};

export default AnnouncementCard;