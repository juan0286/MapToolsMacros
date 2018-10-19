<!-- showCargasSortilInRow-->

[h: cantidadDeCargas=getStrProp(Cargas,"cargaSortilegio")]
	
	[h, if(cantidadDeCargas==""): cantidadDeCargas = 0]
	[r: rowPerso('<b>'+cantidadDeCargas+'</b>',temafondo)]		

	[h, if(cantidadDeCargas < 1): bono = -30]
	[h, if(cantidadDeCargas == 1): bono = -15]
	[h, if(cantidadDeCargas == 2): bono = -0]
	[h, if(cantidadDeCargas == 3): bono = +10]
	[h, if(cantidadDeCargas > 3): bono = +20]
	[r: rowPerso('<span>Bono</span>',temafondo)]			
	[r: rowPerso('<b>'+bono+'</b>',temafondo)]	