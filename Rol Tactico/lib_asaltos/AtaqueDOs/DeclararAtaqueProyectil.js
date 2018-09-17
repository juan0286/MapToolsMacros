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
[h: ErrorMsg(getStrProp(GolpeActual,"bonoNegativo"),"Ya no puede realizar ataques simples en este asalto.")]

[h, if(pausear()==1): pause("brazo1")]
[h: varsFromStrProp( GolpeActual )]

<!-- **********  Obtengo la BO del Arma  **********-->
[h: bonoArma = json.get(brazo1,"bonoBO") ] 
[h: armaProyectil = armaProyectil ] 

[h,if (bonoArma==""): bonoArma = 0]

<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h: boact = getBoActual(getName(),armaProyectil) ]
[h: bonoBOProy = boact + number(cambioArma*-30)]


<!-- ********** Creo la lista de personajes a distancia maxima  **********-->


[h,token(tokenAtk): lsVisibleNpc = json.intersection( getTokenNames("json"), getVisibleTokenNames("json") )]
[h: tokenList = json.toList(lsVisibleNpc)]
[H: Num = listCount(tokenList)]
[h: finalTokenList = ""]
[h,COUNT(Num),code:{
	[h: tokenName=listGet(tokenList,roll.count)]
	[h, token(tokenName): image=getTokenImage()]
	[h: rangoDeToken = tokenRango(tokenAtk,target,armaProyectil) ]
	[h: r = getStrProp(rangoDeToken,"rango")]
	[h: b = getStrProp(rangoDeToken,"bonif")]
	[h: txtToken = strformat("tokenName - %{r} mts(%{b}) %{image}")]
	[h: imgList = listAppend(imgList,tokenName+" "+image)]	
	[finalTokenList = listAppend(finalTokenList,txtToken)]
}] 

<!-- ********** Invoco el Input  **********-->
[H: inputStr = "[]"]
[h: imgWeapon1 = tblImage("Bows",json.get(armaProyectil,"ID"))]

[H: inputStr = json.append(inputStr,"junk|<html><table border=1  width='300'><tr><th width='100%'><img src='"+replace(imgWeapon1, ":", "&#58;")+"' width=120 height=120></img></th></table></html>|-|LABEL|SPAN=TRUE")]
[H: inputStr = json.append(inputStr,"armasLbl1|+"+json.get(armaProyectil,"bonoBO")+"|"+json.get(armaProyectil,"nombre")+"|LABEL")]
[h: inputStr = json.append(inputStr,"target|"+finalTokenList+"|Enemigo Objetivo|LIST|SELECT=0 ICON=TRUE ICONSIZE=30")]

[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

<!-- ********** Calculo la BO Temporal  **********-->
[h: boTmp = number(getStrProp(boSeleccionada,"BO")) + number(bonoArma)+ number(BonoBOFija)]
	
<!-- ********** Tomo el Target  **********-->
[h: target = listGet(finalTokenList,Target)]

<!-- ********** Guardo los nuevos Datos dentro del golpeActual temporalmente  **********-->
[h: GolpeActual = setStrProp(GolpeActual,"boTmp",boTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"target",target)]

<!-- ********** Preparo el Link para quien corresponda  **********-->
[h,token(Target): jugadoresDef = getOwners()]
[h, if (isPC(Target)): obj = jugadoresDef ; obj = "gm"]
[h: link = macroLink("Defender a "+target+" del ataque de"+  tokenAtk,"DeclaroDefensa@lib:asaltos", jugadoresDef, tokenAtk)]
[h: link = macroLinkText("DeclaroDefensa@lib:asaltos", jugadoresDef, tokenAtk)]

[h: broadcast(link, obj)]
[h: broadcast(execLink(link), obj)]

[r: ObtenerSpeechAzar()]
