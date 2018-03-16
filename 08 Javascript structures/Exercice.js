// simple ligne de commentaire
/*
  commentaire multiligne
 */

/*
Créer une boucle qui va itérer 20 fois. A chaque itération, il faut afficher dans la console :
"le nombre X est pair", ou "le nombre X est impair"
 */

for (a = 1; a < 21; a++) {
    if (a % 2 == 0) {
        console.log("Le nombre " + a + " est pair");
    } else {
        console.log("Le nombre " + a + " est impair");
    }
}

/*
Créer une boucle qui va itérer 10 fois. A chaque itération afficher : " 1 * 9 = 9", "2 * 9 = 18", etc
 */

for (b = 1; b < 11; b++) {
    console.log(b + " * 9 = " + b * 9);
}


// sondage ( demander un chiffre et afficher la moyenne de tous les chiffres demandés précédemment )
sondage = function () {
    var notes = [];
    var sum = 0;
    var x = prompt("Nombre de notes ? ");
    for (c = 0; c < x; c++) {
        var y = prompt("Chiffre ? ");
        notes.push(y); // push() Note stockee dans tableau
        sum = sum + parseInt(notes[c]); // parseInt : chaîne caractère en entier
    }
    console.log(sum / notes.length);
}
//sondage();

/* Créer fonction qui calcule si un nombre est premier 
( un nombre est premier si il n'est pas divisible par un nombre plus petit )
*/
nombre_premier = function () {
    var z = prompt("Chiffre ? ");
    for (p = 2; p < z; p++) {
        if (z % p == 0) {
            alert(z + " n'est pas un nombre premier");
            return;
        }
    }
    alert(z + " est un nombre premier");
}
nombre_premier();

