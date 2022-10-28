function tocaSom (id){
    document.querySelector(id).play()
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const ListaDeTeclas = document.querySelectorAll('.tecla')



for (let i = 0; i< ListaDeTeclas.length; i++){

    const tecla = ListaDeTeclas[i]
    const instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}`

    console.log("idAudio:", idAudio)

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}


