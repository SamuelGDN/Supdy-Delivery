(function () {	
	
	function loadItems(){
		$.get('assets/scripts/ofertas.json', function(data){
			$('#items').loadTemplate($('#template-item'), data.cervejas);
		});
	}

	function loadCart(){
		var cart = getOrCreateCart();
		loadCartTemplates(cart);
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

	function loadCartTemplates(cart){
		$('#cart-header').loadTemplate($('#template-cart-header'), cart.summary);
	}

	$(document).ready(function(){
		loadItems();
		loadCart();
		var icon = document.getElementById("icon");

		icon.onclick = function() {
			document.body.classList.toggle("dark-theme");
			if(document.body.classList.contains("dark-theme")){
				icon.src = "assets/img/icon-sun.svg"
			}else{
				icon.src = "assets/img/icon-moon.svg"
			}
		}
	});
})();
