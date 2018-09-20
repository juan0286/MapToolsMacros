<!--  guardarAccion -->

[h: acc = arg(0)]

[h: tok_id = currentToken()]
[h: mm = getMovMan(getName(tok_id))]
[h: agi = getHoja("AGI",getName(tok_id))]

[h: gm = isGM()]
[h: owned = isOwner(getPlayerName(), tok_id)]
[h, if(gm ||  owned): "";  assert(0, colorText("No tenes derecho a usar este Personaje.","red"),0)]
[h: pasos=3]
[h: bonoIniciativa = getProperty("BonoIniciativa",tok_id)]
[h, if(bonoIniciativa ==""): bonoIniciativa=0]

[h, switch(acc),code:
case "cargar_sort": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1400 + mm + agi + bonoIniciativa)]		
};
case "lanzar_sort": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1200 + mm + agi + bonoIniciativa)]
	[h: text = "Lanzara un sortilegio"]
	[h: pasos=6]
};
case "cargar_proy": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1000 + mm + agi + bonoIniciativa)]		
};
case "disparar_proy": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(800 + mm + agi + bonoIniciativa)]	
	
};
case "mov_manio": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(600 + mm + agi + bonoIniciativa)]	
};
case "ataque_cac": { 
	[h: json =  json.set("{}", "accion", acc ,"bo",100, "bd", 50,"arma" ,"Espada","desc",1)]
	[h: setInitiative(400 + mm + agi + bonoIniciativa)]		
};
case "desplazamiento": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(200 + mm + agi + bonoIniciativa)]		
};
case "mov_estatico": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(mm + agi + bonoIniciativa)]	};
default: { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(mm + agi + bonoIniciativa)]
	[h: pasos=0]
}]

[h: setProperty("Accion",json,tok_id)]

[h: text = "La accion de " + getName(tok_id)+ " sera " + AccionToString(acc) ]



[h: ga = getProperty("GolpeActual",tok_id)]
[h: ga = setStrProp(ga,"pasos",pasos)]
[h: setProperty("GolpeActual",ga,tok_id)]



[h: text = colorText(text,getProperty("color"))]
[h:pause("pasos")]
[h: sortInitiative()]
[r, if(isPC()), code:{
	{text }
	[h: showStatusFrame()]
};{
	[h: broadcast(text, "gm")]	
}] 
[h: sortInitiative()]

[h, if(isPC(tok_id)): broadcast(macroLink("<color='red'>", "showStatusFrame@lib:personajes", 'none', '', ""), getAllPlayerNames())]