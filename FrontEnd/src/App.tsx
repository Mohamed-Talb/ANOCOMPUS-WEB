import { Routes, Route } from 'react-router-dom'
import Layout from './Common/Layout/Layout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Archive from './Pages/Archive/Archive'
import Reports from './Pages/Reports/Reports'
import ReportDetails from './Pages/ReportsDetails-V2/ReportDetails'
import AnnouncementForm from './Pages/Annoncements/AnnouncementForm'
import { ReportsTable } from './Pages/Reports/ReportTable'

// export function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Dashboard />} />
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="reports" element={<Reports />} />
//         <Route path="reports/:id" element={<ReportDetails />} />
//         <Route path="archive" element={<Archive />} />
//       </Route>
//     </Routes>
//   )
// }

export function App() {
  return (
    // <AnnouncementForm />
    // <ReportsTable />
    <ReportDetails />

  )
}