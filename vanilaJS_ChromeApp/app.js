function plus(firstNum, SecondNum){
    console.log(firstNum + SecondNum);
}
// firstNUm and SecondNum only exist inside the function
function divide(firstNum, SecondNum){
    console.log(firstNum/SecondNum);
}

const player = {
    name: "June",
    sayHello: function (otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    },
};

plus(8, 30);
divide(4, 9);
console.log(player.name);
player.sayHello("Nico");
// making function
