function toggleSection(id) {
            document.getElementById('login').style.display = 'none';
            document.getElementById('register').style.display = 'none';
            document.getElementById(id).style.display = 'block';
            window.scrollTo({ top: document.getElementById(id).offsetTop, behavior: 'smooth' });
        }

        function validateLogin() {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;

            const demoUser = "admin";
            const demoPass = "1234";

            if (username === demoUser && password === demoPass) {
                alert("Login successful!");
            } else {
                alert("Invalid username or password.");
            }

            return false;
        }

        
    const scriptURL = 'https://script.google.com/macros/s/AKfycbysivuW_SzxXSU_Cs2FGuj6OrI5rEhNdgu6WUlXOaUr24sD94Aipt6qi7Jc1Y25Ni2XYQ/exec';
function registerUser() {
    event.preventDefault(); // prevent default form submit

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value.trim();
    const year = document.getElementById("year").value.trim();
    const usn = document.getElementById("usn").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!fullname || !email || !department || !usn || !phone) {
        alert("Please fill all required fields.");
        return false;
    }

    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("department", department);
    formData.append("year", year);
    formData.append("usn", usn);
    formData.append("phone", phone);

    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(() => {
        alert("Registration successful!");
        document.querySelector("#register form").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Submission failed: " + error.message);
    });

    return false;
}