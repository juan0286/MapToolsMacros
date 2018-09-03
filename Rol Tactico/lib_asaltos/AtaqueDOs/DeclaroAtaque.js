<!-- DeclararAtaque --> 
[h: tokenAtk = arg(0)]
[h: switchToken(tokenAtk)]
[h: varsFromStrProp( GolpeActual )]
[h, if (isPC()): boact =  getBoActual(getName()) ; boact=BO1 ]
[h: bo = boact + number(cambioArma*-30) - number(boUsada)]
[h: penaGolpe = 0]
[h,if (countAtaques==1): penaGolpe = -75]
[h,if (countAtaques>1): penaGolpe = penaGolpe -75 -(50*(countAtaques-1))]
[h,if (cambioAccion>0): bo = bo/2]
[h: arma1 = getStrProp("brazo1","nombre") + "() y " getStrProp("brazo2","nombre") ]
[h: armas = getStrProp("brazo1","nombre") + "() y " getStrProp("brazo2","nombre") ]

[h: tipoAtaque = getStrProp(GolpeActual,"tipoAtaque")]
[h: bonoArma = getStrProp(brazo1,"bonoBO") ] 
[h,if (bonoArma==""): bonoArma = 0]

[h: estiloBO=""]

[h,token(tokenAtk): lsVisibleNpc = json.intersection( getTokenNames("json"), getVisibleTokenNames("json") )]
[h: tokenList = json.toList(lsVisibleNpc)]
[H: Num = listCount(tokenList)]
[h: imgList = ""]
[h: finalTokenList = ""]
[h,COUNT(Num),CODE:
{	
	[h:tokenName=listGet(tokenList,roll.count)]
	[h: dist= getDistance(tokenName)]	
	[h, if(dist <= 3 && tokenName != tokenAtk),code:{		
		[h,token(tokenName): image=getTokenImage()]
		[h:imgList=listAppend(imgList,tokenName+" "+image)]	
		[h: finalTokenList = listAppend(finalTokenList,tokenName)]
	}]	
}]

[h: arrEstilos = listAppend('', estiloBo) ]

[h, if(tipoAtaque =="2Armas"),code:{
	[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BO=",bo-i,"; BD=",i/2,";") ) ]
	[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",bo/2,";") ) ]
	[h: bonoArma = bonoArma + getStrProp(brazo2,"bonoBO")/2 ] 
};{
	[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BO=",bo-i,"; BD=",i,";") ) ]	
	[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",bo,";") ) ]
}]




[h,if(tipoAtaque=="1Mano"): bono2= "+"+getStrProp(brazo2,"bonoBD")+" BD" ; bono2= "+"+getStrProp(brazo2,"bonoBO")+" BO"]

[h: input =input( 
	"armasLbl1|+"+getStrProp(brazo1,"bonoBO")+"|"+getStrProp(brazo1,"nombre")+"|LABEL",
	"armasLbl2|"+bono2+"|"+getStrProp(brazo2,"nombre")+"|LABEL",	
	"target|"+imgList+"|Enemigo Objetivo|LIST|SELECT=0 ICON=TRUE ICONSIZE=30",
	"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING",
	"penaGolpes|"+penaGolpe+"|Penalizacion por Golpes|LABEL|ICON=TRUE")]
[h: abort(input)]

[h: boTmp = number(getStrProp(boSeleccionada,"BO")) + number(penaGolpe) + number(bonoArma)+ number(BonoBOFija)]
	
[h: target = listGet(finalTokenList,Target)]

[h: GolpeActual = setStrProp(GolpeActual,"boTmp",boTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"tablaDanio",getStrProp(brazo1,"danio"))]
[h: GolpeActual = setStrProp(GolpeActual,"tablaCritico",getStrProp(brazo1,"danio"))]
[h: GolpeActual = setStrProp(GolpeActual,"target",target)]
<!-- Guardo los nuevos Datos dentro del golpeActual temporalmente -->

[h,token(Target): jugadoresDef = getOwners()]
[h, if (isPC(Target)): obj = jugadoresDef ; obj = "gm"]
[h: link = macroLink("Defenderse de "+  tokenAtk,"DeclaroDefensa@lib:asaltos", jugadoresDef, tokenAtk)]

[h: broadcast(link, obj)]
[r: ObtenerSpeechAzar()]
