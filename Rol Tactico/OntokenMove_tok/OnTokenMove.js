
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
[h, if(usedMov >  mov && usedMov <=  mov*1.5 ): isRango =  1; isRango =  0]
[h, if(usedMov >  mov*1.5 && usedMov <=  mov*2.5 ): isRango3 =  1; isRango3 =  0]
[h, if(usedMov >  mov*2.5): isRango4 =  1; isRango4 =  0]



[h, if( isInictiavaOken ): 
mje = MoverToken(isSufiscientesPuntos,name,usedMov) ; 
mje= '<span style="coloh:red;font-weight:bold;">'+ name +' Debe esperar su turno.</span>']

[h, if( isRango ),code:{
[macro("RangoDos@lib:onTokenMove"):1] 
}]

[h,if( isSufiscientesPuntos == 0 || isInictiavaOken == 0): isNoMover=1]
[h:tokens.denyMove = isNoMover]
[r,if( isPC()): Mje]