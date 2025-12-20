import { useState } from 'react'
import Menu from '../SharedComponents/Mainmenu.tsx'
import './Reports.css'
import '../SharedComponents/DarkMode.css'
import { SetUpTable } from '../report-table/report-table.tsx'

function allReports() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState("Satus")

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className='container-reports-el'>

            <Menu />

            <div className='filter-el'>
                <h1 className='title-el'>All Reports</h1>

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

                    <div className="dropdown-container">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="dropdown-button"
                        >
                            {selectedOption}
                            <svg
                                className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                            >
                                <path d="M7 10l5 5 5-5z" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <div
                                    className="dropdown-item"
                                    onClick={() => handleOptionSelect('Satus')}
                                >
                                    Satus
                                </div>
                                <div
                                    className="dropdown-item"
                                    onClick={() => handleOptionSelect('Low')}
                                >
                                    Low
                                </div>
                                <div
                                    className="dropdown-item"
                                    onClick={() => handleOptionSelect('High')}
                                >
                                    High
                                </div>
                                <div
                                    className="dropdown-item"
                                    onClick={() => handleOptionSelect('Critic')}
                                >
                                    Critic
                                </div>
                            </div>
                        )}
                    </div>

                    <p>Total <span>100</span> Anomalies</p>

                </div>

            </div>

            <div className='table-el'>
                <SetUpTable />
            </div>
        </div>

    )
}


export default allReports;