    let message : string = "Help me Obi-Wan Kenobi! You're my only hope!!"
    console.log(message);

    let episode: number = 4
    console.log("This episode " + episode)

    episode = episode + 1
    console.log("Next episode " + episode)

    let favoriteDroid: string
    favoriteDroid = "BB-8"
    console.log("My favorite droid is " + favoriteDroid)

    let isNoughToBeatMF = function (parsecs : number):boolean {
        return parsecs < 12
    }

    let distance : number = 11
    console.log(`Is ${distance} parsecs enough to beat Millennium Falcon ? ${isNoughToBeatMF(distance) ? 'Yes' : 'No'}`)

    let call = (name : string) => {console.log(`Do you copy, ${name}?`)}
    call("R2-D2")
