<! -- Crear Armas -->
<!-- Crear con un Dialog, las caracteristicas del arma, y crear un token, que ubicare en un mapa de Inventario, en el Token, pondre la imagen, y otra macro los importará a una tabla -->

[h: alcances= "alc1=;alc2=;alc3=;alc4=;alc5=;"]


[h:clase_list="Normal,Magica,Mithirl,Sagrada,Exterminadora"]
[h:danio= "BO_FILO,BO_CONT,BO_2MAN,BO_ASTA,BO_PELEA"]
[h:tipoBo_List= "BO_FILO,BO_CONT,BO_2MAN,BO_ASTA,BO_PELEA"]
[h:usable = "2manos,1mano,2armas"]
[tam  = "1,2,3"]


[h: tablasDanio=""]
[h, foreach(tabla,getTableNames()),code:{	
	[if ( startsWith(tabla, "ataque") ): tablasDanio =listAppend(tablasDanio,replace(tabla,"ataque",""))]

}]
[h: tablasDanio = listSort(tablasDanio,'N')]

[h: tablasCriticos=""]
[h, foreach(tabla,getTableNames()),code:{
	[tabla = stringToList(tabla,"_")]
	[tabla = listGet(tabla, 0)]
	[if ( startsWith(tabla, "critico") && !listContains(tablasCriticos, tabla)): tablasCriticos =listAppend(tablasCriticos,tabla)]
}]
[h: tablasCriticos = listSort(tablasCriticos,'N')]
[h: tablasCriticos= listInsert(tablasCriticos, 0, "NO")]

[h: input =input( 
	"nombre||Nombre|TEXT",
	"bonoBO||Bono a la BO|TEXT",
	"pifia|1|Pifia|TEXT",
	"alcances|"+alcances+"|Alcances(ej: 9=-15;)|PROPS|SPAN=TRUE SETVARS=UNSUFFIXED",
	"clase|"+ clase_list +"|Clase|LIST|SELECT=0 VALUE=STRING",
	"danio|"+ tablasDanio +"|Tabla de Danio|LIST|SELECT=0 VALUE=STRING",
	"tipoBO|"+tipoBo_List+"|Tipo de Bo|LIST|VALUE=STRING",	
	"crit1|"+tablasCriticos+"|Critico Principal|LIST|SELECT=1 VALUE=STRING",	
	"modCri1||Mod|TEXT",
	"crit2|"+tablasCriticos+"|Critico Secundario|LIST|SELECT=0 VALUE=STRING",	
	"modCri2||Mod|TEXT",
	"crit3|"+tablasCriticos+"|Critico Terceario|LIST|SELECT=0 VALUE=STRING",	
	"modCri3||Mod|TEXT",
	"crit4|"+tablasCriticos+"|Critico Extra|LIST|SELECT=0 VALUE=STRING",		
	"modCri4||Mod|TEXT",
	"UnaMano|0|Se puede usar con 1 manos|CHECK",
	"DosManos|0|Se puede usar con 2 manos?|CHECK",
	"DosArmas|0|Se puede usar con 2 Armas?|CHECK",
	"tam|1,2,3,4|Tamanio|LIST|SELECT=0 VALUE=STRING",		
	"evt||Evento|TEXT")]
[h: abort(input)]

[h: alcances_result =""]
[h, if(alc1!=""): alcances_result=alcances_result+alc1]
[h, if(alc2!=""): alcances_result=alcances_result+alc2]
[h, if(alc3!=""): alcances_result=alcances_result+alc3]
[h, if(alc4!=""): alcances_result=alcances_result+alc4]
[h, if(alc5!=""): alcances_result=alcances_result+alc5]

[h: crit_result =""]
[h, if(crit1!=""): crit_result=setStrProp(crit_result,crit1,modCri1)]
[h, if(crit2!=""): crit_result=setStrProp(crit_result,crit2,modCri2)]
[h, if(crit3!=""): crit_result=setStrProp(crit_result,crit3,modCri3)]
[h, if(crit4!=""): crit_result=setStrProp(crit_result,crit4,modCri4)]

[h: usable_result =""]
[h, if(UnaMano>0): usable_result=listAppend(usable_result,"1mano")]
[h, if(DosManos>0): usable_result=listAppend(usable_result,"2manos")]
[h, if(DosArmas>0): usable_result=listAppend(usable_result,"2armas")]


[h: libArmas = getGMNotes("lib:inventario")]
[h: newId = getStrProp(libArmas,"idArmas")]

[h: arma = json.set("{}","ID",newId)]
[h: arma = json.set(arma,"nombre",nombre)]
[h: arma = json.set(arma,"bonoBO",bonoBO)]
[h: arma = json.set(arma,"pifia",pifia)]
[h: arma = json.set(arma,"alcance",alcances_result)]
[h: arma = json.set(arma,"clase",clase)]
[h: arma = json.set(arma,"danio","ataque"+danio)]
[h: arma = json.set(arma,"tipoBo",tipoBO)]
[h: arma = json.set(arma,"criticos",crit_result)]
[h: arma = json.set(arma,"usable",usable_result)]
[h: arma = json.set(arma,"tam",tam)]
[h: arma = json.set(arma,"evt",evt)]
[h: arma = json.set(arma,"evt",evt)]

[h: libArmas = setStrProp(libArmas,"idArmas",newId+1)]
[h: setGMNotes(libArmas,"lib:inventario")]

[h: addTableEntry("Weapons",newId,newId,arma)]
<pre>[r: json.indent(arma,3) ]</pre>
