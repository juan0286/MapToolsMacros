[h: tabla ="Shields"]

[h: valaux =""]
[h: ind =1]

[h: val = json.get(table(tabla,ind),"ID")]
[r: json.get(table(tabla,ind),"nombre")]
[r, while(valaux != val,"<br>Shield "),code:{
	[h: valaux=val ]
	[h: json = table( tabla , ind ) ]
	[h: json = json.set( json , "tipoArma" , "Shield" ) ]
	[h: setTableEntry(tabla,ind,json)]
	[r: ind = ind +1]
	[h: json = table( tabla , ind) ]
	[h: val = json.get( json , "ID") ]
	[r: json.get( json , "nombre") ]
}]


