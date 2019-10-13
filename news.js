function search(loct)
{
  if(!loct)
    loct="mumbai";
  else
    loct=document.getElementById("search_term").nodeValue;


  fetch("https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location="+loct, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
      "x-rapidapi-key": "111b53dad3mshdac9899c1c9ab66p177177jsn35a1f623b047"
    }
  })
  .then(response => {
    console.log(responseText);
  })
  .catch(err => {
    console.log(err);
  });

    var locdata=JSON.parse(this.response);
    arr_loct_data=locdata.Results;


}





var city="mumbai";
function getCity()
{
city=document.getElementById("search_term").nodeValue;
}
 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://newsapi.org/v2/everything?q="+city+"&from=2019-10-02&to=2019-10-02&sortBy=popularity&apiKey=3bc87b30a60a40e6a3de082e69829788");


xhr.send();


xhr.onload=function()
{
  var data = JSON.parse(this.responseText)
    if (xhr.status >= 200 && xhr.status < 400)
     {
       arr_data=data.articles;
  
      document.getElementById("newsid").innerHTML= `
      <h3 class="news">All the news in ${city}</h3>
      ${arr_data.map(function(arr){
        return  `
        <div class="card">
          <div class="card-body">
            <div class="card-title">Title:${arr.title}</div>
           <u><p>-by${arr.author}source(${arr.source.name})</p></u>
            <div class="card-text" style="background-color:black; color:white;">${arr.description}</div>
            <a href="${arr.url}" class="btn btn-primary">Original source</a>
          </div>
        </div>
        <br><hr>`
      }).join("")}
      <p class="footer"></p>
      `
      

    }
      else { 
        console.log('error pata nahi')
      } 
    
}

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
    console.log(JSON.parse(this.responseText));
  }else
  {
    console.log('error');
  }
    
});




