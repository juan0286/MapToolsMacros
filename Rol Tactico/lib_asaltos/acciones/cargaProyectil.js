<!-- cargaProyectil  default cargas = cargas=0;-->
[h: tokName = getInitiativeToken()]
[h: cargas = getProperty("Cargas",tokName)]
[h: cjson = json.fromStrProp(cargas) ]
[h: ErrorMsg( !json.isEmpty( json.get(cjson,'cargas') ),"No se puede leer las cargas") ]
[h: c = json.fields(cjson)]
[h: list =json.fromList(c)]
[h, if(json.indexOf(list, "proyectil") > -1): n = json.get(cjson,'cargas') ; n = 0]
[h: cjson = json.set(cjson,'Cargas',n+1,'proyectil',0) ]
[h: setProperty('Cargas', json.toStrProp(cjson),tokName) ]

