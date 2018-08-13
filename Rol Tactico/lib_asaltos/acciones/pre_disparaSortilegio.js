<!-- pre_disparaSortilegio -->

[h: tokName = getInitiativeToken()]
[h: lv = getProperty("Nivel",tokName)]
[h: cargaSortilegio = getProperty("Cargas",tokName)]
[h: c = json.fields(cargaSortilegio)]
[h, if(json.indexOf(c, "sortilegio") > -1) n = json.get(cargas,'cargas') ; n = 0]

[h: bono = -30]
[h,if(n == 1):bono = -15]
[h,if(n == 2):bono = -0]
[h,if(n == 3):bono = -10]
[h,if(n == 4):bono = -20]

[h: mes = traerSortielgios(tokName) ]
[h, if (length(mes) > 0:code{
	[H: dispSort = input(
		"tab0 | Sortilegio propio || TAB", 
		"Tienes "+ n + " Cargas. BONO = " + string(bono) +"|TEXT",
		"lvSortilegio|Nivel del Sortilegio | "+ [count(lv): n=n+1 ] + "|| LIST",
		"tab1 | Sortilegio Extra || TAB", 
		"sortilegioChoice|"+ traerSortielgios(tokName) +"|Que Sortilegio?|RADIO|ORIENT=V SELECT=0"
	]
};{
	[H: dispSort=  input(		
		"lvSortilegio|Nivel del Sortilegio | "+ [count(lv): n=n+1 ] + "|| LIST"
	]
	[h: cargaSortilegio = json.set(cargaSortilegio,sort,'')]
	[h: setProperty('Cargas',cargaSortilegio,tokName) ]
	
}]

[h:abort(dispSort)]