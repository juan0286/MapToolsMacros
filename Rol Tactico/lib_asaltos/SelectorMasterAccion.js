<!-- SelectorMasterAccion - Selector del master para decidir las acciones -->

<!-- Acciones posibles -->
[h: listaAcciones = "Cargar Sortilegio,Lanzar Sortilegio, Cargar Proyectil, Disparar Proyectil,Movimiento y maniobra,Combate CAC,Desplzamiento,Movimiento Estatico"]
[h: acciones = "cargar_sort,lanzar_sort,cargar_proy,disparar_proy,mov_manio,ataque_cac,desplazamiento,mov_estatico"]

[H: inputStr = "[]"]
<!-- Recorro todos los personajes en la iniciativa -->
[h: json = getInitiativeList() ]
[h:tokens = json.get(json, "tokens")]

[h, foreach(item, tokens, "<br>"),code:{ 
	[h: idTok = json.get(item,"tokenId")]
	[h: tok = getName(idTok)]

	[H: inputStr = json.append(inputStr,"lblNombre_"+idTok+"|"+tok+"|-|LABEL|SPAN=TRUE")]	
	[h: inputStr = json.append(inputStr,"accion_"+idTok+"|"+listaAcciones+"|Accion|LIST")]
}]


<!-- ********** lanzo el input  **********-->
[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

<!-- ********** busco resultado para cada token  **********-->

[h, foreach(item, tokens, "<br>"),code:{ 

	[h: idTok = json.get(item,"tokenId")]
	[h: tok = getName(idTok)]

	
	
	[h: varAccion = "accion_"+idTok]	
	[h: prp = strPropFromVars(varAccion,"UNSUFFIXED")]
	[h: acc =getStrProp(prp,varAccion)]
	[h: a = listGet(acciones,acc)]
	[r: guardarAccion("cargar_sort","Neo")]
}]
