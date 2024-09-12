const commentsArray = [
    {
        name: "Zara Nebula",
        date: "11/02/2024",
        comment: " There are more stars in the universe than grains of sand on all the beaches on Earth. Scientists estimate there are about 1 septillion stars (that's a 1 followed by 24 zeros)."
    },
    {
        name: "Leo Quasar",
        date: "10/20/2024",
        comment: "The largest volcano in the solar system, Olympus Mons on Mars, is about 13.6 miles (22 kilometers) high, nearly three times the height of Mount Everest."
    }, 
    {
        name: "Aria Comet",
        date: "10/13/2024",
        comment: "Saturn's rings are made up of ice and rock particles, and they span an impressive 175,000 miles (282,000 kilometers), yet they are less than 1 kilometer thick."
    }
]

const listEl = document.getElementById("chat__list");

function displayComments() {

    listEl.innerText = "";

    for (let i = 0; i <commentsArray.length; i++) {
        const spaceWrapperEl = document.createElement("li");
        spaceWrapperEl.classList.add("chat__space-wrapper");
        listEl.appendChild(spaceWrapperEl);

        const commentContainerEl = document.createElement("div");
        commentContainerEl.classList.add("chat__comment-container");
        spaceWrapperEl.appendChild(commentContainerEl);

        const avatarWrapperEl = document.createElement("div");
        avatarWrapperEl.classList.add("chat__avatar-wrapper");
        commentContainerEl.appendChild(avatarWrapperEl);  

        const avatarEl = document.createElement("div");
        avatarEl.classList.add("chat__avatar");
        avatarWrapperEl.appendChild(avatarEl);
        
        const inputContainerEl = document.createElement("div");
        inputContainerEl.classList.add("chat__input-container");
        commentContainerEl.appendChild(inputContainerEl);

        const nameDateWrapperEl = document.createElement("div");
        nameDateWrapperEl.classList.add("chat__name-date-wrapper");
        inputContainerEl.appendChild(nameDateWrapperEl);

        const nameEl = document.createElement("p");
        nameEl.classList.add("chat__name");
        nameEl.innerText = commentsArray[i].name;
        nameDateWrapperEl.appendChild(nameEl);

        const dateEl = document.createElement("p");
        dateEl.classList.add("chat__date");
        dateEl.innerText = new Date (commentsArray[i].date).toLocaleDateString();
        nameDateWrapperEl.appendChild(dateEl);

        const messageWrapperEl = document.createElement("div");
        messageWrapperEl.classList.add("chat__message-wrapper");
        inputContainerEl.appendChild(messageWrapperEl);

        const messageEl = document.createElement("p");
        messageEl.classList.add("chat__message");
        messageEl.innerText = commentsArray[i].comment;
        messageWrapperEl.appendChild(messageEl);
    }
}

displayComments();


const formEl = document.getElementById("chat__form");

formEl.addEventListener("submit", (event) => {

    event.preventDefault();

    const newComment = {
        name: event.target.name.value,
        comment: event.target.comment.value,
        date: Date.now(),
    };

    addNewComment(newComment);

    formEl.reset();
})

function addNewComment(newComment) {
    commentsArray.unshift(newComment);
    displayComments();
}