<!-- getValIniciativeToken -->
[h: tokTarget = arg(0)]
{tokTarget}
[h: re= 0]
[h: json = getInitiativeList() ]
[h:tokens = json.get(json, "tokens")]
[h,foreach(item, tokens, "<br>"),code:{ 
	[h: idTok = json.get(item,"tokenId")]
	[h: tok = getName(idTok)]	
	[if (tokTarget == tok): re = json.get(item,"initiative")]	
} ]
[h: macro.return = re]