import Anomaly_Details from '../../Gobalshared/AnomalyDetails/Anomaly_Details.tsx'
import ArchiveCard from './ArchiveCard/ArchiveCard.tsx';
// import './Archive.css'
import { useState } from 'react';

function Archive() {

    const [open, setOpen] = useState(false);

    const reportsTable = [
        {
            status: "Fixed",
            title: "Water Leak Water Leak Water Leak Water Leak Water Leak Water Leak Water Leak Water Leak",
            date: "2025-01-10",
            createdBy: "oussama lachhab",
            assignedTo: "Zoubir",
            timeOfResolution: "4 jrs",
            equipement: "Machine a lave",
            workOrder: "AG23232",
            category: "1337",
        },
        {
            status: "Fixed",
            title: "Broken Door Broken Door Broken Door Broken Door Broken Door Broken Door Broken Door Broken",
            date: "2025-01-12",
            createdBy: "oussama lachhab",
            assignedTo: "Zoubir",
            timeOfResolution: "4 jrs",
            equipement: "Machine a lave",
            workOrder: "AG23232",
            category: "1337",
        },
        {
            status: "Fixed",
            title: "Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage",
            date: "2025-01-15",
            createdBy: "oussama lachhab",
            assignedTo: "Zoubir",
            timeOfResolution: "40 jrs",
            equipement: "Machine a lave",
            workOrder: "AG23232",
            category: "Restoration",
        },
        {
            status: "Fixed",
            title: " Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage",
            date: "2025-01-15",
            createdBy: "oussama lachhab",
            assignedTo: "Zoubir",
            timeOfResolution: "4 jrs",
            equipement: "Machine a lave",
            workOrder: "AG23232",
            category: "College of Computing",
        },
        {
            status: "Fixed",
            title: "Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage Power Outage",
            date: "2025-01-15",
            createdBy: "oussama lachhab",
            assignedTo: "Zoubir",
            timeOfResolution: "4 jrs",
            equipement: "Machine a lave",
            workOrder: "AG23232",
            category: "FGSES",
        }
    ];

    return (
        /* Main Container */
        <div className='min-h-screen p-3 sm:p-5 lg:pt-[5px] bg-[#222831]'>
            
            {/* Filter Section */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-5 p-4 md:p-5 my-3 md:my-2 mx-auto max-w-[1400px] 2xl:max-w-[1800px] bg-transparent'>
                
                <h1 className="font-['Poppins'] text-2xl md:text-[2rem] font-semibold text-[#ff6b35] m-0 shrink-0 text-center md:text-left">
                    Archive
                </h1>

                <div className='flex flex-col md:flex-row items-center gap-3 md:gap-5 w-full md:w-auto'>
                    
                    {/* Search Group */}
                    <div className='relative flex items-center w-full md:w-auto'>
                        <input
                            className="peer font-['Poppins'] w-full md:w-[350px] h-11 md:h-[45px] pl-10 pr-4 
                                       shadow-[0_0_0_1.5px_#e5e7eb] border-0 rounded-xl bg-gray-50 
                                       outline-none text-gray-700 text-sm transition-all duration-300
                                       placeholder:text-gray-400
                                       hover:shadow-[0_0_0_2px_#ff6b35] hover:bg-white
                                       focus:shadow-[0_0_0_2px_#ff6b35] focus:bg-white"
                            type="search"
                            placeholder="Search..."
                            name="searchbar"
                        />
                        <svg 
                            viewBox="0 0 24 24" 
                            aria-hidden="true" 
                            className="absolute left-3.5 w-[1.125rem] h-[1.125rem] fill-gray-400 
                                       pointer-events-none z-10 transition-fill duration-300
                                       peer-hover:fill-[#ff6b35] peer-focus:fill-[#ff6b35]"
                        >
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                            </g>
                        </svg>
                    </div>

                    {/* Counter */}
                    <p className="m-0 font-['Poppins'] text-[15px] md:text-base text-gray-200 whitespace-nowrap font-medium text-center">
                        Total <span className="font-bold text-[#ff6b35] text-lg">{reportsTable.length}</span> Archived
                    </p>
                </div>
            </div>

            {/* Grid Container for Cards */}
            <div className='grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(650px,1fr))] gap-4 md:gap-6 px-3 md:px-5 pb-10 mx-auto max-w-[1400px] 2xl:max-w-[1800px]'>
                {reportsTable.map((report, idx) => {
                    const dataCard = {
                        id: String(idx + 1),
                        title: report.title,
                        createdBy: report.createdBy,
                        assignedTo: report.assignedTo,
                        timeOfResolution: report.timeOfResolution,
                        fixedIn: report.date || "Non spécifié",
                        equipement: report.equipement,
                        workOrder: report.workOrder,
                        category: report.category,
                        onClose: () => setOpen(true),
                    };
                    return (<ArchiveCard key={dataCard.id} Data={dataCard} />);
                })}
            </div>

            {open && <Anomaly_Details onClose={() => setOpen(false)} />}
        </div>
    );
}

export default Archive;