<!-- declaroDefensa -->
[h: data =arg(0)]
[h: varsFromStrProp(arg(0))]
[h: tokenDef = target]
[h: pause("tokenDef")]
[h: switchToken(tokenDef)]
[h: pr = getProperty("GolpeActual",tokenDef)]
[h: listArmas = "Espada, EspadaDos"]
[h: bo = getStrProp(GolpeActual,"boActual")]
[h: bd = getStrProp(GolpeActual,"bdAgiActual",tokenDef)]
[h: bdEscudo = getStrProp(GolpeActual,"bonoEscudo")]
[h: bdFija = getStrProp(GolpeActual,"bdFija")]
[h: penaGolpe = getStrProp(GolpeActual,"penaGolpe")]

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

[h,if(bdEscudo > 0): escudoLabel = "escudoCheck|1|Usar el Escudo?(+"+bdEscudo+" BD)|CHECK" ; "escudoCheck|0|Escudo no Disponible|LABEL"]

[h: input =input( 
	"armasLbl|"+listArmas+"|Arma|LABEL",
	"tokenAtkLbl|"+tokenAtk+" "+image+"|Atacante|LABEL|ICON=TRUE",	
	"bdSeleccionada|"+ arrEstilos +"|Cuanto Bo usar para Defender?|LIST|SELECT=0 VALUE=STRING",
	"bdAgiSel|"+ arrAgiBd +"|Cuanto AGI usar para Defender?|LIST|SELECT=0 VALUE=STRING",
	"extraMod|0|Modificador Extra|TEXT",
	"bdFijaLbl|"+bdFija+"|BD FIJA|LABEL",
	escudoLabel)]
[h: abort(input)]

[h,if (escudoCheck): bonoEscudo = bdEscudo ; bonoEscudo = 0]
[h: bdFinal = getStrProp(bdSeleccionada,"BD") + bdAgiSel + bonoEscudo + bdFija +extraMod]
[h: data = setStrProp(data,"bdFinal",bdFinal)]
[h: data = setStrProp(data,"armadura",armadura)]



