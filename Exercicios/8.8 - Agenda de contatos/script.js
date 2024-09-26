document.addEventListener("DOMContentLoaded", function() {
    // Tenta carregar a lista do localStorage
    let lista = localStorage.getItem("minhaLista");

    const formulario = document.querySelector("form");
    const ulPessoas = document.querySelector("ul");
    const inputPesquisa = document.getElementById("pesquisa");

    // Tenta converter a lista do localStorage de JSON para um array
    try {
        lista = JSON.parse(lista) || [];
    } catch (e) {
        console.error("Error parsing JSON from localStorage:", e);
        lista = [];
    }

    console.log(lista);

    // Adiciona evento de submissão ao formulário
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let novaPessoa = {
            nome: this.nome.value,
            telefone: this.telefone.value
        };
        // Verifica se é uma edição ou um novo contato
        if (this.id.value !== "" && this.id.value >= 0) {
            lista[this.id.value] = novaPessoa;
        } else {
            lista.push(novaPessoa);
        }

        this.reset(); // Reseta o formulário
        salvarLS(); // Salva a lista no localStorage
        listar(); // Atualiza a lista exibida
    });

    // Adiciona evento de pesquisa ao campo de entrada
    inputPesquisa.addEventListener("keyup", function() {
        listar(this.value); // Chama a função listar com o valor do campo de pesquisa
    });

    // Função para listar os contatos
    function listar(filtro = "") {
        ulPessoas.innerHTML = ""; // Limpa a lista
        lista.forEach((item, key) => {
            // Verifica se o nome do contato contém o filtro
            if (item.nome.toUpperCase().indexOf(filtro.toUpperCase()) >= 0 || filtro === "") {
                let linha = document.createElement("li");
                let s = `<button onclick="excluir(${key})">[Excluir]</button><button onclick="editar(${key})">[Editar]</button>`;
                linha.innerHTML = `Nome: ${item.nome} Telefone: ${item.telefone} ${s}`;
                ulPessoas.appendChild(linha); // Adiciona o contato à lista
            }
        });
    }

    // Função para excluir um contato
    window.excluir = function(id) {
        formulario.reset(); // Reseta o formulário
        lista.splice(id, 1); // Remove o contato da lista
        salvarLS(); // Salva a lista no localStorage
        listar(); // Atualiza a lista exibida
    }

    // Função para editar um contato
    window.editar = function(id) {
        formulario.id.value = id; // Preenche o campo id do formulário
        formulario.nome.value = lista[id].nome; // Preenche o campo nome do formulário
        formulario.telefone.value = lista[id].telefone; // Preenche o campo telefone do formulário
    }

    // Função para salvar a lista no localStorage
    function salvarLS() {
        localStorage.setItem("minhaLista", JSON.stringify(lista)); // Converte a lista para JSON e salva no localStorage
    }

    // Chama a função listar para exibir os contatos ao carregar a página
    listar();
});