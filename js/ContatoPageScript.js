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

    printFormCard();
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

    var nome = document.getElementById("nomeCont").value;
    var nomeCont = document.getElementById("nomeCont");

    var email = document.getElementById("emailCont").value;
    var emailCont = document.getElementById("emailCont");

    var assunto = document.getElementById("assuntoCont").value;
    var assuntoCont = document.getElementById("assuntoCont");

    var mensagem = document.getElementById("mensagemCont").value;
    var mensagemCont = document.getElementById("mensagemCont");
    
    if(nome.length < 8 || nome == "")
    {
        nomeCont.style.border = "2px solid #FFA300";
        alert("O Nome Completo deve ter no mínimo 8 caracteres");
    }

    if(email.indexOf("@") == -1)
    {
        emailCont.style.border = "2px solid #FFA300";
        alert('Deve possuir "@" para validar o e-mail')
    }

    if(assunto.length < 5 || assunto == "")
    {
        assuntoCont.style.border = "2px solid #FFA300";
        alert("O assunto deve possuir no mínimo 5 caracteres");
    }
    
    if(mensagem.length < 10 || mensagem == "")
    {
        mensagemCont.style.border = "2px solid #FFA300";
        alert("A mensagem deve possuir no mínimo 10 caracteres");
    }

    if(mensagem.length > 320)
    {
        mensagemCont.style.border = "2px solid #FFA300";
        alert("A mensagem deve possuir no máximo 320 caracteres");
    }

    if(nome.length >= 8 && email.indexOf("@") != '-1' && assunto.length >= 5 && mensagem.length >= 10 && mensagem.length < 320)
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

function printFormCard()
{

    if(listaForm.length < 1)
    {
        emptyForm = "";

        emptyForm += '<div class="empty-form">';
        emptyForm += '<i class="fas fa-exclamation"></i>';
        emptyForm += '<h3>Você ainda não preencheu nenhum formulário!</h3>';
        emptyForm += '</div>';

        document.getElementById("form-card").innerHTML += emptyForm;
    }

    if(listaForm != null)
    {
        for(var i = 0; i < listaForm.length; i++)
        {
            var conteudoForm = "";

            conteudoForm += '<div class="form-card">';
            conteudoForm += '<h4>Nome Completo</h4>';
            conteudoForm += '<p>'+ listaForm[i][0] +'</p>';
            conteudoForm += '<hr>';
            conteudoForm += '<h4>Email</h4>';
            conteudoForm += '<p>'+ listaForm[i][1] +'</p>';
            conteudoForm += '<hr>';
            conteudoForm += '<h4>Assunto</h4>';
            conteudoForm += '<p>'+ listaForm[i][2] +'</p>';
            conteudoForm += '<hr>';
            conteudoForm += '<h4>Mensagem</h4>';
            conteudoForm += '<p class="form-message">'+ listaForm[i][3] +'</p>';
            conteudoForm += '</div>';

            document.getElementById("form-card").innerHTML += conteudoForm;
        }
    }
}