import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import LayoutsWithNavbar from "./components/LayoutsWithNavbar"
import Home from "./pages/home"
import Login from "./pages/login"
import Customers from "./pages/customers"
import TestPage from "./pages/testPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/testpage" element={<TestPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
