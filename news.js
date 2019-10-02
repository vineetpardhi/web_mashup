
var xcity=document.getElementById("city").value;


var data = null;

 

 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://newsapi.org/v2/everything?q="+xcity+"&from=2019-10-01&to=2019-10-01&sortBy=popularity&apiKey=719cac1138af47129b6fbf607f746a6e");


xhr.send();


xhr.onload=function()
{
  var data = JSON.parse(this.responseText)
    if (xhr.status >= 200 && xhr.status < 400)
     {
       arr_data=data.articles;
  
      document.getElementById("newsid").innerHTML= `
      <h3 class="news">All the news</h3>
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
        console.log('error')
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




