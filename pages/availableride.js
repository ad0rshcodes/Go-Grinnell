import styles from '../styles/RequestRide.module.css';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import rideData from '../data/rideData.json'; // Adjust the path as necessary


const availableride = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [rideType, setRideType] = useState('public');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const router = useRouter();


    return (
        <div>
            <nav className={styles.navbar}>
                <img src='../public/logo.png' alt='Ride Sharing Logo' />
                <div className={styles.navItems}>
                    <button onClick={() => router.push('/availableride')} className={styles.navButton}>Available Ride</button>
                    <button onClick={() => router.push('/requestride')} className={styles.navButton}>Request Ride</button>
                    <button className={styles.signOut}>Sign Out</button>
                </div>
            </nav>

            <div style={{ height: '50px' }}></div>
            

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '90%', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', border: '1px solid #ccc' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}>From</th>
                                <th style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}>To</th>
                                <th style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}>Date</th>
                                <th style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'center', padding: '10px' }}>{rideData.from}</td>
                                <td style={{ textAlign: 'center', padding: '10px' }}>{rideData.to}</td>
                                <td style={{ textAlign: 'center', padding: '10px' }}>{rideData.date}</td>
                                <td style={{ textAlign: 'center', padding: '10px' }}>{rideData.time}</td>
                            </tr>
                            {/* If you have more ride data, map over it and create rows here */}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
}

export default availableride;