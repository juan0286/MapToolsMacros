[h: name = getName()]
[h: id = currentToken()]
[h: puntosMov = getProperty("Movement")]
[h: mje = ""]

[h: isEnGrilla=isSnapToGrid()]
[h, if( isEnGrilla ):new_moveCount =  getMoveCount(); new_moveCount = 0]
[h: new_moveCount = new_moveCount +  getProperty("MoveCount")]


[h: isNoMover=0]
[h, if( new_moveCount <= puntosMov*2): isSufiscientesPuntos =  1; isSufiscientesPuntos =  0]
[h, if( id == getInitiativeToken() ): isInictiavaOken =  1; isInictiavaOken =  0]

[h, if( isInictiavaOken ): 
r_mje = MoverToken(name,new_moveCount) ; 
mje = '<span style="coloh:red;font-weight:bold;">'+ name +' Debe esperar su turno.</span>']

[h,if( isSufiscientesPuntos == 0 || isInictiavaOken == 0): isNoMover=1]
[h, if (isGM()): isNoMover=0 ]
[h:tokens.denyMove = isNoMover]
[r: Mje]