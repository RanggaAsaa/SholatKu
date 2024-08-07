import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

const syaratSholat = () => {
  return (
    <>
        <div className="px-10 text-[#2d2d2d]">
            <Link to="/">
            <Icon icon="solar:alt-arrow-left-line-duotone" className='text-[35px] mt-10 lg:mx-5 lg:text-[45px]'/>
            </Link>
            <div>
                <h2 className="text-[23px] text-center font-semibold pt-5 lg:text-[35px]">Syarat syarat Sholat</h2>

                <div className="mt-5 font-medium text-[16px] text-start space-y-4 lg:text-[20px] lg:text-center lg:px-56 lg:space-y-10">

                    {/* Beragama Islam */}
                    <div>
                        <h2>1. Beragama Islam</h2>
                        <p>Wajib hukumnya untuk seseorang yang melaksanakan sholat adalah seorang Muslim.</p>
                    </div>

                    {/* Baligh */}
                    <div>
                        <h2>2. Memiliki Akal dan Sudah baligh</h2>
                        <p>Syarat sah sholat yang berikutnya, yakni wajib memiliki akal atau waras. Orang tersebut pun mesti jauh dari keadaan tidak sadar, sebagaimana sabda Rasulullah SAW yang artinya: “Yang terbebas dari hukum itu ada tiga golongan, pertama orang tidak waras yang hilang akalnya hingga waras kembali,</p>
                        <p className="mt-2">Kemudian orang yang tidur hingga dia bangun, dan anak (kecil) hingga dia bermimpi (mimpi basah).” (HR. Abu Dawud, Ibnu Majah, at-Tirmidzi dan lainnya).
                        Tak hanya itu, rukun sah sholat lainnya, yakni anak kecil yang telah berusia 7 tahun ke atas.</p>
                    </div>

                    {/* Suci dari hadis besar dan kecil */}
                    <div>
                        <h2>3. Suci dari hadis atau kecil</h2>
                        <p>Terdapat 2 jenis hadas, yakni hadas kecil dan hadas besar.
                        Hadas kecil dapat dihilangkan dengan berwudhu atau tayamum. Sementara itu, hadas besar hanya bisa dihilangkan dengan mandi wajib.</p>
                    </div>

                    {/* Menutup Aurat Jika Mampu */}
                    <div>
                        <h2>4. Menutup aurat jika mampu</h2>
                        <p>Syarat sah sholat yang selanjutnya, yakni menutup aurat dengan sesuatu yang menyelimuti.
                        </p>
                        <p className="mt-2">
                        Perempuan atau laki-laki perlu menutup aurat sesuai batasannya ketika menjalankan sholat 5 waktu.
                        </p>
                        <p className="mt-2">
                        Apabila seseorang tidak mendapati sesuatu yang menutupi seluruh auratnya, maka dahulukan menutup qubul dan dubur.
                        </p>
                    </div>

                    {/* Suci Pakaian dan Tempat Sholat */}
                    <div>
                        <h2>5. Suci Pakaian dan Tempat Sholat</h2>
                        <p>Kesucian pakaian, tubuh, dan tempat sholat juga diperhatikan. Sebab, hal tersebut termasuk ke dalam syarat sah salat.</p>
                    </div>

                    {/* Suci Pakaian dan Tempat Sholat */}
                    <div>
                        <h2>6. Masuk Waktu Sholat</h2>
                        <p>Syarat sah sholat yang berikutnya, yaitu telah memasuki waktunya.
                        Masuknya waktu sholat biasanya ditandai dengan kumandang azan dari musala atau masjid.</p>
                    </div>

                    {/* Menghadap Kiblat */}
                    <div>
                        <h2>7. Menghadap Kiblat</h2>
                        <p>Wajib bagi setiap umat Islam untuk menjalankan sholat dengan menghadap ke arah kiblat.</p>
                    </div>

                    {/* Tidak Berbicara saat Sholat*/}
                    <div>
                        <h2>8. Tidak Berbicara saat Sholat</h2>
                        <p>Syarat sah sholat yang tak boleh diabaikan, yakni tidak berbicara atau mengobrol saat sedang melaksanakannya. Maksudnya, yaitu tidak berbicara selain bacaan sholat.</p>
                    </div>

                    {/* Tidak Bergerak Selain Gerakan Sholat*/}
                    <div>
                        <h2>9. Tidak Bergerak Selain Gerakan Sholat</h2>
                        <p>Imam Syafii mengatakan bahwa banyak melakukan gerakan yang tidak diperlukan bisa membatalkan ibadah tersebut.</p>
                    </div>

                    {/* Tidak Bergerak Selain Gerakan Sholat*/}
                    <div>
                        <h2>10. Tidak dalam Keadaan Makan dan Minum</h2>
                        <p>Makan atau minum dengan sengaja membuat sholat menjadi tidak sah.</p>
                    </div>
                   
                    {/* Tidak Bergerak Selain Gerakan Sholat*/}
                    <div>
                        <h2>11. Tidak Ada Keraguan</h2>
                        <p>Seseorang yang hendak sholat seharusnya sudah tidak lagi merasa ragu dengan ibadah yang akan dikerjakannya.</p>
                        <p>
                        Apabila masih ada keraguan, perlu mengulangi berwudhu atau bersuci dari awal.</p>
                        <p>
                        Begitu juga ketika seseorang yang telah batal wudhu dan ragu apakah ia sudah wudhu kembali atau belum.
                        </p>
                    </div>

                     {/* Tidak Berniat Memutus Sholat*/}
                     <div>
                        <h2>12. Tidak Berniat Memutus Sholat</h2>
                        <p>Syarat sah sholat yang perlu dikenali adalah tidak berniat memutuskan salat yang dijalani.</p>
                    </div>

                </div>

                {/* Button */}
            <div className='mt-10 mx-20 lg:mx-[560px]'>
                <Link to='/'>
                <button className='bg-green-700 text-white px-10 py-2 mb-10 rounded-full font-semibold'>Mengerti</button>
                </Link>
            </div>
            </div>
        </div>
    </>
  )
}

export default syaratSholat