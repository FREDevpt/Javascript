/**
 * Création d'une image point par point, chaque point est représenté par une DIV
 * Utiliser une double boucle for ( boucles imbriquées )
 * il faut placer les divs en positionnement absolu
 */
console.log("04-pixel-art2.js");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Exécution code JS");

    var picture = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0],
        [0, 0, 3, 3, 2, 0, 3, 3, 0, 2, 3, 3, 0, 0],
        [0, 0, 3, 3, 2, 0, 3, 3, 0, 2, 3, 3, 0, 0],
        [0, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0],
        [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 0, 0],
        [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0],
        [0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0],
        [0, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0],
        [0, 0, 0, 0, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    var colors = [
        "#ffffff", // blanc 0
        "#ffdf04", // jaune 1
        "#808080", // gris 2
        "#000000", // noir 3
        "#0026ff", // bleu 4
    ];

// créer une boucle qui va parcourir toutes les lignes du tableau
// créer une boucle à l'intérieur de cette boucle pour
// parcourir chaque élément de la ligne du tableau
// chaque élément du tableau correspond à l'indice d'une couleur
// il faut récupérer la couleur correspondante
// créer une div dont la couleur de fond sera cette couleur
// spécifier la position de cette div avec "top" et "left" grâce à div.style
// et ajouter cette div à #picture1

// DIV dans la DIV

    // Création d'une boucle "FOR" qui va parcourir toutes les lignes du tableau 'picture'

//    for (let i = 0; i < picture.length; i++) {
//        const numberLine = picture[i];
//
//        // Création div
//        const numberLineDiv = document.createElement('div');
//        //numberLineDiv.setAttribute("id","line");
//        const topposition = i*20;
//        numberLineDiv.style.top= topposition+"px";
//        document.getElementById('picture1').appendChild(numberLineDiv);
//
//        // Création d'une boucle "FOR" qui va parcourir chaque élément de la ligne du tableau
//        for (let j = 0; j < numberLine.length; j++) {
//            const numberElement = numberLine[j];
//
//            // Récupération de la couleur correspondante
//            var colorDiv = colors[numberElement];
//
//            // Création d'une div avec la couleur de fond correspondante
//            const backgroundcolorDiv = document.createElement('div');
//            backgroundcolorDiv.style.backgroundColor=colorDiv;
//            const leftposition = j*20;
//            backgroundcolorDiv.style.left = leftposition+"px";
//            backgroundcolorDiv.style.width= "20px";
//            backgroundcolorDiv.style.height= "20px";
//            backgroundcolorDiv.style.boxsizing= "borderbox";
//            backgroundcolorDiv.style.position= "absolute";
//            backgroundcolorDiv.style.border= "1px solid #CCC";
//            console.table(backgroundcolorDiv);
//
//            // Ajout de cette div à #picture1 > div
//            document.getElementById('picture1').appendChild(numberLineDiv).appendChild(backgroundcolorDiv);
//            }
//        }
//
//})

// Une seule DIV

    // Création d'une boucle "FOR" qui va parcourir toutes les lignes du tableau 'picture'
    const drawminion = function () {

    for (let i = 0; i < picture.length; i++) {
        const numberLine = picture[i];

        // Création d'une boucle "FOR" qui va parcourir chaque élément de la ligne du tableau
        for (let j = 0; j < numberLine.length; j++) {
            const numberElement = numberLine[j];

            // Récupération de la couleur correspondante
            var colorDiv = colors[numberElement];

            // Création d'une div avec la couleur de fond correspondante
            const backgroundcolorDiv = document.createElement('div');
            backgroundcolorDiv.style.backgroundColor=colorDiv;
            const topposition = i*20;
            const leftposition = j*20;
            backgroundcolorDiv.style.top = topposition+"px";
            backgroundcolorDiv.style.left = leftposition+"px";

            // Ajout de cette div à #picture1
            document.getElementById('picture1').appendChild(backgroundcolorDiv);

        }



    }
    }

   drawminion();
//   document.addEventListener('keypress', function(event){
//           colors[4] = 'pink';
//           drawminion();
//       })

  // Event selon "Touche Pressé"
    document.addEventListener('keydown', function(event){
        if (event.keyCode == 32) {
            colors[4] = 'red';
            drawminion();
            console.log('Space pressé -> ROUGE');
        }else if (event.keyCode == 13) {
            colors[4] = 'green';
            drawminion();
            console.log('Enter pressé -> VERT ');
            }else if (event.keyCode == 8) {
            picture [8] = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0];
            picture [10] = [0, 0, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 0, 0];
            drawminion();
            console.log('Backspace pressé -> TRISTE ');
        }
        })

    });

////Test touche down
//document.addEventListener("keydown", function(event) {
//    console.log(event.which);
//})
