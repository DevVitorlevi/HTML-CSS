function verificar ()
{   
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('.res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO]')
    }
    else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'ft')
        if (sex[0].checked){
            genero = 'Homem'
            if( idade >=0 && idade < 10){
                img.setAttribute('src', 'menino.jpg')

            }
            else if (idade < 21){
                img.setAttribute('src', 'jovemh.jpg')
            }
            else if(idade <50){
                img.setAttribute('src', 'homem.jpg')
            }
            else{
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        else if (sex[1].checked){
            genero = 'Mulher'
            if( idade >=0 && idade < 10){
                img.setAttribute('src', 'menina.jpg')

            }
            else if (idade < 21){
                img.setAttribute('src', 'jovem.jpg')

            }
            else if(idade <50){
                img.setAttribute('src', 'mulher.jpg')

            }
            else{
                img.setAttribute('src', 'idosa.jpg')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com <strong> ${idade} Anos.</strong>`
        res.appendChild(img)
    }

}
