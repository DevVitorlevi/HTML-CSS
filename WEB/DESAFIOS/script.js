const Mode = document.getElementById('Mode')
const html =document.documentElement
const eye = document.querySelector('.bi-eye-fill')
const password=document.getElementById('pass')

Mode.addEventListener('click',()=>{
    html.classList.toggle('dark')
})
eye.addEventListener('click',()=>{
    if(password.type ==='password'){
        password.setAttribute('type','text')
        eye.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        password.setAttribute('type','password')
        eye.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
})