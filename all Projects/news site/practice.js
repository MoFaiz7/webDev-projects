console.log("i m in working state");


let apiKey = 'eea4e1c142194c1ca5ad52e33a891b44';
let source = 'bbc-news';
let newsAcc = document.getElementById("newsaccordion");

const xhr = new XMLHttpRequest;
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let article = json.articles;
        console.log(article);
        let newsHtml = "";

        article.forEach(function(element, index) {
            let news = ` <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
              <h6><span class="badge bg-secondary">Breaking News #${index+1} </span> ${element.title}</h6>
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsaccordion">
              <div class="accordion-body">
                ${element.content} <a href="${element.url}" target="_blank">Read more...</a>
              </div>
            </div>
          </div>`;
          newsHtml += news;
        });
        newsAcc.innerHTML = newsHtml;
    }
    else{
        console.log("error occured");
    }
}

xhr.send();