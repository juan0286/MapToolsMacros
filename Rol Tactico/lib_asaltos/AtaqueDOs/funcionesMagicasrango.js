<!-- funcion de Inspiarar -->
<!--  Dos Rangos, uno para saber la magia, y otro para saber el bono -->
<!--  EJ: inspiracion (rango de 30 mts) bonoPlus15  -->
Lo meto en ONTOKENMOVE
Se ejecuta al finalizar un movimiento.


<!-- ******* ******* -->
[h: type = "magiaDeRadio" ]
[h: listaMagiasDeRango = "inspiracion," ]
[switchToken(tok)]

[h: bono = 0;]
[h: luminityName = "inspiracion";]
[h, if( hasLightSource(type,luminityName) ),code:{
	[count(100),code:{ [ if( hasLightSource(magias,type,"bonoPlus"+15)): bono = bono + roll.count ] } ]
}]
[h: macro.return = bono]

