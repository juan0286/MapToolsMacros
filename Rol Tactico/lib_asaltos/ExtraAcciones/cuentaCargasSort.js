<!-- CuentaCargas  0 = token; 1= tipo    Ej: -->
[h: cargas = getProperty("Cargas",arg(0))]
[h, if(getStrProp(cargas,'sortilegio',-1) == -1): macro.return = 0]
[h: cant_cargas = getStrProp(cargas,'cant_cargas',-1)]
[h: ErrorMsg( cant_cargas == -1 ),"No se puede leer las cargas") ]
[h: bono = -30]
[h,if(cant_cargas == 1):bono = -15]
[h,if(cant_cargas == 2):bono = -0]
[h,if(cant_cargas == 3):bono = -10]
[h,if(cant_cargas == 4):bono = -20]
[h: re = setStrProp('','cant_cargas',cant_cargas)]
[h: re = setStrProp(re,'bono',bono)]
[h: macro.return = re]