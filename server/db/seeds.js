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
        name: 'Jack Knowles',
        email: 'jack@email.com',
        date: "2022-06-13",
        checkedIn: false
    },
    {
        name: 'Lawrie Davidson',
        email: 'lawrie@email.com',
        date: "2022-06-13",
        checkedIn: false
    },
    {
        name: 'Sam Ferraro',
        email: 'sam@email.com',
        date: "2022-06-13",
        checkedIn: false
    },
    {
        name: 'Rachel Cram',
        email: 'rachel@email.com',
        date: "2022-06-13",
        checkedIn: false
    },
    {
        name: 'Minnie The Cat',
        email: 'minnie@email.com',
        date: "2022-06-13",
        checkedIn: false
    }
]);
