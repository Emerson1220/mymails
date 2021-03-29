function count(){
    //Sélection de toutes les balises <p>
    //Comptage du nombre de balises <p>
    //Stockage du résultat dans la variable
    nbMessage = $("p").length;
        //Recherche de l'ID'pour l'affichage de la variable 
        $("#count").text(nbMessage);
};

function delMessage(){
    //Ecouter & Situer la class "trash" concernée avec la méthode (this)
    //Effacement du parent de la class "trash"
    $(".trash").click(
    function() {$(this).parent().remove()
    //Appel de la fonction compteur
    count();
        }
    );
};

function addMessage(){
    //Ecoute et récup. de l'input ds une variable
    message = $('#add-message').val();
    
    //Création de la div et de son contenu via l'input
    // Ajout des informations
    $("body").append('<div class="row"><img class="avatar" src="avatar-4.jpg"><div><h6>Alexandra Pozi</h6><p>'+message+'</p></div><img class="trash" src="trash.png"></div>');
};






//Renvoi de la fonction Compteur
count();

//Renvoi de la fonction delete message
delMessage();

//Détection du click Add
$('#btn-add').click(
    function (){
    
    //Renvoi de la fonction add message
    addMessage();

    //Renvoi de la fonction delete message
    delMessage();

    }

);




//Test search
$('#btn-search').ready(
    function(){
    //Ecoute du clavier
    $("#search-message").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        console.log(value)

    // $(".row").filter(function() {
    //     $(this).toggle($(this).text().toLowerCase().indexOf(value)> -1)
        });
    });




