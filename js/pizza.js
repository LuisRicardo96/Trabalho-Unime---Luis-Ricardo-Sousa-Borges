$(document).ready(function() {
    
      function listar() {
        $.ajax({
          url:"https://pizzaria.roxo.dev.br",
          method:'get',
          success(data){
          $('#tabela').append('<tr><td>Sabor</td><td>Valor</td></tr>'),
            data.forEach(function(item){
                $('#tabela').append('<tr><td>' + item.nome + '</td><td>' + item.valor + '</td></tr>');
            })
          }
        })};
        
      listar();

      var select = document.getElementById('idservico')
      select.addEventListener('change', function(
          
      ){     
})
jQuery('select[name="idservico[]"]').change(function() {

    let selects = jQuery("select[name=\"idservico[]\"]");
    let valorDoSelect = 0;
    
    
    /* Captura e soma o valor de todos os select */
    $(selects).map(function(i, e) {
      valorDoSelect += parseFloat( $(e).find(':selected').data('valor').toString().replace(",", ".") );
    });
    

    /* Exibe o valor */
    $('#valor').val( valorDoSelect )
});

  


      $('#sabor1').click(function() {
        $("div1").show();
        $("div2").hide();
        $("div4").hide();
        $("div3").hide();
        $("div5").hide();
        $("div6").hide();
    });

    $('#sabor2').click(function() {
        $("div1").hide();
        $("div2").show();
        $("div4").show();
        $("div3").hide();
        $("div6").hide();
    });
    $('#sabor3').click(function() {
        $("div5").show();
        $("div3").show();
        $("div6").show();
        $("div2").hide();
        $("div1").hide();
        $("div4").hide();
    });

    
    })