document.addEventListener('click', function (event) {
    console.log("click", event);
    if (event.target.id == "login") {
        let user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        };
        fetch("/login", {
            method: "POST",
            headers: { 'Content-Type': "application/json" }, 
            body:})
        console.log("user", user);
    }
})