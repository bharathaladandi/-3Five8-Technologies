import React, { useState } from 'react';
import {
    Box,
    Heading,
    Select,
    Input,
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    Text
} from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Center, Square, Circle } from '@chakra-ui/react'


//Confing
const FacilitiesOption = [
    {
        name: "Clubhouse",
        slots: [
            { startTime: '10:00', endTime: '16:00', price: 100 },
            { startTime: '16:00', endTime: '22:00', price: 500 }
        ],
    },
    {
        name: "Tennis Court",
        slots: [
            { startTime: '00:00', endTime: '24:00', price: 50 }
        ]
    }
];


export const Booking = () => {

    const [facility, setFacility] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState("");
    const [date, setDate] = useState("");
    const [bookingStatus, setBookingStatus] = useState("");
    const [bookingAmount, setBookingAmount] = useState("");
    const [bookingDates, setBookingDate] = useState("");
    const [bookingStartTime, setBookingStartTime] = useState('');
    const [bookingEndTime, setBookingEndTime] = useState("");


    const handleBooking = () => {

        if (!facility || !date || !startTime || !endTime) {
            toast.error("Please Fill All Fields");
            return;
        }

        const selectSlotFacility = FacilitiesOption.find((e) => e.name === facility);
        if (!selectSlotFacility) {
            toast.error("Invalid Facility");
            setBookingStatus("Invalid Facility")
            return;
        }

        const selectSlot = selectSlotFacility.slots.find((e) =>
            e.startTime <= startTime && e.endTime >= endTime);
        if (!selectSlot) {
            toast.error("Invalid Time Slot");
            setBookingStatus("Invalid Time Slot")
            return;
        }

        const hours = (new Date(`2023-01-01T${endTime}:00`).getTime() - new Date(`2023-01-01T${startTime}:00`).getTime()) / 3600000;
        const bookingAmount = selectSlot.price * hours;

        toast.success(`Booking Successful! Amount: Rs. ${bookingAmount}`, {
            position: 'top-left',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });



        const bookingDate = new Date(date).toDateString();
        const dates = new Date();

        const bookingStartTime = dates.getHours()
            + ':' + dates.getMinutes()
            + ":" + dates.getSeconds();


        const bookingEndTime = dates.getHours()
            + ':' + dates.getMinutes()
            + ":" + dates.getSeconds();

        setBookingStartTime(`${bookingStartTime}`)
        setBookingEndTime(`${bookingEndTime}`)
        setBookingDate(`${bookingDate}`)
        setBookingAmount(`Rs.${bookingAmount}`)
        setBookingStatus(`Booking Successful !!`)


        // Clear form fields after booking
        setFacility('');
        setDate('');
        setStartTime('');
        setEndTime('');
    }


    return (
        <div>
            <Box>
                <Center>

                    <Box p={4} w='450px' boxShadow={{ base: 'none', sm: 'md' }} >
                        <ToastContainer />
                        <Heading as="h2" mb={4}>
                            Facility Booking
                        </Heading>
                        <FormControl mb={4}>
                            <FormLabel>Facility:</FormLabel>
                            <Select value={facility} onChange={(e) => setFacility(e.target.value)}>
                                <option value="">Select Facility</option>
                                {FacilitiesOption.map((f) => (
                                    <option key={f.name} value={f.name}>
                                        {f.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Date:</FormLabel>
                            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Start Time:</FormLabel>
                            <Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>End Time:</FormLabel>
                            <Input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                        </FormControl>
                        <Button colorScheme="blue" onClick={handleBooking}>
                            Book
                        </Button>

                    </Box>
                </Center>
                <Box>
                </Box>
                {bookingStatus && (
                    <Box mt={4}>
                        <strong>Status:</strong> <Button>{bookingStatus} </Button>
                    </Box>
                )}
                {bookingDates && (
                    <Box mt={4}>
                        <strong>Booking Date:</strong> <Button>{bookingDates} </Button>
                    </Box>
                )}
                {bookingAmount && (
                    <Box mt={4}>
                        <strong>Booking Amount:</strong><Button bg={"#edf2f7"} w={"50"}> {bookingAmount} </Button>
                    </Box>
                )}
                {bookingStartTime && (
                    <Box mt={4}>
                        <strong>Start Time:</strong><Button bg={"#edf2f7"} w={"50"}> {bookingStartTime} </Button>
                    </Box>
                )}
                {bookingEndTime && (
                    <Box mt={4}>
                        <strong>End Time:</strong><Button bg={"#edf2f7"} w={"50"}> {bookingEndTime} </Button>
                    </Box>
                )}


            </Box>
        </div>
    )
};