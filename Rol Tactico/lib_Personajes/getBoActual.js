<!-- getBoActual -->
[h: tokName = arg(0)]
[h: arma = arg(1)]
[h,if(json.type(arma)=="OBJECT"): t=1 ; t=0]
[h: ErrorMsg(t,"Error en getBOActual, No es un Arma"  )]
[h: ta =getStrProp(getProperty("GolpeActual",tokName),"tipoAtaque" )]
[h: ErrorMsg(length(ta),"Error en getBOActual, El GolpEActual no tiene tipoAtaque"  )]


[h: tbo =json.get(arma,"tipoBO" )]
[h, if( tbo =="BO_PELEA"): ta = "pelea" ]

[h, switch(ta),code:
case "pelea": { [ tbo = tbo] };
case "2Armas": {  [tbo = "BO_2ARMAS" ] };
case "2Manos": { [tbo = "BO_2MAN" ]};
default: { 	[ tbo = tbo]	}]

[if (isPC(tokName)): bo = getHoja(tbo,tokName) ; bo = getProperty(tbo,tokName)]	

[h: acti = getProperty("actividad",tokName)]
[h, if(!isNumber(acti)): acti = 0]
[h, if(pausear()==1): pause("tbo","arma","ta","bo","acti")]
[h: bono = getProperty("bonoBo",tokName)]
[h, if(pausear()==1): pause("tbo","arma","ta","bo","acti")]
[h, if(!isNumber(bono)): bono = 0]

[h, if(pausear()==1): pause("tbo","arma","ta","bo","acti","bono")]

[h: boActual = number(bo) + number(acti) + number(bono)]
[h: macro.return =boactual]