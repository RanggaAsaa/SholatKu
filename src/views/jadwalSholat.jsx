import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const JadwalSholat = () => {
    const [jadwal, setJadwal] = useState([]);
    const [location, setLocation] = useState({ city: '', country: '' });
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Function to fetch the user's location
        const fetchLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                        const data = await response.json();
                        const city = data.city || data.locality || data.principalSubdivision;
                        const country = data.countryName;
                        setLocation({ city, country });
                        fetchJadwalSholat(city, country);
                    } catch (error) {
                        console.error('Error fetching location:', error);
                        setLocation({ city: 'Location not found', country: '' });
                    }
                }, (error) => {
                    console.error('Error getting geolocation:', error);
                    setLocation({ city: 'Location not found', country: '' });
                });
            } else {
                console.error('Geolocation not supported');
                setLocation({ city: 'Geolocation not supported', country: '' });
            }
        };

        // Function to fetch prayer times based on location
        const fetchJadwalSholat = async (city, country) => {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
        
            const apiUrl = `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${city}&country=${country}&method=2`;
        
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log('Jadwal API Response:', data); // Log API response
                if (data.code === 200 && data.data) {
                    setJadwal(data.data);
                } else {
                    console.error('API Error:', data.status);
                }
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            }
        };

        // Function to format the current date
        const updateDate = () => {
            const date = new Date();
            const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
            const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date);
            setCurrentDate(formattedDate);
        };

        // Initial setup
        updateDate();
        fetchLocation();

        // Update date daily at midnight
        const intervalId = setInterval(() => {
            const now = new Date();
            if (now.getHours() === 0 && now.getMinutes() === 0) {
                updateDate();
            }
        }, 60 * 1000); // Check every minute

        // Cleanup interval on unmount
        return () => clearInterval(intervalId);

    }, []);

    const today = new Date().getDate();
    const todayTimings = jadwal.length > 0 ? jadwal[today - 1]?.timings || {} : {};
    console.log('Today Timings:', todayTimings); // Log todayTimings


    return (
        <div className='px-10 text-[#2d2d2d]'>
            <Link to='/'>
                <Icon icon="solar:alt-arrow-left-line-duotone" className='text-[35px] mt-10 lg:mx-5 lg:text-[45px]' />
            </Link>
            <div className='text-center space-y-3'>
                <h2 className='text-[23px] font-semibold pt-5 lg:text-[35px]'>Jadwal Sholat</h2>
                <p className='text-[17px] font-medium lg:text-[20px]'>{currentDate}</p>
            </div>

            <div className='bg-[#f6f6f6] rounded-[20px] mx-3 mt-10 shadow-lg lg:mx-96 '>
                <div className='flex items-center gap-1 ms-10 pt-7 lg:ms-32'>
                    <Icon icon="ion:location-sharp" className='text-[18px] lg:text-[25px]' />
                    <h2 className='text-[16px] font-semibold lg:text-[25px]'>{location.city}, {location.country}</h2>
                </div>

                <div className='grid grid-rows-2 gap-4 pt-5'>
                    <div className='flex flex-row items-center px-10'>
                        <h2 className='text-[17px] font-medium lg:text-[20px]'>Imsak</h2>
                        <h2 className='text-[17px] font-medium lg:text-[20px] ms-auto'>{todayTimings.Imsak || 'N/A'}</h2>
                    </div>
                    <div className='flex flex-row items-center px-10'>
                        <h2 className='text-[17px] font-medium lg:text-[20px]'>Subuh</h2>
                        <h2 className='text-[17px] font-medium lg:text-[20px] ms-auto'>{todayTimings.Fajr  || 'N/A'}</h2>
                    </div>
                    <div className='flex flex-row items-center px-10'>
                        <h2 className='text-[17px] font-medium lg:text-[20px]'>Dzuhur</h2>
                        <h2 className='text-[17px] font-medium lg:text-[20px] ms-auto'>{todayTimings.Dhuhr || 'N/A'}</h2>
                    </div>
                    <div className='flex flex-row items-center px-10'>
                        <h2 className='text-[17px] font-medium lg:text-[20px]'>Ashar</h2>
                        <h2 className='text-[17px] font-medium lg:text-[20px] ms-auto'>{todayTimings.Asr || 'N/A'}</h2>
                    </div>
                    <div className='flex flex-row items-center px-10'>
                        <h2 className='text-[17px] font-medium lg:text-[20px]'>Maghrib</h2>
                        <h2 className='text-[17px] font-medium lg:text-[20px] ms-auto'>{todayTimings.Maghrib || 'N/A'}</h2>
                    </div>
                    <div className='flex flex-row items-center px-10 mb-10'>
                        <h2 className='text-[17px] font-medium lg:text-[20px]'>Isya</h2>
                        <h2 className='text-[17px] font-medium lg:text-[20px] ms-auto'>{todayTimings.Isha || 'N/A'}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JadwalSholat;
