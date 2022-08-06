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
      $('#spanAbout, .animationImg, #skills, #portifolio, #teams').css('display','none');
      $('#contato').css('display','block');
      $('#sec , #navigation').removeClass('active');
    });
  });
  //Funcao que abre o whats app
  $('#ChamarWhats').click(function(){
    window.open('https://wa.me/5551997368169');
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
  $('#enviaContato').click(function(){
    $.ajax({
        type: "POST",
        url: 'conexao.php',
        data: 'site_jeison_dados',
        async: 'json', 
        success: function (data) {
            alert("Retorno Ajax ok");
            function select(tx) { 
                tx.executeSql();
                app.selectDB(); 
            }
            function errorCB() {
                alert("ERROCB");
            }
            function sucess() {
                alert("Atualizado!");
            }
            
            }
        });
    });

