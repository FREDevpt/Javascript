// évènement à la soumission du formulaire  (EVENT LISTENER)

// => supprimer toutes les div>div dans le formulaire

// => vérifier que tous les champs sont renseignés

// => vérifier que le login est différent du mot de passe

// => vérifier que les mots de passe sont identiques

// => vérifier que le login ne contient pas "admin","administrator","superadmin","chuck", "root", "postmaster"

// => créer une div juste avant contenant le message d'erreur pour chaque erreur

// fichier js chargé
console.log("fonctionnement");

// code exécuté lorsque le dom est chargé
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('execution du code js');
    const subscription_cgu_input = document.getElementById('subscription_cgu');


    // évènement à la soumission du formulaire  (EVENT LISTENER)
    const formulaire = document.querySelector('form');
    formulaire.addEventListener('submit', function (event) {

        // suppression du comportement par défaut
        event.preventDefault();

        // => supprimer toutes les div>div dans le formulaire
        const errorDivsToDelete = document.querySelectorAll('div > div');
        for (let i = 0; i < errorDivsToDelete.length; i++) {
            const errorDiv = errorDivsToDelete[i];
            const parent = errorDiv.parentNode;
            parent.removeChild(errorDiv);
        }

        // => vérifier que tous les champs sont renseignés
        // selecteur par attribut pour récupérer uniquement:
        // type = "text" et type = "password"
        const fieldsRequired = document.querySelectorAll('form input[type=text], form input[type=password]');
        for (let i = 0; i < fieldsRequired.length; i++) {
            const field = fieldsRequired[i];
            const value = field.value;
            if (value.length == 0){
                // créer une div qui contient texte : "Le champs est requis"
                const errorDiv = document.createElement('div');
                errorDiv.classList.add('error');
                errorDiv.textContent = 'Le champs est requis';

                // récupérer parent du champ actuel
                const parent = field.parentNode;
                // ajouter la div nouvellement créée à ce parent
                parent.appendChild(errorDiv);
            }

        }

//        if (document.querySelector('form input[type=selected]').value == ""){
//            // créer une div qui contient texte : "Sélectionnez la langue"
//            const selectedDiv = document.createElement('div');
//            selectedDiv.classList.add('error');
//            selectedDiv.textContent = 'Sélectionnez la langue';
//
//            // récupérer parent du champ actuel
//            const parent = .parentNode;
//
//            // ajouter la div nouvellement créée à ce parent
//            parent.appendChild(selectedDiv);
//
//       }

        if (document.querySelector('form input[type=checkbox]').checked == false){
            // créer une div qui contient texte : "Acceptez les cgu"
            const checkboxDiv = document.createElement('div');
            checkboxDiv.classList.add('error');
            checkboxDiv.textContent = 'Acceptez les gpu';

            // récupérer parent du champ actuel
            const parent = subscription_cgu_input.parentNode;

            // ajouter la div nouvellement créée à ce parent
            parent.appendChild(checkboxDiv);

        }



    });
})