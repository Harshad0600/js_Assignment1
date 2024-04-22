var num = parseInt(prompt('Enter a number:'))

if(num%2 == 0 && num%3 == 0 && num%4 == 0){
    console.log(num ,'is a divisible by 2 3 4');
}
else {
    console.log(num ,'is not divisible by all 2 3 4');
}