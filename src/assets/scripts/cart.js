$(document).ready(function(){
	fetch('http://127.0.0.1:5500/src/assets/scripts/ofertas.json')
	.then(function (resp) {
		return resp.json();
	})
	.then(function(data){
		
		var id = getQuerystring('id');
		var produto = data.cervejas.filter(c => c.codigo == id)[0];
		$('#cart-item p.description').html(produto.description);
		$('#cart-item p.price').html(produto.preco);
		$('.summary-box p.subtotal').html(produto.preco);
		$('.summary-box p.delivery').html(1);
		$('.summary-box p.other').html(0);
		$('.summary-box p.total').html(produto.preco + 1);

		window.sessionStorage.setItem('produto', JSON.stringify(produto));
	});
});


function getQuerystring(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}

	