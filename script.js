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

        
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwDx0cVXmm57q3H5K55xulkXw4zUnL09gnIJCC9oiKlmVuXvGwduB0XkRjeFz18i7LW8w/exec';

function registerUser() {
    event.preventDefault();

    const form = document.querySelector("#register form");
    const formData = new FormData(form);

    fetch(scriptURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    .then(() => {
        alert("Registration successful!");
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Submission failed. Please try again.");
    });

    return false;
}

