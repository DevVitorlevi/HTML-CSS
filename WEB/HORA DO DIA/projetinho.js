function carregar() {
    var msg =document.querySelector(".msg") 
    var img =document.querySelector(".img")   
    var sd = document.querySelector(".hora")
    var tempo = new Date()          
    var hora = tempo.getHours()

    msg.innerHTML = `Agora são ${hora} horas`  

    if (hora >= 0 && hora < 12) {           
        img.src = "fotomanha.png"     
        document.body.style.background = "#84baf8"
        sd.innerHTML='BOM-DIA'
        } 
        else if (hora >= 12 && hora < 18) {
            img.src= "fototarde.png"
            document.body.style.background = "#f1b84e"
            sd.innerHTML='BOA-TARDE'
        }   
    else {
        img.src = "fotonoite.png"
        document.body.style.background = "#383737"
        sd.innerHTML='BOA-NOITE'
    }
}

