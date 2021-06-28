$(document).ready(function(){
  
    $("#reset").hide();
    var time = parseInt($("#Sval").html());
    var brk = parseInt($("#Bval").html());
    
    $("#start").click(function(){
      $("#start,#minusClock,#plusClock,#minusBreak, #plusBreak, #title2, #Bval, #headTitle").hide();
     
      var sess = setInterval(Clock, 1000);
      time*=60;
      function Clock(){
       $("body").css("background-image", "url(https://static.pexels.com/photos/7101/wood-coffee-iphone-notebook.jpg)");
        time-=1;
        if(time==0)
        {
          clearInterval(sess);
          var startBreak = setInterval(breakClock, 1000);
                  brk*=60;
          $("#Sval").hide();
        } 
        if(time%60>=10){
          $("#Sval").html(Math.floor(time/60)+":"+time%60);
        }
        else{
          $("#Sval").html(Math.floor(time/60)+":"+time%60);
        }
      
        function breakClock()
        {
          $("#title1").hide();
          $("#title2, #Bval").show();
          $("body").css("background-image", "url(http://travelandtea.com/wp-content/uploads/2014/01/Colombian-coffee.jpg)");
          brk -=1;
          if(brk==0)
           {clearInterval(startBreak);
            $("#reset").show();
           }
          if(brk%60>=10){
          $("#Bval").html(Math.floor(brk/60)+":"+brk%60)
        }
        else{
          $("#Bval").html(Math.floor(brk/60)+":"+brk%60)
        }
        }
      }                
      
    });
    
    $("#reset").click(function(){
      time = 5;
      brk = 5;
      $("body").css("background-image", "url(https://www.walldevil.com/wallpapers/a56/river-mountain-mist-sky.jpg)");
      $("#Sval").html(time);
      $("#Bval").html(brk);
      $("#headTitle, #title1, #title2, #Bval, #Sval, #start, #minusClock, #plusClock, #minusBreak, #plusBreak ").show();
      $("#reset").hide();
    });
    
    $("#minusClock").click(function(){
      if(time>5)
      {
        time -= 5 ;
        $("#Sval").html(time);}
    });
    
     $("#plusClock").click(function(){
        time += 5 ;
        $("#Sval").html(time);
    });
    
    $("#minusBreak").click(function(){
      if(brk>5)
      { brk -= 5 ;
      }
      $("#Bval").html(brk);
      });
    
     $("#plusBreak").click(function(){
      brk += 5 ;
      $("#Bval").html(brk);
    }); 
  });