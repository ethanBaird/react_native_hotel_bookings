import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react"
import { TextInput, StyleSheet, View, Text, DatePickerIOSBase, Button, DatePickerIOSComponent, DatePickerIOS, DatePickerAndroid } from "react-native";
import { postBookings } from "../services/BookingsServices";

const BookingsForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        checkedIn: false
    })

    const [date, setDate] = useState(new Date())

    const handleChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData)
    }

    const handleCheck = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData.checkedIn = !newFormData.checkedIn
        setFormData(newFormData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postBookings(formData)
            .then((result) => {
                console.log(result)
                addBooking(result)
            });
        setFormData({
            name: '',
            email: '',
            date: '',
            checkedIn: false
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Add Booking</Text>
            <View>
                <TextInput style={styles.input}
                    onChange={handleChange}
                    name="name"
                    placeholder="name"
                    placeholderTextColor={"black"}
                />
                <TextInput style={styles.input}
                    onChange={handleChange}
                    name="email"
                    placeholder="email"
                    placeholderTextColor={"black"}
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