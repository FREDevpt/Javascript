/**
 * Création d'une image point par point, chaque point est représenté par une DIV de 20px par 20px
 * Utiliser une boucle for
 */

console.log("03-pixel-art1.js");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Exécution code JS");

    var picture = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 3, 3, 2, 0, 3, 3, 0, 2, 3, 3, 0, 0, 0, 0, 3, 3, 2, 0, 3, 3, 0, 2, 3, 3, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var colors = [
        "#ffffff", // blanc 0
        "#ffdf04", // jaune 1
        "#808080", // gris 2
        "#000000", // noir 3
        "#0026ff", // bleu 4
    ];

// créer une boucle qui va parcourir tous les éléments du tableau
// chaque élément du tableau correspond à l'indice d'une couleur
// il faut récupérer la couleur correspondante
// créer une div dont la couleur de fond sera cette couleur
// et ajouter cette div à #picture1


    // Création boucle "FOR" qui va parcourir tous les éléments du tableau 'picture'
    for (let i = 0; i < picture.length; i++) {
        const numbers = picture[i];

        // Récupération de la couleur correspondante
            var colorDiv = colors[numbers];

        // Création d'une div avec la couleur de fond correspondante
            const backgroundcolorDiv = document.createElement('div');
            backgroundcolorDiv.style.backgroundColor=colorDiv;

        // Ajout de cette div à #picture1
            document.getElementById('picture1').appendChild(backgroundcolorDiv);


        }
        console.log(colorDiv);
})