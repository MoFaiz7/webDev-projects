// don't forget include js to html

let doc = document.getElementById("newsaccordion");
let apiKey = 'eea4e1c142194c1ca5ad52e33a891b44';
let source = 'bbc-news';


// let x = "https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}";

fetch('https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}'){
    .then(
        let x = JSON.parse(this.responseText())
     )
}