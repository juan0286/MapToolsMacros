<!-- actuarOportunidad -->
[h: setInitiativeHold(0) ]
{getName(getInitiativeToken())} Realiza la Accion que esperaba.

[h: tokenAccion = getInitiativeToken() ]
[h: tokenAccion = getName(tokenAccion)]
[h, token(tokenAccion): iniciativaActualPlus1 = number(getInitiative()) + 1]


[h: arrHoldTokens = ""]
[h: prpTokens = ""]
[h: posicion=0]
[h: json = getInitiativeList() ]
[h: tokens = json.get(json, "tokens")]
[r, foreach(item, tokens, "<br>"),code:{ 

	[h: idTok = json.get(item,"tokenId")]
	[h: idTok = json.get(item,"position")]
	[h: tokName=getName(idTok)]
	[h: holdTok = json.get(item,"holding")]	
	
	[h, if( holdTok == 'true' ): listAppend(arrHoldTokens,tokName)]	
	[h, if( holdTok == 'true' ): setStrProp(prpTokens,tokName,posicion)]	
	[h: posicion = posicion +1]
}]	

[h: ErrorMsg(listCount(arrHoldTokens),"No existe ningun personaje esperando accion de oportunidad")]


<!-- ********** Invoco el Input  **********-->
[H: inputStr = "[]"]

[h: inputStr = json.append(inputStr,"pjSeleccionado|"+ arrHoldTokens +"|Quien realizará la accion de oportunidad? |LIST|SELECT=0 VALUE=STRING")]

[H: input = input(json.toList(inputStr,"##"))]

[h: abort(input)]

[h: token(pjSeleccionado):setInitiative(iniciativaActualPlus1)]
[h: posTokenAccion = getStrProp(prpTokens,pjSeleccionado)]
[h: sortInitiative()]
[h: setCurrentInitiative(posTokenAccion)]
[h: ProgressRoundFrame()]