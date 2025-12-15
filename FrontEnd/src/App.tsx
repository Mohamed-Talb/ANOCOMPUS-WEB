import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { SetUpTable } from '../ReportTable/report-table.tsx'
import ReportPage from './Pages/ReportsDetails/ReportDetails';
// import './darkmode.css';
// import ReportPage from './all.tsx';
export function App()
{
    return (
    //    <SetUpTable />
        <ReportPage />
    )
}