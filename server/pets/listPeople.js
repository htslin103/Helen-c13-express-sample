import { MongoClient } from "mongodb";

try{
    //add the collection
    const client = new MongoClient('mongodb://localhost:27017/petsapp')
    console.log('Connecting...')
    await client.connect()

    const peopleCollection = client.db().collection('people')
    //get me next record and next etc. also .find will always return a cursor like obj
    const cursor = await peopleCollection.find() //so this .find will always return a cursor like object
    const people = await cursor.toArray()

    console.log('The people collection contains: ')
    console.dir(JSON.stringify(people[5]))

    //make sure to d/c
    await client.close()
}
catch(err)
{
    console.error('Query fails', err)
}