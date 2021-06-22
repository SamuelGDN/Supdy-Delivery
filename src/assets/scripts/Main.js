fetch('http://localhost/del/src/assets/scripts/Ofertas.json')
	.then(function (resp) {
		return resp.json();
	})
	.then(function(data){
		for(var i = 0; i < 6;i++){
			var el = document.getElementById(`oferta-${i}`);
			var texto = el.children[1].children[0];
			var preco = el.children[1].children[1].children[0];
			var image = el.children[0];
			console.log(texto);
			texto.innerHTML = data.cervejas[i]['description'];
			preco.innerHTML = data.cervejas[i]['preco'];
			image.src = data.cervejas[i]['img'];
			
		}


	});


	