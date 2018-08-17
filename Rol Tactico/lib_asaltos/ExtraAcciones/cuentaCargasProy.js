<!-- CuentaCargas  0 = token; 1= tipo de arma Proyectil   Ej:  -->
<!-- cargasDeArmaEj:  (rango) 1=-25;2=0;3=10C  1=x;2=-15;3=0;4=10c la x es que no puede disparar aún, la c, es que el bono es para el critico-->
[h: cargas = getProperty("Cargas",arg(0))]
[h, if(getStrProp(cargas,'arma',-1) == -1): macro.return = 0]
[h: cant_cargas = getStrProp(cargas,'cant_cargas',-1)]
[h: ErrorMsg( cant_cargas == -1 ),"No se puede leer las cargas") ]
[h: arrayRangos = table('ArmasProyectiles', 0)]
[h: bono = getStrProp(arrayRangos,string(cant_cargas),tokName,-1)
[h: re = setStrProp('','cant_cargas',cant_cargas)]
[h: re = setStrProp(re,'bono',bono)]
[h: macro.return = re]