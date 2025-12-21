import Menu from '../../Gobalshared/MainMenu/Mainmenu.tsx'
import ReportsComponents from '../../../SharedComponents/ReportsComponents.tsx'
import Anomaly_Details from '../../Gobalshared/AnomalyDetails/Anomaly_Details.tsx'

import { useState } from 'react';
import './Archive.css'

function Archive() {

    const [open, setOpen] = useState(false);


    const reportsTable = [
        {
            status: "Fixed",
            title: "Water Leak Water Leak Water Leak Water Leak Water Leak Water Leak Water Leak Water Leak",
            date: "2025-01-10",
        },
        {
            status: "Pending",
            title: "Broken Door Broken Door Broken Door Broken Door Broken Door Broken Door Broken Door Broken",
            date: "2025-01-12",
        },
        {
            status: "In Progress",
            title: "Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage",
            date: "2025-01-15",
        },
        {
            status: "In Progress",
            title: " Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage",
            date: "2025-01-15",
        },
        {
            status: "In Progress",
            title: "Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage",
            date: "2025-01-15",
        }
    ];


    return (

        <div className='container-archive-el'>

            <Menu />

            <div className='filter-el'>
                <h1 className='title-arcive-el'>Archive</h1>
                <div className='compo-el'>
                    <div className='groupe-el'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                                ></path>
                            </g>
                        </svg>
                        <input
                            className="input-search-el"
                            type="search"
                            placeholder="Search..."
                            name="searchbar"
                        />
                    </div>
                    <p>Total <span>100</span> Archived</p>
                </div>
            </div>

            <div className='archived-all-el'>
                {reportsTable.map((row, i) => (
                    <ReportsComponents
                        key={i}
                        status={row.status}
                        title={row.title}
                        date={row.date}
                        onClose={() => setOpen(true)}
                    />
                ))}
            </div>

            {open && <Anomaly_Details onClose={() => setOpen(false)} />}
        </div>

    );
}

export default Archive;