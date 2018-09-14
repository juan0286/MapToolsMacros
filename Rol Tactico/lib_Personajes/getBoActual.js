<!-- getBoActual -->
[h: tokName = arg(0)]
[h: arma = arg(1)]
[h: br=""]

[h,if(json.type(arma)=="OBJECT"): t=1 ; t=0]
[h: ErrorMsg(t,"Error en getBOActual, No es un Arma"  )]
[h: ta =getStrProp(getProperty("GolpeActual",tokName),"tipoAtaque" )]
[h: ErrorMsg(length(ta),"Error en getBOActual, El GolpEActual no tiene tipoAtaque"  )]


[h: tbo =json.get(arma,"tipoBO" )]

[h, if(ta =="2Armas" && tbo != "BO_PELEA"): tbo = "BO_2ARMAS"]
[h, if(ta =="2Manos" && tbo != "BO_PELEA" ): tbo = "BO_2MAN"]

[h, if(pausear()==1): pause("tbo","arma","ta")]
[h, if (isPC(tokName)): bo = getHoja(tbo,tokName) ; bo = getProperty(tbo,tokName)]	

[h: acti = getProperty("actividad",tokName)]
[h, if(!isNumber(acti)): acti = 0]

[h: bono = getProperty("bonoBo",tokName)]
[h, if(!isNumber(bono)): bono = 0]

[h, if(pausear()==1): pause("tbo","arma","ta","bo","acti","bono")]


[h: br= "("+tokName+"): "+tbo+" es "+bo]
[h,  if(acti!=0): br=br+ " > Mod. Actividad: "+acti+"." ]
[h,  if(bono!=0): br=br+ " > Bono de BO :" +bono ]
[h, if (isPC(tokName)),code:{
	[h: broadcast(br, getOwners())]	
};{
	[gt: broadcast(br, "GM")]
}
]

[h: boActual = number(bo) + number(acti) + number(bono)]

[h: macro.return =boactual]