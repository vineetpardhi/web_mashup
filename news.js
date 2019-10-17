function search()
{
  var xhr1 = new XMLHttpRequest();
var url = "http://localhost:3000/cities";

// Called whenever the readyState attribute changes 
xhr1.onreadystatechange = function() {

  // Check if fetch request is done
  if (xhr1.readyState == 4 && xhr1.status == 200) { 
  
    // Parse the JSON string
    var jsonData = JSON.parse(xhr1.responseText);
    
    console.log(jsonData[0]);
    showcities(jsonData);
    


  }
};

xhr1.open("GET", url, true);
xhr1.send();

}

function showcities(data)
{
  var output;
  var i;

  for(var i in data.city)
  {
    output +="<options>"+ data.city[i]+"</options>";
  }

  document.getElementById("city_options").innerHTML=output;
}






var city;




function getCity()
{
  if(!city)
  city="mumbai";
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




