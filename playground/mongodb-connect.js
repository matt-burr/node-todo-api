const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDB');
    }
    console.log('Connected to MongoDB');

    const db = client.db('TodoApp');



    // db.collection('Todos').insertOne({
    //     text: 'Something todo',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Error inserting Todo');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // client.close();

    db.collection('Users').insertOne({
        name: 'Michal Bartosik',
        age: 29,
        location: 'Wroclaw'
    }, (err, result) => {
        if (err) {
            return console.log('Error inserting User');
        }
        console.log(JSON.stringify(result.ops));
    });
     client.close();
});