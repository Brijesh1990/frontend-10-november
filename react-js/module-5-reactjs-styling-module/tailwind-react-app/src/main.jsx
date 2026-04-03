import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'
import LoginApp from './component/pages/LoginApp'
import SignUpApp from './component/pages/SignUpApp'
import PageNotFound from './component/pages/PageNotFound'
import './index.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/login-with-us' element={<LoginApp />} />
        <Route path='/create-account' element={<SignUpApp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)
