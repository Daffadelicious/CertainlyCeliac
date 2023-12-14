// require("dotenv").config()
let url = "https://api.edamam.com/api/recipes/v2?type=public"
// let envVersion = `&q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
export async function recipeSearch(query) {
    const response = await fetch(url + `&q=${query}&app_id=71712e33&app_key=4093c9d259f0ab0469881712e4bf585e&health=gluten-free`, {
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await response.json()
    renderOptions(data.hits)
}

function renderOptions(data){
    let container = document.getElementById("gallery")
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    data.forEach((option) => {
        let recipe = option.recipe
        let link = document.createElement("a")
        link.href = `../recipe_details/index.html?id=${recipe.uri.split("#")[1]}`
        link.alt = `See recipe for ${recipe.label}`
        let figure = document.createElement("figure")
        let img = document.createElement("img")
        img.src = recipe.images.SMALL.url;
        let caption = document.createElement("figcaption")
        caption.innerText = recipe.label
        figure.appendChild(img)
        figure.appendChild(caption)
        link.appendChild(figure)
        container.appendChild(link)
    })
}