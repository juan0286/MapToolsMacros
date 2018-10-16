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

[h: temafondo = 1]
[h: acc = getAccion(tokenAccion)]
[h: acc_text = json.get(acc,"accion") ]


<!-- ******************* Botones Fijos ******************-->
[r: rowPerso('<input type="submit" name="cambioAccion" value="Cambio de Accion">|th|1',temafondo)]
[r: rowPerso('<input type=submit" name="accionOportunidad" value="Esperar Oportunidad">|th|1',temafondo)]
[r: rowPerso('<span>Pun Vida:</span><b>'+PV+' / '+MaxPV+'</b>|th|1',temafondo)]
[r: rowPerso('<span>Pun Poder:</span><b>'+PP+' / '+MaxPP+'</b>|th|1',temafondo)]


[r, switch(acc_text),code:
case "cargar_sort": { 
	[r: rowPerso('<h3>Carga de Sortilegio</h3>|th|1',temafondo)]		
	
	[r: rowPerso('<span>Sortilegio</span>',temafondo)]		
	[h: sortilegioCargado=getStrProp(Cargas,"sortilegio")]
	[r: rowPerso('<b>'+sortilegioCargado+'</b>',temafondo)]		

	[r: rowPerso('<span>Costo</span>',temafondo)]		
	[h: costo=getStrProp(Cargas,"costoSortilegio")]
	[r: rowPerso('<b>'+costo+' PP</b>',temafondo)]		

	[r: rowPerso('<span>Cargas</span>',temafondo)]		
	[h: cantidadDeCargas=getStrProp(Cargas,"cargaSortilegio")]
	[h, if(cantidadDeCargas==""): cantidadDeCargas = 0]
	[r: rowPerso('<b>'+cantidadDeCargas+'</b>',temafondo)]		


	[h, if(cantidadDeCargas < 1): bono = -30]
	[h, if(cantidadDeCargas == 1): bono = -15]
	[h, if(cantidadDeCargas == 2): bono = -0]
	[h, if(cantidadDeCargas == 3): bono = +10]
	[h, if(cantidadDeCargas > 3): bono = +20]
	[r: rowPerso('<span>Bono</span>',temafondo)]			
	[r: rowPerso('<b>'+bono+'</b>',temafondo)]		

	[r: rowPerso('<span>Movmiento Permitido</span>',temafondo)]		
	[r: rowPerso('<b>3 mts</b>',temafondo)]

};
case "lanzar_sort": { 
	[r: rowPerso('<h3>Lanzar Sortilegio</h3>|th|1',temafondo)]		
	
	[r: rowPerso('<span>Sortilegio</span>',temafondo)]		
	[h: sortilegioCargado=getStrProp(Cargas,"sortilegio")]
	[r: rowPerso('<b>'+sortilegioCargado+'</b>',temafondo)]		

	[r: rowPerso('<span>Costo</span>',temafondo)]		
	[h: costo=getStrProp(Cargas,"costoSortilegio")]
	[r: rowPerso('<b>'+costo+' PP</b>',temafondo)]		


	[r: rowPerso('<span>Cargas</span>',temafondo)]		
	[h: cantidadDeCargas=getStrProp(Cargas,"cargaSortilegio")]
	[h, if(cantidadDeCargas==""): cantidadDeCargas = 0]
	[r: rowPerso('<b>'+cantidadDeCargas+'</b>',temafondo)]		


	[h, if(cantidadDeCargas < 1): bono = -30]
	[h, if(cantidadDeCargas == 1): bono = -15]
	[h, if(cantidadDeCargas == 2): bono = -0]
	[h, if(cantidadDeCargas == 3): bono = +10]
	[h, if(cantidadDeCargas > 3): bono = +20]
	[r: rowPerso('<span>Bono</span>',temafondo)]			
	[r: rowPerso('<b>'+bono+'</b>',temafondo)]		


	[r: rowPerso('<span>Movmiento Permitido</span>',temafondo)]		
	[r: rowPerso('<b>6 mts</b>',temafondo)]
};
case "cargar_proy": { 
	[r: rowPerso('<h3>Cargar Proyectil</h3>|th|1',temafondo)]		
	
	[r: rowPerso('<span>Arma</span>',temafondo)]		
	[h: armaCargada=getStrProp(Cargas,"armaCargada")]
	[r: rowPerso('<b>'+armaCargada+'</b>',temafondo)]		


	[r: rowPerso('<span>Cargas</span>',temafondo)]		
	[h: cantidadDeCargas=getStrProp(Cargas,"cargaProyectil")]
	[h, if(cantidadDeCargas==""): cantidadDeCargas = 0]
	[r: rowPerso('<b>'+cantidadDeCargas+'</b>',temafondo)]		

	[h, if(cantidadDeCargas < 1): bono = -25]
	[h, if(cantidadDeCargas > 0): bono = 0]	
	[r: rowPerso('<span>Bono</span>',temafondo)]			
	[r: rowPerso('<b>'+bono+' BO</b>',temafondo)]	


	[r: rowPerso('<span>Alcance</span>',temafondo)]		
	[h: alcances = json.get(brazo1,"alcance")]
	[r, count(countStrProp(alcances),""),code:	{
		  [h: rango = number(indexKeyStrProp(alcances, roll.count))]
		  [h: bonif = indexValueStrProp(alcances, roll.count)]
		  [h, if(bonif>0): simbolo = "+" ; simbolo = ""] 
		  [r: rowPerso('<span>'+rango+' Mts   -> '+simbolo+bonif+' bo</span>',3)]		
	}]  
	
	[r: rowPerso('<span>Movmiento Permitido</span>',temafondo)]		
	[r: rowPerso('<b>3 mts</b>',temafondo)]
};
case "disparar_proy": { 

	[r: rowPerso('<h3>Cargar Proyectil</h3>|th|1',temafondo)]		
	
	[r: rowPerso('<span>Arma</span>',temafondo)]		
	[h: armaCargada=getStrProp(Cargas,"armaCargada")]
	[r: rowPerso('<b>'+armaCargada+'</b>',temafondo)]		


	[r: rowPerso('<span>Cargas</span>',temafondo)]		
	[h: cantidadDeCargas=getStrProp(Cargas,"cargaProyectil")]
	[h, if(cantidadDeCargas==""): cantidadDeCargas = 0]
	[r: rowPerso('<b>'+cantidadDeCargas+'</b>',temafondo)]		

	[h, if(cantidadDeCargas < 1): bono = -25]
	[h, if(cantidadDeCargas > 0): bono = 0]	
	[r: rowPerso('<span>Bono</span>',temafondo)]			
	[r: rowPerso('<b>'+bono+' BO</b>',temafondo)]	


	[r: rowPerso('<span>Alcance</span>',temafondo)]		
	[h: alcances = json.get(brazo1,"alcance")]
	[r, count(countStrProp(alcances),""),code:	{
		  [h: rango = number(indexKeyStrProp(alcances, roll.count))]
		  [h: bonif = indexValueStrProp(alcances, roll.count)]
		  [h, if(bonif>0): simbolo = "+" ; simbolo = ""] 
		  [r: rowPerso('<span>'+rango+' Mts   -> '+simbolo+bonif+' bo</span>',3)]		
	}]  

	[r: rowPerso('<span>Movmiento Permitido</span>',temafondo)]		
	[r: rowPerso('<b>3 mts</b>',temafondo)]	

	[r: rowPerso('<input type="submit" name="dispararProyectil" value="Disparar">|th|1',temafondo)]

};
case "mov_manio": { 
	[r: rowPerso('<h3>Movimiento o Maniobra</h3>|th|1',temafondo)]	
	[r: rowPerso('<span>MM= '+getMovMan(tokenAccion)+'</span>',temafondo)]		
	
	
	[r: rowPerso('<span>Movmiento Permitido</span>',temafondo)]		
	[r: rowPerso('<b>'+mov/2+' mts</b>',temafondo)]	

};
case "ataque_cac": { 

[r: rowPerso('<input type="submit" name="atacar" value="Disparar">|th|1',temafondo)]

[r: rowPerso('<span>Movmiento Permitido</span>',temafondo)]		
	[r: rowPerso('<b>3 mts</b>',temafondo)]	


};
case "desplazamiento": { 


};
case "mov_estatico": { 
	[h: propsAccion =  setStrProp("", "accion", acc)]
	[h: propsAccion =  setStrProp(PropsAccion,"desc",1)]
	[h: setInitiative(mm + agi + bonoIniciativa)]	};
default: { 
	[h: propsAccion =  setStrProp("", "accion", acc)]
	[h: propsAccion =  setStrProp(PropsAccion,"desc",1)]
	[h: setInitiative(mm + agi + bonoIniciativa)]
	[h: pasos=0]
}]

