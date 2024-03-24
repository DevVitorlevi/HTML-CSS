function verificar(){
    var p = document.getElementById('txtpais')
    var pais = (p.value)
    var res = document.getElementById('res')
    res.innerHTML=`Vivendo em ${pais}`
    if(pais == 'Brasil')  {
        res.innerHTML ='<p> Voce é <strong>Brasileiro!!!</strong></p>'
    }
    else{
        res.innerHTML += '<p>Você é <strong>Estrangeiro!!</strong></p>'
    }
}