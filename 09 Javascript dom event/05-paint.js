/**
 créer un paint qui permet en utilisant uniquement les listes déroulantes et des classes,
 - Au clic de la souris, créer :
 => une forme ( rond, carré, losange )
 => de la couleur sélectionnée ( bleu, jaune , rouge, vert ),
 => et du rayon sélectionné ( 10, 50, 100, 200 ) .
 - Bonus:
 1) rajouter des triangles,
 2) faire en sorte de voir la forme se déplacer sous la souris avant de cliquer,
 3) faire en sorte d'avoir plus de choix de couleur et de ne plus utiliser de classe .
 4) correction des coordonnées pour que le milieu de la forme soit à la position du clic
 **/

console.log("05-paint.js");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Exécution code JS");

// BONUS : Rajout triangles
 // Ajout d'une div triangle
   const select_shape_input =document.getElementById('select_shape');
   const triangleDiv = document.createElement('option');
   triangleDiv.setAttribute('value', 'triangle');
   triangleDiv.textContent = 'triangle';
   select_shape_input.appendChild(triangleDiv);

// récupération des éléments
const board = document.getElementById("board");
const select_shape = document.getElementById("select_shape");
const select_color = document.getElementById("select_color");
const select_size = document.getElementById("select_size");

// fonction de création d'un élément
shape_creation = function(event){

    // récupération des valeurs des selects
    const selected_shape_value = select_shape.value;

    const selected_color_value = select_color.value;

    const selected_size_value = select_size.value;
    console.log(selected_shape_value, selected_color_value, selected_size_value);

    // création d'un nouvel élément
    newDiv = document.createElement("div");

    // ajout des classes correspondantes
//    newDiv.classList.add(selected_shape_value, selected_color_value, selected_size_value);

    // 2) faire en sorte de voir la forme se déplacer sous la souris avant de cliquer
    //element.onmousemove = console.log('doSomething');


    // 3) faire en sorte d'avoir plus de choix de couleur et de ne plus utiliser de classe
    newDiv.classList.add(selected_shape_value);
    newDiv.style.backgroundColor= selected_color_value;
    newDiv.style.width= selected_size_value+"px";
    newDiv.style.height= selected_size_value+"px";

    // récupération de la position du clic
    const X = event.offsetX;
    const Y = event.offsetY;
    console.log(X, Y);

    // ajout de la position de l'élément
    leftposition = X - (selected_size_value/2); //.substring(1)
    topposition = Y - (selected_size_value/2);
    console.log(leftposition, topposition);
    newDiv.style.left=leftposition + "px";
    newDiv.style.top=topposition + "px";

    // ajout du nouvel élément dans le tableau
    board.appendChild(newDiv);
};

// ajout du listener
board.addEventListener("click", shape_creation);

});