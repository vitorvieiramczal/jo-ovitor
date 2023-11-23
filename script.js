function validaFormulario() {

    const nome = document.getElementById("nome").vlaue;
    const email = document.querySelector("#email").vlaue;
    const senha = document.getElementsByClassName("senha").vlaue;

    console.log(senha)

    //Validação de campos vazios
if(nome === '' || email === '' || senha === ''){
alert("Por Favor, preencha os campos vazios!")
}

// verifica tamanho da senha
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Verifica tamanho da senha 
if(senha.length > 8){
    alert("A senha excedeu os limites de caracteres")
}

}
function darkmode(){
    const pagina = document.body;
  pagina.classList.toggle("darkmode");

  const botao = document.getElementById("modoPreto");

  const isdarkmode = document.body.classList.contains("dar-mode");

  if (isdarkmode === true) {
    botao.textContent = "Modo Claro"
  }else{
botao.textContent = "Modo Preto"
    
  }
}
