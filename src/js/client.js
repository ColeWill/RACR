var app = angular.module('RCR', ['ngRoute']);
// using HTML 5 for location templates
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
            // Main Routes
            .when('/', {
                templateUrl:'../templates/template.html',
                // controller: 'ChecksController'
            });
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);


console.log('client.js connected');

var map, infoWindow;
var pinLat;
var pinLng;
// table in lounge and corner of hardware hackathon room hardcoded for testing purposes
var checkPoints = [];
// [{lat:39.758263299999996, lng:-105.00746409999999},{lat:39.7581135,lng:-105.00743779999999}];  
// checkpoints of dropped pins get dropped in here...
function initMap() {
      var weWork = {
        lat: 39.758416,
        lng: -105.007525
      };
      map = new google.maps.Map(document.getElementById('map'), {
        center: weWork,
        zoom: 16
      });
      ///////////////////////////// ADD MARKER  
      google.maps.event.addListener(map, 'click', function(event) {
        pinLat = event.latLng.lat();
        pinLng = event.latLng.lng();
        var newCheckpoint = {
          lat: pinLat,
          lng: pinLng
        };
      //////////////////////////// RENDER ALL MARKERS
        checkPoints.push(newCheckpoint);
        console.log('pinLat: ' + pinLat);
        console.log('pinLng: ' + pinLng);
        for (var i = checkPoints.length - 1; i >= 0; i--) {
         
         var marker = new google.maps.Marker({
          position: checkPoints[i],
          map: map,
          draggable: true,
          // animation: google.maps.Animation.DROP
        });
        }
        
        
      });
      
    }
//end of init map
// Click finds your Location
locate = document.getElementById('locate');
locate.addEventListener('click', function(){
      infoWindow = new google.maps.InfoWindow;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log("pos:");
          console.log("your lat: " + pos.lat);
          console.log("your lng: " + pos.lng);
          infoWindow.setPosition(pos);
          infoWindow.setContent('Starting Point');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        handleLocationError(false, infoWindow, map.GetCenter());
      }
});
//////////// end of click location
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPostion(pos);
      infoWindow.setContent(browserHasGeolocation ? 'Error: geolocation service failure' : 'Your Browser does not support geolocation');
      infoWindow.open(map);
    }
    // conference room 3c north end of table facing south
    var destination = {
      lat: 39.758091,
      lng: -105.0073735
    };
    
    
    //for each through array of all points
    // check to see if im at one of them
    // if I am remove it from the map 
    /////////////////////    Geolocation 
    var start = document.getElementById('start');
    start.addEventListener('click', function() {
      console.log('start running');
        var stop = document.getElementById('stop');
        stop.addEventListener('click', function(){
                console.log('STOPPED...');
          clearInterval(positionChecker);
        });
      
      var positionChecker = window.setInterval(function() {
        var myPos = navigator.geolocation;
        infoWindow = new google.maps.InfoWindow;
        // var location = navigator.geolocation;
        myPos.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log("pos:");
          console.log("moving lat + lng: " + pos.lat + " " + pos.lng);
          for (var i = 0; i < checkPoints.length; i++) {
              // Find difference between my coordinates and checkpoints
            var latDiff = Math.abs(pos.lat - checkPoints[i].lat);
            var lngDiff = Math.abs(pos.lng - checkPoints[i].lng);
            // .00001 = set to within 1 meter???
            // IN RANGE CLEARED YOUR PIN
            if ((latDiff <= .00001) || (lngDiff <= .00001)) {
              infoWindow.setPosition(pos); //drops new infoWindow
              infoWindow.setContent('CLEARED! '+checkPoints.length+': Remaining'); //words inside
              infoWindow.open(map);
              map.setCenter(pos); // re-centers the map
              console.log('popping put point');
              console.log(checkPoints[i]);
              // checkPoints[i].setMap(null);
              checkPoints.splice(i, 1);
                        console.log(checkPoints.length+' checkPoints Remaining');
              //remove that marker from map
            } 
            ///  NOT IN RANGE /// 
            if ((latDiff >= .00001) || (lngDiff >= .00001)) {
              // // var countUp;
              // // countUp ++;
              // infoWindow.setPosition(pos); //drops new infoWindow
              // infoWindow.setContent('you were here'); //words inside
              // infoWindow.open(map);
              // map.setCenter(pos); // re-centers the map
            }if(checkPoints.length == 0){
              
              clearInterval(positionChecker);
              alert('Is stefan a compulsive gambler!?!');
            
            }
          }
          // / END: FOR LOOP LOCATION CHECKER ///
          
        });
      }, 1000); // check every 5 seconds
    });
  
// goal is to save a race as an array of checkpoints
// add a delet last to pop from array...
$(document).ready(function(){

  var newRace;

  $('#save').on("click", function(){
    event.preventDefault();
    console.log('save clicked');
    var newRace = checkPoints;
  
    console.log("saving new race: "+ newRace);

    var newObj = {
      race: newRace
    };
    var string = JSON.stringify(newObj);
    $.ajax({
    
      url:'/race',
      type: 'POST',
      data: newObj
      
            }).done(function(res){

              console.log("Thanks for the race: "+newObj);
              // displayALL();
    });
    
  });

});
  