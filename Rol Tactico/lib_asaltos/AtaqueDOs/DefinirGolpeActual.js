<!-- DefinirGolpeActual -->
[h: val =""]
[h: ind =0]
[h: listWeapons=""]
[h, while(table("Weapons",ind) != val),code:{
	[val=table("Weapons",ind)]
	[ind = ind +1]
	[listWeapons = listAppend(listWeapons,val)]

}]


[h:seta = " BonoArmas=45; BonoEscudo=0;BoActual=245;bdAgiActual=20;BoFija=0;BdFija=0;"]	
[h: abort(input(
"tokenLbl|"+getName()+" "+getTokenImage()+"|Ficha|LABEL|ICON=TRUE",
"arma1|"+listWeapons+"|Arma Der|LIST|SELECT=0 VALUE=STRING",
"arma2|"+listWeapons+"|Arma Izq|LIST|SELECT=1 VALUE=STRING",
"resultVars|"+seta+"|Enter values|PROPS|SPAN=TRUE SETVARS=UNSUFFIXED"))]
[h,if (arma1 == arma2): abort(0)]
[h: setStrProp(resultVars,"armas",arma1+","+arma2)]
[h: setProperty("GolpeActual",resultVars)]