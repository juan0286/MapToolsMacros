<!-- traerSortielgios -->
<!-- Ejemplo de Json Magia: name='magia';alcance=30;dura=6;rango='self';lv=5 ,  -->
<!-- Ejemplo de Json SORTILEGIOS_EXTRA en hoja : id=0;name='magia';alcance=30;dura=6;rango='self';lv=5;cargas=5;renovacion='dayli'] -->
<!-- Ejemplo de Json SortExtra en pj    ej; 0=5;1=5  ] -->
<!-- static_magiasExtra_json = magias de la hoja, son estaticas y dicen cuantas veces se usa pr dia  ] -->
<!-- dinamic_magiasExtra_json = magias extra en el pj, dicen cuantas veces cargas tiene actualmente  ] -->

[h: tokName =  arg(0)]


[h: assert(findToken(tokName),colorText("No existe el Token, no existen sortilegios.",'red'),0)]

<!--[h: static_magiasExtra_json = getHoja(tokName)] -->
[h: static_magiasExtra = getHoja("SORTILEGIOS_EXTRA",tokName)]
[h: dinamic_magiasExtra = getProperty("SortExtra",tokName)]
[h: ret = '']
[r, for(me : static_magiasExtra_json ),code:{
	[h: id = getStrProp(me, 'id')]
	[h: row = getStrProp(me, 'name') + ' (' + getStrProp(dinamic_magiasExtra,id) + ')' ]
	[h, if( cargas > 0 ): ret = json.append(ret,row)]	
}]

[h: macro.return = ret]