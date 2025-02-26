// import './App.css'
import { Outlet } from "react-router-dom"
import Header from "./Components/Layouts/header"

function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App
