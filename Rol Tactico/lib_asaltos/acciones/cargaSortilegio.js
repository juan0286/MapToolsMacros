<!-- cargaSortilegio  default cargas = cargas=0;-->
[h: tokName = getInitiativeToken()]
[h: c = cuentaCargas(tokName,"sortilegio") + 1]
[h, if(c>4): cjson = json.set({},'Cargas',4,'sortilegio',0) ; cjson = json.set({},'Cargas',c,'sortilegio',0) ]
[h: setProperty('Cargas', json.toStrProp(cjson),tokName) ]

