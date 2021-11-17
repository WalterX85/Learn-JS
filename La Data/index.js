// Rappel des types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]); --> log d cad la 4e lettre du premier element.


let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom); --> les propriétés de l'objet de sont pas indéxés comme un élément de tab, on y accède avec le point. ( .propriété de l'obj)

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// console.log(objet.technos[0]); --> log un élément de tab ds un obj, javascript. L'exemple permet d'observer la navigation ds un tab ou un objet.
// objet.adresse = "22 rue du code"; --> Permet de rajouter une nouvelle propriété et sa value dans l'objet.
// objet.age = 36; --> Si la propriété éxiste déja ds l'objet, la nouvelle data remplace la précédente.


// Lorsque nous avons plusieurs objets à stocker et puisque nous ne pouvons pas en js stocker un object dans un objet, nous les stockerons tjs ds un array. --> let data = [{},{},{}]
let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Tom",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Martin",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
// console.log(data[2].pseudo[0]); --> Log le M de Martin. Renvoie au 3eme obj, propriété pseudo, première lettre.


//---------------------------
// Les structures de controle
//---------------------------

if (data[0].age > data[1].age) {
//  console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo); --> Denis est plus agé que Tom
} else {
//  console.log(data[1].pseudo + " est plus agé que " + data[0].pseudo); --> Tom est plus agé que Denis
}

// While (Tant que) --> La boucle for est plus puissante que le while.
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeur de w est de : " + w); --> qd w est à 10, le while s'interrompt
}


// Do while --> Fait la meme chose qu'un while mais s'écrit differement.
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);


// Les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// on déclare la valeur de i | jusqu'où on boucle | on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

// Switch
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//----------------
// Méthodes String
//----------------

// Une méthode est une fonction qui a déja été codé dans le code source de javascript.
// typeof(), eval(), parseInt(), isNaN(), length(), indexOf(), slice(), split(), toLowerCase(), toUpperCase(), replace()

let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42"); 
// --> type de donnée

// console.log(eval(parseInt("1") + 2));
// --> eval calcule une concaténation, parseInt transforme une string en number.

// console.log(isNaN("2"));
// --> is Not a Number permet de savoir si c'est un nombre, retourne true ou false. Attention à son comportement parfois étrange.

// console.log(string2.length);
// console.log(string2[string2.length - 1]);
// --> Permet d'obtenir le dernier caractère de la chaine.

// console.log(string2.indexOf("langage"));
// --> indexOf indique que "langage" existe dans la chaine au 18eme caractère.
// console.log(string2.indexOf("x")); 
// --> Il n'y a pas de "x" dans la chaine, indexOf retourne -1 s'il ne le connait pas.

// let newString = string2.slice(20);
// --> Coupe les 2O premiers éléments de string2.
// let newString = string2.slice(5, 17);
// --> Coupe les 5 premiers éléments jusqu'au 17eme.
// console.log(newString);

// console.log(string2.split(" "));
// split découpe un tableau, ici à chaque espace. -->(6) ['Javascript', 'est', 'un', 'langage', 'orienté', 'objet']


// JavaScript est sensible à la casse, ces méthodes sont donc souvent utilisées.

// console.log(string2.toLowerCase());
// --> Mettre en minuscule
// console.log(string2.toUpperCase());
// --> Mettre en majuscule

// console.log(string2.replace("Javascript", "PHP"));
// --> Remplace un élément par un autre.




//-----------------
// Méthodes Numbers
//-----------------

// toFixed(), parseFloat(), parseInt(), Math()

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(1));
// --> toFixed permet de conserver un certain nombre de chiffre aps la virgule.

// console.log(parseInt("43"));
// console.log(parseInt(numberString));

// --> parseInt retournera ds ce cas figure le premier nombre qu'il trouve ds la chaine. Notons qu'il retournera 42 et non 42.12 puisqu'il ne connait pas les nbs flottants.
// console.log(parseFloat(numberString));
// --> parseFloat retournera le premier nombre qu'il trouve ds la chaine mais comprends les flottants. Contrairement à parseInt, il retournera donc 42.12


// Math

// console.log(Math.PI);
// --> retourne la valeur de pi
// console.log(Math.round(4.5));
// --> Arrondi au plus près. (5)
// console.log(Math.floor(4.9));
// --> Arrondi a l'inférieur. (4)
// console.log(Math.ceil(4.1));
// --> Arrondi au supérieur. (5)
// console.log(Math.pow(2, 7));
// --> Puissance.
// console.log(Math.sqrt(16));
// --> Racine carré.
// console.log(Math.random());
// --> Génère un nb aléatoire entre 0 et 1.

// console.log(Math.floor(Math.random() * 50));
// --> Génère un entier arrondi à l'inférieur entre 0 et 50.



//-----------------
// Méthodes Arrays
//-----------------

// concat(), join(), slice(), indexOf(), forEach(), every(), some(), shift(), pop(), filter(), sort(), map()

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);
// Fusion de tableaux. --> (5) ['Javascript', 'Php', 'Python', 'Ruby', 'Solidity']

// let newArray = [...array3, ...array4];
// console.log(newArray);
// Fusion de tableaux avec spread operator. --> (5) ['Javascript', 'Php', 'Python', 'Ruby', 'Solidity']

// console.log(array3.join('-'));  --> Javascript-Php-Python
// join crée et renvoie une nouvelle chaine de caractères en concaténant tous les éléments d'un tableau.


// console.log(array3.slice(1)); --> (2) ['Php', 'Python']
// Découpe le premier élément du tableau.
// console.log(newArray.slice(3, 5)); --> (2) ['Ruby', 'Solidity']
// Affiche 4 et 5eme élément du tableau.

// console.log(array3.indexOf("Python"));
// Chercher ds un tableau, python est indéxé en 2.

// array3.forEach((languages) => console.log(languages));
// Permets d'énumérer les choses une à une.

// console.log(array3.every((language) => language == "Php"));
// Retourne true ou false, est ce que chaque élément du tableau array3 comprends "Php"?
// console.log(array3.some((language) => language == "Php"));
// Retourne true ou false, y'a t'il écrit qqs part Php dans array3?

// let shift = array3.shift();
// console.log(array3); --> (2) ['Php', 'Python']
// Enlève le premier élément d'un tableau.

// console.log(array3.pop());
// Enlève le dernier élément d'un tableau.


// const restArray = array3.splice(1,1, "C++"); 
// --> A l'emplacement numéro 1, tu enlèves 1 élément et tu me rajoutes C++.
// console.log(restArray); // ['Php'] --> conserve l'élément du tableau remplacé.
// console.log(array3); // (3) ['Javascript', 'C++', 'Python'] --> Nouveau tab avec nouveau élément.

// const restArray2 = array3.splice(0, 2, ...array4);
// --> A partir de l'index 0, tu me retires 2 éléments et tu les remplace par array4.
// console.log(array3); //--> (3) ['Ruby', 'Solidity', 'Python']



// IMPORTANT //
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y)); // --> retourne 119. La somme du tableau.
// La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// eval calcule une string, reduce calcule un array.

arrayNumber.push(17); // Ajoute un élément au tableau.
// console.log(arrayNumber);


// FILTER, SORT, MAP

// FILTER permet de filtrer certains éléments d'un tableau,
// SORT permet de trier (ex: du plus gd au plus petit), 
// MAP permet de lister les éléments.


// console.log(arrayNumber.filter((number) => number > 10));
// --> (4) [74, 28, 12, 17]
// number est notre paramètre, nous l'appelons comme ns le voulons bien entendu.

// console.log(arrayNumber.sort()); 
// (6) [1, 12, 17, 28, 4, 74] --> sans paramètre, sort peut etre dangereux, observé la façon dont il a classé cette chaine.

// Par convention on lui donnera deux paramètres que ns appellerons a et b.
// console.log(arrayNumber.sort((a, b) => a - b)); // (6) [1, 4, 12, 17, 28, 74]
// Du plus petit au plus grand.
// console.log(arrayNumber.sort((a, b) => b - a)); // (6) [74, 28, 17, 12, 4, 1]
// Du plus grand au plus petit.


// document.body.innerHTML += arrayNumber
// .sort((a, b) => a - b)
// .filter((number) => number > 10)
// .map((number) => `<li>${number}</li>`)
// .join("");





//-----------------
// Méthodes Objects
//-----------------

// document.body.innerHTML = data
//   .filter((user) => user.pseudo.includes("a"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) =>
//       `
//      <div class="user-card">
//        <h2>${user.pseudo}</h2>
//        <p>Age : ${user.age} ans</p>
//        <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
//      </div>
//    `
//    )
//    .join("");




//----------
// Les dates
//----------

// Date classique
let date = new Date();

// Timestamp
let timestamp = Date.parse(date);
// console.log(timestamp);

// IsoString
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  });
  return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

//--------------
// Destructuring
//--------------

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x);
// console.log(y);
// console.log(z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
// console.log(dateDestructuring(iso));

//-------------
// Les Datasets
//-------------

const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset.lang));

//----------
// Les Regex
//----------
let mail = "from_s$cratch33@gmail.com";
// console.log(mail.search(/frscceeceom/));

// console.log(mail.replace(/from/, "de"));
// console.log(mail.match(/SCratch/i));
// console.log(mail.match(/[zug]/));
// console.log(mail.match(/[12]/));

// Tous les chiffres
// console.log(mail.match(/\d/));

// Matcher toutes les lettres
// console.log(mail.match(/[a-z]/));

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 265264849;
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
