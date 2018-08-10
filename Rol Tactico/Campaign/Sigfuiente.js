[h: round = getInitiativeRound()]
[h:nextInitiative()]
[h: tok_id = getInitiativeToken() ]
[h: tokName = getName(tok_id) ]
[h: roundNew = getInitiativeRound()]
[ if( roundNew > round ), CODE: {	
    [macro("ResetTokens@campaign"): 1]
    [macro("finAsalto@campaign"): 1]
	<!-- Envio el selector de acciones a los jugadores -->
	 [macro("linkSeleccionar@campaign"): 1]	 
};{
	<!-- Envio el selector de Cambio de Accion a los jugadores -->		
[macro("linkCambios@campaign"): 1] 
	[h: acc = getProperty("Accion", tok_id)]	
	[h: val = getValIniciativeToken(tokName)]
	[h: accionActual(tokName,val)]	
}]


[h, if( isPC(tok_id) ): goto(tokName)]

