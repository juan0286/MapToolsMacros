<!-- Lector de Json tablas -->

[h: tablas = "BolaDeFuego, Garrote"]

[h, foreach(t,tablas): crearTablaFromJson(t)]







------------------------
[h: tablas = "BolaDeFuego, Garrote"]

[h: tablaJson = getNotes("todo")]
[h: con = json.length(tablaJson) / 150]

[h,c(con),code:{
	[h: j = json.get(tablaJson, roll.count)]
	[h: n = json.get(j, "table")]
	[h:crearTablaFromJsonDos(n,j)]
	[h: val = roll.count / con * 100 ]
	[h: link = macroLinkText("porcentaje@lib:asaltos", "none", "", con+","+val)]
	[h: execLink(link)]
}]
Finalizado

