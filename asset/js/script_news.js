// Load schedules from CSV

var news = [];

function getCSV(url){
  var req = new XMLHttpRequest();
  req.open("get", url, false);
  req.send(null);

  return convertCSVtoArray(req.responseText);
}

function convertCSVtoArray(str){
  var result = [];
  var tmp = str.split("\n");
  for(var i=0; i<tmp.length; i++){
      result.push(tmp[i].split(","));
  }
  return result;
}

news = getCSV("./asset/csv/news.csv");

for(var i=0; i<(news.length)-1; i++){
  var newsContainer = document.getElementById("newsContainer");

  var newsBox = document.createElement('div');
  var newsDate = document.createElement('h3');
  var newsTitle = document.createElement('h1');
  
  newsBox.classList.add("newsContent");
  newsContainer.prepend(newsBox);
  
  newsDate.textContent = news[i+1][0];
  newsBox.appendChild(newsDate);
  
  newsTitle.textContent = news[i+1][2];
  newsBox.appendChild(newsTitle);
}