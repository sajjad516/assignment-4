
//Problem - 1

function anaToVori(ana){
    if(typeof ana != 'number'){
        return 'Please give a Number';
    }
    const vori = 0.0625 * ana;
    return 'Total : ',vori;
}
vori = anaToVori('sajjad');
console.log(vori);