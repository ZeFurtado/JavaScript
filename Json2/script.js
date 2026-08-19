var header = document.querySelector("header");
var section = document.querySelector("section");

var requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

var request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function(){
    var superheroes = request.response;
    populateHeader(superheroes);
    showHeroes(superheroes);
}

function populateHeader(objJson){
    var myH1 = document.createElement("h1");
    myH1.textContent = objJson["squadName"];
    header.appendChild(myH1);

    var myPara = document.createElement("p");
    myPara.textContent = "Hometown: " + jsonData["homeTown"] + "// Formed: " + jsonData["formed"];
    
    header.appendChild(myPara);
    
}