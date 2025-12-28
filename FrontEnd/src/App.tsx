import { Routes, Route } from 'react-router-dom'
import Layout from './Common/Layout/Layout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Archive from './Pages/Archive/Archive'
import Reports from './Pages/Reports/Reports'
import ReportDetails from './Pages/ReportsDetails/ReportDetails'
import AnnouncementsPage from './Pages/Annoncements/AnnouncementsPage'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reports" element={<Reports />} />
        <Route path="reports/:id" element={<ReportDetails />} />
        <Route path="archive" element={<Archive />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
      </Route>
    </Routes>
  )
}