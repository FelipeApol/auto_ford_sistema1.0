 // Pega os usuários salvos no navegador
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


// ELEMENTOS DO HTML

const form = document.getElementById("formUsuario");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const tipo = document.getElementById("tipo");

const listaUsuarios = document.getElementById("listaUsuarios");

const contador = document.getElementById("contador");

const indiceEdicao = document.getElementById("indiceEdicao");

const tituloFormulario =
    document.getElementById("tituloFormulario");

const btnSalvar =
    document.getElementById("btnSalvar");

const btnCancelar =
    document.getElementById("btnCancelar");


// MOSTRAR USUÁRIOS

function mostrarUsuarios() {

    listaUsuarios.innerHTML = "";

    if (usuarios.length === 0) {

        listaUsuarios.innerHTML = `
            <tr>
                <td colspan="4" style="text-align:center;">
                    Nenhum usuário cadastrado.
                </td>
            </tr>
        `;

    } else {

        usuarios.forEach((usuario, index) => {

            const linha = document.createElement("tr");

            linha.innerHTML = `

                <td>${usuario.nome}</td>

                <td>${usuario.email}</td>

                <td>${usuario.tipo}</td>

                <td>

                    <button
                        class="btn-editar"
                        onclick="editarUsuario(${index})"
                    >
                        Editar
                    </button>

                    <button
                        class="btn-apagar"
                        onclick="apagarUsuario(${index})"
                    >
                        Apagar
                    </button>

                </td>

            `;

            listaUsuarios.appendChild(linha);

        });
    }


    // Atualiza contador

    if (usuarios.length === 1) {
        contador.textContent = "1 usuário";
    } else {
        contador.textContent = `${usuarios.length} usuários`;
    }
}


// CADASTRAR / ATUALIZAR

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const novoUsuario = {

        nome: nome.value.trim(),

        email: email.value.trim(),

        senha: senha.value,

        tipo: tipo.value

    };


    // Verifica se está editando

    if (indiceEdicao.value === "") {

        // NOVO CADASTRO

        usuarios.push(novoUsuario);

        alert("Usuário cadastrado com sucesso!");

    } else {

        // ATUALIZA USUÁRIO

        const index = Number(indiceEdicao.value);

        usuarios[index] = novoUsuario;

        alert("Usuário atualizado com sucesso!");

    }


    // Salva no navegador

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );


    // Limpa formulário

    cancelarEdicao();

    mostrarUsuarios();

});


// EDITAR USUÁRIO

function editarUsuario(index) {

    const usuario = usuarios[index];


    nome.value = usuario.nome;

    email.value = usuario.email;

    senha.value = usuario.senha;

    tipo.value = usuario.tipo;


    // Guarda qual usuário está sendo editado

    indiceEdicao.value = index;


    tituloFormulario.textContent =
        "Editar Usuário";

    btnSalvar.textContent =
        "Salvar Alterações";

    btnCancelar.style.display =
        "block";


    // Volta para o formulário

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// APAGAR USUÁRIO

function apagarUsuario(index) {

    const usuario = usuarios[index];


    const confirmar = confirm(
        `Deseja realmente apagar o usuário "${usuario.nome}"?`
    );


    if (confirmar) {

        usuarios.splice(index, 1);


        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );


        mostrarUsuarios();

        alert("Usuário apagado com sucesso!");

    }

}


// CANCELAR EDIÇÃO

function cancelarEdicao() {

    form.reset();

    indiceEdicao.value = "";

    tituloFormulario.textContent =
        "Cadastrar Usuário";

    btnSalvar.textContent =
        "Cadastrar";

    btnCancelar.style.display =
        "none";

}


// CARREGA A LISTA QUANDO ABRIR A PÁGINA

mostrarUsuarios();