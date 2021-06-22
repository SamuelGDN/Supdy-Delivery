$(document).ready(function(){
	var produto = JSON.parse(window.sessionStorage.getItem('produto'));
    console.log(produto);
    if(produto){
        $('#cart-item p.description').html(produto.description);
        $('#cart-item img').attr('src', produto.img);
        $('.summary-box p.subtotal').html(produto.preco);
        $('.summary-box p.delivery').html(1);
        $('.summary-box p.other').html(0);
        $('.summary-box p.total').html(produto.preco + 1);
    }

    $('a#btnContinuar').on('click', function(){
        
        var cliente = {
            nome : $("input[name='nome']").val(),
            empresa : $("input[name='empresa']").val(),
            endereco : $("input[name='endereco']").val(),
            numero : $("input[name='numero']").val(),
            complemento : $("input[name='complemento']").val(),
            bairro : $("input[name='bairro']").val(),
            cidade : $("input[name='cidade']").val(),
            estado : $("select[name='estado']").val(),
            cep : $("select[name='cep']").val()
        };

        window.sessionStorage.setItem('cliente', JSON.stringify(cliente));
    });
});
