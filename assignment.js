//-------------************ Problem - 1 -------------************//

function anaToVori(ana){
    if(typeof ana != 'number'){
        return 'Please give a Number';
    }
    const vori = 0.0625 * ana;
    return vori;
}
vori = anaToVori(48);
console.log(vori); 

//-------------************ Problem - 2 -------------************//

function pandaCost(singaraQuantity, chamucaQuantity, jilapyQuantity){
    if(typeof singaraQuantity != 'number' && chamucaQuantity != 'number' && jilapyQuantity != 'number'){
        return 'Please Give a number';
    }
    const singaraPrice = 7 * singaraQuantity;
    const chamucaPrice = 10 * chamucaQuantity;
    const jilapyPrice = 15 * jilapyQuantity;

    let totalPrice = singaraPrice + chamucaPrice + jilapyPrice;

    return totalPrice;
}

var total = pandaCost(10, 15, 20);
console.log(total);


//-------------************ Problem - 3 -------------************//

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


//-------------************ Problem - 4 -------------************//

function oddFriend(allFriends){
    if(Array.isArray(allFriends)){
        let isAllFriends = allFriends.every((v) => {
            return typeof v === "string";
        })
        if(!isAllFriends){
            return 'please giva a string value'
        }
    }
    for(var i = 0; i < allFriends.length; i++){
        if(allFriends[i].length % 2 == 1){
            return allFriends[i];
        }
    }
}
 var friendsName = ['sajjad', 'sumon', 'joti']
 var oddName = oddFriend(friendsName); 
console.log(oddName);