[h: json = getInitiativeList() ]
[h:tokens = json.get(json, "tokens")]
[h, foreach(item, tokens, "<br>"),code:{ 
	[h: idTok = json.get(item,"tokenId")]
	[h: tok = getName(idTok)]
	[h: pt = getPropertyType(idTok)]
	
	[if (pt =="Npc" ||  pt=="Jugador"   ),code:{
[h, if(pausear()==1): pause("tok")]
		[h: mo = CalcMovimiento(tok)]
		[h: setProperty("Accion","", idTok)]
		[h: setProperty("Movement",mo, idTok)]
	    	[h: setProperty("ActualMove",mo, idTok) ]
		[h: setProperty("MoveCount", 0,idTok)	]	
		[h: switchToken (tok)]
		[h:GolpeActual = setStrProp(GolpeActual,"countAtaques",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"pasos",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"cambioArma",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"cambioAccion",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"boUsada",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"agiUsada",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"escudoUsado",0)]
		[h:GolpeActual = setStrProp(GolpeActual,"danioRecibido",0)]		
	}]	
} ]

