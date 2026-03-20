import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductFilter from './ProductFilter'
createRoot(document.getElementById('root')).render(
<StrictMode>
<ProductFilter />
</StrictMode>,
)
