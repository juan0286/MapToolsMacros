<!-- accionesPosiblesProgressRoundFrame -->

[h: tokenAccion = getInitiativeToken() ]
[h: tokenAccion = getName(tokenAccion)]
[h: switchToken(tokenAccion)]
[h, if( pausear() == 1 ): pause("tokenAccion") ]

[h, if(getState("Aturdido")): isAturdido = 1 ; isAturdido = 0]
[h, if( getState("Aturdido y Sin Poder parar")): isAturdidoSinParar = 1 ; isAturdidoSinParar = 0]
[h, if( getState("Obligado a parar")): isObligadoParar = 1 ; isObligadoParar = 0]
[h, if( getState("Postrado")): isPostrado = 1 ; isPostrado = 0]
[h, if( getState("Derribado")): isDerribado = 1 ; isDerribado = 0]
[h, if( getState("Derrotado") || getState("Muerto")): isDerrotado = 1 ; isDerrotado = 0]

[h: mov = CalcMovimiento(tokenAccion)]

[h: nameArma1 = json.get(brazo1,"nombre")]
[h: nameArma2 = json.get(brazo2,"nombre")]

[h: temafondo = 1]
[h: temaBotones = 4]
[h: temaInfo = 3]
[h: acc = getAccion(tokenAccion)]
[h: acc_text = json.get(acc,"accion") ]
[h, if( pausear() == 1 ): pause("acc_text") ]

<!-- ******************* Personaje ******************-->
[r: rowPerso("<h1>"+tokenAccion+"</h1>|th|1",temaInfo)]

[r: rowPerso('Pun Vida:  <b>'+PV+' / '+MaxPV+'</b><br/>Pun Poder:  </span><b>'+PP+' / '+MaxPP+'</b>|td|1',temaInfo)]

[r: rowPerso(nameArma1+"<br/>"+nameArma2+"|td|1",temaInfo)]


[r, switch(acc_text),code:
case "cargar_sort": { 
	[r: rowPerso('<h2>Carga de Sortilegio</h2>|th|1',temafondo)]		
	
	[r: rowPerso('<span>Sortilegio</span>',temafondo)]		
	[h: sortilegioCargado=getStrProp(CargaSortilegio,"sortilegio")]
	[r: rowPerso('<b>'+sortilegioCargado+'</b>',temafondo)]		

	[h: costo=getStrProp(CargaSortilegio,"Nivel")]
	[r: rowPerso('<span>Costo: </span><b>'+costo+' PP</b>',temafondo)]		
			
	
	[r: showCargasSortilInRow(temafondo)]

	[r: rowPerso('<span>Movimiento </span><b>3 mts</b>',temafondo)]		
	[r, if( isGM() ): rowPerso('<input type="submit" name="Confirmar" value="Confirmar">|th|1',temaBotones) ]
	
};
case "lanzar_sort": { 
	[r: rowPerso('<h2>Lanzar Sortilegio</h2>|th|1',temafondo)]		
	
	[h: sortilegioCargado=getStrProp(CargaSortilegio,"sortilegio")]
	[r: rowPerso('<b>'+sortilegioCargado+'</b>',temafondo)]		
	
	[h: costo=getStrProp(CargaSortilegio,"Nivel")]
	[r: rowPerso('<span>Costo: </span><b>'+costo+' PP</b>',temafondo)]		
	
	[r: showCargasSortilInRow(temafondo)]	


	[r: rowPerso('<span>Movimiento</span><b> 6 mts</b>',temafondo)]		
		[h, if( pausear() == 1 ): pause("costo") ]
	[r, if( isGM() ): rowPerso('<input type="submit" name="Confirmar" value="Confirmar">|th|1',temaBotones) ]
};
case "cargar_proy": { 
	[r: rowPerso('<h2>Cargar Proyectil</h2>|th|1',temafondo)]		
	
	[r: rowPerso('<span>Cargas</span>',temafondo)]		
	[r: showCargasSortilInRow()]	


	[r: rowPerso('<span>Alcance</span>',temafondo)]		
	[r: showAlcancesInRow(brazo1) ]  
	
	[r: rowPerso('<span>Movimiento </span><b>3 Mts</b>',temafondo)]	
	

	[r, if( isGM() ): rowPerso('<input type="submit" name="Confirmar" value="Confirmar">|th|1',temaBotones) ]
};
case "disparar_proy": { 

	[r: rowPerso('<h2>Disparar Proyectil</h2>|th|1',temafondo)]		
	
	[r: rowPerso('<span>Cargas</span>',temafondo)]		
	[h: cantidadDeCargas=getStrProp(CargaSortilegio,"cargaProyectil")]
	[h, if(cantidadDeCargas==""): cantidadDeCargas = 0]
	[r: rowPerso('<b>'+cantidadDeCargas+'</b>',temafondo)]		

	[h, if(cantidadDeCargas < 1): bono = -25]
	[h, if(cantidadDeCargas > 0): bono = 0]	
	[r: rowPerso('<span>Bono: </span><b>'+bono+' BO</b>',temafondo)]			
	


	[r: rowPerso('<span>Alcance</span>',temafondo)]		
	[r: showAlcancesInRow(brazo1) ] 

	[r: rowPerso('<span>Movimiento </span><b>3 Mts</b>',temafondo)]		
	

	[r, if( isGM() ): rowPerso('<input type="submit" name="Confirmar" value="Confirmar">|th|1',temaBotones) ]

	
};
case "mov_manio": { 
	[h: aca = "mm"]
	[r: rowPerso('<h2>Movimiento o Maniobra</h2>|th|1',temafondo)]
		[h, if( pausear() == 1 ): pause("aca") ]
	[r: rowPerso('<span>MM actual= '+getMovMan(tokenAccion)+'</span>',temafondo)]
		[h, if( pausear() == 1 ): pause("aca") ]
	[r: rowPerso('<span>Dificultad</span>|td',temafondo)]

	[r: rowPerso('<span>Movimiento </span><b>'+mov/2+' mts</b>',temafondo)]	

	[r, if( isGM() ): rowPerso('<input type="submit" name="Confirmar" value="Confirmar">|th|1',temaBotones) ]
};
case "ataque_cac": { 

	[r: rowPerso('<h2>Combate C. A C.</h2>|th|1',temafondo)]


	<!-- Alcance Arrojadizo -->
	[r: rowPerso('<span>Alcance</span>',temafondo)]		

	[r: showAlcancesInRow(brazo1) ] 
	[r, if(nameArma1!=nameArma2):showAlcancesInRow(brazo2))]
	


	[r: rowPerso('<input type="submit" name="CombateCerrado" value="Combate Cerrado">|th|1',temafondo)]
	[r: rowPerso('<input type="submit" name="CombateAbierto" value="Combate Abierto">|th|1',temafondo)]
	[r: rowPerso('<input type="submit" name="TrucoPelea" value="Truco Pelea">|th|1',temafondo)]



	[r: rowPerso('<span>Movimiento </span><b>3 Mts</b>',temafondo)]		
	[r: rowPerso('<b>3 mts</b>',temafondo)]	

	[r, if( isGM() ): rowPerso('<input type="submit" name="atacar" value="atacar">|th|1',temafondo) ]
};
case "desplazamiento": { 

	[r: rowPerso('<h2>Desplazamiento</h2>|th|1',temafondo)]
	[r: rowPerso('<span>MM actual= '+getMovMan(tokenAccion)+'</span>',temafondo)]

	[r: rowPerso('<span>Movimiento </span>',temafondo)]

	[r: rowPerso('Caminando: <b>'+mov+' mts</b>',temafondo)]	
	[r: rowPerso('Trotando: <b>'+round(mov *1.5)+' mts</b>',temafondo)]	
	[r: rowPerso('Corriendo: <b>'+round(mov *2)+' mts</b>',temafondo)]	
	[r: rowPerso('Esprintando: <b>Mas de '+round(mov *2)+' mts</b>',temafondo)]	
	[r: rowPerso('<span>Esprintar requiere tirada MM</span>',temafondo)]

	[r, if( isGM() ): rowPerso('<input type="submit" name="Confirmar" value="Confirmar">|th|1',temaBotones) ]
};
case "mov_estatico": { 
	[r: rowPerso('<h2>Mov. Estatico</h2>|th|1',temafondo)]
	[r, if( isGM() ): rowPerso('<input type="submit" name="Confirmar" value="Confirmar">|th|1',temaBotones) ]
};
default: {
	[r: rowPerso('<h2>Mov. Estatico</h2>|th|1',temafondo)]
	[r, if( isGM() ): rowPerso('<input type="submit" name="Confirmar" value="Confirmar">|th|1',temaBotones) ]
	}]

<!-- ******************* Botones Fijos ******************-->
[r: rowPerso('<input type="submit" name="cambioAccion" value="Cambio de Accion"><br/><input type="submit" name="accionOportunidad" value="Esperar Oportunidad">|th|1',temaBotones)]
