[h: round = getInitiativeRound()]
[h:nextInitiative()]
[h: tok = getInitiativeToken() ]
[h: roundNew = getInitiativeRound()]
[ if( roundNew > round ), CODE: {	
    [macro("ResetTokens@campaign"): 1]
    [macro("finAsalto@campaign"): 1]
	[ if( tok == "ACCION" ), CODE: {	
	<!-- Envio el selector de acciones a los jugadores -->
	[r: macroLink("Hacer Click!", "SelCambioAccion@Lib:asaltos")]
	};{
	<!-- Envio el selector de Cambio de Accion a los jugadores -->		
	[r: macroLink("Hacer Click!", "SelAccion@Lib:asaltos")]
	}]	
};{
	[h: acc = getProperty("Accion", tok)]
	[h: accionActual(tok,getValIniciativeToken(tok))]	
}]


[h, if( isPC(tok) ): goto(tok)]
