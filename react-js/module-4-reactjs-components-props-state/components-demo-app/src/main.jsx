import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import EmployeeData from './FunctionalApp'
// import StudentData from './StudentList'
import ResponsiveData from './ResponsiveApp'
// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
// bootstrap icons 
import 'bootstrap-icons/font/bootstrap-icons.css'
createRoot(document.getElementById('root')).render(
<StrictMode>
{/* <EmployeeData /> */}
{/* <StudentData /> */}
<ResponsiveData />
</StrictMode>,
)
