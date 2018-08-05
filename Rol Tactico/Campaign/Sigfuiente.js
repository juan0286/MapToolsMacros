[h: round = getInitiativeRound()]
[h:nextInitiative()]
[h: tok_id = getInitiativeToken() ]
[h: tokName = getName(tok_id) ]
[h: roundNew = getInitiativeRound()]
[ if( roundNew > round ), CODE: {	
    [macro("ResetTokens@campaign"): 1]
    [macro("finAsalto@campaign"): 1]
	[ if( tokName == "ACCION" ), CODE: {	
	<!-- Envio el selector de acciones a los jugadores -->
	[r: macroLink("Hacer Click!", "SelCambioAccion@Lib:asaltos")]
	};{
	<!-- Envio el selector de Cambio de Accion a los jugadores -->		
	[r: macroLink("Hacer Click!", "SelAccion@Lib:asaltos")]
	}]	
};{
	[h: acc = getProperty("Accion", tok_id)]	
	[h: val = getValIniciativeToken(tokName)]
	[h: accionActual(tokName,val)]	
}]


[h, if( isPC(tok_id) ): goto(tok_id)]