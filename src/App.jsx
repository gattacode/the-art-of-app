import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Home />} />
        <Route path="/artworks" element={<Home />} />
        <Route path='/:id' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;