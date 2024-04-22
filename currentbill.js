var units = parseFloat(prompt('Enter number of units'))

var type = prompt('it is domestic or industrial')

if(type == 'domestic'){
    bill = units * 10
}
else{
    bill = units * 15
}

console.log(bill);