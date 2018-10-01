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
	[h: propsAccion =  json.set("{}", "accion", acc)]
	[h: setInitiative(1400 + mm + agi + bonoIniciativa)]		
	[h: setPropperty("ActualMove",3,tok_id)]
};
case "lanzar_sort": { 
	[h: propsAccion =  setStrProp("", "accion", acc)]
	[h: propsAccion =  setStrProp(PropsAccion,"desc",1)]
	[h: setInitiative(1200 + mm + agi + bonoIniciativa)]
	[h: text = "Lanzara un sortilegio"]
	[h: setPropperty("ActualMove",6,tok_id)]
};
case "cargar_proy": { 
	[h: propsAccion =  setStrProp("", "accion", acc)]
	[h: propsAccion =  setStrProp(PropsAccion,"desc",1)]
	[h: setInitiative(1000 + mm + agi + bonoIniciativa)]		
	[h: setPropperty("ActualMove",3,tok_id)]
};
case "disparar_proy": { 
	[h: propsAccion =  setStrProp("", "accion", acc)]
	[h: propsAccion =  setStrProp(PropsAccion,"desc",1)]
	[h: setInitiative(800 + mm + agi + bonoIniciativa)]	
	[h: setPropperty("ActualMove",3,tok_id)]	
};
case "mov_manio": { 
	[h: propsAccion =  setStrProp("", "accion", acc)]
	[h: propsAccion =  setStrProp(PropsAccion,"desc",1)]
	[h: setInitiative(600 + mm + agi + bonoIniciativa)]	
	[h: desplazamiento= CalcMovimiento(tok_id)]
	<!-- Para mov y maniobra, el maximo es la mitad del mov basico -->
	[h: desplazamiento= desplazamiento / 2]
	[h: setPropperty("ActualMove",CalcMovimiento(tok_id)/2)]	
};
case "ataque_cac": { 
	[h: propsAccion =  setStrProp("", "accion", acc)]
	[h: acc ,"bo",propsAccionPropsAccion,setStrProp(100, "bd", 50,"arma" ,"Espada","desc",1)]
	[h: setInitiative(400 + mm + agi + bonoIn0iciativa)]	
	[h: setPropperty("ActualMove",3,tok_id)]	
};
case "desplazamiento": { 
	[h: propsAccion =  setStrProp("", "accion", acc)]
	[h: propsAccion =  setStrProp(PropsAccion,"desc",1)]
	[h: setInitiative(200 + mm + agi + bonoIniciativa)]		
	[h: setPropperty("ActualMove",C,CalcMovimiento(tok_id))]	
};
case "mov_estatico": { 
	[h: propsAccion =  setStrProp("", "accion", acc)]
	[h: propsAccion =  setStrProp(PropsAccion,"desc",1)]
	[h: setInitiative(mm + agi + bonoIniciativa)]	};
default: { 
	[h: propsAccion =  setStrProp("", "accion", acc)]
	[h: propsAccion =  setStrProp(PropsAccion,"desc",1)]
	[h: setInitiative(mm + agi + bonoIniciativa)]
	[h: pasos=0]
}]

[h: setStrProp("Accion",propsAccion,tok_id)]

[h: text = "La accion de " + getName(tok_id)+ " sera " + AccionToString(acc) ]

[h: text = colorText(text,getProperty("color"))]

[h: sortInitiative()]
[r, if(isPC()), code:{
	{text }
	[h: showStatusFrame()]
};{
	[h: broadcast(text, "gm")]	
}] 
[h: sortInitiative()]

[h, if(isPC(tok_id)): broadcast(macroLink("<color='red'>", "showStatusFrame@lib:personajes", 'none', '', ""), getAllPlayerNames())]