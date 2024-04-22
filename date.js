function data(a, b, c){
    if(a>=1 && a<=31){
        if(b>=1 && b<=12){
            if(c>=1){
                console.log("Valid");
            }
        }else{
            console.log("Invalid");
        }
    }else{
        console.log("Not Valid");
    }
}
data(9 , 5 , 2002)