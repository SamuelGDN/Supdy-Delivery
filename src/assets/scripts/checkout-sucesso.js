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

    var cliente = JSON.parse(window.sessionStorage.getItem('cliente'));

    $('.informacoes-cliente #nome').html(cliente.nome);
    $('.informacoes-cliente #empresa').html(cliente.empresa);
    $('.informacoes-cliente #endereco').html(cliente.endereco);
    $('.informacoes-cliente #numero').html(cliente.numero);
    $('.informacoes-cliente #complemento').html(cliente.complemento);
    $('.informacoes-cliente #bairro').html(cliente.bairro);
    $('.informacoes-cliente #cidade').html(cliente.cidade);
    $('.informacoes-cliente #estado').html(cliente.estado);
    
    //{"nome":"Gustavo Caldeira","empresa":"SOCIALPRO","endereco":"Estrada Chico Mendes","numero":"396","complemento":"","estado":"12"}
});
