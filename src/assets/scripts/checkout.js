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
});
