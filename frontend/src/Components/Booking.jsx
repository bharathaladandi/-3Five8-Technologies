import React from 'react'

export const Booking = () => {


    return (
        <div>
            <h1>Book Your Facility</h1>
            {/* Top part */}
            <div>
                <label> Select Facility : </label>
                <select>
                    <option value=""> Select Facility</option>
                    <option> Name </option>
                </select>
            </div>
            {/* Middle Part  */}
            <div>
                <label> Date :</label>
                <input type="date" />
            </div>
            <div>
                <label> Start Time :</label>
                <input type="time" />
            </div>
            <div>
                <label> End Time :</label>
                <input type="time" />
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