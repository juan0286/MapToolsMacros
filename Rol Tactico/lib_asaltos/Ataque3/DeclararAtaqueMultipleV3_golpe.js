<!-- DeclararAtaqueMultipleV3 --> 
[h: tokenAtk = arg(0) ]
[h: tokenTgts = arg(1) ]

[h, if( tokenAtk  ==  "" ): tokenAtk = getName(getSelected()) ]
[h: switchToken(tokenAtk) ]


<!-- **********  Continuo el combate  **********-->
[h: br = ""]

[h: varsFromStrProp( GolpeActual ) ]
[h: cantMultiAtaques = listCount(tokenTgts) ]
[h: boUsadaFija = 0 ]
[h: bonoNegativo = (cantMultiAtaques-1) * -50 ]
[h, if( pausear() == 1 ): pause("bonoNegativo") ]
[h, if( pausear() == 1 ): pause("tokenAtk") ]
[h: ErrorMsg(length(GolpeActual),"Debe tener definifo GolpeActual") ]

[h: ErrorMsg(length(brazo1),"Debe tener definifo Brazo 1") ]
[h: ErrorMsg(length(brazo2),"Debe tener definifo Brazo 2") ]


<!--  si existe un bonoNegativo, entonces se seteo MultiAtaues, entonces si la cantidad de enemigosAtacados es igual a multiataques, ya realizo todos los ataques de este asalto. -->
[H, if ( bonoNegativo  != 0 && listCount(enemigosAtacados) >= cantMultiAtaques  ): res = 0 ; res = 1 ]
[h: ErrorMsg(res,"Ya ataco a todos los enemigos en este asalto.") ]

<!-- **********  Arma, si no hay: uso pelea  **********-->
[h, if( json.type(brazo1) != "OBJECT" ): brazo1 = table("Weapons",0) ]
[h, if( json.type(brazo2) != "OBJECT" ): brazo2 = table("Weapons",0) ]
[h, if( json.type(brazo1) != "OBJECT" ): tipoAtaque == "2Manos"]
[h: bonoArma = json.get(brazo1,"bonoBO") ]
[h,if (bonoArma == "" ): bonoArma = 0]


<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h: boact = getBoActual(getName(),brazo1) ]
[h, if( pausear() == 1 ): pause("boact") ]
[h: boOfen = boact + number(cambioArma*-30) - number(boUsada) ]
[r, if( cambioArma>0 ): br =br+" Pen. por cambios de arma: "+(cambioArma*-30)+". " ]
[r, if( boUsada>0 ): br=br+ " Bo ya usada en el asalto: "+boUsada)+"." ]
[r, if (isPC() ),code:{
	 "<br>Bo Disponible = "+{boOfen}+"<br>"	
};{
	[gt: broadcast(br+"<br>Bo Disponible = "+bo, "GM") ]
}]

<!-- **********  Tipo de ataque  **********-->
[h: tipoAtaque = getStrProp(GolpeActual,"tipoAtaque") ]
[h,if( tipoAtaque == "" ),code:{
	[ if( json.get(brazo1,"nombre") == json.get(brazo2,"nombre") ): tipoAtaque == "2Manos"]
	[ if( tipoAtaque == "" && (json.contains(brazo1, "criticos") && json.contains(brazo2, "criticos")) ): tipoAtaque == "2Armas" ]
	[ if( tipoAtaque == "" ): tipoAtaque == "1Mano"]
}] 

<!-- ********** Creo la lista de Disponibilidad de BO  **********-->
[h: arrEstilos = "" ]

[h, if( tipoAtaque  == "2Armas" ),code:{
	[h, for(i,0,boOfen,10 ): arrEstilos = listAppend(arrEstilos, add("BO=",boOfen-i,"; BD=",i/2,";") ) ]
	[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",boOfen/2,";") ) ]
	[h: bonoArma = bonoArma + json.get(brazo2,"bonoBO")/2 ] 
};{
	[h, for(i,0,boOfen,5 ): arrEstilos = listAppend(arrEstilos, add("BO=",boOfen-i,"; BD=",i,";") ) ]	
	[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",boOfen,";") ) ]
}]


<!-- ********** Veo si tiene escudo o nada.  **********-->
[h: bono2 = 0]
[h, if( tipoAtaque  ==  "1Mano" && json.contains(brazo2, "bonoBD")  ): bono2 =   "+"+ json.get(brazo2,"bonoBD")+" BD"]
[h, if( tipoAtaque  ==  "2Armas"  ): bono2 =  "+"+ number(json.get(brazo2,"bonoBO"))/2+" BO"]

[h, if( pausear() == 1 ): pause("tokenTgts") ]


<!-- *****************************************************-->
<!-- **********  Preguntar Cantidad de ataques  **********-->
[H: inputStr = "[]"]

[H: inputStr = json.append(inputStr,"lblNombre|<html>"+vsTableMultiple(tokenAtk,tokenTgts,"attackIcon")+"</html>|-|LABEL|SPAN=TRUE")]

[h: imgWeapon1 = tblImage("Weapons",json.get(brazo1,"ID")) ]
[h, if (json.contains(brazo2, "criticos")) : tbBrazo2 = "Weapons" ; tbBrazo2 = "Shields"]
[h: imgWeapon2 = tblImage(tbBrazo2,json.get(brazo2,"ID")) ]


[H: inputStr = json.append(inputStr,"junk|<html><table border=1  width='400'><tr><th width='50%'><img src='"+replace(imgWeapon1, ":", "&#58;")+"' width=120 height=120></img></th><th width=50%><img src='"+replace(imgWeapon2, ":", "&#58;")+"' width=120 height=120></img></th></tr></table></html>|-|LABEL|SPAN=TRUE") ]

<!-- Bonos de bo, de un arma, o de las dos -->
[h: inputStr = json.append(inputStr,"armasLbl1|+"+json.get(brazo1,"bonoBO")+"|"+json.get(brazo1,"nombre")+"|LABEL") ]
[h, if( bono2 != 0 ): inputStr = json.append(inputStr,"armasLbl2|"+bono2+"|"+json.get(brazo2,"nombre")+"|LABEL") ]

<!-- Bonos de bo, de un arma, o de las dos -->
[h: inputStr = json.append(inputStr,"penaGolpes|"+bonoNegativo+"|Penalizacion por Golpes|LABEL|ICON=TRUE") ]
[h: inputStr = json.append(inputStr,"penaGolpesLbl|Esta penalizacion se aplicara en todos los ataques|Esta penalizacion se aplicara en todos los ataques|LABEL|SPAN=TRUE") ]
[h: inputStr = json.append(inputStr,"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING") ]

<!-- Disparon el Input -->

[H: input = input(json.toList(inputStr,"##")) ]
[h: abort(input) ]	


[h: boUsadaFija = number(getStrProp(boSeleccionada,"BO")) ]	
[h: GolpeActual = setStrProp(GolpeActual,"bonoNegativo", bonoNegativo) ]
[h: GolpeActual = setStrProp(GolpeActual,"cantMultiAtaques", cantMultiAtaques) ]


<!-- ********** Calculo la BO Temporal  **********-->
[h, if( !isNumber(BonoBOFija) ): BonoBOFi=0 ; BonoBOFi=BonoBOFija]
[h: boTmp = number(boUsadaFija) + number(bonoNegativo) + number(bonoArma)+ number(BonoBOFi) ]


<!-- ********** Guardo los nuevos Datos dentro del golpeActual temporalmente  **********-->
[h: GolpeActual = setStrProp(GolpeActual,"boTmp",boTmp) ]
[h: GolpeActual = setStrProp(GolpeActual,"target",target) ]
[h: GolpeActual = setStrProp(GolpeActual,"boUsadaTmp",boUsadaFija) ]

<!-- ********** Preparo los Link para quien corresponda  **********-->

[r, foreach(tgt,tokenTgts),code:{
	[h, token(tgt ): jugadoresDef = getOwners() ]
	[h, if (isPC(tgt) ): obj = jugadoresDef ; obj = "gm"]
	[h: argu = json.append("", tokenAtk, tgt)]
	[h: link = macroLink("Defender a "+target+" del ataque de"+  tokenAtk,"DeclaroDefensaV3@lib:asaltos", jugadoresDef, argu) ]
	[h: linkText = macroLinkText("DeclaroDefensaV3@lib:asaltos", "none", tokenAtk) ]

	[h: broadcast(link, obj) ]
	[h: broadcast(execLink(linkText), obj) ]
}]



[r: ObtenerSpeechAzar() ]