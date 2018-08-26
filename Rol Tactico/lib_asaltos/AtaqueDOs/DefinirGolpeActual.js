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
	[tabla = stringToList(tabla,"_")]
	[tabla = listGet(tabla, 0)]
	[if ( startsWith(tabla, "critico") && !listContains(tablasCriticos, tabla)): tablasCriticos =listAppend(tablasCriticos,tabla)]

}]
[h: tablasDanio=""]
[h, foreach(tabla,getTableNames()),code:{	
	[if ( startsWith(tabla, "ataque") ): tablasDanio =listAppend(tablasDanio,replace(tabla,"ataque",""))]

}]


[h:seta = " BonoArmas="+1d5*5+"; BonoEscudo=0;BoActual="+1d20*5+";bdAgiActual="+1d8*5"+;BoFija=0;BdFija=0;tablaDanio=criticoCorte;"]	
[h: abort(input(
"tokenLbl|"+getName()+" "+getTokenImage()+"|Ficha|LABEL|ICON=TRUE",
"criticoTable|"+tablasDanio+"|Tabla De Danio|LIST|SELECT="+listFind(tablasDanio, "EspadaAncha")+" VALUE=STRING",
"criticoTable|"+tablasCriticos+"|Tabla De Critos|LIST|SELECT="+listFind(tablasCriticos, "criticoCorte")+" VALUE=STRING",
"arma1|"+listWeapons+"|Arma Der|LIST|SELECT=0 VALUE=STRING",
"arma2|"+listWeapons+"|Arma Izq|LIST|SELECT=1 VALUE=STRING",
"resultVars|"+seta+"|Entrar valores|PROPS|SPAN=TRUE SETVARS=UNSUFFIXED"))]
[h,if (arma1 == arma2): abort(0)]
[h: setStrProp(resultVars,"armas",arma1+","+arma2)]
[h: setStrProp(resultVars,"tablaCritico",criticoTable)]
[h: setProperty("GolpeActual",resultVars)]
