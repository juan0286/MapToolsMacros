<!-- DeclararAtaqueArrojadizo --> 
[h: tokenAtk = getName(arg(0))]
[h: tokenTgt = getName(arg(1))]

[h,token(tokenTgt): image=getTokenImage()]
[h:tokenTgtImg=tokenTgt+" "+image]	

[h, if(tokenAtk == ""): tokenAtk = getName(getSelected())]
[h: switchToken(tokenAtk)]

[h: arma1 = brazo1]
[h: arma2 = brazo2]

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
[h: bonoArma1 = json.get(arma1,"bonoBO") ] 
[h,if (bonoArma1==""): bonoArma = 0]
[h: bonoArma2 = json.get(arma1,"bonoBO") ] 
[h,if (bonoArma2==""): bonoArma = 0]

<!-- **********  Creo la lista de Armas disponibles a arrojar **********-->


<!-- **********  Obtengo rangos de las armas  **********-->
[h: listaArmas=""]
<!-- Obtengo las imagenes-->
[h: imgWeapon1 = tblImage("Weapons",json.get(arma1,"ID"))]
[h: imgWeapon2 = tblImage("Weapons",json.get(arma2,"ID"))]
[h: imgArma1 = replace(imgWeapon1, ":", "&#58;")]
[h: imgArma2 = replace(imgWeapon2, ":", "&#58;")]

<!-- Busco el bono x rango del token para arma 1-->
[h: rangoDeToken = tokenRango(tokenAtk,tokenTgt,arma1) ]
[h: d = getStrProp(rangoDeToken,"Dist")]
[h: b = getStrProp(rangoDeToken,"bonif")]
[h, if(number(b)>0): simbolo = "+" ; simbolo = ""]
[h: nameArma = json.get(arma1,"nombre")]
[h: bonoArma1 = json.get(arma1,"bonoBO")]
[h: txtArma1 = strformat("<b>%{nameArma}</b>   %{d} mts(%{simbolo}%{b})<br>Bono Bo = %{bonoArma1}")]
[h, if(pausear()==1): pause("b","rangoDeToken")]

[h, if(b != ""): listaArmas = listAppend(listaArmas,strformat("<html><img src='%{imgArma1}' width=90 height=90><p>%{txtArma1}</p></html>"))]

<!-- Busco el bono x rango del token para arma 2-->
[h: rangoDeToken = tokenRango(tokenAtk,tokenTgt,arma2) ]
[h: d = getStrProp(rangoDeToken,"Dist")]
[h: b = getStrProp(rangoDeToken,"bonif")]
[h, if(number(b)>0): simbolo = "+" ; simbolo = ""]
[h: nameArma = json.get(arma2,"nombre")]
[h: bonoArma2 = json.get(arma2,"bonoBO")]
[h: txtArma2 = strformat("<b>%{nameArma}</b>   %{d} mts(%{simbolo}%{b})<br>Bono Bo = %{bonoArma2}<br>Brazo izquierdo -30")]
[h, if(pausear()==1): pause("b","rangoDeToken")]
[h, if(b != ""): listaArmas = listAppend(listaArmas,strformat("<html><img src='%{imgArma2}' width=90 height=90><p>%{txtArma2}</p></html>"))]


<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h: tipoAtaque = "Arrojadizo"]
[h: boact = getBoActual(getName(),arma1,tipoAtaque) ]
[h, if(pausear()==1): pause("boact")]
[h: boOfen = boact + number(cambioArma*-30) - number(boUsada)]
[r, if(cambioArma>0): br =br+" Pen. por cambios de arma: "+(cambioArma*-30)+". " ]
[r, if(boUsada>0): br=br+ " Bo ya usada en el asalto: "+boUsada)+"." ]
[r, if (isPC()),code:{
	[w(getOwners()): br+"Bo Disponible para atacar = "+boOfen ]
};{
	[g: broadcast(br+"<br>Bo Disponible = "+boOfen, "GM")]
}]





<!-- ********** Invoco el Input  **********-->
[H: inputStr = "[]"]

[H: inputStr = json.append(inputStr,"lblNombre|<html>"+vsTable("Neo","Kyoros","attackIcon")+"</html>|-|LABEL|SPAN=TRUE")]

[h: inputStr = json.append(inputStr,"boSeleccionada|"+ boOfen +"|Bo Arrojadiza |LABEL")]

[h: inputStr = json.append(inputStr,"armaUsada|"+listaArmas+"|Que Arma arrojar?|RADIO|SELECT=0")]

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
