function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio); 

    if (elemento && elemento.localName === 'audio') {
         elemento.play();
    }
    else {  
        //alert('Elemento nao encontrado');
        console.log('Elemento não encontrado selector invalido!');
    }

}
    
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = '#som_${instrumento}'; //template string
        
    tecla.onclick = function () {
        tocaSom(idAudio);
    } 

    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}
