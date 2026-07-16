const btnLogin = document.getElementById("btn-login");
const btnCadastro = document.getElementById("btn-cadastro");
const btnvoltaLogin = document.getElementById("btn-volta_login");
const formLogin = document.getElementById("form-login");
const formCadastro = document.getElementById("form-cadastro");
const divSenha = document.getElementById("div-senha");

// const usuarios = [
//   {
//     id: 1,
//     nome: "Nayara Calenzo",
//     email: "queiroz.14@hotmail.com",
//     senha: "1234",
//   },
//   {
//     id: 2,
//     nome: "Maria",
//     email: "maria@hotmail.com",
//     senha: "123",
//   },
//   {
//     id: 3,
//     nome: "João",
//     email: "joao@hotmail.com",
//     senha: "123456",
//   },
// ];

btnCadastro.addEventListener("click", () => {
  formCadastro.classList.remove("hidden");
  formLogin.classList.add("hidden");
});

btnvoltaLogin.addEventListener("click", () => {
  formCadastro.classList.add("hidden");
  formLogin.classList.remove("hidden");
});

function handleLogin(event) {
  event.preventDefault();
  const emailLogin = document.getElementById("emailLogin").value;
  const senhaLogin = document.getElementById("senhaLogin").value;

  // const usuario = usuarios.find((usuario) => emailLogin === usuario.email && senhaLogin === usuario.senha);

  fetch("http://localhost:3000/usuarios")
    .then((res) => res.json())
    .then((dados) => {
      const usuarios = dados;
      console.log(dados);
      const usuario = usuarios.find((usuario) => emailLogin === usuario.email && senhaLogin === usuario.senha);
      if (usuario) {
        window.location.href = "./dashboard.html";
      } else {
        console.log("nao tem");
        divSenha.removeChild(divSenha.lastChild);
        const alerta = document.createElement("p");
        alerta.textContent = "Email ou senha incorretos";
        alerta.classList.add("text-red-500");
        divSenha.appendChild(alerta);
      }
    });
}

function handleCadastro(event) {
  event.preventDefault();
  const email_Cadastro = document.getElementById("emailCadastro").value;
  const senha_Cadastro = document.getElementById("senhaCadastro").value;
  const nome_Cadastro = document.getElementById("nomeCadastro").value;

  const novousuario = {
    nome: nome_Cadastro,
    email: email_Cadastro,
    senha: senha_Cadastro,
  };

  fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novousuario),
  })
    .then((res) => {
      if (res.ok) {
        alert("Cadastro Feito.");
        window.location.href = "./login.html";
      } else {
        alert("Erro de casdastro");
      }
    })
    .catch((error) => {
      alert("Erro de Banco", error);
    });
}
