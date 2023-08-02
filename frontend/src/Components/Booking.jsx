import React, { useState } from 'react'

const FacilitiesOption = [
    {
        name:"Clubhouse",
        slots:[
            { startTime: '10:00', endTime: '16:00', price: 100 },
            { startTime: '16:00', endTime: '22:00', price: 500 }
        ],
    },
    {
        name:"Tennis Court",
        slots:[
            { startTime: '00:00', endTime: '23:59', price: 50 }
        ]
    }
];


export const Booking = () => {

    const [ facility, setFacility ] = useState('');
    const [ startTime, setStartTime ] = useState('');
    const [ endTime, setEndTime ] = useState("");
    const [ date , setDate ] = useState("");


  return (
    <div>
        <h1>Book Your Facility</h1>
        {/* Top part */}
        <div>
            <label> Select Facility : </label>
            <select value={facility} onChange={(e) => setFacility(e.target.value)}>
                <option value=""> Select Facility</option>
                {FacilitiesOption.map((e) => (
                    <option key={ e.name} value={e.name}> {e.name} </option>
                ))}
            </select>
        </div>

        {/* Middle Part  */}
        <div>
            <label> Date :</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
            <label> Start Time :</label>
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
        <div>
            <label> End Time :</label>
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>

        <button>Book</button>

        <div>
            <strong>Status : </strong>
            bookingStatus
        </div>
        <div>
            <strong>Booking Amount : </strong>
            bookingAmount
        </div>
    </div>
  );
};