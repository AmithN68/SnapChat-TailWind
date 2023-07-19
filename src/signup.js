let btn = document.getElementById("submit");

btn.onclick = function (e) {
    e.preventDefault();
    let fn = document.getElementById("fn");
    let ln = document.getElementById("ln");
    let un = document.getElementById("un");
    let pwd = document.getElementById("pwd");

    localStorage.setItem("fname", fn);
    localStorage.setItem("lname", ln);
    localStorage.setItem("uname", un);
    localStorage.setItem("password", pwd);
    window.open("./login.html", () => {
        target = "_self";
    });
}
