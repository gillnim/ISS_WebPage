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
  
  const factsElement = document.querySelector(".space-facts");
  
  const random = () => Math.floor(Math.random() * 4);
  
  const handleFactClick = (e) => {
    const fact = factsArray[random()];
    factsElement.innerHTML = "";
    const factsItem = document.createElement("li"); // <ul>
    factsItem.classList.add("space-facts__item", "space-facts__border");
  
    const factsFact = document.createElement("h2"); // <h2>
    factsFact.classList.add("space-facts__fact");
    factsFact.innerText = fact.fact;
  
    const factsImage = document.createElement("img");
    factsImage.classList.add("space-facts__image");
    factsImage.src = fact.image;
  
    factsItem.appendChild(factsImage); // append <h3> to the <li>
    factsItem.appendChild(factsFact); // append <> to the <li>
    factsElement.appendChild(factsItem); // append the <li> to the <div>
  };
  
  const button = document.querySelector(".space-facts__button");
  button.addEventListener("click", handleFactClick);
  
  const renderFact = () => {
    const fact = factsArray[random()];
    const factsItem = document.createElement("li"); // <ul>
    factsItem.classList.add("space-facts__item", "space-facts__border");
  
    const factsFact = document.createElement("h2"); // <h2>
    factsFact.classList.add("space-facts__fact");
    factsFact.innerText = fact.fact;
  
    const factsImage = document.createElement("img");
    factsImage.classList.add("space-facts__image");
    factsImage.src = fact.image;
  
    factsItem.appendChild(factsImage); // append <h3> to the <li>
    factsItem.appendChild(factsFact); // append <> to the <li>
    factsElement.appendChild(factsItem); // append the <li> to the <div>
  };
  
  renderFact();