(function () {	

    function loadCartTemplates(cart){
		$('#cart-summary').loadTemplate($('#template-sumary'), cart.summary);
		$('#cart-header').loadTemplate($('#template-cart-header'), cart.summary);
	}

    function setClient(){
        var cliente = {
            email : $("input[name='email']").val(),
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
    }

    function calculateCart(cart){
		cart.summary.total = cart.summary.subtotal + cart.summary.entrega + cart.summary.outras;
        cart.summary.total = cart.summary.total.toFixed(2);
	}

    function getOrCreateCart(){
		
		var cart = JSON.parse(window.sessionStorage.getItem('cart'));
		
		if(!cart){
			return {
				items : [],
				summary : {
					subtotal : 0,
					entrega : 0,
					outras : 0,
					total : 0,
					totalItems: 0
				}
			};
		}		

		return cart;
	}

    $(document).ready(function(){
        var cart = getOrCreateCart();
		loadCartTemplates(cart);
        $('a#btnContinuar').on('click', setClient);
        $('input[name="entrega"]').click(function(){
            cart = JSON.parse(window.sessionStorage.getItem('cart'));
            cart.summary.entrega = parseFloat($(this).val())
            calculateCart(cart);
		    window.sessionStorage.setItem('cart', JSON.stringify(cart));
            loadCartTemplates(cart);
        });

        var cliente = JSON.parse(window.sessionStorage.getItem('cliente'));
        if(cliente){
            $("input[name='email']").val(cliente.email);
            $("input[name='nome']").val(cliente.nome);
            $("input[name='empresa']").val(cliente.empresa);
            $("input[name='endereco']").val(cliente.endereco);
            $("input[name='numero']").val(cliente.numero);
            $("input[name='complemento']").val(cliente.complemento);
            $("input[name='bairro']").val(cliente.bairro);
            $("input[name='cidade']").val(cliente.cidade);
            $("select[name='estado']").val(cliente.estado);
            $("select[name='cep']").val(cliente.cep);
        }
    });
})();

