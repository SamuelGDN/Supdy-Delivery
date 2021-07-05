(function () {	
	// fetch('http://127.0.0.1:5500/src/assets/scripts/ofertas.json')
	// 	.then(function (resp) {
	// 		return resp.json();
	// 	})
	// 	.then(function(data){
	// 		for(var i = 0; i < 6;i++){
				
	// 			var el = document.getElementById(`oferta-${i}`);
	// 			var texto = el.children[1].children[0];
	// 			var preco = el.children[1].children[1].children[0];
	// 			var image = el.children[0];
	// 			var link = $(`#oferta-${i} .btn`);
	// 			link.attr('href', `cart.html?id=${data.cervejas[i].codigo}`);
	// 			console.log(texto);
	// 			texto.innerHTML = data.cervejas[i]['description'];
	// 			preco.innerHTML = data.cervejas[i]['preco'];
	// 			image.src = data.cervejas[i]['img'];			
	// 		}
	// 	});

	function loadItems(){
		$.get('assets/scripts/ofertas.json', function(data){
			$('#items').loadTemplate($('#template-item'), data.cervejas);
		});
	}

	$(document).ready(function(){
		loadItems();
	});

})();