// WEB303 Assignment 2

$(document).ready(function(){
    
 $("#prospect").click(function(){

$("#content").load("prospect.html", function(responseTxt1, abcd, xhr){
    if(abcd == "success")
            {
                $("#content").fadeIn(1075);
            }
          if(statusTxt1 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
      });

    $("#convert").click(function(){
    $("#content").load("convert.html", function(responseTxt2, abcde, xhr){
    if(abcde == "success") {
        $("#content").fadeIn(1078);
            }
                
            if(statusTxt2 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });


    $("#retain").click(function(){
        $("#content").load("retain.html", function(responseTxt3, abcdef, xhr){
            if(abcdef == "success") {
            $("#content").fadeIn(1080);
        }
            if(statusTxt3 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});
