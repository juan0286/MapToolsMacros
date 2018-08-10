<!-- AccionToString -->
[h: a = arg(0)]
[h: wantColor = arg(1)]
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
	[h: re = "Atacara cuerpo a cuerpo"]
	[h: co = "#6600ff"]
};
case "desplazamiento": { 
	[h: re = "Desplazamiento"]
	[h: co = "#66ff33"]
};
default "mov_estatico": { 
	[h: re = "Movimiento Estatico"]
	[h: co = "#993300"]
}]
[h,if (wantColor): re = co]
[h: macro.return = re]