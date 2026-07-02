const btnLogin = document.getElementById("btn-login");
const btnCadastro = document.getElementById("btn-cadastro");
const btnvoltaLogin = document.getElementById("btn-volta_login");
const formLogin = document.getElementById("form-login");
const formCadastro = document.getElementById("form-cadastro");
const divSenha = document.getElementById("div-senha");

const usuarios = [
  {
    id: 1,
    nome: "Nayara Calenzo",
    email: "queiroz.14@hotmail.com",
    senha: "1234",
  },
  {
    id: 2,
    nome: "Maria",
    email: "maria@hotmail.com",
    senha: "123",
  },
  {
    id: 3,
    nome: "João",
    email: "joao@hotmail.com",
    senha: "123456",
  },
];

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

  const usuario = usuarios.find((usuario) => emailLogin === usuario.email && senhaLogin === usuario.senha);

  if (usuario) {
    window.location.href = "./dashboard.html";
  } else {
    divSenha.remove(divSenha.lastChild)
    const alerta = document.createElement("p");
    alerta.textContent = "Email ou senha incorretos";
    alerta.classList.add("text-red-500");
    divSenha.appendChild(alerta);
  }
}

function handleCadastro(event) {
  event.preventDefault();
  const emailCadastro = document.getElementById("emailCadastro").value;
  const senhaCadastro = document.getElementById("senhaCadastro").value;
  const nomeCadastro = document.getElementById("nome").value;
}
