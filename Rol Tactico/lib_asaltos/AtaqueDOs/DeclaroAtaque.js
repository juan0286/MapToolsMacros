<!-- DeclararAtaque --> 
[h: tokenAtk = arg(0)]
[h: switchToken(tokenAtk)]
[h: ErrorMsg(length(GolpeActual),"Debe tener definifo GolpeActual")]

[h: ErrorMsg(length(brazo1),"Debe tener definifo Brazo 1")]
[h: ErrorMsg(length(brazo2),"Debe tener definifo Brazo 2")]

[h: varsFromStrProp( GolpeActual )]

<!-- **********  Arma1, si no hay: uso pelea  **********-->
[h, if(json.type(brazo1) != "OBJECT"): brazo1 = table("Weapons",0)]
[h, if(json.type(brazo2) != "OBJECT"): brazo2 = table("Weapons",0)]
[h, if(json.type(brazo1) != "OBJECT"): tipoAtaque=="2Manos"]
[h: bonoArma = json.get(brazo1,"bonoBO") ] 
[h,if (bonoArma==""): bonoArma = 0]

<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h: boact = getBoActual(getName(),brazo1) ]
[h: bo = boact + number(cambioArma*-30) - number(boUsada)]
[h: penaGolpe = 0]
[h,if (countAtaques==1): penaGolpe = -25]
[h,if (countAtaques>0): penaGolpe = penaGolpe -(25*(countAtaques-1))]
[h,if (cambioAccion>0): bo = bo/2]



<!-- **********  Tipo de ataque  **********-->
[h: tipoAtaque = getStrProp(GolpeActual,"tipoAtaque")]
[h,if(tipoAtaque==""),code:{
	[if(json.get(brazo1,"nombre")==json.get(brazo2,"nombre")): tipoAtaque=="2Manos"]
	[if(tipoAtaque=="" && (json.contains(brazo1, "criticos") && json.contains(brazo2, "criticos"))): tipoAtaque=="2Armas" ]
	[if(tipoAtaque==""): tipoAtaque=="1Mano"]
}] 


<!-- ********** Creo la lista de personajes cercanos  **********-->
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

<!-- ********** Creo la lista de Disponibilidad de BO  **********-->
[h: arrEstilos = "" ]

[h, if(tipoAtaque =="2Armas"),code:{
	[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BO=",bo-i,"; BD=",i/2,";") ) ]
	[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",bo/2,";") ) ]
	[h: bonoArma = bonoArma + json.get(brazo2,"bonoBO")/2 ] 
};{
	[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BO=",bo-i,"; BD=",i,";") ) ]	
	[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",bo,";") ) ]
}]

<!-- ********** Veo si tiene escudo o nada.  **********-->
 [bono2 =0]
[h,if(tipoAtaque=="1Mano" && json.contains(brazo2, "bonoBD")): bono2 =   "+"+ json.get(brazo2,"bonoBD")+" BD"]
[h,if(tipoAtaque=="2Armas"): bono2 =   "+"+ number(json.get(brazo2,"bonoBO"))/2+" BO"]


<!-- ********** Invoco el Input  **********-->
[H: inputStr = "[]"]

[H: inputStr = json.append(inputStr,"armasLbl1|+"+json.get(brazo1,"bonoBO")+"|"+json.get(brazo1,"nombre")+"|LABEL")]
[h, if(bono2!=0): inputStr = json.append(inputStr,"armasLbl2|"+bono2+"|"+json.get(brazo2,"nombre")+"|LABEL")]
[h: inputStr = json.append(inputStr,"target|"+imgList+"|Enemigo Objetivo|LIST|SELECT=0 ICON=TRUE ICONSIZE=30")]
[h: inputStr = json.append(inputStr,"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING")]
[h: inputStr = json.append(inputStr,"penaGolpes|"+penaGolpe+"|Penalizacion por Golpes|LABEL|ICON=TRUE")]

[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

<!-- ********** Calculo la BO Temporal  **********-->
[h: boTmp = number(getStrProp(boSeleccionada,"BO")) + number(penaGolpe) + number(bonoArma)+ number(BonoBOFija)]
	
<!-- ********** Tomo el Target  **********-->
[h: target = listGet(finalTokenList,Target)]

<!-- ********** Guardo los nuevos Datos dentro del golpeActual temporalmente  **********-->
[h: GolpeActual = setStrProp(GolpeActual,"boTmp",boTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"target",target)]

<!-- ********** Preparo el Link para quien corresponda  **********-->
[h,token(Target): jugadoresDef = getOwners()]
[h, if (isPC(Target)): obj = jugadoresDef ; obj = "gm"]
[h: link = macroLink("Defenderse de "+  tokenAtk,"DeclaroDefensa@lib:asaltos", jugadoresDef, tokenAtk)]

[h: broadcast(link, obj)]
[r: ObtenerSpeechAzar()]
