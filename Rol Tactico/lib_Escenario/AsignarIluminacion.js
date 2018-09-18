<! -- AsignarIlumnacion -->


[h:iluminaciones_list="Antorcha 12,Candelabro 40,Lampara 15,Fogata,Fuego 3,Fuego 6,Fuego 9,Lampara 15,Vela,Velax4,Personalizar"]
[h:iluminaciones_list="A_Antorcha 12,A_Candelabro 40,A_Lampara 15,A_Fogata 30,A_Fuego 3,A_R_Fuego 3,A_Fuego 6,A_R_Fuego 6,A_Fuego 9,A_R_Fuego 9,A_Vela,A_Velax4"]

[h: input =input( 
	"lblTitulo||Elejir el tipo de Iluminacion Personalizado|LABEL|SPAN=TRUE",
	"iluminacion|"+iluminaciones_list+"|Luces Predeterminadas|LIST|SELECT=0 VALUE=STRING"	
)]


[h, if(iluminacion=="Personalizar"),code:{	

	[h: input =input( 
		"lblTitulo||Elejir el tipo de Iluminacion|LABEL|SPAN=TRUE",
		"iluminacion|"+iluminaciones_list+"|Luces Predeterminadas|LIST|SELECT=0 VALUE=STRING"	
		"auras|"+auras_list+"|Luces Predeterminadas|LIST|SELECT=0 VALUE=STRING"	
	)]
	[h: abort(input)]
};{
	[ setLight("L_"+iluminacion)]
	[ setLight("A_"+iluminacion)]
	[h, if(iluminacion=="Personalizar"): setLight("A_R_"+iluminacion)]		
}]


{   "ID": "2",   "nombre": "Arco Corto",   "bonoBO": 0,   "pifia": 3,   "alcance": "3=10;30=0;54=-40;72=-70;",   "clase": "N",   "danio": "ataqueArcoCorto",   "tipoBO": "BO_PROY",   "criticos": "criticoPerforacion=0;",   "usable": "2manos",   "tam": 3,   "tipoArma": "Bow",   "evt": "" }