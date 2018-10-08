[h: round = getInitiativeRound()]
[h: tok_id = getInitiativeToken() ]
[h, if(pausear()==1): pause("tok_id")]
[h:nextInitiative()]
[h: tok_id = getInitiativeToken() ]
[h: tokName = getName(tok_id) ]
[h: roundNew = getInitiativeRound()]

[h, if(getName(tok_id) == "ACCIONES"),code:{
	[h, token(tokName): a = getProperty("Accion")]
	[h, token(tokName): puntosMov = getProperty("Movement")]
	[h, if(a != "desplazamiento"): pm = getStrProp(a,"pasos")]
	[h, if(a == "mov_manio"): pm = CalcMovimiento(tok) / 2]
	[h, if(a == "desplazamiento"): puntosMov = CalcMovimiento(tok)]
	 [h, if(pausear()==1): pause("pm")]
	[h, token(tokName) :  setProperty("ActualMove",pm)]
}]


[ if( roundNew > round ), CODE: {	
   
    [h: ResetTokens()]
    [r: finAsalto()]

	<!-- Envio el selector de acciones a los jugadores -->	  
	[h: broadcast(macroLink("<color='red'>", "puntoMuertoFrame@Lib:personajes", 'none', '', ""), getAllPlayerNames()) ]
	[r: macroLink("Seleccion de Accion!", "SelAccion@Lib:asaltos")]
	[h: SelAccion()]
	[r: SelectorMasterAccion()]

};{	
	[h: acc = getProperty("Accion", tok_id)]
	[h: val = getValIniciativeToken(tokName)]
	
	[h:goto(tokName)]
	
	[h, if( isPC(tok_id) ): broadcast(macroLink("<color='red'>", "centrarEn@lib:personajes", 'none', tokName, ""), getAllPlayerNames()) ]

}]


