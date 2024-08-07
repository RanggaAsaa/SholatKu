import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import Beranda from "./views/Beranda";
import JadwalSholat from "./views/jadwalSholat";
import TataCaraWudhu from "./views/tatacaraWudhu";
import SyaratSholat from "./views/syaratSholat";
import TataCaraSholat from "./views/tatacaraSholat";
import SebelumSholat from "./views/halsebelumSholat";
import Kompas from "./views/Kompas";
import './index.css'
function App() {
  const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, []);

  return (
    <>
      {loading ? (
            <div className="flex items-center justify-center h-screen">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          ) : (
            <main
              className={`text-${
                localStorage.getItem("theme") === "dark" ? "white" : "gray-900"
              }`}
            >
         <BrowserRouter>           
          <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/Jadwal-Sholat" element={<JadwalSholat />} />
              <Route path="/Tata-Cara-Wudhu" element={<TataCaraWudhu />} />
              <Route path="/Syarat-Sholat" element={<SyaratSholat />} />
              <Route path="/Tata-Cara-Sholat" element={<TataCaraSholat />} />
              <Route path="/Sebelum-Sholat" element={<SebelumSholat />} />
              <Route path="/Kompas" element={<Kompas />} />
          </Routes>
          </BrowserRouter>
        </main>
    )}
    </>
  )
}

export default App
