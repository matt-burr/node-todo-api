const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDB');
    }
    console.log('Connected to MongoDB');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bd853003899520ff8ccc6f2')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bd830cee38ee3432c65fc3b')
    }, {
        $set: { name: 'Mateusz Burzynski'},
        $inc: { age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })


    client.close();
});