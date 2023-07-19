let btn = document.getElementById("btn");
btn.onclick = function (e) {
    e.preventDefault();

    let un = document.getElementById("un").value;
    let pwd = document.getElementById("pwd").value;

    let unData = localStorage.getItem("uname");
    let pwdData = localStorage.getItem("password");

    if (un == "" && pwd == "") {
      alert("please enter username and password");
    }
    else if (un == "") {
      alert("enter username");
    }
    else if (pwd == "") {
      alert("enter password");
    }
    else if (pwd.length<4) {
      alert("minimum 4 character required");
    }
    else if (un == "unData" && pwd == "pwdData") {
      alert("Login Successfull");
      window.open("./index.html", (target = "_self"));
    }
    else if (un !== "unData" && pwd !== "pwdData") {
      alert("enter username");
    }
    else if (un !== "unData") {
      alert("user does not exist");
    }
}