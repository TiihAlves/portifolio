const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let mapa = document.querySelector("#mapa");

formulario.addEventListener('submit', function(event) {
  
    event.preventDefault();
  
    const campoNome = document.querySelector('#name');
    const txtNome = document.querySelector('#txtNome');
  
    if (campoNome.value.length < 3) {
      txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
      campoNome.focus();
      return;
    }else{
      txtNome.innerHTML = '';
    }
  
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
  
    if (!campoEmail.value.match(emailRegex)) {
      txtEmail.innerHTML = 'Digite um E-mail válido.';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }
  
    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
  
    if (campoSubject.value.length < 5) {
      txtSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
      campoSubject.focus();
      return;
    }else{
      txtSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');

    window.alert("Formulário Enviado com Sucesso!");
  
    campoNome.value = ''
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''

  });

    //Evento de clique (onfocus)
function highLightInput(element){
    element.style.backgroundColor="#6959CD"
    }

    //Evento de clique fora (onblur)
function removeHighLight(element){
    element.style.backgroundColor=""
}

    //Evento Zoom Mapa
function mapaZoom(){
    mapa.style.width="500px"
    mapa.style.height="350px"
}

function mapaNormal(){
    mapa.style.width="400px"
    mapa.style.height="250px"
}

   //Evento destaque de cor
function destaque(element){
    element.style.color = "#6959CD"
   }

   //Evento remove destaque
function removeDestaque(element){
    element.style.color = "#000"
}

    // Evento de zoom Imagem
function zoomImagem(element){
    element.style.width="350px"
}

function removeZoomImagem(element){
     element.style.width="300px"
}


   
