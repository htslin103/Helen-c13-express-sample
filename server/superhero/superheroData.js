// array pretending to be a database until we have an actual database
const superheroes = [
    {
        id: 1,
        name: "Spiderman",
        powers: ['spideystrength', 'web-shooting', 'spideysense', 'spideycrawl']
    },
    {
        id: 2,
        name: "Wolverine",
        powers: ['adamantium skeleton', 'adamantium claws', 'super healing', 'Canadian']
    },
]

export async function findAllSuperheroes() {
    return superheroes
}

export async function findSuperheroById(id) {
    return superheroes.find((hero) => hero.id == id) || null
}
