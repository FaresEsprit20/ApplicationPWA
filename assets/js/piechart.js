
function store () {
  // create the transaction with 1st parameter is the list of stores and the second specifies
  // a flag for the readwrite option
  var transaction = db.transaction([ 'Apps' ], 'readwrite');

  //Create the Object to be saved i.e. our App details
  var value = {};
  value.name = name;
  value.desc = description;

  // add the details to the store
  var store = transaction.objectStore('Apps');
  var request = store.add(value);
  request.onsuccess = function (e) {
      alert("Your App data has been saved");
  };
  request.onerror = function (e) {
      alert("Error in saving the App data. Reason : " + e.value);
  }
}

var db;

$(document).ready(function(){
    

  var year = new Date().getFullYear();


  function BarByMonths($url,$chartId) {
    $.ajax({    
        type: "GET",
        url: $url,             
        dataType: "json",               
        success: function(dataRadar){      
        
          var ligness = [];
          var products = [];
          var monthstotals = [];
          var qtemonths = [];
          var initialarray = [];
          var filteredarray = [];
          var finalprods = [];
          var obj = null;
          var radarChart;
          var marksData;
          var   ctx = document.getElementById($chartId).getContext('2d');
          console.log(dataRadar);

          var c = 0;     
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
            "crimson",
            "red",
            "blue",
            "magenta",
            "yellow",
            "olive"
          ];
          var selectedColors = colors.splice(0,dataRadar.length);
          console.log("selected Colors "+selectedColors);
       
          for(var  item of dataRadar){
            console.log(item.ligne);
            ligness.push(item.ligne);
            for ( var single of item.products){
             // console.log(single);
              initialarray.push(single);
            }
         
            }
            console.log("initial array");
            console.log(initialarray);
          
            var selectMenu = document.getElementById('selectlignesbar');
            for (var i = 0; i < ligness.length; i++) {
              var option = document.createElement("option");
              option.value = ligness[i];
              option.text = ligness[i];
              selectMenu.appendChild(option);
          }
            console.log(ligness);
            var value = selectMenu.options[selectMenu.selectedIndex].value;
            console.log(value); 

            var selected = value;
             console.log(initialarray);
             filteredarray  = initialarray.filter(item => item.ligne == selected);
             console.log("filtered array");
             console.log(filteredarray);
             for(var item of filteredarray){
             monthstotals.push(item.months);
             }
             console.log("months totals");
             console.log(monthstotals);
           
           selectMenu.addEventListener("change", function(e){
             c = 0;
            selected = e.target.value;
            console.log(selected);
            filteredarray  = initialarray.filter(item => item.ligne == selected);
            console.log("filtered array");
           console.log(filteredarray);
           monthstotals = [];
           products = [];
           for(var item of filteredarray){
            monthstotals.push(item.months);
            }
            console.log("months totals");
            console.log(monthstotals);
          
            for( var item of monthstotals){
              qtemonths = [];
             for (var i = 0 ; i < item.length ; i++){
            
              qtemonths.push(parseInt (item[i].qte));
             }
              obj = {
              backgroundColor: colors[c],
              data: qtemonths
            };
            c++;
           
            products.push(obj)
            }
            console.log("products of primary obj");
            console.log(products);
            
          finalprods = [];
       for( var index = 0; index <products.length;index++) {
           let prodobject = {
            label: filteredarray[index].produit,
            backgroundColor: products[index].backgroundColor,
            fill:true,
            data: products[index].data
           };
          
        finalprods.push(prodobject);
       }       
       console.log("products of final obj");
          console.log(finalprods);

            console.log("Bar data loaded .... with event change");
           
     
            marksData = {
               labels: ["Janvier","Février","Mars","Avril","Mai","Juin","Juilliet","Aout","Séptembre","Octobre","Novembre","Décembre"],
               datasets: finalprods
             };
             radarChart.destroy();
             
              radarChart = new Chart(ctx, {
               type: 'bar',
               data: marksData,
               options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Bar Chart '+year
                  }
                }
              },
           });


          }); 



            for( var item of monthstotals){
                qtemonths = [];
               for (var i = 0 ; i < item.length ; i++){
              
                qtemonths.push(parseInt (item[i].qte));
               }
                obj = {
                backgroundColor: colors[c],
                data: qtemonths
              };
              c++;
             
              products.push(obj)
              }
              console.log("products of primary obj");
              console.log(products);
              
          

            var finalprods = [];
       for( var index = 0; index <products.length;index++) {
           let prodobject = {
            label: filteredarray[index].produit,
            backgroundColor: products[index].backgroundColor,
            fill:true,
            data: products[index].data
           };
          
        finalprods.push(prodobject);
       }       
       console.log("products of final obj");
          console.log(finalprods);

            console.log("Bar data loaded ....");
                      
     
             marksData = {
                labels: ["Janvier","Février","Mars","Avril","Mai","Juin","Juilliet","Aout","Séptembre","Octobre","Novembre","Décembre"],
                datasets: finalprods
              };
              radarChart = new Chart(ctx, {
                type: 'bar',
                data: marksData,
                options: {
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Bar Chart '+year
                    }
                  }
                },
            });
    
        
       
        },
      
        error: function (data) { alert("Server Error"); }
      
      });
}


  function LineByMonths($url,$chartId) {
    $.ajax({    
        type: "GET",
        url: $url,             
        dataType: "json",               
        success: function(dataRadar){      
        
          var ligness = [];
          var products = [];
          var monthstotals = [];
          var qtemonths = [];
          var initialarray = [];
          var filteredarray = [];
          var finalprods = [];
          var obj = null;
          var radarChart;
          var marksData;
          var   ctx = document.getElementById($chartId).getContext('2d');
          console.log(dataRadar);

          var c = 0;     
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
            "crimson",
            "red",
            "blue",
            "magenta",
            "yellow",
            "olive"
          ];
          var selectedColors = colors.splice(0,dataRadar.length);
          console.log("selected Colors "+selectedColors);
       
          for(var  item of dataRadar){
            console.log(item.ligne);
            ligness.push(item.ligne);
            for ( var single of item.products){
             // console.log(single);
              initialarray.push(single);
            }
         
            }
            console.log("initial array");
            console.log(initialarray);
          
            var selectMenu = document.getElementById('selectligness');
            for (var i = 0; i < ligness.length; i++) {
              var option = document.createElement("option");
              option.value = ligness[i];
              option.text = ligness[i];
              selectMenu.appendChild(option);
          }
            console.log(ligness);
            var value = selectMenu.options[selectMenu.selectedIndex].value;
            console.log(value); 

            var selected = value;
             console.log(initialarray);
             filteredarray  = initialarray.filter(item => item.ligne == selected);
             console.log("filtered array");
             console.log(filteredarray);
             for(var item of filteredarray){
             monthstotals.push(item.months);
             }
             console.log("months totals");
             console.log(monthstotals);
           
           selectMenu.addEventListener("change", function(e){
             c = 0;
            selected = e.target.value;
            console.log(selected);
            filteredarray  = initialarray.filter(item => item.ligne == selected);
            console.log("filtered array");
           console.log(filteredarray);
           monthstotals = [];
           products = [];
           for(var item of filteredarray){
            monthstotals.push(item.months);
            }
            console.log("months totals");
            console.log(monthstotals);
          
            for( var item of monthstotals){
              qtemonths = [];
             for (var i = 0 ; i < item.length ; i++){
            
              qtemonths.push(parseInt (item[i].qte));
             }
              obj = {
              backgroundColor: colors[c],
              data: qtemonths
            };
            c++;
           
            products.push(obj)
            }
            console.log("products of primary obj");
            console.log(products);
            
          finalprods = [];
       for( var index = 0; index <products.length;index++) {
           let prodobject = {
            label: filteredarray[index].produit,
            backgroundColor: products[index].backgroundColor,
            fill:true,
            data: products[index].data
           };
          
        finalprods.push(prodobject);
       }       
       console.log("products of final obj");
          console.log(finalprods);

            console.log("Line data loaded .... with event change");
           
     
            marksData = {
               labels: ["Janvier","Février","Mars","Avril","Mai","Juin","Juilliet","Aout","Séptembre","Octobre","Novembre","Décembre"],
               datasets: finalprods
             };
             radarChart.destroy();
             
              radarChart = new Chart(ctx, {
               type: 'line',
               data: marksData,
               options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Line Chart'
                  }
                }
               }
           });


  
            
          }); 



            for( var item of monthstotals){
                qtemonths = [];
               for (var i = 0 ; i < item.length ; i++){
              
                qtemonths.push(parseInt (item[i].qte));
               }
                obj = {
                backgroundColor: colors[c],
                data: qtemonths
              };
              c++;
             
              products.push(obj)
              }
              console.log("products of primary obj");
              console.log(products);
              
          

            var finalprods = [];
       for( var index = 0; index <products.length;index++) {
           let prodobject = {
            label: filteredarray[index].produit,
            backgroundColor: products[index].backgroundColor,
            fill:true,
            data: products[index].data
           };
          
        finalprods.push(prodobject);
       }       
       console.log("products of final obj");
          console.log(finalprods);

            console.log("Line data loaded ....");
                      
     
             marksData = {
                labels: ["Janvier","Février","Mars","Avril","Mai","Juin","Juilliet","Aout","Séptembre","Octobre","Novembre","Décembre"],
                datasets: finalprods
              };
              radarChart = new Chart(ctx, {
                type: 'line',
                data: marksData,
                options: {
                 responsive: true,
                 plugins: {
                   legend: {
                     position: 'top',
                   },
                   title: {
                     display: true,
                     text: 'Line Chart '+year
                   }
                 }
                }
            });
    
        
       
        },
      
        error: function (data) { alert("Server Error"); }
      
      });
}













  function RadarByMonths($url,$chartId) {
    $.ajax({    
        type: "GET",
        url: $url,             
        dataType: "json",               
        success: function(dataRadar){      
        
          var ligness = [];
          var products = [];
          var monthstotals = [];
          var qtemonths = [];
          var initialarray = [];
          var filteredarray = [];
          var finalprods = [];
          var obj = null;
          var radarChart;
          var marksData;
          var   ctx = document.getElementById($chartId).getContext('2d');
          console.log(dataRadar);

          var c = 0;     
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
            "crimson",
            "red",
            "blue",
            "magenta",
            "yellow",
            "olive"
          ];
          var selectedColors = colors.splice(0,dataRadar.length);
          console.log("selected Colors "+selectedColors);
       
          for(var  item of dataRadar){
            console.log(item.ligne);
            ligness.push(item.ligne);
            for ( var single of item.products){
             // console.log(single);
              initialarray.push(single);
            }
         
            }
            console.log("initial array");
            console.log(initialarray);
        

            var selectMenu = document.getElementById('selectlignes');
            for (var i = 0; i < ligness.length; i++) {
              var option = document.createElement("option");
              option.value = ligness[i];
              option.text = ligness[i];
              selectMenu.appendChild(option);
          }
            console.log(ligness);
            var value = selectMenu.options[selectMenu.selectedIndex].value;
            console.log(value); 

            var selected = value;
             console.log(initialarray);
             filteredarray  = initialarray.filter(item => item.ligne == selected);
             testDbCompatibility(initialarray);
             console.log("filtered array");
             console.log(filteredarray);
             for(var item of filteredarray){
             monthstotals.push(item.months);
             }
             console.log("months totals");
             console.log(monthstotals);
           
           selectMenu.addEventListener("change", function(e){
             c = 0;
            selected = e.target.value;
            console.log(selected);
            filteredarray  = initialarray.filter(item => item.ligne == selected);
            console.log("filtered array");
           console.log(filteredarray);
           monthstotals = [];
           products = [];
           for(var item of filteredarray){
            monthstotals.push(item.months);
            }
            console.log("months totals");
            console.log(monthstotals);
          
            for( var item of monthstotals){
              qtemonths = [];
             for (var i = 0 ; i < item.length ; i++){
            
              qtemonths.push(parseInt (item[i].qte));
             }
              obj = {
              backgroundColor: colors[c],
              data: qtemonths
            };
            c++;
           
            products.push(obj)
            }
            console.log("products of primary obj");
            console.log(products);
            
          finalprods = [];
       for( var index = 0; index <products.length;index++) {
           let prodobject = {
            label: filteredarray[index].produit,
            backgroundColor: products[index].backgroundColor,
            fill:true,
            data: products[index].data
           };
          
        finalprods.push(prodobject);
       }       
       console.log("products of final obj");
          console.log(finalprods);

            console.log("Radar data loaded .... with event change");
           
     
            marksData = {
               labels: ["Janvier","Février","Mars","Avril","Mai","Juin","Juilliet","Aout","Séptembre","Octobre","Novembre","Décembre"],
               datasets: finalprods
             };
             radarChart.destroy();
             
              radarChart = new Chart(ctx, {
               type: 'radar',
               data: marksData,
               options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: 'Radar Chart'+year
                  }
                }
              },
           });



            
          }); 



            for( var item of monthstotals){
                qtemonths = [];
               for (var i = 0 ; i < item.length ; i++){
              
                qtemonths.push(parseInt (item[i].qte));
               }
                obj = {
                backgroundColor: colors[c],
                data: qtemonths
              };
              c++;
             
              products.push(obj)
              }
              console.log("products of primary obj");
              console.log(products);
              
          

            var finalprods = [];
       for( var index = 0; index <products.length;index++) {
           let prodobject = {
            label: filteredarray[index].produit,
            backgroundColor: products[index].backgroundColor,
            fill:true,
            data: products[index].data
           };
          
        finalprods.push(prodobject);
       }       
       console.log("products of final obj");
          console.log(finalprods);

            console.log("Radar data loaded ....");
                      
     
             marksData = {
                labels: ["Janvier","Février","Mars","Avril","Mai","Juin","Juilliet","Aout","Séptembre","Octobre","Novembre","Décembre"],
                datasets: finalprods
              };
               radarChart = new Chart(ctx, {
                type: 'radar',
                data: marksData,
                options: {
                  responsive: true,
                  plugins: {
                    title: {
                      display: true,
                      text: 'Radar Chart '+year
                    }
                  }
                },
            });
    
        
       
        },
      
        error: function (data) { alert("Server Error"); }
      
      });
}


 
function Pie($url){
  $.ajax({    
    type: "GET",
    url: $url,           
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
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Pie Chart '+year
            }
          }
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


function add($item) 
{
 
  var req = db.transaction(['monthscharts'], 'readwrite')
    .objectStore('monthscharts')
    .put($item);

    
  req.onsuccess = function (event) {
    console.log('The data has been written successfully');
  };

  req.onerror = function (event) {
    console.log('The data has been written failed'+event);
  }
}

function readAll() {

  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || 
  window.msIndexedDB;
   
  window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || 
  window.msIDBTransaction;
  window.IDBKeyRange = window.IDBKeyRange || 
  window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.");
  console.log("Your browser doesn't support a stable version of IndexedDB.");
}

if (window.indexedDB) {
  console.log("IndexedDB is supported");
}
else {
  alert("Indexed DB is not supported!");
}

// open the database
// 1st parameter : Database name. We are using the name 'Appsdb'
// 2nd parameter is the version of the database.
var request = indexedDB.open('Appsdb', 5);

request.onsuccess = function (e) {
  // e.target.result has the connection to the database
  db = e.target.result;

  console.log(db);
  console.log("DB Opened!");
  
  //read object
 
  var objectStore = db.transaction("monthscharts").objectStore("monthscharts");
  
  objectStore.openCursor().onsuccess = function(event) {
     var cursor = event.target.result;
     console.log("cursor"+cursor.value);
     cursor.continue();
     
     if (cursor) {
        alert("Name for id " + cursor.key + " is " + cursor.value.id);
     } else {
        alert("No more entries!");
     }
  };

}

request.onerror = function (e) {
  console.log(e);
};


// this will fire when the version of the database changes
    // We can only create Object stores in a versionchange transaction.
    request.onupgradeneeded = function (e) {
      // e.target.result holds the connection to database
      db = e.target.result;

          db.createObjectStore('monthscharts', { keyPath: 'id' });

  };


}

function testDbCompatibility($arr) {

  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || 
  window.msIndexedDB;
   
  window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || 
  window.msIDBTransaction;
  window.IDBKeyRange = window.IDBKeyRange || 
  window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.");
  console.log("Your browser doesn't support a stable version of IndexedDB.");
}

if (window.indexedDB) {
  console.log("IndexedDB is supported");
}
else {
  alert("Indexed DB is not supported!");
}

// open the database
// 1st parameter : Database name. We are using the name 'Appsdb'
// 2nd parameter is the version of the database.
var request = indexedDB.open('Appsdb', 5);

request.onsuccess = function (e) {
  // e.target.result has the connection to the database
  db = e.target.result;

  console.log(db);
  console.log("DB Opened!");
  
  //add object
 
  for(var item of $arr){
    add(item);
  }


}

request.onerror = function (e) {
  console.log(e);
};


// this will fire when the version of the database changes
    // We can only create Object stores in a versionchange transaction.
    request.onupgradeneeded = function (e) {
      // e.target.result holds the connection to database
      db = e.target.result;

          db.createObjectStore('monthscharts', { keyPath: 'id' });

  };

}


//testDbCompatibility();

Pie("http://127.0.0.1/Stage/server/Api/getProductsStatsByType.php");
RadarByMonths("http://127.0.0.1/Stage/server/Api/getProductsStatsByMonths.php","myChartTwo");
LineByMonths("http://127.0.0.1/Stage/server/Api/getProductsStatsByMonths.php","myChartThree");
BarByMonths("http://127.0.0.1/Stage/server/Api/getProductsStatsByMonths.php","myChartFour");
//readAll();
/*
Pie("http://10.0.2.2/Stage/server/Api/getProductsStatsByType.php");
RadarByMonths("http://10.0.2.2/Stage/server/Api/getProductsStatsByMonths.php","myChartTwo");
LineByMonths("http://10.0.2.2/Stage/server/Api/getProductsStatsByMonths.php","myChartThree");
BarByMonths("http://10.0.2.2/Stage/server/Api/getProductsStatsByMonths.php","myChartFour");
*/

  });