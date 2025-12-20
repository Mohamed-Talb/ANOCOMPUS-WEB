import StatsOverview from '../SharedComponents/overview';
import AnnoncementsComp from '../SharedComponents/AnnoncementsComp';
import LatestReports from '../SharedComponents/LatestReports';
import Mainmenu from '../SharedComponents/Mainmenu';
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
                        <AnnoncementsComp />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
