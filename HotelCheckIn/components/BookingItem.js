import { Button, StyleSheet, Text, View } from "react-native"
import { updateBooking, deleteBooking } from "../services/BookingsServices"

const BookingItem = ({booking, name, email, date, checkedIn, id, index, removeBooking, checkIn}) => {
    
    const handleDelete = () => {
        removeBooking(index)
        deleteBooking(id)
    }
    
    const handleCheckInOut = () => {
        checkIn(index);
        updateBooking(booking, id)
    }

    return(
        <>
            {checkedIn? 
                <View style={styles.checkedIn}>
                    <Text style={styles.heading}>{name}</Text>
                    <Text style={styles.text}>{email}</Text>
                    <Text style={styles.text}>Check In: {date}</Text>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} onPress={handleCheckInOut} title="Check Out"/>
                        <Button onPress={handleDelete} title="delete"/>
                    </View>
                </View>
            :
                <View style={styles.checkedOut}>
                    <Text style={styles.heading}>{name}</Text>
                    <Text style={styles.text}>{email}</Text>
                    <Text style={styles.text}>Check In: {date}</Text>
                    <View style={styles.buttonContainer}>
                        <Button onPress={handleCheckInOut} title="Check In"/>
                        <Button onPress={handleDelete} title="delete"/>
                    </View>
                        
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "black"
    },
    heading: {
        fontWeight: 'bold',
        color: 'black'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 10
    },
    checkedIn: {
        backgroundColor: "white",
        color: "black",
        borderWidth: 5,
        borderColor: "green",
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    checkedOut: {
        backgroundColor: "white",
        color: "black",
        borderWidth: 5,
        borderColor: "red",
        borderRadius: 10,
        padding: 10,
        margin: 10
    }

    
  
})

export default BookingItem