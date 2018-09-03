<!-- getBoActual -->
[h: tokName = arg(0)]
[h: ta =getStrProp(getProperty("GolpeActual",tokName),"tipoAtaque" )]
[h: tbo =getStrProp(getProperty("brazo1",tokName),"tipoBO" )]

[h, switch(ta),code:
case "2Armas": { 
	[bo = getHoja("BO_2ARMAS",tokName)]
};
case "2Manos": { 
	[h:bo = getHoja("BO_2MAN",tokName)]	
};
case "1Mano": { 
	[h: bo = getHoja(tbo,tokName)]	
};
default: { 
	[h: bo = -25]	
}]
[h:acti = getProperty("actividad",tokName)]
[h:bono = getProperty("bonoBo",tokName)]

[h:pause("bo","act","bono")]

[h: boActual = bo + number(acti) + number(bono)]
[h: macro.return =boactual]