import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import EmployeeDetails from './EmployeeData'
// import UserApp from './UserApp'
import GalleryApp from './GalleryApp'
import Data from './Data'
createRoot(document.getElementById('root')).render(
<StrictMode>
{/* <EmployeeDetails name="Brijesh" age="35" salary="89500" address="150 feet ring road rajkot"/> */}

{/* <UserApp name="divyraj kumar Pandey" email="divyaraj.pandey@gmail.com" age="25" address="50 feet ring road rajkot" hobbies={["playing","cooking","singing","designing"]} /> */}
{/* 
<UserApp name="Brijesh kumar Pandey" email="brijesh.pandey@gmail.com" age="25" address="50 feet ring road rajkot" />

<UserApp name="sweta" email="sweta.pandey@gmail.com" age="25" address="50 feet ring road rajkot" /> */}
<GalleryApp Data={Data} />
</StrictMode>,
)
