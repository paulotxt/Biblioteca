// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function validarFormulario() {
    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;
    var ano = document.getElementById("ano").value;

    if (titulo === "" || autor === "" || ano === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (isNaN(ano) || ano < 0) {
        alert("Ano de publicação inválido.");
        return false;
    }

    return true;
}
