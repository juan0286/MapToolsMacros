<!-- AccionToString -->
[h: l = json.length(macro.args)]
[h: a = arg(0)]
[h, if(l > 1):  wantColor = arg(1); wantColor = 0]

[h, switch(a),code:
case "cargar_sort": { 
	[h: re = "Cargar Sortilegio"]
	[h: co = "#0099ff"]
};
case "lanzar_sort": { 
	[h: re = "Lanzar Sortilegio"]
	[h: co = "#0066ff"]
};
case "cargar_proy": { 
	[h: re = "Cargar Proyectil"]
	[h: co = "#ff6600"]
};
case "disparar_proy": { 
	[h: re = "Disparar Proyectil"]
	[h: co = "#ff3300"]
};
case "mov_manio": { 
	[h: re = "Movimiento o Maniobra"]
	[h: co = "#ffff66"]
};
case "ataque_cac": { 
	[h: re = "Atacar C.a C."]
	[h: co = "#13F3DD"]
};
case "desplazamiento": { 
	[h: re = "Desplazamiento"]
	[h: co = "#66ff33"]
};
case "mov_estatico": { 
	[h: re = "Mov. Estatico"]
	[h: co = "#993300"]
};
default: { 
	[h: re = "Sin Accion"]
	[h: co = "white"]
}]
[h,if (wantColor): re = co]
[h: macro.return = re]