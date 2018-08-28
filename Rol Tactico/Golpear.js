<!-- Golpear -->
[h: target = getName()]
[h: tokenAtk = "GM" ]
[h: dado = 0 ]
[h: modExtra = 0 ]

[h: val =""]
[h: ind =0]

[h: tablasDanio=""]
[h, foreach(tabla,getTableNames()),code:{	
	[if ( startsWith(tabla, "ataque") ): tablasDanio =listAppend(tablasDanio,replace(tabla,"ataque",""))]

}]

[h: tablasCriticos=""]
[h, foreach(tabla,getTableNames()),code:{
	[tabla = stringToList(tabla,"_")]
	[tabla = listGet(tabla, 0)]
	[if ( startsWith(tabla, "critico") && !listContains(tablasCriticos, tabla)): tablasCriticos =listAppend(tablasCriticos,tabla)]

}]


[h: abort(input(
	"tokenLbl|"+getName()+" "+getTokenImage()+"|Ficha|LABEL|ICON=TRUE",
	"tablasDanio|"+tablasDanio+"|Tabla De Danio|LIST|SELECT="+listFind(tablasDanio, "EspadaAncha")+" VALUE=STRING",
	"tablasCriticos|"+tablasCriticos+"|Tabla De Critos|LIST|SELECT="+listFind(tablasCriticos, "criticoCorte")+" VALUE=STRING"
))]

[r: strPropFromVars("target,tokenAtk,dado,modExtra,tablasDanio,tablasCriticos","UNSUFFIXED")]

[h: CalculoDanio(strPropDatos)]