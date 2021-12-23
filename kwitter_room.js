
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCLGXHslg6g1dqynGaHQPkJCPIr0AztWBA",
    authDomain: "kwitter-app-c0f93.firebaseapp.com",
    databaseURL: "https://kwitter-app-c0f93-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-c0f93",
    storageBucket: "kwitter-app-c0f93.appspot.com",
    messagingSenderId: "671423562573",
    appId: "1:671423562573:web:b3e2a06934638e3b766d04",
    measurementId: "G-LLFRWBE5EZ"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
 
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}
