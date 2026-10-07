const formulario =
    document.getElementById("loginForm");


formulario.addEventListener(
    "submit",
    function(event) {

        // Impede o formulário
        // de recarregar a página
        event.preventDefault();


        // Pega o usuário
        const usuario =
            document.getElementById("usuario").value.trim();


        // Pega a senha
        const senha =
            document.getElementById("senha").value.trim();


        // Mensagem
        const mensagem =
            document.getElementById("mensagem");


        // Verifica se os campos foram preenchidos

        if (usuario === "" || senha === "") {

            mensagem.textContent =
                "Preencha todos os campos.";

            return;
        }


        // Salva o nome do usuário
        // para aparecer na Home

        localStorage.setItem(
            "usuario",
            usuario
        );


        // Vai para a Home

        window.location.href = "home.html";

    }
);