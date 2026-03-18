import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import EmployeeData from './EmployeeData'
createRoot(document.getElementById('root')).render(
<StrictMode>
<EmployeeData />   
</StrictMode>,
)
