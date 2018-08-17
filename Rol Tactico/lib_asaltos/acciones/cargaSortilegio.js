<!-- cargaSortilegio  default cargas = cargas=0;-->
[h: tokName = getInitiativeToken()]
[h: c = cuentaCargas(tokName,"sortilegio") + 1]
[h: cargas = setStrProp('','cargas',4,tokName)]
[h, if(c>4): cprop = setStrProp('','cant_cargas',4,tokName) ; cprop = setStrProp('','cant_cargas',c, tokName) ]
[h: setProperty('Cargas', c,tokName) ]

