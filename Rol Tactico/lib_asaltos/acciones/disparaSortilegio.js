<!-- disparaSortilegio -->

[h: tokName = getInitiativeToken()]
[h: cargas = getProperty('Cargas',tokName)]
[h: isSortExtra = getStrProp(cargas,'5',-1)]

sortExtra
[h: dialogoSortilego = {
	<html>
	<head></head>
	<body>
		<h1>[r: tokName] Lanza  sortilegio<h2>
		<table>
		<tr>
			<th>Cargas</th> 
			<th> [r: getStrProp(cargas,'cant_cargas') + "(BONO: " + getStrProp(cargas,'bono') + ")"] </th>
		</tr>
		<tr>
			<th>Sortilegio Base</th> 
			<th> [r: getHoja('HB_SB',tokName)] </th>
		</tr>
		<tr>
			<th>Sortilegio Dirigido</th> 
			<th> [r: getHoja('HB_SORT_D',tokName)] </th>
		</tr>
		</table>
	</body>
	</html>
}]]


[h, if(isSortExtra != -1),code{	
	[h: dinamic_magiasExtra = getProperty("SortExtra",tokName)]
	[h: dinamic_magiasExtra = setStrProp(dinamic_magiasExtra,'id')]
	gastarCargaSortExtra(json.get(sort,'id')) ;
};{
	perderPP(5)
}]

[h: setProperty('Cargas', "cargas=0",tokName) ]
[h: cargas = setStrProp(cargas,id,c -1)]




