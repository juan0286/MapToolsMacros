<!-- disparaSortilegio -->

[h: tokName = getInitiativeToken()]
[h: cargas = getProperty('Cargas',tokName)]
[h: isSortExtra = getStrProp(cargas,'5',-1)]


[h, if(isSortExtra != -1),code{	
	gastarCargaSortExtra(json.get(sort,'id')) ;
};{
	perderPP(5)
}]

[h: setProperty('Cargas', "cargas=0",tokName) ]
[h: cargas = setStrProp(cargas,id,c -1)]




