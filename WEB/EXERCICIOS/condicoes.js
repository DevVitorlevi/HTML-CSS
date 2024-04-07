
function calcular(){
    var txtv = document.getElementById('txtvel')
    var vel= Number(txtv.value)
    var res = document.getElementById('res')
    res.innerHTML=`<p>Sua velocidade atual é de <strong>${vel}KM/H</strong></p>`
    if( vel >= 60){
        res.innerHTML +='<p>Você ultrapassou o limte de velocidade, Está <strong>MULTADO!</strong></p>'
    }
    res.innerHTML += 'Diriga sempre com o cinto de sengurança'
   
}