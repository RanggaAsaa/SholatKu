import {Link} from 'react-router-dom'
import {Icon} from '@iconify/react'
import MembasuhWajah from '../assets/images/membasuh_wajah.png'
import MembasuhTangan from '../assets/images/membasuh-tangan.png'
import MembasuhKaki from '../assets/images/membasuh-kaki.png'
import MengusapKepala from '../assets/images/mengusap-kepala.png'
import Berkumur from '../assets/images/kumur-kumur.png'
import MembasuhTelapakTangan from '../assets/images/membasuh-telapak-tangan.png'
import MembersihkanHidung from '../assets/images/membasuh-hidung.png'


const tatacaraWudhu = () => {
  return (
    <>
        <div className='px-10 text-[#2d2d2d]'>
            <Link to='/'>
                <Icon icon="solar:alt-arrow-left-line-duotone" className='text-[35px] mt-10 lg:mx-5 lg:text-[45px]'/>
            </Link>

            <div>
                <h2 className='text-[23px] text-center font-semibold pt-5 lg:text-[35px]'>Tata Cara Wudhu</h2>

                <div className='mt-5 font-medium text-[16px] text-justify lg:text-[20px] lg:px-52 lg:text-center'>
                    {/* Niat Wudhu */}
                    <div>
                        <h2 className='text-center mb-2'>1. Niat Wudhu</h2>
                        <p className='space-y-4'>Pelaksanaan niat wudhu dalam hati berbarengan ketika membasuh wajah, adapun lafal niat wudhu yang dapat dibaca adalah:
                        <div className='mt-4 text-end lg:text-center'>
                        نَوَيْتُ رَفْعَ الحَدَثِ لِلهِ تَعَالَى
                        </div>
                        Nawaytu raf‘al hadatsi lillāhi ta’ālā.
                        <div className='text-end lg:text-center'>
                        نَوَيْتُ فَرْضَ الوُضُوْءِ لِلهِ تَعَالَى
                        </div>
                        Nawaytu fardhal wudhū’i lillāhi ta’ālā.
                        <div className='text-end lg:text-center'>
                        نَوَيْتُ الوُضُوْءَ لِلهِ تَعَالَى
                        </div>
                        Nawaytul wudhū’a lillāhi ta’ālā.
                        <div className='text-end lg:text-center'>
                        نَوَيْتُ الطَّهَارَةَ عَنِ الحَدَثِ لِلهِ تَعَالَى
                        </div>
                        Nawaytut thahārata anil hadatsi lillāhi ta’ālā.
                        </p>
                    </div>
                    {/* Membasuh ke dua tangan */}
                    <div className='mt-10'>
                        <h2 className='text-center mb-2'>2. Membasuh Kedua Tangan</h2>
                        <p className='space-y-4'>
                            Setelah membaca niat wudu, dapat dilanjutkan dengan membasuh telapak tangan sebanyak 3 kali hingga ke sela-sela jari. Adapun bacaannya adalah sebagai berikut: 
                            &quot;alllhummahfazyadayaminmaeasikakulliha&quot;
                            <p className='mt-5'>
                            Artinya: &quot;Ya Allah, lindungi tanganku dari segala pelanggaranmu.&quot;
                            </p>
                        </p>
                        <img
                         src={MembasuhTelapakTangan}
                         alt="" 
                         className='w-[120px] mx-auto mt-7 lg:w-[150px]'
                         />
                    </div>

                     {/* Berkumur*/}
                     <div className='mt-10'>
                        <h2 className='text-center mb-2'>3. Berkumur</h2>
                        <p className='space-y-4'>
                        Untuk doa wudu saat berkumur ini dianjurkan sebanyak 3 kali dan dibaca di dalam hati. Berikut adalah bacaannya:

                        <div className='text-end mt-4 mb-4 lg:text-center'>
                        اللّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ
                        </div>

                        Artinya: &quot;Ya Allah bantulah aku untuk selalu berdzikir kepada-Mu dan selalu memperbaiki ibadah kepada-Mu.&quot;

                        Anjuran ini juga terdapat dalam hadis yang diriwayatkan oleh Abu Dawud Rasulullah saw bersabda:

                        &quot;Bila engkau berwudu maka berkumur-kumurlah.&quot;
                        </p>
                        <img
                         src={Berkumur} 
                         alt="" 
                        className='w-[120px] mx-auto mt-7 lg:w-[150px]'
                         />
                    </div>
                    
                     {/* Mmebersihkan Hidung*/}
                     <div className='mt-10'>
                        <h2 className='text-center mb-2'>4. Membersihkan hidung</h2>
                        <p className='space-y-4'>
                        Setelah itu, dapat dilanjutkan dengan membersihkan lubang hidung sebanyak 3 kali, caranya dengan menghirup udara ke dalam hidung dan kemudian dikeluarkan lagi.

                        Sama seperti doa saat berkumur, doa saat membasuh lubang hidung juga dianjurkan agar dibaca dalam hati saja. Berikut adalah bacaannya: 
                        Artinya: “Ya Allah berikan aku penciuman wewangian surga dan keadaan Engkau terhadap diriku yang selalu meridhoi.”

                        Anjuran ini juga terdapat dari Laqith bin Shobiroh r.a. ia berkata, Rasulullah bersabda:

                        &quot;Berwudulah dengan sempurna, dan gosok-gosoklah antara jari-jari dan hisaplah air dengan hidung secara sungguh-sungguh, kecuali bila engkau sedang berpuasa.&quot; (Dikeluarkan oleh imam empat, menurut Ibnu Huzaimah hadits tersebut shahih).
                        </p>
                        <img
                         src={MembersihkanHidung} 
                         alt="" 
                        className='w-[120px] mx-auto mt-7 lg:w-[150px]'
                         />
                    </div>
                    
                    {/* Membasuh Wajah */}
                    <div className='mt-10'>
                        <h2 className='text-center mb-2'>5. Membasuh Wajah</h2>
                        <p>Menurut Imam Nawawi, batas wajah dalam wudhu secara vertikal adalah antara tempat tumbuhnya rambut hingga dagu bagian bawah. Secara horisontal, antara kedua telinga tangan-kiri.</p>
                        <img src={MembasuhWajah}alt=""  className='w-[120px] mx-auto mt-7 lg:w-[150px]'/>
                    </div>

                    {/* Membasuh Kedua Tangan */}
                    <div className='mt-10'>
                        <h2 className='text-center mb-2'>6. Membasuh Kedua Tangan hingga Siku</h2>
                        <p>Dalam membasuh tangan, seluruh kulit, kuku, dan rambut mulai ujung jari hingga siku harus terbasuh. Termasuk kulit di bawah kuku. Karena itu, kulit yang ada bawah kuku perlu dijaga kebersihannya agar tak ada kotoran yang dapat mengahalangi air sampai pada kulit.</p>
                        <img src={MembasuhTangan} 
                        alt="" 
                        className='w-[120px] mx-auto mt-7 lg:w-[150px]'
                        />
                    </div>

                    {/* Mengusap Sebagian Kepala */}
                    <div className='mt-10'>
                        <h2 className='text-center mb-2'>7. Mengusap Sebagian Kepala & Kedua Telinga</h2>
                        <p>Batasan minimal mengusap sebagian kepala adalah sampainya air ke sebagian kecil kepala atau sehelai rambut yang tumbuh di area kepala. Adapun mengusap rambut yang menjuntai di luar area kepala (misalnya rambut kepala yang menjuntai di wilayah bahu atau punggung) maka itu dianggap tidak sah.</p>

                        <p className='mt-4'>
                        Secara bersamaan mengusap kedua telinga sebanyak 3 kali. Bacaan doanya yaitu:

                        <div className='mt-4 mb-4 text-end lg:text-center;'>
                        اَللَّهُمَّ اجْعَلْنِي مِنَ الَّذِيْنَ يَسْتَمِعُوْنَ اْلقَوْلَ فَيَتَّبِعُوْنَ أَحْسَنَهُ
                        </div>

                        Artinya:
                        &quot;Ya Allah, jadikanlah aku termasuk orang-orang yang mendengarkan nasihat dan mengikuti sesuatu yang terbaik.&quot;

                        Tentang sunah wudu dari Abdillah bin Amar r.a. , ia berkata: &quot;Rasulullah SAW mengusap kepalanya dan memasukkan jari-jari telunjuknya ke dalam dua telinganya, dan mengusap dua telinga bagian luar dengan dua ibu jarinya.&quot; (HR Abu Dawud dan Nasa).
                        </p>
                        <img 
                        src={MengusapKepala} 
                        alt="" 
                        className='w-[250px] mx-auto mt-7 lg:w-[300px]'/>
                    </div>

                    {/* Membasuh Kaki */}
                    <div className='mt-10'>
                        <h2 className='text-center mb-2'>8. Membasuh Kaki</h2>
                        <p>Dalam membasuh kedua kaki hingga kedua mata kaki ini adalah semua bagian anggota tubuh yang ada pada area tersebut seperti rambut, kuku dan sebagainya.
                        </p>
                        <img src={MembasuhKaki} 
                        alt="" 
                        className='w-[120px] mx-auto mt-7 lg:w-[150px]'
                        />
                    </div>

                    {/* Doa Setelah wudhu */}
                    <div className='mt-10'>
                        <h2 className='text-center mb-2'>9. Doa Setelah Wudhu</h2>
                        <p>Setelah selesai melakukan tata cara wudhu, dapat disempurnakan dengan membaca doa setelah wudu. Ketika membaca doa, dianjurkan untuk menghadap kiblat dengan menengadahkan kedua tangan dan berdoa secara khusyuk.

                        Berikut adalah bacaannya:
                        
                        <div className='text-end mt-4 mb-4 lg:text-end'>
                        أَشْهَدُ أَنْ لآّاِلَهَ إِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اللّهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ
                        </div>

                        &quot;Asyhadu allâ ilâha illallâhu wahdahû lâ syarîka lahu wa asyhadu anna muhammadan &lsquo;abduhû wa rasûluhû, allâhummaj&lsquo;alnî minat tawwâbîna waj&lsquo;alnii minal mutathahhirîna.&quot;
                        
                        <div className='mt-4'>
                        Artinya: &quot;Aku bersaksi bahwa tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku bersaksi bahwa Nabi Muhammad adalah hamba dan utusan Allah. Ya Allah, jadikanlah aku termasuk dalam golongan orang-orang yang bertobat dan jadikanlah aku termasuk dalam golongan orang-orang yang bersuci (shalih).&quot;
                        </div>
                        </p>
                    </div>

                    {/* Tertib */}
                    <div className='mt-10'>
                        <h2 className='text-center mb-2'>10. Tertib</h2>
                        <p>Tertib adalah melakukan kegiatan wudhu tersebut secara berurutan sebagaimana urutan di atas, yakni dimulai dengan niat dan membasuh muka, membasuh kedua tangan beserta kedua siku, mengusap sebagian kecil kepala, dan diakhiri dengan membasuh kedua kaki beserta kedua mata kaki.</p>
                    </div>

                    
                </div>
            </div>

            {/* Wajib dan sunah wudhu */}
            <div className='mt-16'>
                <h2 className='text-center text-[17px] mb-2 font-semibold lg:text-[25px]'>Wajib dan Sunah Wudhu</h2>
                <p className='text-center text-[16px] lg:text-[20px]'>Adapun wajib dan sunah wudhu berdasarkan urutan dan rangkaiannya adalah sebagaimana berikut:</p>
                <ul className='mt-5 space-y-5 text-start px-3 lg:mx-64 lg:text-center'>
                    <li className='list-decimal list-inside'>Bersiwak.</li>
                    <li className='list-decimal list-inside'>Membaca Basmalah.</li>
                    <li className='list-decimal list-inside'>Membasuh kedua tangan.</li>
                    <li className='list-decimal list-inside'>Berkumur 3 kali</li>
                    <li className='list-decimal list-inside'>Menghirup air ke hidung (istinsyaq) 3 kali.</li>
                    <li className='list-decimal list-inside'>Melafalkan niat.</li>
                    <li className='list-decimal list-inside'>Memasang niat wudhu dalam hati berbarengan dengan membasuh wajah.</li>
                    <li className='list-decimal list-inside'>Membasuh wajah 3 kali.</li>
                    <li className='list-decimal list-inside'>Membasuh tangan hingga siku sebanyak 3 kali.</li>
                    <li className='list-decimal list-inside'>Mengusap sebagian kulit kepala dengan air 3 kali.</li>
                    <li className='list-decimal list-inside'>Menyapu seluruh bagian kepala.</li>
                    <li className='list-decimal list-inside'>Menyapu kedua telinga 3 kali.</li>
                    <li className='list-decimal list-inside'>Membasuh kedua kaki hingga mata kaki sebanyak 3 kali.</li>
                    <li className='list-decimal list-inside'>Menghadap kiblat.</li>
                    <li className='list-decimal list-inside'>Membaca doa setelah wudhu.</li>
                </ul>
            </div>

            <div className='mt-10'>
                <p className='text-justify text-[16px] lg:text-[20px] lg:text-center lg:px-48'>Adapun lafal doa setelah wudhu adalah sebagaimana berikut:
                    
                    <div className='mt-5 mb-5 text-end lg:text-center'>
                    أَشْهَدُ أَنْ لَا إلَهَ إلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ، وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنْ التَّوَّابِينَ، وَاجْعَلْنِي مِنْ الْمُتَطَهِّرِينَ، سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إلَهَ إلَّا أَنْتَ أَسْتَغْفِرُكَ، وَأَتُوبُ إلَيْكَ
                    </div>
                    
                    <div className='mt-5 mb-5 text-end lg:text-center lg:px-1'>
                    Asyhadu an lā ilāha illallāhu wahdahū lā syarīka lahū, wa asyhadu anna Muhammadan abduhū wa rasūluhū. Allāhummaj’alnī minat tawwābīna, waj’alnī minal mutathahhirīna. Subhānakallāhumma wa bi hamdika asyhadu an lā ilāha illā anta, astaghfiruka, wa atūbu ilayka.
                    </div>

                    “Saya bersaksi bahwa tiada Tuhan selain Allah yang Maha Esa tiada sekutu bagi-Nya dan saya bersaksi bahwa Muhammad adalah hamba Allah dan Rasul-Nya. Ya Allah jadikanlah saya termasuk golongan orang-orang yang bertaubat. Dan jadikanlah saya termasuk golongan orang-orang yang suci. Maha Suci Engkau Ya Allah, segala pujian untuk-Mu, aku bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Engkau dan aku meminta ampunan dan bertaubat pada-Mu. Wallâhu a‘lam.</p>
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

export default tatacaraWudhu