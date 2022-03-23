import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import LayoutsWithNavbar from "./components/LayoutsWithNavbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import TestPage from "./pages/TestPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/testpage" element={<TestPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
