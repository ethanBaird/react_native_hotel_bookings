use guests;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: 'Ethan Baird',
        email: 'ethan@email.com',
        date: "2022-08-17",
        checkedIn: true
    },
    {
        name: 'Javier Gonzalez',
        email: 'javier@email.com',
        date: "2022-06-13",
        checkedIn: false
    }
]);
