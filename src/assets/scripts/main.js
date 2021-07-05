(function () {	
	
	function loadItems(){
		$.get('assets/scripts/ofertas.json', function(data){
			$('#items').loadTemplate($('#template-item'), data.cervejas);
		});
	}

	$(document).ready(function(){
		loadItems();
	});
})();