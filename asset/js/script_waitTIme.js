$("#waitClass1").click(function(){
  if($("#classDesc1").hasClass("current")){
    $(".classDesc").removeClass("current");
  }
  else{
    $(".classDesc").removeClass("current");
    $("#classDesc1").addClass("current");
  }
});

$("#waitClass2").click(function(){
  if($("#classDesc2").hasClass("current")){
    $(".classDesc").removeClass("current");
  }
  else{
    $(".classDesc").removeClass("current");
    $("#classDesc2").addClass("current");
  }
});

$("#waitClass3").click(function(){
  if($("#classDesc3").hasClass("current")){
    $(".classDesc").removeClass("current");
  }
  else{
    $(".classDesc").removeClass("current");
    $("#classDesc3").addClass("current");
  }
});

$("#waitClass4").click(function(){
  if($("#classDesc4").hasClass("current")){
    $(".classDesc").removeClass("current");
  }
  else{
    $(".classDesc").removeClass("current");
    $("#classDesc4").addClass("current");
  }
});

$("#waitClass5").click(function(){
  if($("#classDesc5").hasClass("current")){
    $(".classDesc").removeClass("current");
  }
  else{
    $(".classDesc").removeClass("current");
    $("#classDesc5").addClass("current");
  }
});

$("#waitClass6").click(function(){
  if($("#classDesc6").hasClass("current")){
    $(".classDesc").removeClass("current");
  }
  else{
    $(".classDesc").removeClass("current");
    $("#classDesc6").addClass("current");
  }
});

$("#waitClass7").click(function(){
  if($("#classDesc7").hasClass("current")){
    $(".classDesc").removeClass("current");
  }
  else{
    $(".classDesc").removeClass("current");
    $("#classDesc7").addClass("current");
  }
});

$(".classDescClose").click(function(){
  $(".classDesc").removeClass("current");
})

$("#navGym").click(function(){
  $(".classDesc").removeClass("current");
})

$("#navMap").click(function(){
  $(".classDesc").removeClass("current");
})

$("#navAboutUs").click(function(){
  $(".classDesc").removeClass("current");
})

$(".classDescMapLink").click(function(){
  $(".classDesc").removeClass("current");
  $(".navItem").removeClass("current");
  $("#navMap").addClass("current");
  $(".section").removeClass("current");
  $("#sectionMap").addClass("current");
})

var waitTimeData = [15, 20, 0, 10, 35, 5, 10];

function chartUpdate() {
  for(var i=0; i<7; i++){
    var id = "#chartBar" + String(i+1);
    $(id).css("height", String(waitTimeData[i] / 60 * 100) + "%");
    $(id).attr("time-label", String(waitTimeData[i]));
  }
}
setInterval(chartUpdate, 10);



// window.onload = function () {
//   let context = document.querySelector("#waitTimeChart").getContext('2d')
//   new Chart(context, {
//     type: 'bar',
//     data: {
//       labels: ['高2-A', '高2-B', '高2-C', '高2-D', '高2-E', '高2-F', '高2-G'],
//       datasets: [{
//         label: "待ち時間",
//         data: [15, 20, 0, 10, 35, 5, 10],
//         backgroundColor: ['#7FD9FB'],
//         barPercentage: 0.75, // 棒グラフの幅を50%にする
//         borderRadius: 4, // 角丸
//       }],
//     },
//     options: {
//       plugins: {
//         legend: {
//           display: false, // 凡例を非表示
//         },
//         title: {
//           display: true,
//           text: "各クラス待ち時間一覧",
//         },
//         tooltip: {
//           enabled: false, // マウスオーバー時のツールチップを非表示
//         },
//       },
//       scales: {
//         y: {
//           min: 60,
//           max: 0,
//         }
//       },
//       responsive: false
//     }
//   })
// }