var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); },
  
};
var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};





function isSantaClausable(obj) {
let count=0;
const arr2=['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
const arr =Object.getOwnPropertyNames(obj);  
console.log(arr);    
arr.map(a=>{    
    if(typeof(obj[a])==='function'){
        if(arr2.includes(a)){
            count+=1;
        }
} else{
    return false
}});
if(count===3){
    return true
} else{
    return false
}}

console.log(isSantaClausable(santa)); // must return TRUE

console.log(isSantaClausable(notSanta)); // must return FALSE