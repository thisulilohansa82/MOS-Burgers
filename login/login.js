const users = [];

function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const address = document.getElementById('register-address').value;
    const password = document.getElementById('register-password').value;

    if (name && email && phone && address && password) {
        users.push({ name, email, phone, address, password });
        alert('Registration successful!');
        document.getElementById('register-name').value = '';
        document.getElementById('register-email').value = '';
        document.getElementById('register-phone').value = '';
        document.getElementById('register-address').value = '';
        document.getElementById('register-password').value = '';
    } else {
        alert('Please fill all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const userExists = users.find(user => user.name === username && user.password === password);

    if (userExists) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}

document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('register-btn').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});