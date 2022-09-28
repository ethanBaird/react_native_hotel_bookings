
import { useState } from "react"
import { TextInput, StyleSheet, View, Text, DatePickerIOSBase, Button, DatePickerIOSComponent, DatePickerIOS, DatePickerAndroid } from "react-native";
import DatePicker from "react-native-date-picker";
import { postBookings } from "../services/BookingsServices";

const BookingsForm = ({addBooking}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState(new Date())

    const handleNameInput = (input) => {
        setName(input)
    }

    const handleEmailInput = (input) => {
        setEmail(input)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBooking = {
            name: name,
            email: email,
            date: date,
            checkedIn: false
        }
        postBookings(newBooking)
            .then((result) => {
                console.log(result)
                addBooking(result)
            });
        setName("")
        setEmail("")
        setDate("")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Add Booking</Text>
            <View>
                <TextInput style={styles.input}
                    onChangeText={handleNameInput}
                    name="name"
                    placeholder="name"
                    placeholderTextColor={"black"}
                />
                <TextInput style={styles.input}
                    onChangeText={handleEmailInput}
                    name="email"
                    placeholder="email"
                    placeholderTextColor={"black"}
                />
                {/* <DatePicker></DatePicker> */}
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                 />
               <Button 
                    onPress={handleSubmit} title="submit"/>
            </View>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    heading: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    input: {
        borderWidth: 3,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        color: 'black'

    }
    
})

export default BookingsForm