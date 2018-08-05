<!--  guardarAccion -->

[h: acc = arg(0)]
[h: tok_id = currentToken()]
[h: mm = getMovMan(getName(tok_id))]
[h: agi = getHoja("AGI",getName(tok_id))]


[h, switch(acc),code:
case "cargar_sort": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1400 + mm + agi)]
	[h: text = "Cargara un sortilegio"]
};
case "lanzar_sort": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1200 + mm + agi)]
	[h: text = "Lanzara un sortilegio"]
};
case "cargar_proy": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1000 + mm + agi)]
	[h: text = "Cargara un Proyectil"]
};
case "disparar_proy": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(800 + mm + agi)]
	[h: text = "Disparara un poryectil"]
};
case "mov_manio": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(600 + mm + agi)]
	[h: text = "Realizara un movimiento o maniobra"]
};
case "ataque_cac": { 
	[h: json =  json.set("{}", "accion", acc ,"bo",100, "bd", 50, ,"arma" ,"Espada","desc",1)]
	[h: setInitiative(400 + mm + agi)]
	[h: text = "Atacara cuerpo a cuerpo"]
};
case "desplazamiento": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(200 + mm + agi)]
	[h: text = "se desplazara"]
};
case "mov_estatico": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(mm + agi)]
	[h: text = "Realizara un movimiento estatico"]
};
default: { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(mm + agi)]
}]
[h: setProperty("Accion",json,tok_id)]

[h: text = getName(tok_id)+ " " + text ]
[r,if (getName(tok_id) == "Neo"): colorText(text,"blue")]
[r,if (getName(tok_id) == "Kyoros"): colorText(text,"green")]
[h: sortInitiative()]