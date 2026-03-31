// PRELOAD IMAGES
function preloader() {
   const imagesList = [
    "img/img-1.jpg",
    "img/img-2.jpg",
    "img/img-3.jpg"
];

    const images = [];

    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:
        ${images[0].src}
        ${images[1].src}
        ${images[2].src}`);
}

window.addEventListener("load", preloader);

// BUTTON NODE LIST
const buttons = document.querySelectorAll(".button-group button");

// RESOURCE OBJECT
const contentData = {
    lighting: {
        headingContent: "Switch to LED Lighting",
        bodyText: "Replacing traditional bulbs with LED lights is one of the cheapest ways to lower electricity costs.",
        imgUrl: "img/img-1.jpg",
        imgAlt: "LED light bulbs"
    },

    thermostat: {
        headingContent: "Smart Temperature Control",
        bodyText: "Smart thermostats help reduce heating and cooling costs.",
        imgUrl: "img/img-2.jpg",
        imgAlt: "Smart thermostat"
    },

    insulation: {
        headingContent: "Seal and Insulate Your Home",
        bodyText: "Low-cost insulation upgrades help save money.",
        imgUrl: "img/img-3.jpg",
        imgAlt: "Home insulation"
    }
};
// DYNAMIC CONTAINER
const container = document.getElementById("dynamic-content");

function loadInitialContent() {
    const item = contentData.lighting;

    container.innerHTML = `
        <h1>${item.headingContent}</h1>
        <img src="${item.imgUrl}" alt="${item.imgAlt}">
        <p>${item.bodyText}</p>
    `;
}

// HANDLE BUTTON CLICK
function handleSelection(event) {

    // REMOVE ACTIVE BUTTON
    buttons.forEach(button => {
        if (button.hasAttribute("id")) {
            button.removeAttribute("id");
        }
    });

    // SET NEW ACTIVE BUTTON
    event.target.setAttribute("id", "active-button");

    // GET CONTENT KEY
    const selected = event.target.dataset.content;

    const item = contentData[selected];

    // LOAD NEW CONTENT
    container.innerHTML = `
        <h1>${item.headingContent}</h1>
        <img src="${item.imgUrl}" alt="${item.imgAlt}">
        <p>${item.bodyText}</p>
    `;
}

// REGISTER EVENTS
buttons.forEach(button => {
    button.addEventListener("click", handleSelection);
});
