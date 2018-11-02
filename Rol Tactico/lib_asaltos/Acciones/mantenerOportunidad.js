<!-- mantenerOportunidad-->
<!-- esta funcion se ejecuta cuando se cambia de asalto, a cada personaje que este esperando oportunidad le suma la iniciativa del token actual +1 -->

[h: tokenAccion = getInitiativeToken() ]
[h: tokenAccion = getName(tokenAccion)]
[h, token(tokenAccion): iniciativaActualPlus1 = number(getInitiative()) - 1]

[h: json = getInitiativeList() ]
[h: tokens = json.get(json, "tokens")]
[r, foreach(item, tokens, "<br>"),code:{ 
	[h: idTok = json.get(item,"tokenId")]
	[h: holdTok = json.get(item,"holding")]	
	[r: holdTok]
	[h, if( holdTok == 'true' ),code:{ [ token(idTok):setInitiative(iniciativaActualPlus1)]}]	
}]	
[h: sortInitiative()]