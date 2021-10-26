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

    form.push(nome);
    form.push(email);
    form.push(assunto);
    form.push(mensagem);

    listaForm.push(form);
    console.log(listaForm);
    window.localStorage.setItem("Formulario", JSON.stringify(listaForm));

    document.getElementById("nomeCont").value = "";
    document.getElementById("emailCont").value = "";
    document.getElementById("assuntoCont").value = "";
    document.getElementById("mensagemCont").value = "";
}