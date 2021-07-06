(function () {	

    function loadCartTemplates(cart){
        $('#cart-items').loadTemplate($('#template-cart-item'), cart.items);
		$('#cart-summary').loadTemplate($('#template-sumary'), cart.summary);
		$('#cart-header').loadTemplate($('#template-cart-header'), cart.summary);
	}

    function loadClienteTemplate(cliente){
        $('#informacoes-cliente').loadTemplate($('#template-cliente'), cliente);
    }

    $(document).ready(function(){
        var cart = JSON.parse(window.sessionStorage.getItem('cart'));
        var cliente = JSON.parse(window.sessionStorage.getItem('cliente'));
        loadCartTemplates(cart);
        loadClienteTemplate(cliente);
    });
})();



$(document).ready(function(){
	// var produto = JSON.parse(window.sessionStorage.getItem('produto'));
    // console.log(produto);
    // if(produto){
    //     $('#cart-item p.description').html(produto.description);
    //     $('#cart-item img').attr('src', produto.img);
    //     $('.summary-box p.subtotal').html(produto.preco);
    //     $('.summary-box p.delivery').html(1);
    //     $('.summary-box p.other').html(0);
    //     $('.summary-box p.total').html(produto.preco + 1);
    // }

    // var cliente = JSON.parse(window.sessionStorage.getItem('cliente'));

    // $('.informacoes-cliente #nome').html(cliente.nome);
    // $('.informacoes-cliente #empresa').html(cliente.empresa);
    // $('.informacoes-cliente #endereco').html(cliente.endereco);
    // $('.informacoes-cliente #numero').html(cliente.numero);
    // $('.informacoes-cliente #complemento').html(cliente.complemento);
    // $('.informacoes-cliente #bairro').html(cliente.bairro);
    // $('.informacoes-cliente #cidade').html(cliente.cidade);
    // $('.informacoes-cliente #estado').html(cliente.estado);
    
    //{"nome":"Gustavo Caldeira","empresa":"SOCIALPRO","endereco":"Estrada Chico Mendes","numero":"396","complemento":"","estado":"12"}
});
