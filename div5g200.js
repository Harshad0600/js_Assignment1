var start = parseInt(prompt('Enter a number'))
var end = parseInt(prompt('Enter a number'))

for(var i=start;i<=end;i++){
    if(i%5 == 0 && i>=200 && i<=1000){
        console.log(i)
    }
}