<!-- getBoActual -->
[h: tokName = arg(0)]
[h: arma = arg(1)]
[h,if(json.type(arma)=="OBJECT"): t=1 ; t=0]
[h: ErrorMsg(t,"Error en getBOActual, No es un Arma"  )]
[h: ta =getStrProp(getProperty("GolpeActual",tokName),"tipoAtaque" )]
[h: ErrorMsg(length(ta),"Error en getBOActual, El GolpEActual no tiene tipoAtaque"  )]


[h: tbo =json.get(arma,"tipoBO" )]
[h, if(json.get(arma,"tipoBO" ) =="BO_PELEA"): ta = "pelea" ]

[h, switch(ta),code:
case "pelea": { 
	[if (isPC(tokName)): bo = getHoja("BO_2MAN",tokName) ; bo = getProperty(tbo,tokName)]
};
case "2Armas": { 
	[if (isPC(tokName)): bo = getHoja("BO_2ARMAS",tokName) ; bo = getProperty("BO_2ARMAS",tokName)]
};
case "2Manos": { 
	[bo = getHoja("BO_2MAN",tokName)]	
	[if (isPC(tokName)): bo = getHoja("BO_2MAN",tokName) ; bo = getProperty("BO_2MAN",tokName)]
};
case "1Mano": { 
	[if (isPC(tokName)): bo = getHoja("BO_2MAN",tokName) ; bo = getProperty(tbo,tokName)]	
};
default: { 
	[ bo = -25]	
}]

[h:acti = getProperty("actividad",tokName)]
[h, if(!isNumber(acti)): acti = 0]
[h:bono = getProperty("bonoBo",tokName)]
[h, if(!isNumber(bono)): bono = 0]

[h: boActual = number(bo) + number(acti) + number(bono)]
[h: macro.return =boactual]