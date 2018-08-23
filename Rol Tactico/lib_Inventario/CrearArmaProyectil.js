<!-- CrearArmaProyectil -->
[h: inp =input("Nombre","Pifia","Cargas","rangoVars|rango1=0;rango2=0;rango3=0;rango4=0;rango5=0;|Rangos|PROPS|SPAN=TRUE SETVARS=UNSUFFIXED"
)]
[h: abort(inp)]
[h: rangos=""]
[r, if (rango1 != 0) : setStrProp(rangos,"r1",rango1)]
[r, if (rango2 != 0) : setStrProp(rangos,"r2",rango2)]
[r, if (rango3 != 0) : setStrProp(rangos,"r3",rango3)]
[r, if (rango4 != 0) : setStrProp(rangos,"r4",rango4)]
[r, if (rango5 != 0) : setStrProp(rangos,"r5",rango5)]
[h: arco = setStrProp("", "nombre", Nombre)]
[h: arco = setStrProp(arco, "Pifia", Pifia)]
[h: arco = setStrProp("", "Cargas", Cargas)]
[h: arco = setStrProp("arco=Compuesto;img= asset;", "rangos", rangos)]
