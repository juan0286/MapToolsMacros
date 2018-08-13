<!-- disparaSortilegio -->

[h: tokName = getInitiativeToken()]
[h: sort = getProperty('Cargas',tokName)]
[h: c = json.fields(cargaSortilegio)]
[h: isSortExtra = json.indexOf(c, "magiaExtra")]


[h, if(isSortExtra > -1),code{
	
};{
	gastarCargaSortExtra(json.get(sort,'id')) ;
}]