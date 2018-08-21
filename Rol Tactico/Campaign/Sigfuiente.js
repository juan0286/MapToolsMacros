[h: round = getInitiativeRound()]
[h: tok_id = getInitiativeToken() ]
[h, if(getName(tok_id) == "ACCIONES"),code:{
	[h: broadcast(macroLink("<color='red'>", "SelCambioAccion@lib:asaltos", 'none', '', ""), getAllPlayerNames()) ]
	[h: SelCambioAccion()]	
}]
[h:nextInitiative()]
[h: tok_id = getInitiativeToken() ]
[h: tokName = getName(tok_id) ]
[h: roundNew = getInitiativeRound()]
[ if( roundNew > round ), CODE: {	
    [macro("ResetTokens@campaign"): 1]
    [macro("finAsalto@campaign"): 1]
	<!-- Envio el selector de acciones a los jugadores -->	  
	 [h: broadcast(macroLink("<color='red'>", "selAccion@lib:asaltos", 'none', '', ""), getAllPlayerNames()) ]
	[h: SelAccion()]
};{	
	[h: acc = getProperty("Accion", tok_id)]
	[h: val = getValIniciativeToken(tokName)]
	[h: accionActual(tokName,val)]	
}]

[h:goto(tokName)]
[h, if( isPC(tok_id) ): broadcast(macroLink("<color='red'>", "centrarEn@lib:personajes", 'none', tokName, ""), getAllPlayerNames()) ]
