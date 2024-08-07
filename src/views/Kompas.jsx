import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
import KompasPng from "../assets/images/kompas.png"
const Kompas = () => {
    const [alpha, setAlpha] = useState(0);
  
    useEffect(() => {
      const handleOrientation = (event) => {
        setAlpha(event.alpha);
      };
  
      window.addEventListener('deviceorientation', handleOrientation);
  
      return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
      };
    }, []);
  return (
    <>
      <div className="px-10 text-[#2d2d2d]">
        <Link to='/'>
                <Icon icon="solar:alt-arrow-left-line-duotone" className='text-[35px] mt-10 lg:mx-5 lg:text-[45px]'/>
            </Link>
        <h2 className="text-[23px] text-center font-semibold pt-5 lg:text-[35px]">Kompas</h2>
        <img 
        src={KompasPng}
        alt="" 
        className="w-[300px] mx-auto mt-20 lg:w-[350px] lg:mt-10"
        style={{   transform: `rotate(${+alpha}deg)`,
        transition: 'transform 0.5s ease-out', }}/>
      </div>
    </>
  )
};

export default Kompas