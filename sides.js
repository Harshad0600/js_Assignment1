var side = parseInt(prompt('Enter number of sides'))

if(side == 3){
    console.log("It is a Triangle");
}
else if(side == 4){
    console.log("It is a Square");
}
else if(side == 5){
    console.log("It is a Pentagon");
}
else {
    console.log("Enter only 3 or 4 or 5 numbers");
}