/**
 * gestion panier
 */

const productsList = [
  {code: 'livre', name: 'Fondation foudroyée', price: 10, total: 0},
  {code: 'console', name: 'PS3', price: 200, total: 0},
  {code: 'fleur', name: 'Orchidée', price: 20, total: 0}
];

/*
 * fonction pour ajouter un produit
 */
function addProduct(code) {

  for (let i = 0; i < productsList.length; i++) {

    // je récupère le produit  i
    const product = productsList[i];

    // est ce que le produit à le code demandé
    if (product.code === code && product.total < 5 ) {
      product.total++;
    }

  }
  console.clear();
  console.table(productsList);

  displayCaddie();

}

/**
 * fonction pour supprimer un produit
 */
function deleteProduct(code) {

    for (let i = 0; i < productsList.length; i++) {

  // chercher l'objet correspondant à ce code
        const product = productsList[i];

  // modifier la propriété nombre de cet objet
  // pour représenter le fait d'avoir un élément de moins sélectionné
        if (product.code === code && product.total > 0 ) {
            product.total--;
        }

    }
    console.clear();
    console.table(productsList);

    displayCaddie();
}

/**
 * fonction pour afficher la liste des produits
 */
function displayCaddie() {
    let list = "";

    for (let i = 0; i < productsList.length; i++) {
        // Récupère le produit à l'indice i
        const product = productsList[i];

        // si élément actuel ajouté au panier
        // alors on ajoute "X code" à la variable list

        if(product.total > 0 ){
        list = list + product.total + " ";
        list = list + product.name + ", ";

        }

    }

    // Parcours tous les éléments du panier
    document.getElementById("resultat").innerHTML = list;

}
