<!-- declaroDefensa -->
[h: tokenDef =arg(0)]
[switchToken(tokenAtk)]
[h: listArmas = "Espada, EspadaDos"]
[h: bo = getStrProp(GolpeActual,"boActual")]
[h: bd = getStrProp(GolpeActual,"bdActual")]
[h: penaGolpe = getStrProp(GolpeActual,"penaGolpe")]
[h: estiloBO=""]


Declaro Defensa
- bo parada
- bd Agi
- bd Escudo
(bd fija)
(sumo bonos mágicos si los hay)
- (Modificador)Extra a desicion del máster (por cobertura, o alguna cosa, vaya a saber)
// arma, boFinal, Target, tokenAtk
[h: tokenDef = Target]
[h: varsFromStrProp(arg(0))]
[h,token(tokenAtk): image=getTokenImage()]


<!-- Crear LIST de BO Disponible -->
[h: arrEstilos = listAppend('', estiloBo) ]
[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add(bo-i) ]
[h: arrEstilos = listAppend(arrEstilos, add(0) ) ]

<!-- Crear LIST de BD de AGI -->
[h: arrAgiBd = '']
[h, for(i,0,bdActual,5): arrAgiBd = listAppend(arrAgiBd, add("BD=",bd+i,"; BO=",bo-i,";") ) ]
[h: arrAgiBd = listAppend(arrAgiBd, add(0) ) ]

[h: input =input( 
	"armasLbl|"+listArmas+"|Arma|LABEL",
	"tokenAtkLbl|"+tokenAtk+" "+image+"|Atacante|LABEL|ICON=TRUE",	
	"bdSeleccionada|"+ arrEstilos +"|Cuanto Bo usar para Defender?|LIST|SELECT=0 VALUE=STRING",
	"bdAgiSel|"+ arrAgiBd +"|Cuanto Bo usar para Defender?|LIST|SELECT=0 VALUE=STRING",
	"escudoCheck|1|Usar el Escudo?(+"+bdEscudo+" BD)|CHECK"
	"TargetConcealed|0|Target has Concealment|CHECK")]
[h: abort(input)]