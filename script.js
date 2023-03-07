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

var card2 = document.getElementsByClassName("col-md-4")[1];
var button_card = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var text_card2 = document.getElementsByClassName("card-text")[1]


var greenText = function() {
    if (text_card2.style.color === "green"){
      text_card2.style.color = "black";
    }
    else {
      text_card2.style.color ="green";
    }

}

button_card.addEventListener("click", greenText)

/*** Fonctionnalité 5***/

var nav = document.getElementsByClassName("navbar")[0];
var tagName = document.getElementsByTagName("link")[0];

var linkKiller = function(){
  if (tagName.disabled === false) {
    tagName.disabled = true ;
  }
  else {
    tagName.disabled = false;
  }
}

nav.addEventListener('dblclick', linkKiller)

/*** Fonctionnalité 6 ***/


/*** Fonctionnalité 7 ***/



/*** Fonctionnalité 8 ***/



/*** Fonctionnalité 9 ***/

