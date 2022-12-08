
const articles = [
    {
        title: "First",
        image: {
            src: "1.png",
            alt: "first image",
        },
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "first.html",
    },

    {
        title: "Second",
        image: {
            src: "2.png",
            alt: "second image",
        },
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "second.html",
    },

    {
        title: "Third",
        image: {
            src: "3.png",
            alt: "third image",
        },
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        url: "third.html",
    }
]

for (var i=0; i<articles.length; i++){
const $div = document.createElement("div")
$div.classList.add("card")
document.body.append($div)

const $cardBody = document.createElement("div")
$cardBody.classList.add("card__body")
$div.append($cardBody)

const $img = document.createElement("img")
$img.src = articles[i].image.src
$img.alt = articles[i].image.alt
$cardBody.append($img)

const $article = document.createElement("h2")
$article.textContent = articles[i].title
$cardBody.append($article)

const $paragraph = document.createElement("p")
$paragraph.textContent = articles[i].desc
$cardBody.append($paragraph)

const $link = document.createElement("a")
$link.textContent = "Voir plus"
$link.href = articles[i].url
$link.title = ""
$cardBody.append($link)
}

