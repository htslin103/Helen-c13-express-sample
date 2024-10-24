import { ObjectId } from "mongodb"
import { collection } from "../db.js"

export async function findAllSuperheroes() {
    const heroCollection = await collection('heroes')
    const cursor = await heroCollection.find() // no query finds everything!
    const heroes = await cursor.toArray()
    return heroes
}

export async function findSuperheroById(id) {
    const heroCollection  = await collection('heroes')
    const singleHero =  await heroCollection.findOne({_id: new ObjectId(id)})
    return singleHero
}

export async function createHero(data) {
    const heroCollection  = await collection('heroes')
    const insertResult = await heroCollection.insertOne(data)
    console.log('Inserted hero ', insertResult.insertedId)
}