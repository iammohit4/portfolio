const projects = [
    {
        "title": "Ryan Council Voting",
        "caption": "Full Stack Web Development",
        "image": "images/ryan-council-voting.jpeg",
        "description": "Ryan Council Voting is a private project which I made for my school to conduct elections for students council members."
    },
    {
        "title": "Whisperly",
        "caption": "Full Stack Web Development",
        "image": "images/whisperly.jpeg",
        "description": "Whisperly is clone of a popular social media app NGL. Whisperly is used to receive anonymous messages from friends by sharing a link."
    },
    {
        "title": "Listenit.",
        "caption": "UI/UX Designing",
        "image": "images/listenit.jpeg",
        "description": "Concept design of a music streaming platform named Listenit."
    },
    {
        "title": "PhonePe",
        "caption": "UI/UX Designing",
        "image": "images/phonepe.jpeg",
        "description": "Redesign of a popular payments app PhonePe."
    },
    {
        "title": "Image Color Grading",
        "caption": "Photo Editing",
        "image": "images/image-color-grading.jpeg",
        "description": "Change of scene of a photo using color curves."
    },
    {
        "title": "Aeroplane",
        "caption": "Photography",
        "image": "images/aeroplane.jpeg",
        "description": "Photo of an aeroplane, shot using mobile phone."
    },
];

const backgroundImage = document.getElementById("backgroundImage");
const container = document.getElementById("container");
const placeTitle = document.getElementById("placeTitle");
const placeCaption = document.getElementById("placeCaption");
const placeImage = document.getElementById("placeImage");
const placeDescription = document.getElementById("placeDescription");
const indicator = document.getElementById("indicator");

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

var index = 0;

function updateProject() {
    backgroundImage.style.opacity = "0%";
    container.style.opacity = "0%";
    setTimeout(() => {
        indicator.innerText = index + 1 + "/" + projects.length;
        backgroundImage.style.opacity = "30%";
        container.style.opacity = "100%";
        backgroundImage.src = projects[index].image;
        placeTitle.innerText = projects[index].title;
        placeCaption.innerText = projects[index].caption;
        placeImage.src = projects[index].image;
        placeDescription.innerText = projects[index].description;
    }, 500)
}

updateProject();

function prevProject() {
    if (index == 0) {
        index = projects.length - 1;
    }
    else {
        index--;
    }
    updateProject();
}

function nextProject() {
    if (index == projects.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    updateProject();
}

prevButton.addEventListener("click", prevProject);
nextButton.addEventListener("click", nextProject);

window.addEventListener("keydown", function(e) {
    if(e.keyCode == 37) {
        prevProject();
    }
    if(e.keyCode == 39) {
        nextProject();
    }
})