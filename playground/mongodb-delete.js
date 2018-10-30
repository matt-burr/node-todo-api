const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDB');
    }
    console.log('Connected to MongoDB');

    const db = client.db('TodoApp');

    // // deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // // deleteOne
    // db.collection('Todos').deleteOne({text: 'crossfit'}).then((result) => {
    //     console.log(result);
    // });

    // // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({name: 'Mateusz Burzynski'}).then((result) => {
        console.log(result);
    })

    db.collection('Users').deleteOne({_id: new ObjectID("5bd84fa13899520ff8ccc65c")}).then((result) => {
        console.log(result);
    })
    

    client.close();
});