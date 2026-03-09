import React,{StrictMode} from "react";
import {createRoot} from "react-dom/client";
import CalcApp from "./CalcApp";
import './style.css'
import 'animate.css'
createRoot(document.getElementById("demo-app")).render(
    <StrictMode>
     <CalcApp />
    </StrictMode>
)