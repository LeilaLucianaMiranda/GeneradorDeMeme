const $ = (id) => document.getElementById(id)
/*inicializar temas */
const inicializarTemas = () => {
    $('boton-tema-oscuro').addEventListener('click', cambiarModoClaro)
    $('boton-tema-claro').addEventListener('click', cambiarModoOscuro)
  }

const inicializar = () => {
    inicializarTemas()
    inicializarPaneles()
    inicializarImagen()
    inicializarTexto()
    inicializarValoresDefault()
  
    $('descargar-meme').addEventListener('click', descargarMeme)
  }
  window.onload = inicializar


/*tema */
const cambiarModoOscuro =() =>{
    document.body.classList.remove('tema-claro')
    document.body.classList.add('tema-oscuro')
}
const cambiarModoClaro = () =>{
    document.body.classList.remove('tema-oscuro')
    document.body.classList.add('tema-claro')
}
/*Imagen */
const actualizarImagen = (evento) =>{
    if(evento.target.value.length !==0){
        $('img-meme').style.backgroundImage=`url("${evento.target.value}")`
    }
}

/*Paneles */
const ocultarPanel = () => {
    $('panel').classList.add('oculto')
  }
  
  const mostrarPanel = () => {
    $('panel').classList.remove('oculto')
  }
  
  const mostrarPanelImagen = () => {
    $(`panel-text`).classList.add('oculto')
    $(`panel-img`).classList.remove('oculto')
  }
  
  const mostrarPanelTexto = () => {
    $(`panel-img`).classList.add('oculto')
    $(`panel-text`).classList.remove('oculto')
  }