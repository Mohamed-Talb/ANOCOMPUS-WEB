import './LatestAnnoncements.css'
// import './DarkMode.css'
import { Calendar } from 'lucide-react'

function AnnouncementItem({ title, content, date }: { title: string, content: string, date: string }) {
    return (
        <div className="announcement-item">
            <div className="announcement-header">
                <div className="announcement-title-section">
                    <h3 className='title-el-func'>{title}</h3>
                </div>
                <span className="announcement-date">
                    <Calendar className="date-icon" />
                    {date}
                </span>
            </div>
            <p className='content-el-func'>{content}</p>
        </div>
    );
}

function LatestAnnoncements() {

    const announcements = [
        {
            id: 1,
            title: "System Maintenance",
            content: "Scheduled maintenance tonight from 11 PM to 2 AM",
            date: "2025-11-23",
        },
        {
            id: 2,
            title: "New Employee Welcome",
            content: "Please welcome our new team members",
            date: "2025-11-22",
        },
        {
            id: 3,
            title: "Training Session",
            content: "Mandatory training session next week",
            date: "2025-11-21",
        },
        {
            id: 4,
            title: "Important Notice",
            content: "Please check your email for important updates",
            date: "2025-11-20",
        },
        {
            id: 5,
            title: "Team Meeting",
            content: "Monthly team meeting scheduled for Friday",
            date: "2025-11-19",
        }
    ];

    return (
        <div className='AnnoncementsComp'>

            <div className='header-el'>
                <h2 className='title-el'>Latest Announcements</h2>
                <button className='view-all-el'>View all</button>
            </div>

            {announcements.map(announcement => (
                <AnnouncementItem
                    key={announcement.id}
                    title={announcement.title}
                    content={announcement.content}
                    date={announcement.date}
                />
            ))}

        </div>
    );
}

export default LatestAnnoncements;