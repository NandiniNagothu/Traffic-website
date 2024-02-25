import React, { useState } from 'react';
import './Trafficcheck.css';

const IframeComponent = ({ src }) => {
    return <iframe src={src} title="iframe" width="100%" height="400px" />;
};

const TrafficChecker = () => {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [trafficData, setTrafficData] = useState(null);
    const [showIframe, setShowIframe] = useState(false);

    const handleCheckTraffic = () => {
        // Simulated fetch request, replace with actual API call
        const simulatedTrafficData = {
            from: fromLocation,
            to: toLocation,
            dayOfWeek: dayOfWeek,

            historicalData: [
                { time: '9:00 AM', trafficStatus: 'Light', timeTaken: Math.floor(Math.random() * 40) },
                { time: '11:00 AM', trafficStatus: 'Moderate', timeTaken: Math.floor(Math.random() * 60) },
                { time: '2:00 PM', trafficStatus: 'Heavy', timeTaken: Math.floor(Math.random() * 40) },
                // Add more historical data as needed
            ],
        };

        const randomMinute = Math.floor(Math.random() * 40); // Generates a random hour value between 0 and 59
        const randomSecond = Math.floor(Math.random() * 60); // Generates a random minute value between 0 and 59
        const randomTime = `${randomMinute}:${randomSecond < 10 ? '0' : ''}${randomSecond} `; // Formats the time

        simulatedTrafficData.historicalData.push({
            time: "20:00 PM",
            trafficStatus: 'Random',
            timeTaken: `${randomMinute} minute(s) ${randomSecond} second(s)`
        });

        setTrafficData(simulatedTrafficData);
        setShowIframe(true);
    };

    const handleClose = () => {
        setFromLocation('');
        setToLocation('');
        setDayOfWeek('');
        setTrafficData(null);
        setShowIframe(false);
    };


    return (
        <div className='containercheck'>
            {!showIframe && (
                <>
                    <h2>Traffic Checker</h2>
                    <div className='form-group'>
                        <label>
                            From Location:
                            <select value={fromLocation} onChange={(e) => setFromLocation(e.target.value)}>
                                <option value="">Select From Location</option>
                                <option value="Shri Vishnu Educational Society">Shri Vishnu Educational Society</option>
                                <option value="Coastal City Center">Coastal City Center</option>
                                <option value="Sri Someswaraswamy Temple">Sri Someswaraswamy Temple</option>
                                <option value="Railway station">Railway station</option>
                                <option value="Bustand">Bustand</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            To Location:
                            <select value={toLocation} onChange={(e) => setToLocation(e.target.value)}>
                                <option value="">Select To Location</option>
                                <option value="Shri Vishnu Educational Society">Shri Vishnu Educational Society</option>
                                <option value="Coastal City Center">Coastal City Center</option>
                                <option value="Sri Someswaraswamy Temple">Sri Someswaraswamy Temple</option>
                                <option value="Railway station">Railway station</option>
                                <option value="Bustand">Bustand</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            Day of the Week:
                            <select value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)}>
                                <option value="">Select Day of the Week</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </label>
                        <br />
                        <button className='checkbtn'onClick={handleCheckTraffic}>Check Traffic Status</button>
                        <br />
                    </div>
                </>
            )}


            {trafficData && (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ margin: 0 }}></h3>
                        <span style={{ cursor: 'pointer' }} onClick={handleClose}>❌</span>
                    </div>
                    <p>
                        From: {trafficData.from}, To: {trafficData.to}, Day: {trafficData.dayOfWeek}
                    </p>
                    <ul>
                        {trafficData.historicalData.map((data, index) => (
                            <li key={index}>
                                Time: {data.time}, Traffic Status: {data.trafficStatus}, Time Taken: {data.timeTaken}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {showIframe && (
                <div>
                    {fromLocation === "Shri Vishnu Educational Society" && (
                        <IframeComponent src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2092757809023!2d81.51993757490361!3d16.565970425948947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4e8d1d1d8d%3A0xab52da15615ac690!2sVishnu%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1708258986087!5m2!1sen!2sin" />
                    )}
                    {fromLocation === "Coastal City Center" && (
                        <IframeComponent src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.5923499503856!2d81.51497917490326!3d16.546665326480383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2ab114d7d47%3A0xb6c22ae065402b92!2sCoastal%20City%20center!5e0!3m2!1sen!2sin!4v1708256237510!5m2!1sen!2sin" />
                    )}
                    {fromLocation === "Sri Someswaraswamy Temple" && (
                        <IframeComponent src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.699665188606!2d81.53281967490317!3d16.541253226629223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2af6b261c4b%3A0x534d565e3d839021!2sSri%20Someswara%20Temple!5e0!3m2!1sen!2sin!4v1708257259157!5m2!1sen!2sin" />
                    )}
                    {fromLocation === "Railway station" && (
                        <IframeComponent src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.590021675675!2d81.51837227490327!3d16.54678272647706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2abb6005e3d%3A0xb3be948b16e6dc7f!2sBhimavaram%20Town%20Railway%20Rd%2C%20Bhimavaram%2C%20Andhra%20Pradesh%20534202!5e0!3m2!1sen!2sin!4v1708257375987!5m2!1sen!2sin" />
                    )}
                    {fromLocation === "Bustand" && (
                        <IframeComponent src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.6373872053005!2d81.51862317490323!3d16.544394226542853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2aea9d4fd3f%3A0x463b38dfccf9904f!2sBhimavaram%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1708257457954!5m2!1sen!2sin" />
                    )}
                    {/* Add more conditions for other locations */}
                </div>
            )}
        </div>
    );
};

export default TrafficChecker;
