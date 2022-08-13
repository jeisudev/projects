 //function que ativa o menu no click
 function toggle(){
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active')
    nav.classList.toggle('active')
  }
  //funcao para chamar a nav e todas as suas functions trazendo a tela os components;
  $(document).ready(function(){
    $('#aboutSpan').click(function(){
      $('#spanAbout').css('display','block');
      $('.animationImg, #skills, #portifolio, #teams, #contato').css('display','none');
      $('#sec , #navigation').removeClass('active');
    });
    $('#homeSpan').click(function(){
      $('#spanAbout, #skills, #portifolio, #teams,#contato').css('display','none');
      $('.animationImg').css('display','block');
      $('#sec , #navigation').removeClass('active');
    });
    $('#skillsSpan').click(function(){
      $('#spanAbout, .animationImg, #portifolio, #teams, #contato').css('display','none');
      $('#skills').css('display','block');
      $('#sec , #navigation').removeClass('active');
    });
    $('#portifolioSpan').click(function(){
      $('#spanAbout, .animationImg, #skills, #teams, #contato').css('display','none');
      $('#portifolio').css('display','block');
      $('#sec , #navigation').removeClass('active');
    });
    $('#teamSpan').click(function(){
      $('#spanAbout, .animationImg, #skills, #portifolio, #contato').css('display','none');
      $('#teams').css('display','block');
      $('#sec , #navigation').removeClass('active');
    });
    $('#contactSpan').click(function(){
      $('#sec , #navigation').removeClass('active');
      window.open('https://wa.me/5551997368169');
    });
  });
  $('#closeModal').click(function(){
    $('.modal').hide()
  });
  $('#closeModalBtn').click(function(){
    $('.modal').hide()
  });
  //requisicao de banco de dados ajax;
 var mensagem =  $('#exampleFormControlTextarea1').val();
 var email =  $('#exampleFormControlInput1').val();
  $('#teamSpan').click(function(){
    $.ajax({
      type: 'POST',
      url: '',
      data:   data,
      dataType: 'html',

      success: function(response) {
          window.location.replace("conexao.php");
      },
      error: function(xhr, ajaxOptions, thrownError) {
          console.log(xhr, ajaxOptions, thrownError);
          $("body").html('ATENÇÃO! Ocorreu um erro ao tentar Logar');
      }
  });
});

