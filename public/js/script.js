document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        window.location.href = '/novo-usuario';
    } else {
        alert('Por favor, preencha ambos os campos.');
    }
});

document.getElementById('newUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    const formSection = document.querySelector('.form-section');
    formSection.innerHTML = `<h1>Usuário criado com sucesso!</h1>`;
});
