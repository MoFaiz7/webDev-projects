

let newsAccord = document.getElementById('videos__container');
const fetchImage = async ()=> {
    let val = document.getElementById("search").value;
    const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=H_Jn0ns5ELVExNh8MaceqSOzCKrF2MTeYi5APOXwDqc&query=${val}&orientation=landscape`);
    const data = await res.json();
    // let arr = await JSON.parse(res);
    console.log(data);
    // console.log(typeof(data));
    // let item = data.results[0];
    let newsHtml = "";
    // console.log(typeof(data.results));
    data.results.forEach(function(item, ind){
            let imgUrl = "hahah";
            console.log(imgUrl);
            let news = ` <div class="video">
                <div class="video__thumbnail">
                <img src="${item.urls.regular}" alt="" >
            </div>

            <div class="video__details">
                <div class="author">
                    <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" >
                </div>
                <div class="title">
                    <span>
                        Desc: ${' ' + item.alt_description}
                    </span>
                    <a href="">
                        Likes: ${' ' + item.likes}
                    </a>
                    <a href="${item.urls.regular} target="_blank" >
                        Open 
                    </a>
                </div>

                </div>
        </div>`;
        newsHtml += news;
    });  
    newsAccord.innerHTML = newsHtml;
}

let btn = document.getElementById("send");
btn.addEventListener("click", ()=>{
    fetchImage();
    // let val = document.getElementById("search").value;
    // console.log(val);
})