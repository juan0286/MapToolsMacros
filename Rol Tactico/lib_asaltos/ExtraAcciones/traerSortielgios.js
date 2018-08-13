<!-- traerSortielgios -->
<!-- Ejemplo de Json Magia: { name: 'magia', alcance: '30', dura: '6', rango: 'self' lv: 5 } -->
<!-- Ejemplo de Json MagiaExtra en hoja : { id : 0 , magiaExtra: magia, cargas: 5 , renovacion : 'dayli' }] -->
<!-- Ejemplo de Json MagiaExtra en pj   : { id : 0 , cargas: 5 }] -->

[h: tokName =  arg(0)]
[h: assert(findToken(tokName),colorText("No existe el Token, no existen sortilegios.",'red'),0)]

[h: mes_h = getHoja("SortilegiosExtra",tokName)]
[h: mes = getProperty("SortExtra",tokName)]

[r, for(me : mes ),code:{
	[h: magia = json.get(me,'magia') ]
	[h: magia_name = json.get(magia,'name') ]
	[h: magiEx = json.get(mes,id) ]
	json.get(,'name') + " - (" + json.get(json.get(mes,json.get(MagiaExtra,'cargas') + ")" ]
}] 

[h: m = json.get(json.get(MagiaExtra,'magia'),'name')]