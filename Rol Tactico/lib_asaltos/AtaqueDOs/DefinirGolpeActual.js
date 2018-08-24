<!-- DefinirGolpeActual -->
[h: val =""]
[h: ind =0]
[h: listWeapons=""]
[h, while(table("Weapons",ind) != val),code:{
	[val=table("Weapons",ind)]
	[ind = ind +1]
	[listWeapons = listAppend(listWeapons,val)]

}]
[h: tablasCriticos=""]
[h, foreach(tabla,getTableNames()),code:{
	[tabla = substring(tabla, 0,length(tabla)-3)]
	[if ( startsWith(tabla, "critico") && !listContains(tablasCriticos, tabla)):listAppend(tablasCriticos,tabla)]

}]


[h:seta = " BonoArmas=45; BonoEscudo=0;BoActual=245;bdAgiActual=20;BoFija=0;BdFija=0;tablaDanio=criticoCorte;"]	
[h: abort(input(
"tokenLbl|"+getName()+" "+getTokenImage()+"|Ficha|LABEL|ICON=TRUE",
"criticoTable|"+tablasCriticos+"|Arma Der|LIST|SELECT=0 VALUE=STRING",
"arma1|"+listWeapons+"|Arma Der|LIST|SELECT=0 VALUE=STRING",
"arma2|"+listWeapons+"|Arma Izq|LIST|SELECT=1 VALUE=STRING",
"resultVars|"+seta+"|Entrar valores|PROPS|SPAN=TRUE SETVARS=UNSUFFIXED"))]
[h,if (arma1 == arma2): abort(0)]
[h: setStrProp(resultVars,"armas",arma1+","+arma2)]
[h: setStrProp(resultVars,"tablaDanio",criticoTable)]
[h: setProperty("GolpeActual",resultVars)]
