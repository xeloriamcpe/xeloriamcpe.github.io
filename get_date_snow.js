   /*Date of snow*/
   var date_actuelle = new Date();
    var date_evenement_min = new Date("Dec 10 2019");
    var date_evenement_max = new Date("Fev 10 2020");
    
    if (date_evenement_min == date_actuelle && date_evenement_max > date_actuelle)
    { 	
        window.onload = function(){
            snow.init(25);
        }; 
    }

