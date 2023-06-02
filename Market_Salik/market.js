// Select all filter buttons and Filter cards

const filterButtons  = document.querySelectorAll(".filter_button button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
console.log(filterButtons,filterableCards);

//define the filterca
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);
    
    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name ===  e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
};



//add click event listener
filterButtons.forEach(button => button.addEventListener("click",filterCards));


// for click the buy animation
// Get the modal
var modal = document.getElementById('id01');
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}