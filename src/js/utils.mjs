export function getParamFromURL(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get(param)
    return paramValue;
}
  
  
export async function loadHeaderFooter() {
    const body = document.querySelector("body");

    const outputHeader = await loadTemplate("/partials/header.html");
    body.insertAdjacentHTML("afterbegin", outputHeader);

    const outputFooter = await loadTemplate("/partials/footer.html");
    body.insertAdjacentHTML("beforeend", outputFooter);
};

async function loadTemplate (path) {
    const response = await fetch(path);
    return response.text();
};