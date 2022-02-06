
//Problem - 3 

function picnicBudget(totalPassengers){
    if(typeof totalPassengers != 'number'){
        return 'please give a number';
    }
    if(totalPassengers <= 100){
        var percost = 5000;
    }
    else if(totalPassengers <= 200){
        var percost = 4000;
    }
    else{
        var percost = 3000;
    }
    return percost;
}

percost = picnicBudget(200);
console.log(percost);