<!-- pre_disparaSortilegio -->

[h: tokName = currentToken()]
[h: lv = getProperty("Nivel",tokName)]
[h: n = cuentaCargas(tokName,"sortilegio") + 1]


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
		"lvSortilegio|Nivel del Sortilegio | "+ [r,for(n, 1, lv+1): n] + "|| LIST",
		"tab1 | Sortilegio Extra || TAB", 
		"sortilegioChoice|"+ mes +"|Que Sortilegio?|RADIO|ORIENT=V SELECT=0"
	]

};{
	[H: dispSort=  input(		
		"Tienes "+ n + " Cargas. BONO = " + string(bono) +"|TEXT",
		"lvSortilegio|Nivel del Sortilegio | "+ [count(lv): n=n+1 ] + "|| LIST"
	]	
	[h: cargaSortilegio = setStrProp(cargaSortilegio,'sortExtra',sortilegioChoice)]
	[h: setProperty('Cargas',cargaSortilegio,tokName) ]
	
}]
[h: cargaSortilegio = setStrProp(cargaSortilegio,'cargas',n)]
[h,if(lvSortilegio != ''): setProperty('Cargas',cargaSortilegio,tokName) ; ]
[h:abort(dispSort)]