fetch('http://localhost/del/src/assets/scripts/ofertas.json')
	.then(function (resp) {
		return resp.json();
	})
	.then(function(data){
		console.log(data)
	});