Array.prototype.reduce = function(process, initial) {
    let i = 0;    
    // Проверяем если кол-во аргументов меньше 2, значит не передано дефолтное значение
    if (arguments.length < 2) {
        i = 1;
        // В данном случае this указывает на итерируемый массив
        initial = this[0]
    }
    for (; i < this.length; i++) {
        initial = process(initial, this[i]);
    }
    return initial;

  }


  console.log([1,2,3].reduce( function(sum, next){return sum+next}), 0);   // => 6

  console.log( ['a','y','!'].reduce(function(x,y){return x+y}, 'y'));    // 'yay!'));
  




   