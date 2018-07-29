
[h: permitMover = 0]
[h: usedMov = 1]
[h: name = getName()]
[h: id = currentToken()]
[h: mov = getProperty("ActualMove")]
[h: mje = ""]

[h: isNoMover=0]
[h, if( id == getInitiativeToken() ): isInictiavaOken =  1; isInictiavaOken =  0]
[h: isEnGrilla=isSnapToGrid()]
[h, if( isEnGrilla ):usedMov =  getMoveCount()]

[h, if(usedMov <=  mov): isSufiscientesPuntos =  1; isSufiscientesPuntos =  0]


[h,if( isSufiscientesPuntos && isInictiavaOken ): mje = MoverToken(isSufiscientesPuntos,name,usedMov); isNoMover=1]

[h, if( isInictiavaOken == 0 ): mje= '<span style="coloh:red;font-weight:bold;">'+ name +' Debe esperar su turno.</span>']

[h:tokens.denyMove = isNoMover]
[r: mje]