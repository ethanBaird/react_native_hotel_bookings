import { useState, useEffect } from "react"
import { Text } from "react-native";
import BookingsList from "../components/BookingsList"
import { getBookings } from "../services/BookingsServices";

const BookingsContainer = () => {
    
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
            .then((allBookings)=> setBookings(allBookings) )
            .catch((error)=>{
                console.log(error);
            })
    }, [] );

    const addBooking = (newBooking) => {
        const copyBookings = [...bookings]
        copyBookings.push(newBooking);
        setBookings(copyBookings);
    }

    const removeBooking = (index) => {
        const copyBookings = [...bookings]
        copyBookings.splice(index, 1)
        setBookings(copyBookings)
    }

    const checkIn = (index) => {
        const copyBookings = [...bookings]
        const bookingToUpdate = copyBookings[index]
        bookingToUpdate.checkedIn = !bookingToUpdate.checkedIn
        setBookings(copyBookings)
    }

    
    return(
        <>
            <BookingsList bookings={bookings} removeBooking={removeBooking} checkIn={checkIn}/>
        </>
    )
}

export default BookingsContainer;