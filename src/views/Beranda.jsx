import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Beranda = () => {
  return (
    <>
        <div className="px-10 py-3 lg:px-36">
            <img 
            src={Logo} 
            alt="" 
            className='pt-10 lg:w-[300px] mx-auto mb-3'/>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
                <button className="btn btn-md bg-green-700 py-4 rounded-[25px] text-white font-semibold text-[14px] lg:btn-lg lg:py-8 lg:text-[17px] lg:hover:bg-green-600 duration-300"><Link to="/Jadwal-Sholat">Jadwal Sholat</Link></button>
                <button className="btn btn-md bg-green-700 py-4 rounded-[25px] text-white font-semibold text-[14px] lg:btn-lg lg:py-8 lg:text-[17px] lg:hover:bg-green-600 duration-300"><Link to="/Tata-Cara-Wudhu">Tata cara wudhu</Link></button>
                <button className="btn btn-md bg-green-700 py-4 rounded-[25px] text-white font-semibold text-[14px] lg:btn-lg lg:py-8 lg:text-[17px] lg:hover:bg-green-600 duration-300"><Link to="/Syarat-Sholat">Syarat Sholat</Link></button>
                <button className="btn btn-md bg-green-700 py-4 rounded-[25px] text-white font-semibold text-[14px] lg:btn-lg lg:py-8 lg:text-[17px] lg:hover:bg-green-600 duration-300"><Link to="/Tata-Cara-Sholat">Tata Cara Sholat & Bacaan Sholat</Link></button>
                <button className="btn btn-md bg-green-700 py-4 rounded-[25px] text-white font-semibold text-[14px] lg:btn-lg lg:py-8 lg:text-[17px] lg:hover:bg-green-600 duration-300"><Link to="/Sebelum-Sholat">Hal hal yang dilakukan sebelum sholat</Link></button>
                <button className="btn btn-md bg-green-700 py-4 rounded-[25px] text-white font-semibold text-[14px] lg:btn-lg lg:py-8 lg:text-[17px] lg:hover:bg-green-600 duration-300"><Link to="/Kompas">Kompas</Link></button>
            </div>
        </div>
    </>
  )
}

export default Beranda