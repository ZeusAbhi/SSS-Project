import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Routes } from 'react-router'
import { View } from './view.jsx'
import { Theatre } from './theatre.jsx'
import { BrowserRouter,Route} from "react-router-dom";
const RouteComponent=()=>{
  return(
    <Routes>
        <Route path="/" element={<App />} />
      <Route path="/view" element={<View/>} />
      <Route path="/home" element={<View/>}/>
      <Route path="/theatre" element={<Theatre/>} />
    </Routes>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <RouteComponent/>
    </BrowserRouter>
  </React.StrictMode>,
)
