
$(document).ready(function(){



    $.ajax({    
        type: "GET",
        url: "http://127.0.1.1/Stage/server/Api/getTodayProduction.php",      
       // url: "http://10.0.2.2/Stage/server/Api/getTodayProduction.php",                   
        dataType: "json",               
        success: function(data){      
          var jsonData = data;
          console.log(jsonData);
          for (var index = 0; index < jsonData.length; index++) {
            var res ='<tr>';
            res+='<td>'+jsonData[index].id+'</td>';
            res+='<td>'+jsonData[index].ligne+'</td>';
            res+='<td>'+jsonData[index].produit+'</td>';
            res+='<td>'+jsonData[index].date+'</td>';
            res+='<td>'+jsonData[index].heure+'</td>';
            res+='<td>'+jsonData[index].qte+'</td>';
            res+='</tr>';
            $("#tbodydaily").append(res); 
            console.log(res)  ;         
        }
          
          console.log("data loaded ....");

        },
        error: function (data) { alert("Server Error"); }
    });


  });

  