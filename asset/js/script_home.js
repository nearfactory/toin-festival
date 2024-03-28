$(document).ready( function(){
  $("#homeConcept").addClass("active");
});

function remainTimeCalc() {
  const now = new Date();
  const goal = new Date("2024/09/17 09:00:00");

  const restMillisecond = goal.getTime() - now.getTime();

  const day = Math.floor(restMillisecond / 1000 / 60 / 60 / 24);
  const hour = Math.floor(restMillisecond / 1000 / 60 / 60) % 24;
  const minute = Math.floor(restMillisecond / 1000 / 60) % 60;
  const second = Math.floor(restMillisecond / 1000) % 60;

  document.getElementById('remainTimeContainer').innerHTML = day + "日 " + hour + "時間 " + String(minute).padStart(2, '0') + "分 " +  String(second).padStart(2, '0') + "秒";
}

setInterval(remainTimeCalc, 100);