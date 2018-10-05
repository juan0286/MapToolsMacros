<!-- DeclararAtaqueArrojadizo --> 
[h: tokenAtk = arg(0)]
[h: tokenTgt = arg(1)]

[h,token(tokenTgt): image=getTokenImage()]
[h:tokenTgtImg=tokenTgt+" "+image]	

[h, if(tokenAtk == ""): tokenAtk = getName(getSelected())]
[h: switchToken(tokenAtk)]



[h: br = ""]
[h, if(pausear()==1): pause("tokenAtk")]
[h: ErrorMsg(length(GolpeActual),"Debe tener definifo GolpeActual")]
[h: varsFromStrProp( GolpeActual )]
[h: ErrorMsg(!countAtaques, tokenAtk + "Ya Ataco en este asalto")]

[h: ErrorMsg(length(arma1),"Debe tener definifo arma 1")]
[h: ErrorMsg(length(arma2),"Debe tener definifo arma 2")]
[h, if(pausear()==1): pause("arma1")]



<!-- **********  Arma1, si no hay: uso pelea  **********-->
[h, if(json.type(arma1) != "OBJECT"): arma1 = table("Weapons",0)]
[h, if(json.type(arma2) != "OBJECT"): arma2 = table("Weapons",0)]
[h, if(json.type(arma1) != "OBJECT"): tipoAtaque=="2Manos"]
[h: bonoArma = json.get(arma1,"bonoBO") ] 
[h,if (bonoArma==""): bonoArma = 0]


<!-- **********  Creo la lista de Armas disponibles a arrojar **********-->
[h: arma1 = brazo1]
[h: arma2 = brazo2]
[h: listaArmas=""]
[h, if(json.get(arma1,"alcance") != ""): listaArmas=listAppend(listaArmas,json.get(arma1,"nombre")+" ("+json.get(arma1,"BonoBO")+")") ]
[h, if(json.get(arma2,"alcance") != ""): listaArmas=listAppend(listaArmas,json.get(arma2,"nombre")+" ("+json.get(arma1,"BonoBO")+")") ]


<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h: boact = getBoActual(getName(),arma1) ]
[h, if(pausear()==1): pause("boact")]
[h: boOfen = boact + number(cambioArma*-30) - number(boUsada)]
[r, if(cambioArma>0): br =br+" Pen. por cambios de arma: "+(cambioArma*-30)+". " ]
[r, if(boUsada>0): br=br+ " Bo ya usada en el asalto: "+boUsada)+"." ]
[r, if (isPC()),code:{
	[w(getOwners()): br+"Bo Disponible para atacar = "+boOfen ]
};{
	[g: broadcast(br+"<br>Bo Disponible = "+bo, "GM")]
}]


<!-- **********  Tipo de ataque  **********-->
[h: tipoAtaque = "Arrojadizo"]


<!-- ********** Invoco el Input  **********-->
[H: inputStr = "[]"]


[H: inputStr = json.append(inputStr,"lblNombre|<html><h2>Ataque de "+tokenAtk+"</h2></html>|-|LABEL|SPAN=TRUE")]

[H: inputStr = json.append(inputStr,"junk|<html><table border=1  width='400'><tr><th width='50%'><img src='"+replace(imgWeapon1, ":", "&#58;")+"' width=120 height=120></img></th><th width=50%><img src='"+replace(imgWeapon2, ":", "&#58;")+"' width=120 height=120></img></th></tr></table></html>|-|LABEL|SPAN=TRUE")]

[H: inputStr = json.append(inputStr,"armasLbl1|+"+json.get(arma1,"bonoBO")+"|"+json.get(arma1,"nombre")+"|LABEL")]

[h: inputStr = json.append(inputStr,"target|"+tokenTgtImg+"|Enemigo Objetivo|LABEL|ICON=TRUE ICONSIZE=60")]

[h: inputStr = json.append(inputStr,"target|"+tokenTgtImg+"|Enemigo Objetivo|LABEL|ICON=TRUE ICONSIZE=60")]

[h, if(bono2!=0): inputStr = json.append(inputStr,"armasLbl2|"+bono2+"|"+json.get(arma2,"nombre")+"|LABEL")]

[h: inputStr = json.append(inputStr,"armaUsada|"+ listaArmas +"|Que Arma arrojar?|LIST|SELECT=0")]

[H: input = input(json.toList(inputStr,"##"))]

[h: abort(input)]

<!-- ********** Calculo la BO Temporal  **********-->
[h, if(!isNumber(BonoBOFija)): BonoBOFija=0]
[h: boTmp = number(getStrProp(boSeleccionada,"BO")) + number(bonoArma)+ number(BonoBOFija)]


<!-- ********** Guardo los nuevos Datos dentro del golpeActual temporalmente  **********-->
[h: GolpeActual = setStrProp(GolpeActual,"boTmp",boTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"target",tokenTgt)]
[h: GolpeActual = setStrProp(GolpeActual,"boUsadaTmp",getStrProp(boSeleccionada,"BO"))]

<!-- ********** Preparo el Link para quien corresponda  **********-->
[h, token(Target): jugadoresDef = getOwners()]
[h, if (isPC(Target)): obj = jugadoresDef ; obj = "gm"]
[h: link = macroLink("Defender a "+target+" del ataque de"+  tokenAtk,"DeclaroDefensa@lib:asaltos", jugadoresDef, tokenAtk)]
[h: link = macroLinkText("DeclaroDefensa@lib:asaltos", jugadoresDef, tokenAtk)]

[h: broadcast(link, obj)]
[h: broadcast(execLink(link), obj)]
[r: ObtenerSpeechAzar()]
