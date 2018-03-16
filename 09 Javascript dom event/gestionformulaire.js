/**
 * Gestion avancée :
 * selecteur : document.querySelector(cssRule) et document.querySelectorAll(cssRule)
 * gestion classes :
 element.classList.add(className);
 element.classList.remove(className);
 element.classList.contains(className);
 element.classList.toggle(className)
 * gestion select : element.selectedIndex; element.options;
 */

console.log("ça fonctionne");

// inputsText = document.querySelectorAll("form input[type='text']");

document.addEventListener("DOMContentLoaded", function(save){

    // evenement keyup pour tous les input text

    // Récupération Champ input
    const subscription_login_input = document.getElementById('subscription_login');

    subscription_login_input.addEventListener("keyup", function (event) {

        // => si saisie entre 4 et 8 caractères, ajouter la class "success" sur le input, retirer "error"
        const saisie = subscription_login_input.value;
        const list=subscription_login_input.classList;

        // supprimer toutes les div qui indique des erreurs
        // 1) div qui sont en dessous de l'input: "input ~ div" (sélecteurs css)
        // 2) div qui sont dans form_group: "div.form group > div"

        // Récupération de toutes les divs d'erreurs
        const errorDivList = document.querySelectorAll('input ~ div');
        for (let i = 0; i < errorDivList.length; i++) {
            const div = errorDivList[i];
            console.log(div);
            const parent = div.parentNode;
            parent.removeChild(div);
        }

        if(saisie.length >= 4 && saisie.length <= 8){
            subscription_login_input.classList.add('success');
            subscription_login_input.classList.remove('error');


            // sinon ajouter la classe "error" sur le input, retirer "success"

        }else {
            list.add('error');
            list.remove('success');

            // ajouter une div qui contient une indication sur erreur
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('error');
            errorDiv.textContent = 'le login doit être compris entre 4 & 8 caractères';


            // récupérer le formgroup au dessus de subscription_login_input
            const parent = subscription_login_input.parentNode;
            // ajouter la div nouvellement créée à ce parent
            parent.appendChild(errorDiv);

        }

    });


    // évènement à la soumission du formulaire  (EVENT LISTENER)

    // => supprimer toutes les div>div dans le formulaire

    // => vérifier que tous les champs sont renseignés

    // => vérifier que le login est différent du mot de passe

    // => vérifier que les mots de passe sont identiques

    // => vérifier que le login ne contient pas "admin","administrator","superadmin","chuck", "root", "postmaster"

    // => créer une div juste avant contenant le message d'erreur pour chaque erreur


});