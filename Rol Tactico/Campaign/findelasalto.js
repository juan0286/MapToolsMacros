
[h: ids = getWithState("Sangrando")]
[foreach(id, ids, "<br>"),code:{
	[h: switchToken (id)]
	[h:PV = min(PV+Sangre, MaxPV)]
	[h:bar.PV = PV / MaxPV]
	[r:token.name] perdio  [r:Sangre] puntos de vida. 
}]
[h: ids = getWithState("Aturdido")]
[foreach(id, ids, "<br>"),code:{
	[h: switchToken (id)]
	[h: atu = getProperty("Aturdimiento")-1]
	[h: setProperty("Aturdimiento",atu)]
	[h, if( atu == 0 ), code:{ 		
	  [h:setState("Aturdido", 0)]
	  [h:setState("Sin Poder parar", 0)]
	  [h:setState("Aturdido y Sin Poder parar", 0)]
	  [h:setState("Obligado a parar", 0)];
	  [r:token.name] ya se encuentra enfocado.
	}
	]
	
}]
[foreach(id, ids, "<br>"),code:{
	[h: switchToken (id)]
	[h:countAtaques=0]
	[h:pasos=0]
	[h:cambioArma=0]
	[h:cambioAccion=0]
	[h:boUsada=0]
	[h:agiUsada=0]
	[h:escudoUsado=0]
	[h:danioRecibido=0]
	[h: GolpeActual = strPropFromVars("countAtaques,cambioArma,cambioAccion,boUsada,agiUsada,escudoUsado,danioRecibido", "UNSUFFIXED")]
}]
