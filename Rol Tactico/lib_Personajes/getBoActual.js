<!-- getBoActual -->
[h: tokName = arg(0)]
[h: arma = arg(1)]
[h,if(json.type(arma)): t =1 ; t=0]
[h: ErrorMsg(t,"Error en getBOActual, No es un Arma"  )]
[h: ta =getStrProp(getProperty("GolpeActual",tokName),"tipoAtaque" )]
[h: ErrorMsg(length(ta),"Error en getBOActual, El GolpEActual no tiene tipoAtaque"  )]

[h: tbo =getStrProp(arma,"tipoBO" )]

[h, switch(ta),code:
case "2Armas": { 
	[if (isPC(tokName)): bo = getHoja("BO_2ARMAS",tokName) ; bo = getProperty("BO_2ARMAS")]
};
case "2Manos": { 
	[bo = getHoja("BO_2MAN",tokName)]	
	[if (isPC(tokName)): bo = getHoja("BO_2MAN",tokName) ; bo = getProperty("BO_2MAN")]
};
case "1Mano": { 
	[if (isPC(tokName)): bo = getHoja("BO_2MAN",tokName) ; bo = getProperty(tbo)]	
};
default: { 
	[ bo = -25]	
}]
[h:acti = getProperty("actividad",tokName)]
[h:bono = getProperty("bonoBo",tokName)]

[h:pause("bo","act","bono")]

[h: boActual = bo + number(acti) + number(bono)]
[h: macro.return =boactual]