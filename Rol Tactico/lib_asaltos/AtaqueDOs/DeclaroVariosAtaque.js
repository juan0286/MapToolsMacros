<!-- DeclararAtaque --> 
[h: tokenAtk = arg(0)]
[h, if(tokenAtk == ""): tokenAtk = getName(getSelected())]
[h: switchToken(tokenAtk)]


<!-- **********  Continuo el combate  **********-->
[h: br = ""]
[h, if(pausear()==1): pause("tokenAtk")]
[h: ErrorMsg(length(GolpeActual),"Debe tener definifo GolpeActual")]

[h: ErrorMsg(length(brazo1),"Debe tener definifo Brazo 1")]
[h: ErrorMsg(length(brazo2),"Debe tener definifo Brazo 2")]
[h, if(pausear()==1): pause("brazo1")]
[h: varsFromStrProp( GolpeActual )]

[H, if (getStrProp(GolpeActual,"boUsadaFija") == ""): boUsadaFija = 0 ]
[H, if (getStrProp(GolpeActual,"cantMultiAtaques") == ""): cantMultiAtaques = 0 ]
[H, if (getStrProp(GolpeActual,"bonoNegativo")==""): bonoNegativo = 0 ]
[H, if ( bonoNegativo  > 0 && cantMultiAtaques == 0 ): res = 0 ; res = 1 ]
[h: ErrorMsg(res,"Ya realizo todos lo ataques multiples en este asalto.")]


<!-- **********  Arma1, si no hay: uso pelea  **********-->
[h, if(json.type(brazo1) != "OBJECT"): brazo1 = table("Weapons",0)]
[h, if(json.type(brazo2) != "OBJECT"): brazo2 = table("Weapons",0)]
[h, if(json.type(brazo1) != "OBJECT"): tipoAtaque=="2Manos"]
[h: bonoArma = json.get(brazo1,"bonoBO") ]
[h,if (bonoArma==""): bonoArma = 0]

<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h: boact = getBoActual(getName(),brazo1) ]
[h, if(pausear()==1): pause("boact")]
[h: boOfen = boact + number(cambioArma*-30) - number(boUsada)]
[r,  if(cambioArma>0): br =br+" Pen. por cambios de arma: "+(cambioArma*-30)+". " ]
[r,  if(boUsada>0): br=br+ " Bo ya usada en el asalto: "+boUsada)+"." ]
[r, if (isPC()),code:{
	 "<br>Bo Disponible = "+{boOfen}+"<br>"	
};{
	[gt: broadcast(br+"<br>Bo Disponible = "+bo, "GM")]
}]


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
	[h, for(i,0,boOfen,10): arrEstilos = listAppend(arrEstilos, add("BO=",boOfen-i,"; BD=",i/2,";") ) ]
	[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",boOfen/2,";") ) ]
	[h: bonoArma = bonoArma + json.get(brazo2,"bonoBO")/2 ] 
};{
	[h, for(i,0,boOfen,5): arrEstilos = listAppend(arrEstilos, add("BO=",boOfen-i,"; BD=",i,";") ) ]	
	[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",boOfen,";") ) ]
}]

<!-- ********** Veo si tiene escudo o nada.  **********-->
 [h:bono2 =0]
[h,if(tipoAtaque=="1Mano" && json.contains(brazo2, "bonoBD")): bono2 =   "+"+ json.get(brazo2,"bonoBD")+" BD"]
[h,if(tipoAtaque=="2Armas"): bono2 =   "+"+ number(json.get(brazo2,"bonoBO"))/2+" BO"]

[h, if(pausear()==1): pause("bono2")]

<!-- *****************************************************-->
<!-- **********  Preguntar Cantidad de ataques  **********-->
[H: inputStr = "[]"]

[h: imgWeapon1 = tblImage("Weapons",json.get(brazo1,"ID"))]
[h, if (json.contains(brazo2, "criticos")) : tbBrazo2 = "Weapons" ; tbBrazo2 = "Shields"]
[h: imgWeapon2 = tblImage(tbBrazo2,json.get(brazo2,"ID"))]
[H: inputStr = json.append(inputStr,"lblNombre|<html><h2>Ataque de "+tokenAtk+"</h2></html>|-|LABEL|SPAN=TRUE")]
[H: inputStr = json.append(inputStr,"junk|<html><table border=1  width='400'><tr><th width='50%'><img src='"+replace(imgWeapon1, ":", "&#58;")+"' width=120 height=120></img></th><th width=50%><img src='"+replace(imgWeapon2, ":", "&#58;")+"' width=120 height=120></img></th></tr></table></html>|-|LABEL|SPAN=TRUE")]
[h: inputStr = json.append(inputStr,"armasLbl1|+"+json.get(brazo1,"bonoBO")+"|"+json.get(brazo1,"nombre")+"|LABEL")]
[h, if(bono2!=0): inputStr = json.append(inputStr,"armasLbl2|"+bono2+"|"+json.get(brazo2,"nombre")+"|LABEL")]
[H: inputStr = json.append(inputStr,"picChoice|2 Enemigos(-50),3 Enemigos(-100),4 Enemigos(-150)|Cuantos Enemigos Atacaras?|RADIO|ORIENT=V SELECT=0" )]
[h: inputStr = json.append(inputStr,"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING")]

[h, if( bonoNegativo == 0 ),code:{
	[H: input = input(json.toList(inputStr,"##"))]
	[h: abort(input)]	
	
	[h: boUsadaFija = number(getStrProp(boSeleccionada,"BO"))]	

	[h, if(picChoice==0): bonoNegativo = -50 ]
	[h, if(picChoice==1): bonoNegativo = -100 ]
	[h, if(picChoice==2): bonoNegativo = -150 ]
	[h, if(picChoice==3): bonoNegativo = -200 ]
	[h: GolpeActual = setStrProp(GolpeActual,"boUsadaFija", boUsadaFija, ) ]
	[h: GolpeActual = setStrProp(GolpeActual,"bonoNegativo", bonoNegativo) ]
	[h: GolpeActual = setStrProp(GolpeActual,"cantMultiAtaques", picChoice) ]

}]

	[h, if(pausear()==1): pause("bonoNegativo")]
<!-- *****************************************************-->

<!-- ********** Invoco el Input  de seleccion de target **********-->
[H: inputStr = "[]"]
[h: imgWeapon1 = tblImage("Weapons",json.get(brazo1,"ID"))]
[h, if (json.contains(brazo2, "criticos")) : tbBrazo2 = "Weapons" ; tbBrazo2 = "Shields"]
[h: imgWeapon2 = tblImage(tbBrazo2,json.get(brazo2,"ID"))]
[H: inputStr = json.append(inputStr,"lblNombre|<html><h2>Ataque de "+tokenAtk+"</h2></html>|-|LABEL|SPAN=TRUE")]
[H: inputStr = json.append(inputStr,"junk|<html><table border=1  width='400'><tr><th width='50%'><img src='"+replace(imgWeapon1, ":", "&#58;")+"' width=120 height=120></img></th><th width=50%><img src='"+replace(imgWeapon2, ":", "&#58;")+"' width=120 height=120></img></th></tr></table></html>|-|LABEL|SPAN=TRUE")]
	[h, if(pausear()==1): pause("inputStr")]
[H: inputStr = json.append(inputStr,"armasLbl1|+"+json.get(brazo1,"bonoBO")+"|"+json.get(brazo1,"nombre")+"|LABEL")]
[h, if(bono2!=0): inputStr = json.append(inputStr,"armasLbl2|"+bono2+"|"+json.get(brazo2,"nombre")+"|LABEL")]
[h: inputStr = json.append(inputStr,"target|"+imgList+"|Enemigo Objetivo|LIST|SELECT=0 ICON=TRUE ICONSIZE=30")]
[h: inputStr = json.append(inputStr,"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING")]
[h: inputStr = json.append(inputStr,"penaGolpes|"+penaGolpe+"|Penalizacion por Golpes|LABEL|ICON=TRUE")]
	[h, if(pausear()==1): pause("inputStr")]
[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

<!-- ********** Calculo la BO Temporal  **********-->
[h, if(!isNumber(BonoBOFija)): BonoBOFi=0]
[h: boTmp = number(boUsadaFija) + number(bonoNegativo) + number(bonoArma)+ number(BonoBOFi)]

	
<!-- ********** Tomo el Target  **********-->
[h: target = listGet(finalTokenList,Target)]

<!-- ********** Guardo los nuevos Datos dentro del golpeActual temporalmente  **********-->
[h: GolpeActual = setStrProp(GolpeActual,"boTmp",boTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"target",target)]
[h: GolpeActual = setStrProp(GolpeActual,"boUsadaTmp",boUsadaFija)]

<!-- ********** Preparo el Link para quien corresponda  **********-->
[h, token(Target): jugadoresDef = getOwners()]
[h, if (isPC(Target)): obj = jugadoresDef ; obj = "gm"]

[h: link = macroLink("Defender a "+target+" del ataque de"+  tokenAtk,"DeclaroDefensa@lib:asaltos", jugadoresDef, tokenAtk)]
[h: linkText = macroLinkText("DeclaroDefensa@lib:asaltos", "none", tokenAtk)]

[h: broadcast(link, obj)]
[h: broadcast(execLink(linkText), obj)]

[r: ObtenerSpeechAzar()]
