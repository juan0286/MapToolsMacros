[h: round = getInitiativeRound()]
[h:nextInitiative()]
[h: tok = getInitiativeToken() ]
[h: roundNew = getInitiativeRound()]
[ if( roundNew > round ), CODE: {	
    [macro("ResetTokens@campaign"): 1]
    [macro("finAsalto@campaign"): 1]
	[ if( getInitiativeToken == "ACCION" ), CODE: {	
	<!-- Envio el selector de acciones a los jugadores -->
	
	};{
	<!-- Envio el selector de Cambio de Accion a los jugadores -->		
	[r: macroLink("Hacer Click!", "SelAccion@Lib:asaltos")]
	}]	
};{
	[h: acc = getProperty("Accion", tok)]
	[h: accionActual()]	
}]
[ if( getInitiativeToken == "ACCION" ), CODE: {	
	<!-- Envio el selector de acciones a los jugadores -->
	[r: macroLink("Hacer Click!", "SelCambioAccion@Lib:asaltos")]
}]

[h, if( isPC(tok) ): goto(getInitiativeToken())]

