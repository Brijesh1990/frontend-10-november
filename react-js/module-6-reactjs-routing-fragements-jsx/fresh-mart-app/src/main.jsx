import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import ContactApp from './components/pages/ContactApp'
import RegisterApp from './components/pages/RegisterApp'
import ShopApp from './components/pages/ShopApp'
import PageNotFound from './components/pages/PageNotFound'
import './index.css'
import ProductApp from './components/pages/ProductApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='/contact' element={<ContactApp />} />
        <Route path='/products' element={<ProductApp />} />
        <Route path='/register' element={<RegisterApp />} />
        <Route path='/shop' element={<ShopApp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)
