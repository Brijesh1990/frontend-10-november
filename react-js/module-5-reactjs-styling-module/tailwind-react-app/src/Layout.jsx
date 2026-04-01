import React from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Content from './component/Content'
import Footer from './component/Footer'
export default function Layout() {
  return (
    <div>
        <Header />
        <div className="flex">
        <Sidebar />
        <Content />
        </div>
        <Footer />
      
    </div>
  )
}
