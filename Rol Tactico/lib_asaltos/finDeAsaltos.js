
[h: ids = getWithState("Sangrando")]

<!-- Calculo perdida de puntos de vida or sangre -->
[r, foreach(id, ids, ""): PerderPV( getName(id), getProperty( "Sangre", getName(id) )) ]

[h: ids = getWithState("Aturdido","json")]
[h, if(pausear()==1): pause("ids")]
[h: ids2 = listAppend(ids,getWithState("Aturdido y Sin Poder parar","json"))]
[h, if(pausear()==1): pause("ids2")]
[h: ids = json.union(ids,ids2)]

[h: ids3 = listAppend(ids,getWithState("Obligado a parar","json"))]
[h, if(pausear()==1): pause("ids3")]
[h: ids = json.union(ids,ids3)]

[h, if(pausear()==1): pause("ids")]
[r, foreach(id, ids, ""),code:{
	[h: switchToken (getName(id))]
	[h: Aturdimiento= Aturdimiento-1 ]
	[h, if( Aturdimiento == 0 ), code:{ 		
	  [h:setState("Aturdido", 0)]
	  [h:setState("Aturdido y Sin Poder parar", 0)]
	  [h:setState("Obligado a parar", 0)];
	  [r:token.name] ya se encuentra enfocado.
	}]	
}]
<!-- Reinicio los toknes en la iniciativa --> 
[h: json = getInitiativeList() ]
[h:tokens = json.get(json, "tokens")]
[h, foreach(item, tokens, "<br>"),code:{ 
	[h: idTok = json.get(item,"tokenId")]
	[h: tok = getName(idTok)]
	[h: pt = getPropertyType(idTok)]
	
	[if (pt =="Npc" ||  pt=="Jugador"   ),code:{
			[h, if(pausear()==1): pause("tok")]
		[h: switchToken (tok)]
		[h:GolpeActual = setStrProp(GolpeActual,"countAtaques",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"pasos",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"cambioArma",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"cambioAccion",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"boUsada",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"agiUsada",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"escudoUsado",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"danioRecibido",0)]	
		[h:GolpeActual = setStrProp(GolpeActual,"enemigosAtacados","")]	
<!-- Cambios relacionados al movimiento-->
		[h: mo = CalcMovimiento(tok)]
		[h: setProperty("Accion","")]
		[h: setProperty("Movement",mo)]
    	[h: setProperty("ActualMove",mo) ]
		[h: setProperty("MoveCount", 0)	]	

	}]	
} ]


