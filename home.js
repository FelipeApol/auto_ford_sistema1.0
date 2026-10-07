
/* PEGANDO OS ELEMENTOS */

const menuButton =
    document.getElementById("menuButton");

const menuLateral =
    document.getElementById("menuLateral");

const fundo =
    document.getElementById("fundo");

const funcionariosButton =
    document.getElementById("funcionariosButton");

const departamentosButton =
    document.getElementById("departamentosButton");

const novoDepartamento =
    document.getElementById("novoDepartamento");




/* ABRIR E FECHAR MENU */

menuButton.addEventListener("click", function() {

    menuLateral.classList.toggle("aberto");

    fundo.classList.toggle("aberto");

});

/* CLICAR NO FUNDO */

fundo.addEventListener("click", function() {

    menuLateral.classList.remove("aberto");

    fundo.classList.remove("aberto");

});

/* BOTÃO FUNCIONÁRIOS */

funcionariosButton.addEventListener(
    "click",
    function() {

        alert(
            "Você clicou em Funcionários!"
        );

    }
);

/* BOTÃO DEPARTAMENTOS */

departamentosButton.addEventListener(
    "click",
    function() {

        menuLateral.classList.remove(
            "aberto"
        );

        fundo.classList.remove(
            "aberto"
        );

    }
);




/* NOVO DEPARTAMENTO */

novoDepartamento.addEventListener(
    "click",
    function() {

        alert(
            "Abrir cadastro de novo departamento."
        );

    }
);