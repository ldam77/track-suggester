$(document).ready(function() {
  $("#questionaire").submit(function(event){
    event.preventDefault();

    var frontOrBack = $("input:radio[name=question1]:checked").val();
    var webOrSoftware = $("input:radio[name=question2]:checked").val();
    var businessOrAndroid = $("input:radio[name=question3]:checked").val();
    var startupOrEstablished = $("input:radio[name=question4]:checked").val();
    var mobileOrEnterprise = $("input:radio[name=question5]:checked").val();
    // mobileOrEnterprise is currently not used. May be use for future suggestion

    if(frontOrBack === "front"){
      $(".suggested-track").text("Design");
      $("#class-link").attr("href", "https://www.epicodus.com/design");
    } else{
      if(webOrSoftware === "web"){
        if(startupOrEstablished === "startup"){
          $(".suggested-track").text("Ruby");
          $("#class-link").attr("href", "https://www.epicodus.com/ruby");
        } else{
          $(".suggested-track").text("PHP");
          $("#class-link").attr("href", "https://www.epicodus.com/php");
        }
      } else{
        if(businessOrAndroid === "business"){
          $(".suggested-track").text("C#");
          $("#class-link").attr("href", "https://www.epicodus.com/c-sharp");
        } else{
          $(".suggested-track").text("Java");
          $("#class-link").attr("href", "https://www.epicodus.com/java");
        }
      }
    }

    $("#suggestion").show();
  });

});
