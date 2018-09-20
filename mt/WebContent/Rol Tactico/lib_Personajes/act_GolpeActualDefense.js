<!-- act_GolpeActualDefense-->
[h: token = arg(0)]

[h: switchToken(token)]
[h: varsFromStrProp( GolpeActual )]
[h: ErrorMsg(isNumber(boUsada),"Error en act_GolpeActualDefense.("+boUsada+") boUsada no es numero")] 
[h: ErrorMsg(isNumber(boTmp),"Error en act_GolpeActualDefense.("+boTmp+") boTmp no es numero")] 
[h: ErrorMsg(isNumber(agiTmp),"Error en act_GolpeActualDefense.("+agiTmp+") agiTmp no es numero")] 
[h: ErrorMsg(isNumber(agiUsada),"Error en act_GolpeActualDefense.("+agiUsada+") agiUsada no es numero")] 

[h, if(getStrProp(GolpeActual,"escTmp")!=""): GolpeActual = setStrProp(GolpeActual,"escudoUsado",escTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"boUsada",boUsada+boTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"agiUsada",agiUsada+agiTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"boTmp",0)]
[h: GolpeActual = setStrProp(GolpeActual,"bdTmp",0)]
[h: GolpeActual = setStrProp(GolpeActual,"agiTmp",0)]
[gt: "Acutualize el GA Def. de " + token]