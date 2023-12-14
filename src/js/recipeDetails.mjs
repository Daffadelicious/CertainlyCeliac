let url = "https://api.edamam.com/api/recipes/v2/"

async function getRecipe(id){
    const response = await fetch(url + `${id}?type=public&app_id=71712e33&app_key=4093c9d259f0ab0469881712e4bf585e`, {
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await response.json()
    return data.recipe
}

export async function loadRecipe(id){
    let recipe = await getRecipe(id)
    let title = document.createElement("h1")
    let source = document.createElement("a")
    source.innerText = `Sourced from ${recipe.source}`
    source.href= recipe.sourceurl
    source.alt = `Go to the original source of this recipe from ${recipe.source}`
    title.innerText = recipe.label
    let wrapper = document.createElement("div")
    wrapper.classList.add("recipe-wrapper")
    let image = document.createElement("img")
    image.src = recipe.image
    image.alt = `Image of ${recipe.label}`
    let ingredientList = document.createElement("ul")
    recipe.ingredientLines.forEach((text) => {
        let line = document.createElement("li")
        line.innerText = text
        ingredientList.appendChild(line)
    })
    wrapper.appendChild(image)
    wrapper.appendChild(ingredientList)
    let instructionList = document.createElement("ol")
    recipe.instructionLines.forEach((text) => {
        let line = document.createElement("li")
        line.innerText = text
        instructionList.appendChild(line)
    })
    let container = document.getElementById("recipe-details")
    container.append(title)
    container.append(source)
    container.append(wrapper)
    container.append(instructionList)
}