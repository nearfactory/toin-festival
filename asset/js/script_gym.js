/* Load schedules from CSV */

function getCSV(url){
  var req = new XMLHttpRequest();
  req.open("get", url, false);
  req.send(null);

  return convertCSVtoArray(req.responseText);
}

var values = [];

function convertCSVtoArray(str){
  var result = [];
  var tmp = str.split("\n");
  for(var i=0; i<tmp.length; i++){
      result.push(tmp[i].split(","));
  }
  return result;
}

values = getCSV("./asset/csv/day1.csv");

for(var i=0; i<values.length; i++){
  var schedulesDay1 = document.getElementById("schedulesDay1");

  var scheduleBox = document.createElement('div');
  var scheduleMainBox = document.createElement('div');
  var scheduleTime = document.createElement('h2');
  var scheduleTitle = document.createElement('h1');
  var scheduleCategory = document.createElement('h3');
  var scheduleImg = document.createElement('img');
  var scheduleDesc = document.createElement('p');
  
  scheduleBox.classList.add("schedule");
  scheduleBox.setAttribute("id", "schedule" + String(i+1) + "Day1");
  schedulesDay1.appendChild(scheduleBox);
  
  scheduleMainBox.classList.add("scheduleMain");
  scheduleBox.appendChild(scheduleMainBox);
  
  scheduleTime.setAttribute("id", "scheduleTime" + String(i+1) + "Day1");
  scheduleTime.textContent = values[i][0];
  scheduleMainBox.appendChild(scheduleTime);
  
  scheduleTitle.setAttribute("id", "scheduleTitle" + String(i+1) + "Day1");
  scheduleTitle.textContent = values[i][3];
  scheduleMainBox.appendChild(scheduleTitle);
  
  scheduleCategory.setAttribute("id", "scheduleCategory" + String(i+1) + "Day1");
  scheduleCategory.textContent = values[i][4];
  scheduleMainBox.appendChild(scheduleCategory);
  
  scheduleImg.src = "./image/" + values[i][5];
  scheduleBox.appendChild(scheduleImg);
  
  scheduleMainBox.classList.add("scheduleDesc");
  scheduleDesc.textContent = values[i][6];
  scheduleBox.appendChild(scheduleDesc);
}









var activeCount = 0;

$("#day1").click(function(){
  $("#scheduleDay2").removeClass("active");
  $("#scheduleDay1").addClass("active");
  $("#day2").removeClass("active");
  $("#day1").addClass("active");
});

$("#day2").click(function(){
  $("#scheduleDay1").removeClass("active");
  $("#scheduleDay2").addClass("active");
  $("#day1").removeClass("active");
  $("#day2").addClass("active");
})

$(".schedule").click(function(){
  // if($(this).hasClass("active")){
  //   $(this).removeClass("active");
  //   activeCount -= 1;
  // }
  // else{
  //   $(this).addClass("active");
  //   activeCount += 1;
  // }
  $(this).toggleClass("active");
})

function timeCalc(){
  var start = new Date("2024-03-09 09:00:00");
  var end = new Date("2024-03-09 17:00:00");
  var now = new Date();

  var festivalTime = end.getTime() - start.getTime();
  var festivalNowTime = now.getTime() - start.getTime();

  $("#day1Line1").css("height", "calc(" + String(festivalNowTime / festivalTime * 100) + "% + " + String(activeCount * 7) + "rem)");
  $("#day1Line2").css("height", "calc(" + String(100 - festivalNowTime / festivalTime * 100) + "% - " + String(activeCount * 7) + "rem)");
}

setInterval(timeCalc, 10);