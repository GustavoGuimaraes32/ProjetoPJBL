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

  fLocalCardsHospedagens();

});

/* ~-~-~-~-~- PÁGINA HOSPEDAGENS ~-~-~-~-~- */

var array_hospedagens = [['Lucca-Hotel-Pousada-3-piscinas-Bonito-MS.jpg','Lucca Hotel Pousada','O Lucca Hotel Pousada, para quem gosta de estar em contato com a natureza e valoriza área de lazer com jardins e piscina, essa é uma opção de hotel em Bonito bastante recomendada.'], ['pousada_cambara_bonito_ms-0_a.jpg','Pousada Cambará','Uma pousada simples e charmosa localizada no centro da cidade. Caminhando, são 3 minutos até a Praça da Liberdade em Bonito, próximo a vários bares e restaurantes.'], ['hotel-marruá-hospedagem.jpg','Hotel Marruá','O Hotel Marruá é um 4 estrelas localizado no coração da cidade! Sem dúvida um dos maiores empreendimentos da rede hoteleira de Bonito e muito bem recomendado para viagens.'], ['hotel-bonsai-acquaviagens-bonito-ms.jpg','hotel Bonsai','O hotel bonsai é um dos mais tradicionais da cidade.São 23 anos atendendo famílias e grupos com o cuidado que uma viagem de férias. Sendo a localização como ponto destaque da Hospedagem'], ['hotel-da-praca.jpg','Hotel da Praça','Um hotel de categoria superior no coração de Bonito MS. Esse hotel é muito recomendado para casais ou para visitantes que prefiram estar hospedados na região mais movimentada da cidade.'], ['hotel paraiso das aguas.jpg','Hotel Paraíso das Águas','Para quem curte natureza exuberante durante o dia todo, mas na hora de dormir gosta é de se sentir confortável e em segurança na cidade, o Hotel Paraíso das Águas é o lugar ideal!'], ['sesc-bonito-8.jpg','Hotel Sesc Bonito','Inaugurado em abril de 2017, o Hotel Sesc Bonito é atualmente a melhor opção de hospedagem em Bonito MS. Isso porque a unidade consegue oferecer boas acomodações por um preço justo.'], ['hotel-bonito-ecotel-013-1280x720.jpg','Bonito Ecotel','Viajar também pode ser um exercício de preservação ambiental, principalmente se você escolheu conhecer Bonito MS, o principal destino de ecoturismo do Brasil. Ótima opção de escolha de hospedagem']];


function fLocalCardsHospedagens()
{

    console.log(array_hospedagens);
    for(var j = 0; j < array_hospedagens.length; j++)
    {
        var conteudoHospedagens = "";
        
        conteudoHospedagens += '<div class="card-pas-hos">';
        conteudoHospedagens += '<div class="img"><img src="../img/'+ array_hospedagens[j][0] +'" alt=""></div>';
        conteudoHospedagens+= '<h4 class="title">'+ array_hospedagens[j][1] +'</h4>';
        conteudoHospedagens += '<p>'+ array_hospedagens[j][2] +'</p>';
        conteudoHospedagens += '<a href="">Saiba Mais</a>';
        conteudoHospedagens += '</div>';

        document.getElementById("cards-hospedagens").innerHTML += conteudoHospedagens;
    }
    
}