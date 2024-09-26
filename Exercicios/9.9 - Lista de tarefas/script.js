$(document).ready(function () {
  // Quando o documento estiver pronto, execute a função
  $("#task-form").submit(function (event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    // Obtém o valor do campo de entrada
    const taskText = $("#task-input").val();
    // Se o campo de entrada não estiver vazio
    if (taskText) {
      // Adiciona um novo item à lista de tarefas
      $("#task-list").append(`<li>${taskText}</li>`);
      // Limpa o campo de entrada
      $("#task-input").val("");
    }
  });

  // Adiciona um evento de clique aos itens da lista de tarefas
  $("#task-list").on("click", "li", function () {
    // Alterna a classe "completed" no item clicado
    $(this).toggleClass("completed");
  });
});
