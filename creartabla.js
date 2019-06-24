(function(){
	var input = window.prompt("Ingrese tamaño de tabla");
	if (input==null) {
		alert("Debe ingresar un numero entero");
		return;
	}

	var  table_size = parseInt(input);
	var table = document.createElement("table");
	document.body.appendChild(table);

	table.setAttribute("border", "1");

	for(var i=0;i<table_size; i++){
		var new_tr = document.createElement("tr");
		for(j=0; j<table_size; j++){
			var contenido = 0;
		    if (i==0||i==table_size-1||j==0||j==table_size-1) {
		    	contenido = 1;
		    }

			var new_td = document.createElement("td");
			new_td.innerHTML = '<span style="font-family: arial; color: red;" onclick="celda_click(this)">'+contenido+'</span>';
			new_tr.appendChild(new_td);
		}
		table.appendChild(new_tr);
	}
})();