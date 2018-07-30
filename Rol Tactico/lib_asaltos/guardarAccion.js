<!--  guardarAccion -->

[h: acc = arg(0)]
[h: mm = getMovMan(currentToken())]
[h: mm = getHoja("AGI",currentToken())]

[h, switch():
case "cargar_sort": { 
	[h: json = "{'accion': '" + acc +"' ,'desc': 1 }"][h: setInitiative(1400 + mm + agi)]
};
case "lanzar_sort": { 
	[h: json = "{'accion': '" + acc +"' ,'desc': 1 }"][h: setInitiative(1200 + mm + agi)]
};
case "cargar_proy": { 
	[h: json = "{'accion': '" + acc +"' ,'desc': 1 }"][h: setInitiative(1000 + mm + agi)]
};
case "disparar_proy": { 
	[h: json = "{'accion': '" + acc +"' ,'desc': 1 }"][h: setInitiative(800 + mm + agi)]
};
case "mov_manio": { 
	[h: json = "{'accion': '" + acc +"' ,'desc': 1 }"][h: setInitiative(600 + mm + agi)]
};
case "ataque_cac": { 
	[h: json = "{'accion': '" + acc +"' ,'bo': 100, 'bd' : 50, arma='Espada' }"][h: setInitiative(400 + mm + agi)]
};
case "desplazamiento": { 
	[h: json = "{'accion': '" + acc +"' ,'desc': 1 }"][h: setInitiative(200 + mm + agi)]
};
case "mov_estatico": { 
	[h: json = "{'accion': '" + acc +"' ,'desc': 1 }"][h: setInitiative(mm + agi)]
};
default : { 
	[h: json = "{'accion': '" + acc +"' ,'desc': 1 }"][h: setInitiative(mm + agi)]
};
]

[h: setProperty("Accion",json)]