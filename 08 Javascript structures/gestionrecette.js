recettes = [
    {name:'ratatouille', ingredients: [
            {name: "tomate", count: 4},
            {name: "poivron", count: 4},
            {name: "aubergine", count: 4},
            {name: "oignon", count: 4},
            {name: "courgette", count: 4}
        ]},
    {name:'velouté de tomate', ingredients: [
            {name: "tomate", count: 10},
            {name: "poivron", count: 0},
            {name: "aubergine", count: 0},
            {name: "oignon", count: 2},
            {name: "courgette", count: 0}
        ]},
    {name:'légume farci', ingredients: [
            {name: "tomate", count: 6},
            {name: "poivron", count: 6},
            {name: "aubergine", count: 0},
            {name: "oignon", count: 0},
            {name: "courgette", count: 6}
        ]}
];

selected=[];

function addRecette(recipe){
    // Recherche recette
    for(i=0;i<recettes.length;i++){
        const liste = recettes[i];

    // Test recette
        if (liste.name === recipe){
        // Ajout ingrédients
            const ingredients = liste.ingredients;
            selected.push(ingredients);

        }
    }
    console.clear();
    console.table(selected);
    display();

}

function delRecette(recipe){

    display();

}

function display(){

    list="";
    document.getElementById("resultat").innerHTML = list;
}