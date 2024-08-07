import { Link } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
import Niat from "../assets/images/niat.png"
import TakbiratulIhram from "../assets/images/takbiratul-ihram.png"
import Rukuk from "../assets/images/rukuk.png"
import Itidal from "../assets/images/itidal.png"
import Sujud from "../assets/images/sujud.png"
import TasyahudAkhir from "../assets/images/tasyahud-akir.png"
import Salam from "../assets/images/salam.png"

const tatacaraSholat = () => {
  return (
    <div className='px-10 text-[#2d2d2d]'>
      <Link to='/'>
          <Icon icon="solar:alt-arrow-left-line-duotone" className='text-[35px] mt-10 lg:mx-5 lg:text-[45px]'/>
      </Link>

      <div className='text-center'>
            <h2 className='text-[23px] font-semibold pt-5 lg:text-[35px]'>Sholat</h2>
      </div>
            <div className="space-y-10 lg:space-y-20 mt-5 lg:px-32">
              {/* Niat */}
              <div className="text-[16px] font-medium lg:text-center lg:text-[25px]">
                <h2>
                1. Niat
                </h2>
                <p>
                Niat shalat tentu berbeda-beda tergantung shalat yang ditunaikan. Niat bisa diucapkan juga dalam bahasa Indonesia. Contohnya:
                </p>
                <p className="mt-3">
                  &quot;Saya berniat shalat fardhu subuh 2 rakaat menghadap kiblat karena Allah ta&lsquo;ala.&quot;
                </p>
                <img
                 src={Niat}
                 alt="" 
                 className="w-[100px] mx-auto mt-7 lg:w-[150px]"
                 />
             </div>

              {/* Takbiratul Ihram */}
              <div className="text-[16px] font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>2. Takbiratul Ihram</h2>
                <p>
                  Saat melakukan ini, lafal yang dibacakan adalah &quot;Allahuakbar&quot; sambil mengangkat kedua telapak tangan ke samping telinga.
                </p>
                <img 
                src={TakbiratulIhram} 
                alt="" 
                className="w-[120px] mx-auto mt-7 lg:w-[150px]"/>
              </div>

              {/* Berdiri tegak bagi yang mampu */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>
                3. Berdiri tegak bagi yang mampu
                </h2>
                <p>Selanjutnya, rukun shalat yang harus dilakukan adalah bersedekap (melipat kedua tangan dengan tangan kanan di atas tangan kiri) sambil berdiri tegak. Meski demikian, Islam memudahkan umatnya dengan memberikan keringanan untuk duduk atau berbaring bagi yang sedang sakit.</p>
              </div>

              {/* Membaca surat Al-Fatihah */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>4. Membaca surat Al-Fatihah di Setiap Rakaat</h2>
                <p>
                 Membaca surat al-Fatihah ketika shalat adalah wajib, sementara membaca surat pendek setelahnya tidak diwajibkan.
                </p>
              </div>

              {/* Rukuk dengan tuma'ninah */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>
                  5. Rukuk dengan tuma&lsquo;ninah
                </h2>
                <p>
                Ketika rukuk, bacaan yang diucapkan adalah berikut sebanyak 3 kali:
                  <div className="mt-3 mb-3 text-end lg:text-center">
                  سُبْحَانَ رَبِّىَ الْعَظِيْمِ وَبِحَمْدِهِ        
                  </div>
                    Subhaana robbiyal &lsquo;adziimi wabihamdih
                </p>
                <p>
                  Artinya: &quot;Maha suci Tuhan yang Maha Agung serta memujilah aku kepada-Nya.&quot;
                </p>
                <img src={Rukuk} 
                     alt=""
                     className="w-[120px] mx-auto mt-7 lg:w-[150px]" />
              </div>

              {/* I'tidal dengan tuma'ninah */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2 className="lg:text-center">
                  6. I&lsquo;tidal dengan tuma&lsquo;ninah
                </h2>
                <p>
                Sebangunnya dari rukuk, langkah selanjutnya adalah mengangkat kedua tangan seperti saat takbir sambil membaca:

                <div className="text-end mt-3 mb-3 lg:text-center">
                سَمِعَ اللهُ لِمَنْ حَمِدَهُ
                </div>        
                Sami&lsquo;a Allahu liman hamidah.

                Artinya: &quot;Allah mendengar pujian orang yang memuji-Nya&quot;
                Lalu diikuti dengan bacaan i&lsquo;tidal sebagai berikut:
                
                <div className="text-end lg:text-center">
                رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ
                </div>

                <div>
                Rabbana lakal hamdu mil &lsquo;us samaawaati wa mil ul ardhi wa mil&lsqo;u maa syi&lsquo;ta min syai&lsquo;in ba&lsquo;du.
                </div>

                <div>
                Artinya: &quot;Ya Allah Ya Tuhan kami, bagi-Mu lah segala puji, sepenuh langit dan sepenuh bumi, dan sepenuh apa saja yang Engkau kehendaki sesudah itu.&quot;
                </div>
                </p>
                <img src={Itidal}
                     alt=""
                     className="w-[120px] mx-auto mt-7 lg:w-[150px]"
                      />
              </div>

              {/* Sujud dua kali dengan tuma'ninah */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>
                7. Sujud dua kali dengan tuma&lsquo;ninah
                </h2>
                <p>
                Ketika sujud, bacaan yang diucapkan adalah berikut sebanyak 3 kali:
                  <div className="text-end mt-4 mb-4 lg:text-center"> 
                  سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ
                  </div>

                  <div className="mb-4">
                  Subhaana rabbiyal a&lsquo;la wa bihamdihi.
                  </div>

                  Artinya: &quot;Maha Suci Rabb-ku Yang Maha Tinggi, dan memujilah aku kepada-Nya.&quot;
                </p>
                <img src={Sujud}
                    alt="" 
                    className="w-[140px] mx-auto lg:w-[150px]"/>
              </div>

              {/* Duduk di antara dua sujud dengan tuma'ninah */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>8. Duduk di antara dua sujud dengan tuma&lsquo;ninah</h2>
                <p>
                Ketika duduk di antara dua sujud, bacaan yang diucapkan adalah berikut:

                <div className="text-end mt-4 mb-4 lg:text-center">
                رب اغْفِرلي وَارْحَمْنِى واجبرني وَارْفَعْنِي وَارْزُقْنِى   وَاهْدِنِى وَعَافِنِى وَاعْفُ عَنِّى
                </div>

                <div className="mb-4">
                Robbighfirlii warhamnii wajburnii warfa&lsquo;nii warzuqnii wahdinii wa&lsquo;aafinii wa&lsquo;fu &lsquo;annii.
                </div>

                Artinya: &quot;Ya Allah ampunilah aku, rahmatilah aku, perbaikilah keadaanku, tinggikanlah derajatku, berilah rezeki, dan petunjuk untukku.&quot;
                </p>
              </div>

              {/* Duduk tasyahud akhir dengan tuma'ninah */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>9.Duduk tasyahud akhir dengan tuma&lsquo;ninah</h2>
                <p>
                  Berbeda dengan duduk di antara dua sujud dan tasyahud awal yang posisinya menduduki kaki kiri, duduk tasyahud akhir dilakukan dengan bersimpuh menduduki lantai dan posisi telapak kaki kanan tegak.
                </p>
                <img 
                src={TasyahudAkhir} 
                alt=""
                className="w-[140px] mx-auto mt-7 lg:w-[180px]" />
              </div>

              {/* Membaca tasyahud akhir */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>10. Membaca tasyahud akhir</h2>
                <p>
                Berikut bacaan tasyahud akhir:

                  <div className="text-end mt-4 mb-4 lg:text-center">
                  التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِىُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ , أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ , اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ ، وَعَلَى آلِ مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ ، إِنَّكَ حَمِيدٌ مَجِيدٌ ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ ، وَعَلَى آلِ مُحَمَّدٍ ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ ، وَعَلَى آلِ إِبْرَاهِيمَ ، إِنَّكَ حَمِيدٌ مَجِيدٌ
                  </div>
                  
                  <div className="mb-4">
                  At tahiyyaatul mubaarakaatush shalawaatuth thoyyibaatulillaah. As salaamu&lsquo;alaika ayyuhan nabiyyu wa rahmatullaahi wabarakaatuh, assalaamu&lsquo;alaina wa&lsquo;alaa ibaadillaahishaalihiin. asyhaduallaa ilaaha illallaah, wa asyhadu anna muhammad rasuulullaah.
                  </div>

                  <div className="mb-4">
                  Allaahumma shalli&lsquo;alaa muhammad, wa&lsquo;alaa aali muhammad. kamaa shallaita alaa ibraahiim wa alaa aali ibraahiim. Wabaarik&lsquo;alaa muhammad wa alaa aali muhammad. kamaa baarakta alaa ibraahiim wa alaa aali ibraahiim, fil&lsquo;aalamiina innaka hamiidum majiid.
                  </div>

                  Artinya: &quot;Ya Allah, limpahi lah rahmat atas keluarga Nabi Muhammad, seperti rahmat yang Engkau berikan kepada Nabi Ibrahim dan keluarganya. Dan limpahi lah berkah atas Nabi Muhammad beserta para keluarganya, seperti berkah yang Engkau berikan kepada Nabi Ibrahim dan keluarganya, Engkau lah Tuhan yang sangat terpuji lagi sangat mulia diseluruh alam.&quot;
                  
                </p>
              </div>

              {/* Membaca salawat saat tasyahud akhir */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>11. Membaca salawat saat tasyahud akhir</h2>
                <p>
                  Ini juga perbedaan lainnya di dari tasyahud awal dan akhir. Di tasyahud akhir, ada bacaan shalawat pada nabi Muhammad ﷺ yang ada di bagian kedua bacaan di atas (mulai dari Allahumma shalli ...).
                </p>
              </div>

              {/* Membaca salam yang pertama */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>12. Membaca salam yang pertama</h2>
                <p>
                Gerakan ini adalah tanda berakhirnya shalat, bacaan salam yang diucapkan ketika shalat adalah:

                <div className="text-end lg:text-center mt-3 mb-3"> 
                ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰه
                </div>

                Assalamualaikum wa rahmatullah
                Artinya: &quot;Keselamatan dan rahmat Allah semoga bersamamu sekalian&quot;
                </p>
                <img 
                src={Salam}
                alt="" 
                className="w-[150px] mx-auto mt-7 lg:w-[180px]"/>
              </div>

            {/* Tertib */}
              <div className="text-[16px] mb-2 font-medium mt-5 lg:text-[25px] lg:text-center">
                <h2>
                  13. Tertib
                </h2>
                  <p>
                  Poin ini mengartikan bahwa setiap rukun shalat harus dilakukan sesuai dengan urutannya, tidak saling mendahului.
                  </p>
              </div>

          </div>
                {/* Button */}
           <div className='mt-10 mx-20 lg:mx-[560px]'>
                <Link to='/'>
                <button className='bg-green-700 text-white px-10 py-2 mb-10 rounded-full font-semibold'>Mengerti</button>
                </Link>
            </div>
    </div>
  )
}

export default tatacaraSholat