/*** Fonctionnalité 1 ***/


var footer = document.querySelector('footer');
let c = 0

var onClick1 = function() {
  console.log('clique')
}

var onClick2 = function() {
  console.log(`clic numéro ${++c}`);
  
}
footer.addEventListener("click", onClick1);
footer.addEventListener("click", onClick2);
footer.removeEventListener("click", onClick1);



/*** Fonctionnalité 2 ***/

var hamburger = document.querySelector(".navbar-toggler")

var onClick = function() {
    let to_toggle = document.getElementById("navbarHeader");
    to_toggle.classList.toggle("collapse");
};

hamburger.addEventListener("click", onClick)

/*** Fonctionnalité 3 ***/

var card1 = document.getElementsByClassName("col-md-4")[0];
var button_card = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
var text_card = document.getElementsByClassName("card-text")[0]

var redText = function() {
  text_card.style.color = "red"
}

button_card.addEventListener("click", redText)

/*** Fonctionnalité 4 ***/



/*** Fonctionnalité 5 ***/



/*** Fonctionnalité 6 ***/



/*** Fonctionnalité 7 ***/



/*** Fonctionnalité 8 ***/



/*** Fonctionnalité 9 ***/

