<!--  guardarAccion -->

[h: acc = arg(0)]
[h: tok_id = currentToken()]
[h: mm = getMovMan(getName(tok_id))]
[h: agi = getHoja("AGI",getName(tok_id))]

[h: gm = isGM()]
[h: owned = isOwner(getPlayerName(), activeId)]
[h, if(gm ||  owned): ""; assert(0, colorText("No tenes derecho a usar este Personaje.","red")]

[h, switch(acc),code:
case "cargar_sort": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1400 + mm + agi)]	
};
case "lanzar_sort": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1200 + mm + agi)]
	[h: text = "Lanzara un sortilegio"]
};
case "cargar_proy": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1000 + mm + agi)]	
};
case "disparar_proy": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(800 + mm + agi)]	
};
case "mov_manio": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(600 + mm + agi)]	
};
case "ataque_cac": { 
	[h: json =  json.set("{}", "accion", acc ,"bo",100, "bd", 50,"arma" ,"Espada","desc",1)]
	[h: setInitiative(400 + mm + agi)]	
};
case "desplazamiento": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(200 + mm + agi)]	
};
case "mov_estatico": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(mm + agi)]
	
};
default: { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(mm + agi)]
}]
[h: setProperty("Accion",json,tok_id)]

[h: text = "La accion de " + getName(tok_id)+ " sera " + AccionToString(acc) ]
[r, if (getName(tok_id) == "Neo"): colorText(text,"blue")]
[r, if (getName(tok_id) == "Kyoros"): colorText(text,"green")]
[h: sortInitiative()]