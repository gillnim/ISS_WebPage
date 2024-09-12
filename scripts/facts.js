
const factsArray = [
    {
        fact: "if two pieces of the same metal touch in space they will bond and be permanently stuck together.",
        image: "./assets/space_metal.webp",
    },

    {
        fact: "NASA's Voyager 1 spacecraft was launched in 1977.",
        image: "./assets/Voyager_1.webp",
    },

    {
        fact: "the only two animal species known to navigate by the stars are humans and dung beetles.",
        image: "./assets/bettles_stars.webp",
    },

    {
        fact: "during space walks, astronauts can't come back into inside to go to the toilet, so they wear nappies.",
        image: "./assets/astronauts_nappies.webp",
    },
];

// <div class="space-facts">
const factsElement = document.querySelector(".space-facts");
console.log(factsElement);


//function to display random facts when button is clicked 

//create a variable (x) and assign value of 0
// const randomFact = 0;

// //create function that returns a random number between 0 and length of the array
// function getRandomFact () {
//     for (let i=0; i<factsArray.length; i++) {
//         return Math.floor(Math.random() * max);
//     }
// };

// //call function and save the return to the variable created
// randomFact = getRandomFact();


//grab the element from the array at the index - (i[x])



factsArray.forEach(function (fact) {

    const factsItem = document.createElement("li"); // <ul>
    factsItem.classList.add("space-facts__item",
         "space-facts__border"
        );

    const factsFact = document.createElement("h2"); // <h2>
    factsFact.classList.add("space-facts__fact");
    factsFact.innerText = fact.fact;

    const factsImage = document.createElement("img");
    factsImage.classList.add("space-facts__image");
    factsImage.src = fact.image;

    factsItem.appendChild(factsImage); // append <h3> to the <li>
    factsItem.appendChild(factsFact); // append <> to the <li>
    factsElement.appendChild(factsItem); // append the <li> to the <div>
});



