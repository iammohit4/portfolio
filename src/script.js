const menuButton = document.getElementById("menuButton");
const navigationLinks = document.getElementById("navigationLinks");

menuButton.addEventListener("click", function() {
    if(navigationLinks.style.zIndex == "20") {
        navigationLinks.style.opacity = "0%";
        navigationLinks.style.zIndex = "-20";
    }
    else {
        navigationLinks.style.opacity = "100%";
        navigationLinks.style.zIndex = "20";
    }
})

function contact() {
    alert("This is a demo form, none of the data will be recorded");
}