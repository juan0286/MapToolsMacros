<!-- pre_disparaSortilegiopre_disparaSortilegio -->
[h: tokName = arg(0)]
[h,if(tokName == ""): tokName = getName(getSelected())]

[h: switchToken(tokName)]
[h, if(pausear()==1): pause("tokName","Armadura")]
[h: lv = Nivel ]
[h: Cargas = 0 ]
[h: Sortilegio = "" ]
[h: listaLv = ""]
[r: lv]
[h, count(lv): listaLv = listAppend(listaLv,roll.count+1) ]

[h: sortCargado = CargaSortilegio]
[h: varsFromStrProp(CargaSortilegio)]

[h: bono = -30]
[h,if(Cargas == 1):bono = -15]
[h,if(Cargas == 2):bono = 0]
[h,if(Cargas == 3):bono = 10]
[h,if(Cargas > 3):bono = 20]

[h: mes = "coso1,coso2,coso3" ]
[h, if (length(mes) > 0),code:{
	[H: dispSort = input(
		"tab0 | Sortilegio propio || TAB", 
		"Tienes "+ Cargas + " Cargas. BONO = " + string(bono) +"||TEXT",
		"lvSortilegio|"+ listaLv + "|Nivel del Sortilegio|LIST",
		"tab1 | Sortilegio Extra || TAB", 
		"sortilegioChoice|"+ mes +"|Que Sortilegio?|RADIO|ORIENT=V SELECT=0"
	)]
};{
	[H: dispSort=  input(		
		"lvSortilegio|Nivel del Sortilegio | "+listaLv+ "|| LIST"
	]
	[h: sortCargado = json.set(cjson,sort,'')]
	
	
}]

[h:abort(dispSort)]

