Array.prototype.uniq = function (){
  let newArray = [];
  this.forEach( function(el){
    if (newArray.indexOf(el) === -1) {
      newArray.push(el);
      }
    }
  );
  return newArray;
};

let array1 = [1,4,7,5,3,1,4,7];
// console.log(array1.uniq());

Array.prototype.twoSum = function () {
  let returnArray = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] + this[i] === 0){
        returnArray.push([i, j]);
      }
    }
  }
  return returnArray;
};

// console.log([-1, 0, 2, -2, 1].twoSum());
// console.log([2, -2, 5].twoSum());

function transpose(array){
  let transposed = [];
  for (var k = 0; k < array[0].length; k++) {
    transposed.push([]);
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      transposed[j][i] = array[i][j];
    }
  }
  return transposed;
}

let matrix = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ] ;

// console.log(transpose(matrix));

Array.prototype.myEach = function(fun) {
  for (let i = 0; i < this.length; i++) {
    fun(this[i]);
  }
  return this;
};

// [1,2,3,4,5].myEach((el) => console.log(el));

Array.prototype.myMap = function(fun) {
  let newArray = [];
  this.myEach((el) => newArray.push(fun(el)));
  return newArray;
};

// console.log(array1.myMap((el) => el + 1));

Array.prototype.myInject = function(fun, accum = 0) {
  this.myEach(function (el) { accum = fun(el, accum);});
  return accum;
};

// console.log(array1.myInject((el1, el2) => el1 + el2 ));
// console.log([1, 2, 3].myInject((el1, el2) => el1 * el2, 10 ));


// function bubbleSort(array, fun = (l1, l2) => (l1 <= l2)) {
//   let unsorted = true;
//
//   while (unsorted){
//     unsorted = false;
//     for (let i = 0; i < array.length -1; i++) {
//       let j = i + 1;
//       if (fun(array[i], array[j])  === false ) {
//         unsorted = true;
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//
//     }
//   }
//   return array;
// }


Array.prototype.bubbleSort = function( fun = (l1, l2) => (l1 <= l2)) {
  let unsorted = true;

  while (unsorted){
    unsorted = false;
    for (let i = 0; i < this.length - 1; i++) {
      let j = i + 1;
      if (fun(this[i], this[j])  === false ) {
        unsorted = true;
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }

    }
  }
  return this;
};

// console.log([4,6,2,4,9,1,5,5].bubbleSort((l1, l2) => (l1 <= l2)));

String.prototype.substrings = function () {
  let newArray = [];
  for (let i = 0; i < this.length; i++ ){
    for (let j = i + 1; j <= this.length; j++){
      newArray.push(this.slice(i, j));
    }
  }
  return newArray;
};

// console.log('cat'.substrings());
// console.log('happy'.substrings());

function range(num1, num2) {
  if (num1 === num2) {return [num2];}
  let newArray = [num1];
  newArray = newArray.concat(range(num1 + 1, num2));
  return newArray;
}

// console.log(range(1, 5));

function exp1(b, n) {
  if (n === 0) { return 1; }
  return (b * exp1(b, n - 1));
}

// console.log(exp1(3, 0));
// console.log(exp1(5, 2));
// console.log(exp1(4, 5));


function odd(num){
  if (num % 2 === 1) { return true; }
  else {return false; }
}

function exp2(b, n) {
  if (n === 0) { return 1; }
  if (n === 1) { return b; }
  if (odd(n)) {
    return (b * exp2(b, Math.floor(n/2)) * exp2(b, Math.floor(n/2)));
  }
  else {
    return (exp2(b, n/2) * exp2(b, n/2));
  }
}


// console.log(exp2(3, 0));
// console.log(exp2(5, 3));
// console.log(exp2(4, 5));

function fibs(n) {

  if (n === 1) { return [1]; }
  if (n === 2) { return [1, 1]; }

  let fibArray = fibs(n - 1);

  let arrayLength = fibArray.length;

  let newFibValue = [fibArray[arrayLength-2] + fibArray[arrayLength-1]];

  fibArray = fibArray.concat(newFibValue);

  return fibArray;
}

// console.log(fibs(5));


function binarySearch(array, value) {
  if ((array.length === 1) && (array[0] === value)) {
    return 0;
  }
  if ((array.length === 1) && (array[0] !== value)) {
    return null;
  }

  let middle = Math.floor(array.length/2);

  if (array[middle] === value) {
    return middle;
  }
  else if (array[middle] > value) {
    return binarySearch(array.slice(0 , middle), value);
  }
  else {
    let index = binarySearch(array.slice(middle + 1, array.length), value);
    if (index === null) { return null ;}
    return index + middle + 1;

  }
}

// console.log(binarySearch([1, 2, 3], 1));
// console.log(binarySearch([2, 3, 4, 5], 3));
// console.log(binarySearch([2, 4, 6, 8, 10], 6));
// console.log(binarySearch([1, 3, 4, 5, 9], 5));
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 0));
// console.log(binarySearch([1, 2, 3, 4, 5, 7], 6));


function makeChange(value, coins){
  let bestCombo = [];
  if (value === 0) {return [];}

  coins.forEach( function (coin){
      if (value - coin >= 0){
        let newValue = value - coin;
        let smallChange = makeChange(newValue, coins);
        let potentialCombo = smallChange.concat([coin]);
        if (bestCombo.length === 0){ bestCombo = potentialCombo; }
        else if (potentialCombo.length < bestCombo.length) {
            bestCombo = potentialCombo;
        }
      }
    }
  );
  return bestCombo;
}


// console.log(makeChange(14, [10, 7, 1]));
// console.log(makeChange(36, [25, 10, 5, 1]));


Array.prototype.mergeSort = function(fun = (el1, el2) => (el1 <= el2)){
  if ((this.length === 1) || (this.length === 0)) { return this; }

  let middle = Math.floor(this.length/2);
  let leftArray = this.slice(0, middle).mergeSort(fun);
  let rightArray = this.slice(middle, this.length).mergeSort(fun);
  return leftArray.merge(rightArray, fun);
};

Array.prototype.merge = function(rightArray, fun){
  let newArray = [];
  while (this.length > 0 && rightArray.length > 0){
    if (fun(this[0], rightArray[0])){
      newArray.push(this.shift());
    }
    else {
      newArray.push(rightArray.shift());
    }
  }

  return newArray.concat(this).concat(rightArray);
};

console.log([4,6,2,4,9,1,5,5].mergeSort((el1, el2) => (el1 >= el2)));

function subsets(array){
  if (array.length === 0 ) { return [[]];}

  let lastEl = [array[array.length - 1]];
  let restOfArray = array.slice(0, array.length-1);
  let subs = subsets(restOfArray);
  let newArray = [];

  subs.forEach( (sub) => newArray.push(sub.concat(lastEl)));

  return newArray.concat(subs);
}

// console.log(subsets([]));
// console.log(subsets([1]));
// console.log(subsets([1, 2]));
// console.log(subsets([1, 2, 3]));



function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.name} loves ${this.owner}`;
};

let tiger = new Cat("Tiger", "Robert");
let jefferson = new Cat("Jefferson", "Munyo");
let mouse = new Cat("Mouse", "Julie");


// console.log(tiger.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return `${this.name} loves Everyone`;
};


// console.log(jefferson.cuteStatement());
// console.log(mouse.cuteStatement());

Cat.prototype.meow = function(){
  return `${this.name} meows for treats`;
};


mouse.meow = function(){
  return `${this.name} hsssssssss`;
};

// console.log(mouse.meow());

// console.log(tiger.meow());

// console.log(mouse);
// console.log(tiger);
