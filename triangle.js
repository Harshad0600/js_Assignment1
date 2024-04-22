var ang1 = parseInt(prompt('Enter first angle'))
var ang2 = parseInt(prompt('Enter second angle'))
var ang3 = parseInt(prompt('Enter third angle'))

sum = ang1 + ang2 + ang3

if(sum == 180){
    console.log("It is a triangle");
}
else{
    console.log("It's not a triangle");
}