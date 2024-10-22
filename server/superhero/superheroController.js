import { Router } from "express";
import { findAllSuperheroes, findSuperheroById } from "./superheroData.js";

const router = Router()

// get a particular superhero
router.get('/:id', async function (req, res) {
    const id = req.params.id
    try {
        const hero = await findSuperheroById(id)
        if (hero === null) {
            res.sendStatus(404)
        }
        else {
            res.send(hero)
        }
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// list all superheros
router.get('/', async function (req, res) {
    try {
        const heroes = await findAllSuperheroes()
        res.send(heroes)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router