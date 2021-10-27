var form = [];
var listaForm = [];

/* ~-~-~-~-~- NAVBAR SCRIPT ~-~-~-~-~- */

$(document).ready(function(){
    //jquery for toggle sub menu
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    //jquery para expandir e recolher o menu
  $('.menu-btn').click(function(){
      $('.side-bar').addClass('active');
      $('.menu-btn').css("visibility", "hidden");
  });

  $('.close-btn').click(function(){
      $('.side-bar').removeClass('active');
      $('.menu-btn').css("visibility", "visible");
  });

  if(JSON.parse(window.localStorage.getItem('Formulario')) != undefined)
    {
        listaForm = JSON.parse(window.localStorage.getItem('Formulario'));
    }
    else
    {
        listaForm = [];
    }

});

/*window.onload = function()
{
    if(JSON.parse(window.localStorage.getItem('Formulario')) != undefined)
    {
        listaForm = JSON.parse(window.localStorage.getItem('Formulario'));
    }
    else
    {
        listaForm = [];
    }
}*/

function formulario()
{
    form = [];
    var nome = document.getElementById("nomeCont").value;
    var email = document.getElementById("emailCont").value;
    var assunto = document.getElementById("assuntoCont").value;
    var mensagem = document.getElementById("mensagemCont").value;

    if(nome != "" && email != "" && assunto != "" && mensagem != "")
    {
        form.push(nome);
        form.push(email);
        form.push(assunto);
        form.push(mensagem);

        listaForm.push(form);
        console.log(listaForm);
        window.localStorage.setItem("Formulario", JSON.stringify(listaForm));

        successPopUp();
    }

    document.getElementById("nomeCont").value = "";
    document.getElementById("emailCont").value = "";
    document.getElementById("assuntoCont").value = "";
    document.getElementById("mensagemCont").value = "";
}

function successPopUp()
{
    var conteudo = "";

    conteudo += '<div class="popup-content">';
    conteudo += '<div class="popup-img">';
    conteudo += '<img src="../img/gif-check.gif" alt="">';
    conteudo += '</div>';
    conteudo += '<div class="popup-p">';
    conteudo += '<p>Formulário Enviado com Sucesso!</p>';
    conteudo += '</div>';
    conteudo += '<div class="popup-button">';
    conteudo += '<a href="contato.html"><button>Confirmar</button></a>';
    conteudo += '</div>';
    conteudo += '</div>';

    document.getElementById("popup-check").innerHTML += conteudo;
}