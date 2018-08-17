<!-- pre_disparaSortilegio -->

[h: tokName = currentToken()]
[h: lv = getProperty("Nivel",tokName)]
<!-- Esto deberia generar variables de nombre bono y cant_cargas-->
[h: varsFromStrProp(cuentaCargas(tokName,"sortilegio"))]

[h: mes = traerSortielgios(tokName) ]
[h, if (length(mes) > 0:code{
	[H: dispSort = input(
		"tab0 | Sortilegio propio || TAB", 
		"Tienes "+ cant_cargas + " Cargas. BONO = " + string(bono) +"|TEXT",
		"lvSortilegio|Nivel del Sortilegio | "+ [count(lv): roll.count ] + "|| LIST",
		"tab1 | Sortilegio Extra || TAB", 
		"sortilegioChoice|"+ mes +"|Que Sortilegio?|RADIO|ORIENT=V SELECT=0"
	]
	[h: magia = setStrProp('','lv',lvSortilegio)]
	[h: magiaExtra = setStrProp('','sortExtra',json.get(sortilegioChoice))]
	[h,if(lvSortilegio != ''): setProperty('Cargas',magia,tokName) ; setProperty('Cargas',magiaExtra,tokName) ]	
};{
	[H: dispSort=  input(		
		"Tienes "+ cant_cargas + " Cargas. BONO = " + string(bono) +"|TEXT",
		"lvSortilegio|Nivel del Sortilegio | "+ [count(lv): roll.count ] + "|| LIST"
	]	
	[h: magia = setStrProp('','lv',lvSortilegio)]
	[h: setProperty('Cargas',magia,tokName) ]
	
}]
[h:abort(dispSort)]