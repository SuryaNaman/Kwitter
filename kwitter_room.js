var firebaseConfig = {
    apiKey: "AIzaSyC3zerUAXByJssePERvBvtSF28exge4qOE",
    authDomain: "kwitter-2-af488.firebaseapp.com",
    databaseURL: "https://kwitter-2-af488-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-af488",
    storageBucket: "kwitter-2-af488.appspot.com",
    messagingSenderId: "590966237848",
    appId: "1:590966237848:web:5e82794edde876ac07feed",
    measurementId: "G-ZJ7GP6T4BG"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User_Name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ pupose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    window.location = "index.html";
    localStorage.removeItem("User_Name");
    localStorage.removeItem("room_name");
}