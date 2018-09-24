[h: round = getInitiativeRound()]
[h: tok_id = getInitiativeToken() ]
[h, if(pausear()==1): pause("tok_id")]
[h:nextInitiative()]
[h: tok_id = getInitiativeToken() ]
[h: tokName = getName(tok_id) ]
[h: roundNew = getInitiativeRound()]
[ if( roundNew > round ), CODE: {	
    [h, if(pausear()==1): pause("roundNew")]
    
    [h: ResetTokens()]
    [r: finAsalto()]
    [h: broadcast(macroLink("<color='red'>", "puntoMuertoFrame@lib:personajes", 'none', tokName, ""), getAllPlayerNames()) ]
    [h, if(pausear()==1): pause("tokName")]
	<!-- Envio el selector de acciones a los jugadores -->	  
	[h, if( isPC(tok_id) ): broadcast(macroLink("<color='red'>", "centrarEn@lib:personajes", 'none', tokName, ""), getAllPlayerNames()) ]
	[r: macroLink("Seleccion de Accion!", "SelAccion@Lib:asaltos")]
	
};{	
	<!-- Si El frame de Punto muerto Sigue abierto, lo cierro. -->
	[h: broadcast(macroLink("<color='red'>", "cerrarPuntoMuertoFrame@lib:personajes", 'none', roundNew, ""), getAllPlayerNames())]
	
	<!-- Actualizo el frame de botones que permite a los jugadores Actuar -->
	[h: broadcast(macroLink("<color='red'>", "frameActuar@lib:personajes", 'none', tokName, ""), getAllPlayerNames()) ]
	

	[h: centrarEn(tokName)]	
	[h, if( isPC(tok_id) ): broadcast(macroLink("<color='red'>", "centrarEn@lib:personajes", 'none', tokName, ""), getAllPlayerNames()) ]

}]


