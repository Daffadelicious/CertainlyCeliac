import { getParamFromURL } from "./utils.mjs";
import { loadRecipe } from "./recipeDetails.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

let id = getParamFromURL("id");
loadRecipe(id);
