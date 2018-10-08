<!-- declaroDefensaV3 -->
[h: tokenAtk =arg(0)]
[h: target =arg(1)]
[h: br=""]
[h: ga_atk =getProperty("GolpeActual",tokenAtk)]

[h: switchToken(target)]

[h: varsFromStrProp(getProperty("GolpeActual"))]

<!-- **********  Obtengo la BO y busco modificadores  **********-->
[h: boact =  getBoActual(getName(),brazo1)]
[h: boniOfen =  number(boact) + number(cambioArma*-30) - number(boUsada)]
[h, if (BonoBOFija == ""): BonoBOFija = 0]
[h: boniOfen = number(boniOfen) + number(BonoBOFija)]
[h, if (cambioAccion>0): boniOfen = boniOfen/2]
[r,  if(boUsada>0): br=br+ " Bo ya usada en el asalto: "+boUsada)+"." ]
[h, if (isPC()),code:{
	[w(getOwners()): br+"Bo Disponible = "+boniOfen ]
};{
	[g: broadcast(br+" > Bo Disponible = "+boniOfen, "GM")]
}]

<!-- **********  Obtengo la BD **********-->
[h,if (isPC()): bdAgi =  getHoja("BD",target) ; bdAgi=BD ]
[h: bonoAgi = number(bdAgi) - number(agiUsada) ]
[h,if (BonoBDFija == ""): BonoBDFi = 0]

<!-- **********  Ver si tiene Escudo **********-->
[h: bdEscudo = json.get(brazo2,"bonoBD")]
[h, if(pausear()==1): pause("bdEscudo","brazo2")]
[h, if (bdEscudo == "" || escudoUsado ==1): bdEscudo = 0]
[h: escudoCheck = 0]

<!-- ********** Limites a la Defensa **********-->
[h: tipoDeAtaque = [h: target = getStrProp(ga_atk,"tipoAtaque")]
[h: maxBoUsableParaDefensa = boniOfen ]
[h: if(tipoDeAtaque == "Proyectil" ||  tipoDeAtaque == "Animal" ): maxBoUsableParaDefensa = maxBoUsableParaDefensa /2]
[h: if(tipoDeAtaque == "Proyectil" &&  json.get("type",brazo2) != "Shield" ): maxBoUsableParaDefensa = 0]
[h: if( state.Aturdido ): maxBoUsableParaDefensa = maxBoUsableParaDefensa /2]



<!-- ********** Creo la lista de Disponibilidad de BO  **********-->
[h: arrEstilos = '' ]
[h: ta = getStrProp(GolpeActual,"tipoAtaque")]
[h, if(ta==""),code:{
	[arrEstilos = ""]
};{
	[for(i,0,maxBoUsableParaDefensa,5): arrEstilos = listAppend(arrEstilos, add("BD=",i,"; BO=",boniOfen-i,";") )) ]	
	[h: arrEstilos = listAppend(arrEstilos, add("BD=",maxBoUsableParaDefensa,"; BO=",0,";") ) ]
}]


<!-- ********** Lista dos Manos  **********-->
[h, if(ta=="2Armas"),code:{
	[arrEstilos =""]
	[h, for(i,0,maxBoUsableParaDefensa,10): arrEstilos = listAppend(arrEstilos, add("BD=",i/2,"; BO=",boniOfen-i,";") )) ]
	[h: arrEstilos = listAppend(arrEstilos, add("BD=",maxBoUsableParaDefensa/2,"; BO=",0,";") ) ]	
}]

<!-- ********** Creo la lista de Disponibilidad de BD  **********-->
[h: arrAgiBd = '']
[h, for(i,0,bonoAgi,5): arrAgiBd = listAppend(arrAgiBd, add(bonoAgi-i) ) ]
[h: arrAgiBd = listAppend(arrAgiBd, add(0) ) ]


<!-- ********** Invoco el Input  **********-->
[H: inputStr = "[]"]
[h,token(tokenAtk): image=getTokenImage()]
[H: inputStr = json.append(inputStr,"lblNombre|<html><h2>Defensa de "+target+"</h2></html>|-|LABEL|SPAN=TRUE")]
[H: inputStr = json.append(inputStr,"tokenAtkLbl|"+tokenAtk+" "+image+"|Atacante|LABEL|ICON=TRUE")]
[h,if(arrEstilos != ""): inputStr = json.append(inputStr,"bdSeleccionada|"+ arrEstilos +"|Cuanto Bo usar para Defender?|LIST|SELECT=0 VALUE=STRING")]
[H:inputStr = json.append(inputStr,"bdAgiSel|"+ arrAgiBd +"|Cuanto AGI usar para Defender?|LIST|SELECT=0 VALUE=STRING")]
[h,if(BonoBDFi > 0): inputStr = json.append(inputStr,"bdFijaLbl|"+BonoBDFija+"|BD FIJA|LABEL")]
[h,if(bdEscudo > 0): inputStr = json.append(inputStr,"escudoCheck|1|Usar el Escudo?(+"+bdEscudo+" BD)|CHECK")]

[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

<!-- ********** Checkeo Escudo  **********-->
[h,if (escudoCheck): bonoEscudo = bdEscudo ; bonoEscudo = 0]


[h,if(arrEstilos != ""): bonoBOforBD = getStrProp(bdSeleccionada,"BD") ; bonoBOforBD = 0]
[h: bdTmp = bonoBOforBD + bdAgiSel + bonoEscudo + BonoBDFi]

<!-- ********** Calculo los bonos defensivos temporales  **********-->
[h: GolpeActual = setStrProp(GolpeActual,"bdTmp",bdTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"agiTmp",bdAgiSel)]
[h, if(arrEstilos != ""): GolpeActual = setStrProp(GolpeActual,"boTmp",bonoBOforBD)]
[h: GolpeActual = setStrProp(GolpeActual,"escTmp",bonoEscudo)]

<!-- ********** Guardo los datos para llamar a calculo de danio **********-->
[h: strPropDatos =setStrProp("","tokenAtk",tokenAtk)]
[h: strPropDatos =setStrProp(strPropDatos,"target",getName())]
[h: strPropDatos =setStrProp(strPropDatos,"dado",0)]
[h: strPropDatos =setStrProp(strPropDatos,"modExtra",0)]

<!-- ********** Preparo el Link para el GM  **********-->
[h: link = macroLink("Calcular Danio de "+tokenAtk+" a "+getName(),"CalculoDanio@lib:asaltos", "ALL", strPropDatos)]
[h: broadcast(link, "gm")]
