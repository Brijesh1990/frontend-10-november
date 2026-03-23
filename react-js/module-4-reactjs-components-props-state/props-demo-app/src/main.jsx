import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EmployeeDetails from './EmployeeData'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <EmployeeDetails name="Brijesh" age="35" salary="89500" address="150 feet ring road rajkot"/>
  </StrictMode>,
)
