Array.prototype.map =function(func){
    let list=[];
    this.forEach((a)=>{
        list.push(func(a));
    })
   return list;
};






console.log([1,2,3].map(x => x ** 2)) // === [1,4,9]);
console.log([1,2,3].map(x => 2 * x)) // === [2,4,6];



// Array Mappings
// Oh no, the map method for arrays has been disabled. Can you fix it?

// In case you haven't come across the map method for arrays, here is how it works: