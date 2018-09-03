<!-- declaroDefensa -->
[h: tokenAtk =arg(0)]

[h: ga_atk =getProperty("GolpeActual",tokenAtk)]
[h: target = getStrProp(ga_atk,"target")]
[h: switchToken(target)]
[h: varsFromStrProp(getProperty("GolpeActual"))]
[h,if (isPC()): boact =  getBoActual(getName()) ; boact=BO1 ]

[h: bo =  number(boact) + number(cambioArma*-30) - number(boUsada)]
[h,if (cambioAccion>0): bo = bo/2]

[h,if (isPC()): bdAgi =  getHoja("BD",target) ; bdAgi=BD ]

[h: bd = number(bdAgi) - number(agiUsada) ]

[h: bdEscudo = getStrProp(brazo2,"bonoBD")]
[h,if (bdEscudo == "" || escudoUsado ==1): bdEscudo = 0]
[h: escudoCheck = 0]
[h: estiloBO=""]

[h,token(tokenAtk): image=getTokenImage()]


<!-- Crear LIST de BO Disponible -->
[h: arrEstilos = '' ]
[h: ta = getStrProp(GolpeActual,"tipoAtaque")]

[h, if(ta==""),code:{
	[arrEstilos = ""]
};{
	[for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BD=",i,"; BO=",bo-i,";") )) ]	
	[h: arrEstilos = listAppend(arrEstilos, add("BD=",0,"; BO=",bo,";") ) ]
}]

[h, if(ta=="2Armas"),code:{
	[arrEstilos =""]
	[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BD=",i/2,"; BO=",bo-i,";") )) ]
	[h: arrEstilos = listAppend(arrEstilos, add("BD=",0,"; BO=",bo/2,";") ) ]	
}]

<!-- Crear LIST de BD de AGI -->
[h: arrAgiBd = '']
[h, for(i,0,bd,5): arrAgiBd = listAppend(arrAgiBd, add(bd-i) ) ]
[h: arrAgiBd = listAppend(arrAgiBd, add(0) ) ]


[H: inputStr = "[]"]
 
<!-- Build input form simple -->
[H: inputStr = json.append(inputStr,"tokenAtkLbl|"+tokenAtk+" "+image+"|Atacante|LABEL|ICON=TRUE")]
[h,if(arrEstilos != ""): inputStr = json.append(inputStr,"bdSeleccionada|"+ arrEstilos +"|Cuanto Bo usar para Defender?|LIST|SELECT=0 VALUE=STRING")]
[H:inputStr = json.append(inputStr,"bdAgiSel|"+ arrAgiBd +"|Cuanto AGI usar para Defender?|LIST|SELECT=0 VALUE=STRING")]
[h,if(BonoBDFija > 0): inputStr = json.append(inputStr,"bdFijaLbl|"+BonoBDFija+"|BD FIJA|LABEL")]
[h,if(bdEscudo > 0): inputStr = json.append(inputStr,"escudoCheck|1|Usar el Escudo?(+"+bdEscudo+" BD)|CHECK")]

[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

[h,if (escudoCheck): bonoEscudo = bdEscudo ; bonoEscudo = 0]
[h,if(arrEstilos != ""): bonoBOforBD = getStrProp(bdSeleccionada,"BD") ; bonoBOforBD = 0]
[h: bdTmp = bonoBOforBD + bdAgiSel + bonoEscudo + BonoBDFija]

[h: GolpeActual = setStrProp(GolpeActual,"bdTmp",bdTmp)]
[h: GolpeActual = setStrProp(GolpeActual,"agiTmp",bdAgiSel)]
[h,if(arrEstilos != ""): GolpeActual = setStrProp(GolpeActual,"boTmp",bonoBOforBD)]
[h: GolpeActual = setStrProp(GolpeActual,"escTmp",bonoEscudo)]

[h: strPropDatos =setStrProp("","tokenAtk",tokenAtk)]
[h: strPropDatos =setStrProp(strPropDatos,"target",getName())]
[h: strPropDatos =setStrProp(strPropDatos,"dado",0)]
[h: strPropDatos =setStrProp(strPropDatos,"modExtra",0)]

[h: link = macroLink("Calcular Danio de "+tokenAtk+" a "+getName(),"CalculoDanio@lib:asaltos", "gm", strPropDatos)]
[h: broadcast(link, "gm")]
