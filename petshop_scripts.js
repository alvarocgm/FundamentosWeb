// Adiciona um ouvinte de evento ao formulário de cadastro de pet para interceptar o evento de envio
document.getElementById('formCadastroPet').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede que o formulário seja enviado da maneira tradicional
    
    // Exibe um alerta informando que o cadastro foi bem-sucedido
    alert('Pet cadastrado com sucesso!');
    
    // Reseta os campos do formulário após o envio bem-sucedido
    document.getElementById('formCadastroPet').reset();
    
    // Fecha o modal de cadastro de pet
    $('#cadastroPetModal').modal('hide');
});
  
// Adiciona um ouvinte de evento ao botão de salvar agendamento para responder ao clique
document.getElementById('salvarAgendamentoBtn').addEventListener('click', function () {
    // Exibe um alerta informando que o agendamento foi salvo com sucesso
    alert('Agendamento salvo com sucesso'); 
    
    // Reseta os campos do formulário de cadastro
    document.getElementById('formCadastroPet').reset();
});