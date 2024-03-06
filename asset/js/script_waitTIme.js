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