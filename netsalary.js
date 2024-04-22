var grosssalary = parseFloat(prompt('Enter the salary'))

var tax = parseFloat(prompt('Enter the tax amount'))

var premiums = parseFloat(prompt('Enter the any premiums amount'))

taxamount = grosssalary * tax

 var netsalary = grosssalary - taxamount - premiums
 
 console.log(netsalary+' '+"salary");

