// Função que será chamada quando o formulário for submetido
function validateForm(event) {
    // Previne o comportamento padrão de submissão do formulário
    event.preventDefault();

    // Obtém os valores dos campos A e B e os converte para números de ponto flutuante
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Obtém o elemento onde a mensagem de validação será exibida
    const message = document.getElementById('message');

    // Verifica se o número B é maior que o número A
    if (campoB > campoA) {
        // Exibe uma mensagem positiva se a condição for verdadeira
        message.textContent = 'Número B é maior que o número A. Formulário válido!';
        message.style.color = 'green';
    } else {
        // Exibe uma mensagem negativa se a condição for falsa
        message.textContent = 'Número B deve ser maior que o número A. Formulário inválido!';
        message.style.color = 'red';
    }
}