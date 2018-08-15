<!-- CuentaCargas  0 = token; 1= tipo-->
[h: cargas = getProperty("Cargas",arg(0))]
[h: cjson = json.fromStrProp(cargas) ]
[h: ErrorMsg( !json.isEmpty( json.get(cjson,'cargas') ),"No se puede leer las cargas") ]
[h: c = json.fields(cjson)]
[h: list =json.fromList(c)]
[h, if(json.indexOf(list, arg(1)) > -1): n = json.get(cjson,'cargas') ; n = 0]
[h: macro.return = n]