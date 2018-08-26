<!-- DeclararAtaque --> 
[h: tokenAtk = arg(0)]
[h: switchToken(tokenAtk)]
[h: bonoArma = 45]
[h: boFija = 0]
[h: bo = getStrProp(GolpeActual,"boActual")]
[h: armas = getStrProp(GolpeActual,"armas")]

[h: bdAgi = getStrProp(GolpeActual,"bdAgiActual")]
[h: penaGolpe = getStrProp(GolpeActual,"penaGolpe")]
[h: tablaDanio = getStrProp(GolpeActual,"tablaDanio")]
[h: tablaCritico = getStrProp(GolpeActual,"tablaCritico")]
[h: estiloBO=""]

[h,token(tokenAtk): lsVisibleNpc = json.intersection( getTokenNames("json"), getVisibleTokenNames("json") )]
[h: tokenList = json.toList(lsVisibleNpc)]
[H: Num = listCount(tokenList)]
[h: imgList = ""]
[h: finalTokenList = ""]
[h,COUNT(Num),CODE:
{	
	[h:tokenName=listGet(tokenList,roll.count)]
	[h: dist= getDistance(tokenName)]	
	[h, if(dist <= 3 && tokenName != tokenAtk),code:{		
		[h,token(tokenName): image=getTokenImage()]
		[h:imgList=listAppend(imgList,tokenName+" "+image)]	
		[h: finalTokenList = listAppend(finalTokenList,tokenName)]
	}]	
}]

[h: arrEstilos = listAppend('', estiloBo) ]

[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BO=",bo-i,"; BD=",bdAgi+i,";") ) ]
[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",bdAgi+bo,";") ) ]


[h: input =input( 
	"armasLbl|"+armas+"|Arma|LABEL",
	"target|"+imgList+"|Enemigo Objetivo|LIST|SELECT=0 ICON=TRUE ICONSIZE=30",
	"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING",
	"penaGolpes|"+penaGolpe+"|Penaliza|LABEL|ICON=TRUE")]
[h: abort(input)]

[h: boTmp = number(getStrProp(boSeleccionada,"BO")),penaGolpe, bonoArma, boFija]
	
[h: target = listGet(finalTokenList,Target)]

[h: data = setStrProp(GolpeActual,"boTmp",boTmp)]
[h: data = setStrProp(data,"target",target)]
<!-- Guardo los nuevos Datos dentro del golpeActual temporalmente -->
[h: GolpeActual =data]

[h,token(Target): jugadoresDef = getOwners()]
[h, if( isPC(target) ): macroLink("<h2>Defenderse de "+ tokenAtk +"!</h2>", "DeclaroDefensa@lib:asaltos", "self", tokenAtk ) ; DeclaroDefensa(tokenAtk) ]
