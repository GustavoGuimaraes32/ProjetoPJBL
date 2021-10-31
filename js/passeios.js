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

  fLocalCardsPasseios();

});

/* ~-~-~-~-~- PÁGINA PASSEIOS ~-~-~-~-~- */

var array_passeios = [['estancia-mimosa-cachoeira-sinhozinho.jpg', 'Estância Mimosa', 'A Estância Mimosa é um dos passeios de cachoeira mais procurados de Bonito. Ao chegar ao receptivo lugar é possivel avistar uma típica fazendo do Mato Grosso Do Sul.'], ['barra-sucuri-acqua passeios.jpg', 'Rio Sucuri', 'Rio Sucuri é um passeio de flutuação de nascente que acontece na fazenda São Geraldo, fica a 18km de distância do centro da cidade de bonito.'], ['mergulho-rio-da-prata-3.jpg', 'Mergulho Rio Da Prata', 'O Rio da Prata é um Mergulho fascinante, ideal para quem busca a sensação de nadar no meio de  vários cardumes de peixes em águas cristalinas.'], ['descanso-ceita-core-cachoeiras-em-bonito-ms-acqua passeios.jpg', 'Ceita Corê', 'A Ceita Corê oferece uma das sedes mais bonitas e tradicionais da região, sendo da mesma familia há décadas, criadores de gado e pioneiros da raça nelore no Brasil.'], ['cachoeira-fantasma-foto-1-boca da onça.jpg', 'Boca da Onça Ecotur', 'Aproveite a opurtunidade de caminhar por uma trilha em meio a mata inteiramente preservada. Durante o passeio serão percorrido por varias Trilhas e Cachoeiras.'], ['foto-lagoa-misteriosa.jpg', 'Lagoa Misteriosa', 'A Flutuação na Lagoa Misteriosa é incrível. Esse é o principal ponto de mergulho de água doce do Brasil e única dolina aberta a visitação que fica em Bonito MS.'], ['balneario-do-sol-bonito-passeios.jpg', 'Balneário Do Sol', 'Balneário Do Sol é um ótimo lugar para quem deseja aproveitar suas férias do melhor jeito! Ideal para descancar, rodeado de verde e de águas transparentes.'], ['Foto_2_nascenteazul-blog.jpg', 'Nascente Azul', "A beleza da Nascente Azul e a conservação do local vão encantar você! Sendo muito bem recebidos pelo majestoso espelho d'agua e pela charmosa capela centenária"]];


function fLocalCardsPasseios()
{
    for(var i = 0; i < array_passeios.length; i++)
    {
        var conteudo = "";
        
        conteudo += '<div class="card-pas-hos">';
        conteudo += '<div class="img"><img src="../img/'+ array_passeios[i][0] +'" alt=""></div>';
        conteudo+= '<h4 class="title">'+ array_passeios[i][1] +'</h4>';
        conteudo += '<p>'+ array_passeios[i][2] +'</p>';
        conteudo += '<a href="">Saiba Mais</a>';
        conteudo += '</div>';

        document.getElementById("cards-passeios").innerHTML += conteudo;
    }
}