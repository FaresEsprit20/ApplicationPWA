
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
           testDbCompatibility(jsonData);
        },
        error: function (data) { alert("Server Error"); }
    });





//CRUD INDEXED DB

function add($item) 
{
  var string = {
    date: $item.date,
    heure: $item.heure,
    dateheure: $item.date+' '+$item.heure
  }
localStorage.setItem("obj",JSON.stringify(string));
  var req = db.transaction(['dailycharts'], 'readwrite')
    .objectStore('dailycharts')
    .put($item);

    
  req.onsuccess = function (event) {
    console.log('The data has been written successfully');
  };

  req.onerror = function (event) {
    console.log('The data has been written failed'+event);
  }
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
var request = indexedDB.open('Appsdb', 12);

request.onsuccess = function (e) {
  // e.target.result has the connection to the database
  db = e.target.result;

  console.log(db);
  console.log("DB Opened!");
  
  //deleteAllObjects
 // clearData();

 //add object
  for(var item of $arr){
    add(item);
  }

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  var datetime = date+" "+time;
  console.log(" date time  "+datetime);

  var test = localStorage.getItem("obj");
  var old = JSON.parse(test);
  console.log("test "+old);

  if(old.dateheure < datetime){
    console.log(old.dateheure);
    console.log("this date is older then today");
    clearData();
    for(var item of $arr){
      add(item);
    }
  }else{
    console.log(old.dateheure);
    console.log("this date is greater then today");
    for(var item of $arr){
      add(item);
    }
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
          db.createObjectStore('dailycharts', { keyPath: 'id' });

  };

}




function clearData() {
  // ouvre une transaction de lecture / écriture  prête pour le nettoyage
  var transaction = db.transaction(["dailycharts"], "readwrite");
  var objectStore = transaction.objectStore("dailycharts");

  // Vide le magasin d'objet
  var objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = function(event) {
  // rapporte le succès du nettoyage
  console.log("ok");
  console.log("data cleared !");
  };
};




  });

  