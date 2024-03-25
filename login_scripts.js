$(document).ready(function () {

    // Capturando o envio do formulário de login
    $('#loginForm').submit(function (event) {
        event.preventDefault();
        var email = $('#loginEmail').val();
        var password = $('#loginPassword').val();

        // Simulando a ação de login e exibindo no console
        console.log('Login with:', email, password);

        // Redirecionando para a página 'petshop.html'
        window.location.href = 'petshop.html';
    });

    // Capturando o envio do formulário de registro
    $('#registerForm').submit(function (event) {
        event.preventDefault();
        var name = $('#registerName').val();
        var email = $('#registerEmail').val();
        var password = $('#registerPassword').val();
        var address = $('#registerAddress').val();
        var phone = $('#registerPhone').val();

        // Simulando a ação de registro, exibindo detalhes no console
        console.log('Register with:', name, email, password, address, phone);

        // Exibindo um alerta de cadastro realizado com sucesso
        alert('Cadastro realizado com sucesso');

        // Limpando os campos do formulário após o cadastro
        $('#registerName').val('');
        $('#registerEmail').val('');
        $('#registerPassword').val('');
        $('#registerAddress').val('');
        $('#registerPhone').val('');
        $('#registerNewsletter').prop('checked', false);
        $('#genderMale').prop('checked', false);
        $('#genderFemale').prop('checked', false);
    });
});