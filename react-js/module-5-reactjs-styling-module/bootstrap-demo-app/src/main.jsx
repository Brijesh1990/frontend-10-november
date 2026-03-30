import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import GridApp from './GridApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <GridApp />
  </StrictMode>,
)
