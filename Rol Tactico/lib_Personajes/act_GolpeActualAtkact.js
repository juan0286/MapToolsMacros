<!-- act_GolpeActualAtkact -->
[h: token = arg(0)]

[h: switchToken(token)]
[h: varsFromStrProp( GolpeActual )]
[h: ErrorMsg(isNumber(countAtaques),"Error en act_GolpeActualAtkact.("+countAtaques+") countAtaques no es numero")] 
[h: ErrorMsg(isNumber(boUsada),"Error en act_GolpeActualAtkact.("+boUsada+") boUsada no es numero")] 
[h: ErrorMsg(isNumber(boUsadaTmp),"Error en act_GolpeActualAtkact.("+boUsadaTmp+") boUsadaTmp no es numero")] 

[h: GolpeActual = setStrProp(GolpeActual,"countAtaques",countAtaques+1)]
[h: GolpeActual = setStrProp(GolpeActual,"boUsada",boUsada+boUsadaTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"boUsadaTmp",0)]
[h: GolpeActual = setStrProp(GolpeActual,"boTmp",0)]
[h: GolpeActual = deleteStrProp(GolpeActual,"tablaDanio")]
[h: GolpeActual = deleteStrProp(GolpeActual,"target")]
[h: GolpeActual = deleteStrProp(GolpeActual,"tablaCritico")]
[gt: "Acutualize el GA de Atk " + token]