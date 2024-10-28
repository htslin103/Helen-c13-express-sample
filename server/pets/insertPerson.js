import { MongoClient } from "mongodb";

try{
    //add the collection
    const client = new MongoClient('mongodb://localhost:27017/c13heroes')
    console.log('Connecting...')
    await client.connect()

    const peopleCollection = client.db().collection('people')
    //get me next record and next etc. also .find will always return a cursor like obj
    const insertResult = await peopleCollection.insertOne({
        name: 'Mohammed', 
        age: 39, 
        pets: { name: 'Django', 
                species: "Parrot"}
        }) //so this .find will always return a cursor like object
    console.log('Inserted a record!')
    console.log(insertResult)

    //make sure to d/c
    await client.close()
}
catch(err)
{
    console.error('Query fails', err)
}