var start = parseInt(prompt('Enter a Number:'))
var end = parseInt(prompt('Enter a Number:'))

for(var i=start;i<=end;i++){
    if(i%3 == 0 && i%6 == 0){
        console.log(i);
    }
}