// 1

let myTown = "Kramatorsk",
    myCountry = "Ukraine",
    population = 160000,
    footballStadium = true;


// 2

let height = 40;
let width = 70;
let rectangleSquare = height * width;

console.log( 'площа прямокутника ' + `${rectangleSquare}` + 'cm' );

//3
let time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114,
    distance = (speedOfFirst * time) + (speedOfSecond * time);

console.log(distance);


//4

const randomNumber = Math.floor(Math.random() * 100);

if(randomNumber < 20){
    console.log("randomNumber меньше 20");
}else if(randomNumber > 50){
    console.log("randomNumber больше 50");
}else{
    console.log("randomNumber больше 20, и меньше 50");
}


//5

switch (true){
    case (randomNumber < 20) : 
        console.log("randomNumber меньше 20");
        break;
    case (randomNumber > 50) :
        console.log("randomNumber больше 50");
        break;
    default :
        console.log("randomNumber больше 20, и меньше 50");
}