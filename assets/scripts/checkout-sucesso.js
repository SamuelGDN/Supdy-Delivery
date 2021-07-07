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