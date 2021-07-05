(function () {	
	function getQuerystring(param) {
		var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for (var i = 0; i < url.length; i++) {
			var urlparam = url[i].split('=');
			if (urlparam[0] == param) {
				return urlparam[1];
			}
		}
	}

	function loadCart(){
		var id = getQuerystring('id');
		var quantity = getQuerystring('quantity');
		if(id){
			quantity = quantity ? parseInt(quantity) : 1;
			$.get('assets/scripts/ofertas.json', function(data){
				console.log(data);
				var product = data.cervejas.filter(c => c.codigo == id)[0];
				var cart = addToCart(product, quantity);
				loadCartTemplates(cart);
			});
		}else{
			var cart = JSON.parse(window.sessionStorage.getItem('cart'));
			loadCartTemplates(cart);
		}
	}

	function loadCartTemplates(cart){
		$('#cart-items').loadTemplate($('#template-cart-item'), cart.items);
		$('#cart-summary').loadTemplate($('#template-sumary'), cart.summary);
		$('#cart-subtotal').loadTemplate($('#template-subtotal'), cart.summary);
		$('#cart-header').loadTemplate($('#template-cart-header'), cart.summary);
	}

	function calculateCart(cart){
		var subtotal = 0;
		var totalItems = 0;
		cart.items.forEach(element => {
			subtotal += element.product.preco * element.quantity;
			totalItems += element.quantity;
		});
		cart.summary.subtotal = subtotal;
		cart.summary.total = cart.summary.subtotal + cart.summary.entrega + cart.summary.outras;
		cart.summary.totalItems = totalItems;
	}

	function addToCart(product, quantity){
		var cart = JSON.parse(window.sessionStorage.getItem('cart'));
		if(!cart){
			cart = {
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
		let index = cart.items.findIndex( x => x.product.codigo === product.codigo );
		if(index >= 0){
			cart.items[index].quantity += quantity;
		}else{
			cart.items.push({product : product, quantity: quantity});
		}
		calculateCart(cart);
		window.sessionStorage.setItem('cart', JSON.stringify(cart));
		return cart;
	}

	$(document).ready(function(){
		loadCart();
	});
})();