let cards = document.querySelectorAll(".shorttext div");

cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.classList.add("show-info");
    });

    card.addEventListener("mouseleave", function() {
        card.classList.remove("show-info");
    });
});