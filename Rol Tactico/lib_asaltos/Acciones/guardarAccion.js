<!--  guardarAccion -->

[h: acc = arg(0)]
[h, if(argCount() >1 ): switchToken(arg(1))]

[h: tok_id = currentToken()]

[h, if(argCount() >1 ): tok_id = arg(1)]
[h: tokName= getName(tok_id)]

[h, if(pausear()==1): pause("mm")]
[h: mm = getMovMan(getName(tok_id))]
[h: agi = getHoja("AGI",getName(tok_id))]



[h: gm = isGM()]
[h: owned = isOwner(getPlayerName(), tok_id)]
[h, if(gm ||  owned): "";  assert(0, colorText("No tenes derecho a usar este Personaje.","red"),0)]
[h, if(pausear()==1): pause("mm")]
[h: pasos=3]
[h: bonoIniciativa = getProperty("BonoIniciativa",tok_id)]
[h, if(bonoIniciativa ==""): bonoIniciativa=0]
[h, if(pausear()==1): pause("mm")]

[h, switch(acc),code:
case "cargar_sort": { 
	[h: pre_cargarSort()]
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1400 + mm + agi + bonoIniciativa)]		
};
case "lanzar_sort": { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1200 + mm + agi + bonoIniciativa)]	
	[h: pasos=6]
};
case "cargar_proy": { 
	
	[h: if( json.get(brazo1,"tipoArma") == "Bow" ): b1 = 1 ; b1 = 0]
	[h: if( json.get(brazo2,"tipoArma") == "Bow" ): b2 = 1 ; b2 = 0]

	<!-- Se valida Que al menos una de las armas en mano, sea de proyectil-->
	[h: ErrorMsg( b1 + b2,"Debe tener un arma Proyectil en mano")]

	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(1000 + mm + agi + bonoIniciativa)]		
};
case "disparar_proy": { 

	[h: if( json.get(brazo1,"tipoArma") == "Bow" ): b1 = 1 ; b1 = 0]
	[h: if( json.get(brazo2,"tipoArma") == "Bow" ): b2 = 1 ; b2 = 0]

	<!-- Se valida Que al menos una de las armas en mano, sea de proyectil-->
	[h: ErrorMsg( b1 + b2,"Debe tener un arma Proyectil en mano")]
	
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

[h: text = "La accion de " + tokName + " sera " + AccionToString(acc) ]



[h: ga = getProperty("GolpeActual",tok_id)]
[h: ga = setStrProp(ga,"pasos",pasos)]
[h: setProperty("GolpeActual",ga,tok_id)]


[h, if(isPC()): text = colorText(text,getProperty("color"))]

[h: sortInitiative()]
[r, if(isPC()), code:{
	{text }
	[h: actionFrame()]
};{
	[h: broadcast(text, "gm")]	
}] 
[h: sortInitiative()]

[h, if(isPC(tok_id)): broadcast(macroLink("<color='red'>", "actionFrame@lib:personajes", 'none', '', "selected"), getAllPlayerNames())]
[h, if(isPC(tok_id)): broadcast(macroLink("<color='red'>", "puntoMuertoFrame@lib:personajes", 'none', '', "selected"), getAllPlayerNames())]