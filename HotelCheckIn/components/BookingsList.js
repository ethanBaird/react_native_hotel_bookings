import { useEffect, useState } from "react";
import { Text } from "react-native"
import { getBookings } from "../services/BookingsServices";
import BookingItem from "./BookingItem";

const BookingsList = ({bookings, removeBooking, checkIn}) => {

    const bookingsListNodes = bookings.map((booking, index)=>{
        return(
            <BookingItem
                booking={booking}
                name={booking.name}
                email={booking.email}
                date={booking.date}
                checkedIn={booking.checkedIn}
                id={booking._id}
                index={index}
                removeBooking={removeBooking}
                checkIn={checkIn}
            />
        )
    })

    return(
        <>
            {bookingsListNodes}
        </>
    )
}

export default BookingsList