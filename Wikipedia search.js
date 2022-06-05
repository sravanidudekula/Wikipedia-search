let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    //resultitem
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);
    //title Element
    let {
        title,
        link,
        description
    } = result;
    let titleEl = document.createElement("a");
    titleEl.textContent = title;

    titleEl.classList.add("result-title");
    titleEl.href = link;
    titleEl.target = "_blank"
    resultItemEl.appendChild(titleEl);

    //break
    let breakEl = document.createElement("br");
    resultItemEl.appendChild(breakEl);
    //url
    let urlEl = document.createElement("a");
    urlEl.textContent = link;
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank"
    resultItemEl.appendChild(urlEl);
    //break
    let breakTitleEl = document.createElement("br");
    resultItemEl.appendChild(breakTitleEl);
    //description
    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("link-description");
    resultItemEl.appendChild(descriptionEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.toggle("d-none");
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function wikipediaSearch(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = "";
        spinnerEl.classList.toggle("d-none");
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })