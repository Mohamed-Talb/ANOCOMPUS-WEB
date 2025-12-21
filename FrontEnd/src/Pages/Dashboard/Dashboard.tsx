import StatsOverview from './StatsOverview/overview';
import LatestAnnoncements from './LatestAnnoncements/LatestAnnoncements';
import LatestReports from './LatestReports/LatestReports';
import Mainmenu from '../../../Shared/MainMenu/Mainmenu';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <Mainmenu />
            
            <div className="dashboard-container">
                <h1 className="dashboard-title">Dashboard</h1>
                
                <section className="overview-section">
                    <StatsOverview />
                </section>

                <section className="side-by-side-section">
                    <div className="section-item">
                        <LatestReports />
                    </div>
                    <div className="section-item">
                        <LatestAnnoncements />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
