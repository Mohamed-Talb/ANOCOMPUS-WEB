import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Responsable/Dashboard/Dashboard'
import Archive from './Pages/Responsable/Archive/Archive'
import Reports from './Pages/Responsable/Reports/Reports'
import ReportDetails from './Pages/ReportsDetails/ReportDetails'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/reports/:id" element={<ReportDetails />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>
  )
}