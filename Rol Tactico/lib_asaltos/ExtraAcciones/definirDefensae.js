<!-- definirDefensa -->
[h: tokenAtk = arg(0)]
[h: tokenDef = arg(1)]
[h: bo= 153]
[h: bd= 15]
[h: arma = "Arma=Esapada Sagrada; bonoBo=30;" ]
[h: arrayBonos = ""]
[h: arrEstilos =""]
[h: escudo = "escudo=Escudo Rodana; bonoEsc=25;" ]
[h: armadura = "armadura="+ 25 +";" ]
[h: esc_label =  getStrProp(escudo,'escudo') + " (+" + getStrProp(escudo,'bonoEsc') + " BD)"]
[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BD=",bd+i,"; BO=",bo-i,";") ) ]
[h: arrEstilos = listAppend(arrEstilos, add("BD=",bd+bo,"; BO=",0,";"))]
[h: bdSeleccionada=0]

[h: boSelector=input(
	"boActual|"+ bo +"|BO ACTUAL |LABEL",
	"bdActual|"+ bd +"|BD ACTUAL |LABEL",	
	"bdSeleccionada|"+ arrEstilos +"|Cuanto BD Defensa / Ataque |LIST|SELECT=0 VALUE=STRING",
	"escudo_a|0|"+ esc_label +"|CHECK"
	
)]

[h: varsFromStrProp(bdSeleccionada) ]
[h: re = setStrProp("","bd",bd)]
[h: re = setStrProp(re,"armadura", getProperty("Armadura"))]
[h, if (escudo_a==1):re =add(re,escudo)]
[h: setProperty("golpeActual", re, tokenDef)]
[h,if(getProperty("golpeActual", tokenAtk) != ""): showResultadoCombate(tokenAtk,tokenDef) ]