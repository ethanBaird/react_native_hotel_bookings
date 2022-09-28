import { useState, useEffect } from "react"
import BookingsList from "../components/BookingsList"
import BookingsForm from "../components/BookingsForm";
import { getBookings } from "../services/BookingsServices";

const BookingsContainer = () => {
    
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        console.log("use effect")
        getBookings()
            .then((allBookings)=> {
                console.log("then")
                setBookings(allBookings)
            } )
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
            <BookingsForm addBooking={addBooking}/>
            <BookingsList bookings={bookings} removeBooking={removeBooking} checkIn={checkIn}/>
        </>
    )
}

export default BookingsContainer;