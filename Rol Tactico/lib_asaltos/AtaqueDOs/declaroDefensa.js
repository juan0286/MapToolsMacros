<!-- declaroDefensa -->
[h: tokenAtk =arg(0)]
[h: varsFromStrProp(getProperty("GolpeActual",tokenAtk))]
[h: tokenDef = target]
[h: switchToken(tokenDef)]
[h: pr = getProperty("GolpeActual",tokenDef)]
[h: listArmas = "Espada, EspadaDos"]
[h: bo = getStrProp(GolpeActual,"boActual")]
[h: bd = getStrProp(GolpeActual,"bdAgiActual",tokenDef)]
[h: bdEscudo = getStrProp(GolpeActual,"bonoEscudo")]
[h: bdFija = getStrProp(GolpeActual,"bdFija")]
[h: penaGolpe = getStrProp(GolpeActual,"penaGolpe")]
[h: escudoCheck = 0]
[h: estiloBO=""]

[h,token(tokenAtk): image=getTokenImage()]


<!-- Crear LIST de BO Disponible -->
[h: arrEstilos = '' ]
[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BD=",i,"; BO=",bo-i,";") )) ]
[h: arrEstilos = listAppend(arrEstilos, add("BD=",0,"; BO=",bo,";") ) ]



<!-- Crear LIST de BD de AGI -->
[h: arrAgiBd = '']
[h, for(i,0,bd,5): arrAgiBd = listAppend(arrAgiBd, add(bd-i) ) ]
[h: arrAgiBd = listAppend(arrAgiBd, add(0) ) ]


[H: inputStr = "[]"]
 
<!-- Build input form simple -->
[H: inputStr = json.append(inputStr,"armasLbl|"+listArmas+"|Arma|LABEL")]
[H: inputStr = json.append(inputStr,"tokenAtkLbl|"+tokenAtk+" "+image+"|Atacante|LABEL|ICON=TRUE")]
[H: inputStr = json.append(inputStr,"bdSeleccionada|"+ arrEstilos +"|Cuanto Bo usar para Defender?|LIST|SELECT=0 VALUE=STRING")]
[H: inputStr = json.append(inputStr,"bdAgiSel|"+ arrAgiBd +"|Cuanto AGI usar para Defender?|LIST|SELECT=0 VALUE=STRING")]
[H: inputStr = json.append(inputStr,"bdFijaLbl|"+bdFija+"|BD FIJA|LABEL")]
[h,if(bdEscudo > 0): inputStr = json.append(inputStr,"escudoCheck|1|Usar el Escudo?(+"+bdEscudo+" BD)|CHECK")]

[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

[h,if (escudoCheck): bonoEscudo = bdEscudo ; bonoEscudo = 0]
[h: bdTmp = getStrProp(bdSeleccionada,"BD") + bdAgiSel + bonoEscudo + bdFija]

[h: data = setStrProp(GolpeActual,"bdTmp",bdTmp)]
[h: data = setStrProp(GolpeActual,"agiTmp",bdAgiSel)]
[h: data = setStrProp(GolpeActual,"escTmp",bonoEscudo)]

[h: data = setStrProp(data,"target",target)]

[h: strPropDatos =setStrProp("","tokenAtk",tokenAtk)]
[h: strPropDatos =setStrProp(strPropDatos,"target",target)]
[h: strPropDatos =setStrProp(strPropDatos,"dado",0)]
[h: strPropDatos =setStrProp(strPropDatos,"modExtra",0)]
[h: strPropDatos =setStrProp(strPropDatos,"dadoCritico",0)]

[h: CalculoDanio(strPropDatos)]