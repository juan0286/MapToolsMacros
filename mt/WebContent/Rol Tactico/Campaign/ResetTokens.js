[h: json = getInitiativeList() ]
[h:tokens = json.get(json, "tokens")]
[h, foreach(item, tokens, "<br>"),code:{ 
	[h: idTok = json.get(item,"tokenId")]
	[h: tok = getName(idTok)]
	[h: pt = getPropertyType(idTok)]
	
	[if (pt =="Npc" ||  pt=="Jugador"   ),code:{
		
		[h: mo = CalcMovimiento(tok)]
		[h: setProperty("Accion","", idTok)]
		[h: setProperty("Movement",mo, idTok)]
	    	[h: setProperty("ActualMove",mo, idTok) ]
		[h: setProperty("MoveCount", 0,idTok)	]	
	}]
	
} ]
[h: showStatusFrame()]
