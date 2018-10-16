
    interface ContainerShip {
        cargoContainers : number
    }

    class Spacecraft {
        constructor(public propulsor:string) {
        }
        
        jumpIntoHyperspace(){
            console.log(`Entering into hyperspace using ${this.propulsor}`)
        }
    }

    export {Spacecraft, ContainerShip}