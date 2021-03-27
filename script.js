function touchButton(){

    var secretName = parseInt(Math.random() * 10)

    for(var attempts = 3; attempts > 0; attempts--){
        var startGamer = parseInt(prompt('Digite um número entre 0 e 10'))

        if(secretName == startGamer){
            alert('Acertou')
            document.getElementById('info').innerHTML = "Parabéns vencemos a batalha!"
            document.getElementById('personagem').src = "img/rey.png"
            break    
        }
        else if(startGamer > secretName){
            alert('O número secreto é menor')
        }
        else if(startGamer < secretName){
            alert('O número secreto é maior')
        }

         
    }

    if(startGamer != secretName){
        alert('Suas tentativas acabaram. O número secreto era ' + secretName)
        document.getElementById('info').innerHTML = "Você perdeu a batalha!"
        document.getElementById('personagem').src = "img/kylo.png"
    }
    
}

function removedButton() {

    // Removendo um nó a partir do pai
    // Ou seja, remove um elemento do HTML
    var removed = document.getElementById('buttonStart')
    if(removed.parentNode){
        removed.parentNode.removeChild(removed)
    }
}


