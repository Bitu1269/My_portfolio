function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let msg = document.getElementById("form-msg");

    if (name === "" || email === "" || message === "") {
        msg.style.color = "red";
        msg.innerText = "All fields are required!";
        return false;
    }

    msg.style.color = "green";
    msg.innerText = "Message sent successfully!";
    return false;
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
