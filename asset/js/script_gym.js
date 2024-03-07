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

$(".gymSchedule").click(function(){
  if($(this).hasClass("active")){
    $(".gymSchedule").removeClass("active");
  }
  else{
    $(".gymSchedule").removeClass("active");
    $(this).addClass("active");
  }
})