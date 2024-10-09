const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const form = document.getElementById('form')
const inputs = document.querySelectorAll('.inputs')
const spans = document.querySelectorAll('.span-required')
const mostrarsenha= document.getElementById('btn-senha')

document.addEventListener('keydown',(evt)=>{
    if(evt.key=='Enter'){
        impedirEnvio(evt)
    }
})
form.addEventListener('submit',impedirEnvio)
function impedirEnvio(ev){
    ev.preventDefault()//Impedir o Envio do Form
    ValidarNome()
    ValidarEmail()
    ValidarSenha()
    CompararSenha()
}


function CasoError(indice){
    inputs[indice].style.border= '2px solid #e63636'
    spans[indice].style.display='block'
}
function NotError(indice){
    inputs[indice].style.border= ''
    spans[indice].style.display='none'
}

inputs[0].addEventListener('input',ValidarNome)
inputs[1].addEventListener('input',ValidarEmail)
inputs[2].addEventListener('input',ValidarSenha)
inputs[3].addEventListener('input',CompararSenha)

function ValidarNome(){
    if(inputs[0].value.length <3){
        CasoError(0)
    }else{
        NotError(0)
        
    }
}
function ValidarEmail(){
    if(emailRegex.test(inputs[1].value)){//Verificando se o E-mail é Válido
    NotError(1)
}else{
    CasoError(1)
}}

function ValidarSenha(){
    if(inputs[2].value.length <8){
        CasoError(2)
    }else{
        NotError(2)  
    }
}

function CompararSenha(){
    if(inputs[2].value==inputs[3].value && inputs[3].value.length>=8){
        NotError(3)
    }else{
        CasoError(3)
    }
}

mostrarsenha.addEventListener('click',()=>{
    if(inputs[2].type==='password'|| inputs[3].type==='password'){
        inputs[2].setAttribute('type','text')
        inputs[3].setAttribute('type','text')
        mostrarsenha.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputs[2].setAttribute('type','password')
        inputs[3].setAttribute('type','password')
        mostrarsenha.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
})



