<!-- creartablaFromJson -->
[h: tabla = arg(0)]
[h: tablaJson = arg(1)]
[h: actualTablas = getTableNames()]
[h, if(listContains(actualTablas, tabla)): '' ; createTable(tabla, 1, 1) ] 

[h: con = json.length(tablaJson)]

[h,c(con), code:{ 	 
[r: r = json.get(tablaJson, roll.count)]

[h: st =json.get(r,"start") ]
	[r: end =json.get(r,"end") ]
	[h: addTableEntry(tabla,number(st),number(end),json.get(r,"value"))]
}]
