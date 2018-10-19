<!-- showCargasSortilInRow-->

[h: cantidadDeCargas=getStrProp(Cargas,"cargaProyectil")]
[h, if(cantidadDeCargas==""): cantidadDeCargas = 0]
[r: rowPerso('<b>'+cantidadDeCargas+'</b>',temafondo)]		

[h, if(cantidadDeCargas < 1): bono = -25]
[h, if(cantidadDeCargas > 0): bono = 0]	
[r: rowPerso('<span>Bono</span>',temafondo)]			
[r: rowPerso('<b>'+bono+' BO</b>',temafondo)]