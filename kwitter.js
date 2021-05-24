function addUser() {
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("User_Name", user_name);
    window.location = "kwitter_room.html";
}