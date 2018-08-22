[h: tokenAtk = arg(0)]
[h: tokenDef = arg(1)]
[h: bo= 153]
[h: bd= 15]
[h: arma = "arma=Esapada Sagrada; bonoArma=30;tablaDanio=ataqueEspadaAncha;" ]
[h: arrayBonos = ""]
[h: arrEstilos =""]
[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BO=",bo-i,"; BD=",bd+i,";") ) ]
[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",bd+bo,";"))]
[h: boSeleccionada=0]

[h: boSelector=input(
	"boActual|"+ bo +"|BO ACTUAL |LABEL",
	"bdActual|"+ bd +"|BD ACTUAL |LABEL",
	
	"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING",
	"arma_a|"+ getStrProp(arma,'bonoArma') +"|"+ getStrProp(arma,'arma') +"|LABEL"
)]

[h: varsFromStrProp(boSeleccionada) ]
[h: re = setStrProp(arma,"bo",bo)]
[h: setProperty("golpeActual", re, tokenAtk)]
[h,if(getProperty("golpeActual", tokenDef) != ""): showResultadoCombate(tokenAtk,tokenDef) ]