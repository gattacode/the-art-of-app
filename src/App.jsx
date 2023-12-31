import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Artwork from './pages/Artwork';
import Artworks from './pages/Artworks';
import './App.sass';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Home />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/artworks/:artistId" element={<Artwork />} />
        <Route path='/:artistId' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
