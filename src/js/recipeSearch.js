import { recipeSearch } from "./recipeSearch.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

document.getElementById("search-btn").addEventListener("click", (e) => {
  e.preventDefault();
  let query = document.getElementById("search-input").value;
  recipeSearch(query);
});
