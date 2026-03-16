import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// function based components
// import EmployeeData from './FunctionalApp'
// import StudentData from './StudentList'
// import ResponsiveData from './ResponsiveApp'
import AppCountDemo from './CountAppDemo'

// class based components 
// import App from './ClassApp'
// import Counter from './CountApp'
// import Api from './HooksClassApp'
// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
// bootstrap icons 
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
createRoot(document.getElementById('root')).render(
<StrictMode>
{/* <EmployeeData /> */}
{/* <StudentData /> */}
{/* <ResponsiveData /> */}
{/* <App /> */}
{/* <Counter /> */}
{/* <Api /> */}
<AppCountDemo />
</StrictMode>,
)
