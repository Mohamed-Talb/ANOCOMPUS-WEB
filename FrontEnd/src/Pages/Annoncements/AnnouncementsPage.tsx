import AnnouncementCard from './AnnouncementCard';
import './styles/AnnouncementsPage.css';

const AnnouncementsPage = () => {
    const announcements = [
        {
            id: 1,
            title: "SYSTEM MAINTENANCE",
            description: "The system will be undergoing scheduled maintenance on January 5th, 2025 from 2:00 AM to 6:00 AM. During this time, all services will be temporarily unavailable. We apologize for any inconvenience this may cause.",
            location: "Building A - R8",
            date: "2025-01-05",
            time: "02:00",
            expiry: "Starts in 8 days",
            isExpired: false,
        },
        {
            id: 2,
            title: "NEW FEATURES RELEASE",
            description: "We're excited to announce the launch of new reporting features including advanced filtering, custom exports, and real-time notifications. Check out the updated dashboard to explore these enhancements.",
            location: "R12",
            date: "2025-01-02",
            time: "09:00",
            expiry: "Active for 30 days",
            isExpired: false,
        },
        {
            id: 3,
            title: "SECURITY UPDATE",
            description: "A critical security patch has been applied to all systems. All users are required to update their passwords within the next 7 days. Please use a combination of uppercase, lowercase, numbers, and special characters.",
            location: "Building B - R5",
            date: "2024-12-28",
            time: "14:30",
            expiry: "Expires in 7 days",
            isExpired: false,
        },
        {
            id: 4,
            title: "TRAINING SESSION",
            description: "Join us for a comprehensive training session on the new reporting system. This session will cover all the latest features, best practices, and tips for maximizing efficiency. Registration is required.",
            location: "Conference Room - R1",
            date: "2025-01-10",
            time: "10:00",
            expiry: "Registration closes in 5 days",
            isExpired: false,
        },
        {
            id: 5,
            title: "HOLIDAY SCHEDULE",
            description: "Please note the adjusted working hours during the holiday season. The office will be closed on January 1st and will operate with reduced staff from January 2nd to January 5th.",
            location: "All Buildings",
            date: "2025-01-01",
            time: "00:00",
            expiry: "Expired 2 days ago",
            isExpired: true,
        },
        {
            id: 6,
            title: "POLICY UPDATE",
            description: "Our data retention policy has been updated to comply with new regulations. All archived reports older than 5 years will be permanently deleted. Please review and download any reports you need to keep before February 1st, 2025.",
            location: "R15",
            date: "2025-02-01",
            time: "00:00",
            expiry: "Active until Feb 1st",
            isExpired: false,
        },
    ];

    const handleEdit = (id: number) => {
        console.log(`Edit announcement ${id}`);
    };

    const handleDelete = (id: number) => {
        console.log(`Delete announcement ${id}`);
    };

    return (
        <div className="announcements-page">
            <div className="announcements-header">
                <h1 className="announcements-title">Announcements</h1>
                <p className="announcements-subtitle">Stay updated with the latest news and updates</p>
            </div>
            
            <div className="announcements-grid">
                {announcements.map((announcement) => (
                    <AnnouncementCard
                        key={announcement.id}
                        title={announcement.title}
                        description={announcement.description}
                        location={announcement.location}
                        date={announcement.date}
                        time={announcement.time}
                        expiry={announcement.expiry}
                        isExpired={announcement.isExpired}
                        onEdit={() => handleEdit(announcement.id)}
                        onDelete={() => handleDelete(announcement.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnnouncementsPage;
