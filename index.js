//imagem do header para reload
const HeaderImg = document.querySelector("#HeaderImg")

HeaderImg.addEventListener("click", (e)=>{
    location.reload()
})

//botao do formulario de cadastro
const btn_inputCadastroEnviar = document.querySelector("#inputCadastroEnviar")

//função que recebe os valores do formulario de cadastro
btn_inputCadastroEnviar.addEventListener("click", (e)=>{
    e.preventDefault()

    //inputs do formulario de cadastro
    const inputCadastroName = document.querySelector("#inputCadastroName")
    const inputCadastroCelular = document.querySelector("#inputCadastroCelular")
    const inputCadastroEmail = document.querySelector("#inputCadastroEmail")
    const inputCadastroDateNasc = document.querySelector("#inputCadastroDateNasc")
    const inputCadastroEscolaridade = document.querySelector("#inputCadastroEscolaridade")
    const inputCadastroEndereco = document.querySelector("#inputCadastroEndereco")

    let Nome = inputCadastroName.value
    let Celular =  inputCadastroCelular.value
    let Email = inputCadastroEmail.value
    let DateNasc = inputCadastroDateNasc.value;
    let Escolaridade = inputCadastroEscolaridade.value;
    let Endereco = inputCadastroEndereco.value;

    console.log(Nome)
    console.log(Celular)
    console.log(Email)
    console.log(DateNasc)
    console.log(Escolaridade)
    console.log(Endereco)

})


/*------------------------------------------------------------*/

//botao do formulario de descarte
const btn_inputDescarteEnviar = document.querySelector("#btn_inputDescarteEnviar")

//função que recebe os valores do formulario de cadastro
btn_inputDescarteEnviar.addEventListener("click", (e)=>{
    e.preventDefault()

    //inputs do formulario de descarte
    const inputDescarteMatricula = document.querySelector("#inputDescarteMatricula")
    const inputDescarteDateToday = document.querySelector("#inputDescarteDateToday")
    const inputDescarteType = document.querySelector("#inputDescarteType")
    const inputDescarteWeight = document.querySelector("#inputDescarteWeight")

    let Matricula = inputDescarteMatricula.value
    let DateToday = inputDescarteDateToday.value
    let DescarteType = inputDescarteType.value
    let Weight = inputDescarteWeight.value

    console.log(Matricula)
    console.log(DateToday)
    console.log(DescarteType)
    console.log(Weight)
})