// simple ligne de commentaire
/*
  commentaire multiligne
 */

// créer une variable
prenom = "yannick";
//console.log(prenom);

/* type de variable */
// variable simple
une_string = "yannick"; // chaine de caractère / string
un_entier = 2; // entier / int
un_nombre_flottant = 2.2; // nombre à virgule  / float
un_booleen = true; // booleen true ou false / boolean

// variable complexe
un_tableau = ["chat", "chien", "poisson", "dindon"]; // tableau / array
un_objet = {type: "chat", name: "fichelecamp", age: 6}; // object / object

/* opérations */
// types simples
// + - * / %
str = "bon" + "jour"; // concaténation

// types complexes
// array
premier_element = un_tableau[0]; // recupere le premier element du tableau un_tableau : chat
deuxieme_element = un_tableau[1]; // recupere le deuxième element du tableau un_tableau : chien

// object
propriete_type = un_objet.type; // récupère la propriété "type" de l'objet un_object : chat
propriete_type = un_objet["type"]; // récupère la propriété "type" de l'objet un_object : chat
propriete_name = un_objet.name; // récupère la propriété "name" de l'objet un_object : fichelecamp
propriete_name = un_objet["name"]; // récupère la propriété "name" de l'objet un_object : fichelecamp


/* les fonctions */
// déclaration
une_fonction = function (x, y) {
}; // x et y sont les noms des paramètres passés à la fonction
function une_fonction(x, y) {
};

// retourner un résultat
// mot clef "return";
une_fonction = function (x, y) {
    return 20;
};

// exécution les parenthèses sont requises, même quand il n'y a pas de paramètres
une_fonction(1, 2);
une_fonction(1, 2);

// affectation de la valeur de retour d'une fonction dans une variable
resultat = une_fonction(1, 2);

// function du langage
// alert(message) affiche une popup qui contient le paramètre "message"
// prompt(message) affiche le paramètre "message" et demande à l'internaute de saisir une données
// console.log(variable) affiche le contenu de la variable dans la console

/* exercices */

// créer une fonction qui affiche "bonjour" dans la console
function bonjour() {
    console.log("bonjour");
};
bonjour()
// créer un tableau d'objets
tableau1 = ["couteau", "fourchette", "cuillère"];
console.log(tableau1[1]);
// créer un objet de tableaux
objet1 = {type: "chien", name: "pif", age: 11};
console.log(objet1.name);

// créer une fonction qui calcule le produit de deux nombres
function produit(a, b) {
    let multiplication = a * b;
    return multiplication;
}

resultat = produit(9, 4);
console.log(resultat);

// créer une fonction qui demande le nom et prénom et qui l'affiche dans la console
//function individu1() {
//    let nom1 = prompt('Quel est votre nom ?');
//    let prenom1 = prompt('Quel est votre prénom ?');
//    return nom1 + " " + prenom1;
//}
//
//nomprenom = individu1();
//console.log(nomprenom);

// créer une fonction qui demande nom + prénom + age + ville et qui l'affiche dans la console
//function individu2() {
//    let nom2 = prompt('Quel est votre nom ?');
//    let prenom2 = prompt('Quel est votre prénom ?');
//    let age2 = prompt('Quel est votre age ?');
//    let ville2 = prompt('Où habitez-vous ?');
//    return nom2 + " " + prenom2 + " " + age2 + " " + ville2;
//}
//
//nomprenom2 = individu2();
//console.log(nomprenom2);

// créer une fonction qui calcule pythagore(longueur,largeur) ( racine carrée de la somme des carrés ) avec Math.sqrt
function pythagore(a, b) {
    let hypothenuse = Math.sqrt(a * a + b * b);
    return hypothenuse;
}

resultat2 = pythagore(4, 5);
console.log(resultat2);

// avancés :
// créer une fonction qui indique si un nombre est pair
function pair(a) {
    if (a % 2 == 0) {
        return "Nombre pair";
    }
    else {
        return "Nombre impair";
    }
    ;
};
nombrepair = pair(15);
console.log(nombrepair);

/* créer un nombre aléatoire entre min et max */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

nbaleatoire = getRandomInt(15, 50);
console.log(nbaleatoire);

///* Jeu Chiffre aléatoire */
// 2) demander un chiffre à l'internaute
definir_chiffre = function () {
    let nbinternaute = prompt("Choix d'un chiffre entre " + min + " & " + max + ": ");
    console.log(nbinternaute); // affichage chiffre internaute

//// 3) indiquer si la saisie est plus grande ou plus petite
    if (nbinternaute > nbaleatoire2) {
        console.log("Votre chiffre est trop grand");
    } else if (nbinternaute < nbaleatoire2) {
        console.log("Votre chiffre est trop petit");
    } else if (nbinternaute == nbaleatoire2) {
        console.log("Bien joué, Champion !");
    }
}
//
trouve_chiffre = function (min, max) {
//    1) générer un chiffre entre min et max
    let nbaleatoire2 = getRandomInt(min, max);
    definir_chiffre(nbaleatoire2);

//// 4) si la saisie est juste, finir la partie
////
//// aide : pour convertir une chaine de caractère en nombre
//// 			=> parseInt(string)
//};
//trouve_chiffre(1, 90);

// créer une fonction qui indique si une chaîne de caractère à plus de 7 caractères
chainecaractère = function (chaine) {
    // calcul longueur chaine
    let nbcaractères = chaine.length;
    // affichage "Plus de 7 caractères"
    if(nbcaractères>7){
        console.log("Plus de 7 caractères");
    // affichage "Moins de 7 caractères"
    } else {
        console.log("Pas plus de 7 caractères");
    }
}
chainecaractère("sept");

// créer une fonction récursive qui calcule factorielle x
factorielle = function factorielle(n) {
            if (n <= 1)
                return 1;
            return n * factorielle(n - 1);
        }
    };


// créer une fonction qui prends un nombre illimité de paramètres et qui calcule la somme de tous ces paramètres

