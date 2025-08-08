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

function registerUser(event) {
    event.preventDefault();

    const form = document.querySelector("#register form");
    const formData = new FormData(form);

    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert("✅ Registration successful!");
            form.reset();
        } else {
            alert("❌ Registration failed: " + data.message);
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("⚠️ Submission failed. Please try again.");
    });

    return false;
}



