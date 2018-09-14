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

<!-- **********  Obtengo la BO del Arma  **********-->
[h: bonoArma = json.get(brazo1,"bonoBO") ] 
[h,if (bonoArma==""): bonoArma = 0]

<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h: boact = getBoActual(getName(),brazo1) ]
[h: bonoBOProy = boact + number(cambioArma*-30)]


<!-- ********** Creo la lista de personajes a distancia maxima  **********-->


[h,token(tokenAtk): lsVisibleNpc = json.intersection( getTokenNames("json"), getVisibleTokenNames("json") )]
[h: tokenList = json.toList(lsVisibleNpc)]
[H: Num = listCount(tokenList)]
[h: finalTokenList = ""]
[h,COUNT(Num),code:{
	[h,token(target): image=getTokenImage()]
	[finalTokenList = listAppend(finalTokenList,tokenRango(tokenAtk,target,brazo1)) )]
}] 

<!-- ********** Invoco el Input  **********-->
[H: inputStr = "[]"]
[h: imgWeapon1 = tblImage("Bows",json.get(brazo1,"ID"))]

[H: inputStr = json.append(inputStr,"junk|<html><table border=1  width='400'><tr><th width='50%'><img src='"+replace(imgWeapon1, ":", "&#58;")+"' width=120 height=120></img></th><th width=50%><img src='"+replace(imgWeapon2, ":", "&#58;")+"' width=120 height=120></img></th></tr></table></html>|-|LABEL|SPAN=TRUE")]

[H: inputStr = json.append(inputStr,"armasLbl1|+"+json.get(brazo1,"bonoBO")+"|"+json.get(brazo1,"nombre")+"|LABEL")]
[h: inputStr = json.append(inputStr,"target|"+imgList+"|Enemigo Objetivo|LIST|SELECT=0 ICON=TRUE ICONSIZE=30")]
[h: inputStr = json.append(inputStr,"boProyectil|"+ bonoBOProy +"| BO Proyectiles |LIST|LABEL=0 VALUE=STRING")]
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
