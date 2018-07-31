<!-- getValIniciativeToken -->
[h: tokTarget = arg(0)]
[h: re= 0]
[h: json = getInitiativeList() ]
[h:tokens = json.get(json, "tokens")]
[foreach(item, tokens, "<br>"),code:{ 
	[h: idTok = json.get(item,"tokenId")]
	[h: tok = getName(idTok)]
	{tok} y {tokTarget}
	[if (tokTarget == tok): re = json.get(item,"iniciaive") ]	
} ]
[h:  macro.return = re]