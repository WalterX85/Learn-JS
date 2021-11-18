// La méthode map prends un tableau et le retourne avec une modifications sur ses éléments. 

let arr1 = [1, 2, 3, 4];

let maped = arr1.map(function (x){
  return x * 2;
})

console.log(maped);



// La méthode filter filtre un tableau avec une condition et le retourne.

let arr2 = [1, 2, 3, 4];

let filtered = arr2.filter(function (val){
  return val > 2;
})

console.log(filtered);



//  La méthode sort trie les éléments et renvoie un tableau.

let arr3 = [85, 2, 350, 42];

let sorted = arr3.sort((a, b) => a - b)
  
console.log(sorted);



// La méthode reduce traite chaque élément d'un tableau avec un accumulateur.

let arr4 = [1, 2, 3, 4];

const reduced = arr4.reduce(function(x, y){
  return x + y;
})

console.log(reduced);




// La méthode forEach execute une fonction callback sur chaque élément d'un tableau.

let arr5 = [1, 2, 3, 4];
 
const eached = arr5.forEach(function(el){
  console.log(el);
})

