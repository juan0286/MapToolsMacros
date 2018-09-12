<!-- DeclararAtaqueProyectil --> 
[h: tokenAtk = arg(0)]
[h: switchToken(tokenAtk)]
[h: ErrorMsg(length(GolpeActual),"Debe tener definifo GolpeActual")]

[h: ErrorMsg(length(brazo1),"Debe tener definifo Brazo 1")]
[h: ErrorMsg(json.type(brazo1) != "OBJECT","Brazo 1 debe tener un Arco")]
[h: ErrorMsg(json.contains(brazo1, "penalizadores"),"Brazo 1 debe tener un Arco")]
[h: ErrorMsg(length(brazo2),"Debe tener definifo Brazo 2")]
[h: ErrorMsg(json.type(brazo2) != "OBJECT"),"Brazo 2 Debe tener un arco")]
[h: ErrorMsg(json.contains(brazo2, "penalizadores"),"Brazo 2 debe tener un Arco")]
[h, if(pausear()==1): pause("brazo1")]
[h: varsFromStrProp( GolpeActual )]

<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h: bonoArma = json.get(brazo1,"bonoBO") ] 
[h,if (bonoArma==""): bonoArma = 0]

<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h: boact = getBoActual(getName(),brazo1) ]
[h, if(pausear()==1): pause("boact")]
[h: bo = boact + number(cambioArma*-30)]

<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h, if (cambioAccion>0): bo = bo/2]
[h, if (pausear()==1): pause("bo")]


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
 [h:bono2 =0]
[h,if(tipoAtaque=="1Mano" && json.contains(brazo2, "bonoBD")): bono2 =   "+"+ json.get(brazo2,"bonoBD")+" BD"]
[h,if(tipoAtaque=="2Armas"): bono2 =   "+"+ number(json.get(brazo2,"bonoBO"))/2+" BO"]

[h, if(pausear()==1): pause("bono2")]
<!-- ********** Invoco el Input  **********-->
[H: inputStr = "[]"]
[h: imgWeapon1 = tblImage("Weapons",json.get(brazo1,"ID"))]
[h, if (json.contains(brazo2, "criticos")) : tbBrazo2 = "Weapons" ; tbBrazo2 = "Shields"]
[h: imgWeapon2 = tblImage(tbBrazo2,json.get(brazo2,"ID"))]
[H: inputStr = json.append(inputStr,"junk|<html><table border=1  width='400'><tr><th width='50%'><img src='"+replace(imgWeapon1, ":", "&#58;")+"' width=120 height=120></img></th><th width=50%><img src='"+replace(imgWeapon2, ":", "&#58;")+"' width=120 height=120></img></th></tr></table></html>|-|LABEL|SPAN=TRUE")]

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
[h: link = macroLink("Defender a "+target+" del ataque de"+  tokenAtk,"DeclaroDefensa@lib:asaltos", jugadoresDef, tokenAtk)]

[h: broadcast(link, obj)]
[r: ObtenerSpeechAzar()]
