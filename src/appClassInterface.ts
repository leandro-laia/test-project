
import {Spacecraft, ContainerShip} from './base-ships'
import {MillenniumFalcon} from './starfighters'

let ship = new Spacecraft("hyperdrive")
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon
falcon.jumpIntoHyperspace()

let goodForJob = (ship : ContainerShip) => { return ship.cargoContainers >= 4 }
console.log(`Is the Millennium Falcon good for the job? ${goodForJob(falcon) ? 'Yes':'No'}`)

