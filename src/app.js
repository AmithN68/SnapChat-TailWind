let lgnBtn = document.getElementById("lgnChatBtn");
lgnBtn.innerHTML = `logged in as_<a href="login.html">${localStorage.getItem("fname")}</a>`;