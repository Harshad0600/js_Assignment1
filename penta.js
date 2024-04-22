var ang1 = parseInt(prompt('Enter first angle'))
var ang2 = parseInt(prompt('Enter second angle'))
var ang3 = parseInt(prompt('Enter third angle'))
var ang4 = parseInt(prompt('Enter fourth angle'))
var ang5 = parseInt(prompt('Enter fifth angle'))


sum = ang1 + ang2 + ang3 + ang4 + ang5

if(sum == 540){
    console.log("It is a Pentagon");
}
else{
    console.log("It's not a Pentagon");
}