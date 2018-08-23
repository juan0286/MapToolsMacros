<!-- DeclararAtaque --> 
[h: tokenAtk = arg(0)]
[switchToken(tokenAtk)]
[h: listArmas = "Espada, EspadaDos"]
[h: bonoArma = 45]
[h: boFija = 0]
[h: bo = getStrProp(GolpeActual,"boActual")]
[h: bdAgi = getStrProp(GolpeActual,"bdAgiActual")]
[h: penaGolpe = getStrProp(GolpeActual,"penaGolpe")]
[h: estiloBO=""]

[h,token(tokenAtk): imgList=getVisibleTokenNames()]
 
[H: Num = listCount(imgList)]
 
[h,COUNT(Num),CODE:
{	
	[h,token(tokenAtk): dist = getDistance(tokenAtk)]	
	[h, if(dist <= 3),code:{
		[h:tokenName=listGet(imgList,roll.count)]
		[h,token(tokenName): image=getTokenImage()]
		[h:imgList=listReplace(imgList,roll.count,tokenName+" "+image)]
	}]	
}]

[h: arrEstilos = listAppend('', estiloBo) ]

[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("BO=",bo-i,"; BD=",bd+i,";") ) ]
[h: arrEstilos = listAppend(arrEstilos, add("BO=",0,"; BD=",bd+bo,";") ) ]

[h: pause("Num","listArmas")]
[h: input =input( 
	"armasLbl|"+listArmas"+|Arma|LABEL",
	"Target|"+imgList+"|Enemigo Objetivo|LIST|SELECT=0 ICON=TRUE ICONSIZE=30",
	"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING",
	"penaGolpes|"+penaGolpe+"|Penaliza|LABEL|ICON=TRUE")]
[h: abort(input)]

[h: boFinal = getStrProp(boSeleccionada,"BO") + penaGolpe + bonoArma + boFija]

[r: tokenDef = Target]
[h: data = setStrProp("","arma",listArmas)]
[h: data = setStrProp(data,"bofinal",boFinal)]
[h: data = setStrProp(data,"tokenAtk",tokenAtk)]
[h: data = setStrProp(data,"target",Target)]
[h,token(tokenDef): jugadoresDef = getOwners()]
[h, if( isPC(tokenDef) ): broadcast(macroLink("<color='red'>", "declaroDefensa@lib:asalto", 'none', data, ""), jugadoresDef) ; declaroDefensa(data) ]


