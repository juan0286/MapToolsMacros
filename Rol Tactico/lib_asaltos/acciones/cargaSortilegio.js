<!-- cargaSortilegio  default cargas = {cargas:0}-->
[h: tokName = getInitiativeToken()]
[h: cargaSortilegio = getProperty("Cargas",tokName)]
[h: c = json.fields(cargaSortilegio)]
[h, if(json.indexOf(c, "sortilegio") > -1) n = json.get(cargas,'cargas') + 1 ; cargaSortilegio = json.set({},'sortilegio','','cargas',1)]
[h, if(n>4): json.set(cargaSortilegio,'Cargas',4) ; json.set(cargaSortilegio,'Cargas',n) ]
[h: setProperty('Cargas', cargaSortilegio,tokName) ]

