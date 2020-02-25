function control() { //Fonction Control()

    //INITIALISATION   
    var formulaire = document.getElementById("formulaire") //Formulaire
    var verif = "oui" //Verification accepté

    var prenom = document.getElementById("form_name") //Formulaire prenom
    var nom = document.getElementById("form_lastname") //Formulaire nom
    var email = document.getElementById("form_email") //Formulaire email
    var besoin = document.getElementById("form_need") //Formulaire besoin
    var message = document.getElementById("form_message") //Formulaire message

    var paragraph_prenom = document.getElementById("paragraph_prenom") //Ajouter un paragraph dans le code HTML
    var paragraph_nom = document.getElementById("paragraph_nom") //Ajouter un paragraph dans le code HTML
    var paragraph_email = document.getElementById("paragraph_email") //Ajouter un paragraph dans le code HTML
    var paragraph_besoin = document.getElementById("paragraph_besoin") //Ajouter un paragraph dans le code HTML
    var paragraph_message = document.getElementById("paragraph_message") //Ajouter un paragraph dans le code HTML


    //TRAITEMENT
    if (prenom.value == "" || prenom.value.length < 2) { /*PRENOM*/

        if (prenom.value == "" || prenom.value.length < 2) { //Si il n'y a pas de prenom
            prenom.focus()
            prenom.style.border = "none" //Border en rouge
            prenom.style.border = "0.6px solid red" //Border en rouge
            paragraph_prenom.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Veuillez renseigner un prenom (minimum 2 caractères)" //Renseigne un prenom
            verif = "non"//Verification échouée
            return false; //Retourne une valeur fausse

        }

    } else {
        paragraph_prenom.innerHTML = "" //Supprime un prenom
        prenom.style.border = "" //Supprime border 

    }
    if (nom.value == "" || nom.value.length < 2) { /*NOM*/

        if (nom.value == "" || nom.value.length < 2) { //Si il n'y a pas de nom
            nom.focus()
            nom.style.border = "0.6px solid red" //Border en rouge
            paragraph_nom.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Veuillez renseigner un nom (minimum 2 caractères)" //Renseigne un nom
            verif = "non"//Verification échouée
            return false; //Retourne une valeur fausse
        }

    } else {
        paragraph_nom.innerHTML = "" //Supprime un nom
        nom.style.border = "" //Supprime border 

    }
    if (!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email.value)) { /*EMAIL TEST*/

        if (!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email.value)) { //Si il n'y a pas d'email
            email.focus()
            email.style.border = "none" //Border supprimé
            email.style.border = "0.6px solid red" //Border en rouge
            paragraph_email.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Veuillez renseigner un email" //Renseigne un email
            verif = "non"//Verification échouée
            return false; //Retourne une valeur fausse
        }

    } else {
        paragraph_email.innerHTML = "" //Supprime un email
        email.style.border = "" //Supprime border 

    }
    if (besoin.value == "Selectionnez") { /*BESOIN*/

        if (besoin.value == "Selectionnez") { //Si il n'y a pas de besoin
            besoin.focus()
            besoin.style.border = "none" //Border en rouge
            besoin.style.border = "0.6px solid red" //Border en rouge
            paragraph_besoin.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Veuillez renseigner un besoin" //Renseigne un besoin
            verif = "non"//Verification échouée
            return false; //Retourne une valeur fausse
        }

    } else {
        paragraph_besoin.innerHTML = "" //Supprime un besoin
        besoin.style.border = "" //Supprime border 

    }

    if (message.value == "" || message.value.length < 5 || message.value.length > 8000) { /*MESSAGE*/

        if (message.value == "" || message.value.length < 5 || message.value.length > 8000) { //Si il n'y a pas de message
            message.focus()
            prenom.style.border = "none" //Border en rouge
            message.style.border = "0.6px solid red" //Border en rouge
            paragraph_message.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Veuillez renseigner un message (entre 5 et 8000 caractères)" //Renseigne un age
            verif = "non"//Verification échouée
            return false; //Retourne une valeur fausse
        }

    } else {
        paragraph_message.innerHTML = "" //Supprime le message
        message.style.border = "" //Supprime border 
    }
   
    //ENVOI
    if (verif == "oui") { //Verification accepté
        formulaire.innerHTML = "ENVOYE"
        formulaire.submit() //Envoi..GOOD!
    }
}