import { findAllSuperheroes } from "./superheroData.js";
import { disconnectDb } from "../db.js";

let heroes = await findAllSuperheroes()
console.log(heroes)
await disconnectDb()
