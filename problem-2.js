
//Problem - 2

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