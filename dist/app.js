var message = "Help me Obi-Wan Kenobi! You're my only hope!!";
console.log(message);
var episode = 4;
console.log("This episode " + episode);
episode = episode + 1;
console.log("Next episode " + episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log("My favorite droid is " + favoriteDroid);
var isNoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon ? " + (isNoughToBeatMF(distance) ? 'Yes' : 'No'));
var call = function (name) { console.log("Do you copy, " + name + "?"); };
call("R2-D2");
