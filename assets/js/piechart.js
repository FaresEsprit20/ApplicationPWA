

$(document).ready(function(){
    


  function Radar() {
    $.ajax({    
        type: "GET",
        url: "http://localhost/Stage/server/Api/getProductsStatsByMonths.php",             
        dataType: "json",               
        success: function(dataRadar){      
    
      
        
            var ctx = document.getElementById("myChartTwo").getContext('2d');
     
            var marksData = {
                labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
                datasets: [{
                  label: "Student A",
                  backgroundColor: "rgba(200,0,0,0.2)",
                  data: [65, 75, 70, 80, 60, 80]
                }, {
                  label: "Student B",
                  backgroundColor: "rgba(0,0,200,0.2)",
                  data: [54, 65, 60, 70, 70, 75]
                }]
              };
              var radarChart = new Chart(ctx, {
                type: 'radar',
                data: marksData,
            });
    
        
       
        },
      
        error: function (data) { alert("Server Error"); }
      
      });
}
 
function Pie(){
  $.ajax({    
    type: "GET",
    url: "http://localhost/Stage/server/Api/getProductsStatsByType.php",             
    dataType: "json",               
    success: function(data){      
    total = 0;
    var lignes = [];
    var totals = [];
    var colors =  [
      "#2ecc71",
      "#3498db",
      "#95a5a6",
      "#9b59b6",
      "#f1c40f",
      "#e74c3c",
      "#34495e",
      "#A52A2A",
      "#FF1493",
      "#BC8F8F",
    ];
    var selectedColors = colors.splice(data.length,colors.length);
    console.log("selected Colors "+colors);

      for( item of data){
       total += parseInt(item.total);
      }
      for( item of data){
       lignes.push(item.ligne);
       }
       console.log(lignes);
      for( item of data){
        item.total /= total;
        item.total*=100;
        item.total= item.total.toFixed(2);
       }
       for( item of data){
        totals.push(item.total);
        }
       for( item of data){
        console.log("produit "+item.produit+" Pourcentage  "+item.total);
       }
      console.log("Total...."+total);
      console.log("Pie data loaded ....");


      var ctx = document.getElementById("myChartOne").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'pie',
        title: {
          display: true,
          text: ' Pie Chart'
        },
        data: {
        labels: lignes,
          datasets: [{
            backgroundColor: selectedColors,
            data: totals
          }]
        }
      });
    },

    error: function (data) { alert("Server Error"); }

});
}


Pie();
Radar();




  

  });