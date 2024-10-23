import { createHero } from "./superheroData.js";
import { disconnectDb } from "../db.js";

if (process.argv.length < 4) {
    console.log('Usage: node createHero <name> <comma separated list of powers>')
    process.exit(1)
}
const name = process.argv[2]
const powers = process.argv[3].split(',')

await createHero({name, powers})
await disconnectDb()