import { Link } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
const halsebelumSholat = () => {
  return (
    <>
      <div className="px-10 text-[#2d2d2d]">
      <Link to='/'>
          <Icon icon="solar:alt-arrow-left-line-duotone" className='text-[35px] mt-10 lg:mx-5 lg:text-[45px]'/>
      </Link>

      <div>
        <h2 className="text-[23px] text-center font-semibold pt-5 lg:text-[35px]">
          Hal-hal yang Dilakukan Sebelum Sholat
        </h2>
        
        <div className="mt-5 px-5 font-medium text-[16px] text-start space-y-7 lg:text-[20px] lg:text-center lg:px-56 lg:space-y-10">
          <li className="list-decimal">Perhatikan Masuknya Waktu Salat</li>
          <li className="list-decimal">Mengutamakan Sholat Berjamaah</li>
          <li className="list-decimal">Menjawab Adzan</li>
          <li className="list-decimal">Memperhatikan Pakaian Sebelum Salat</li>
          <li className="list-decimal">Memperhatikan Kesucian dan Kebersihan Badan dan Tempat Salat</li>
          <li className="list-decimal">Memperhatikan Kesucian dan Kebersihan Badan dan Tempat Salat</li>
          <li className="list-decimal">Segera bergabung dalam Saf Saat Iqamah</li>
        </div>
      </div>
           {/* Button */}
           <div className='mt-10 mx-20 lg:mx-[560px]'>
                <Link to='/'>
                <button className='bg-green-700 text-white px-10 py-2 mb-10 rounded-full font-semibold'>Mengerti</button>
                </Link>
            </div>
      </div>
    </>
  )
}

export default halsebelumSholat