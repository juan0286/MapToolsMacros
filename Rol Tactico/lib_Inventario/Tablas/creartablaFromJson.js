<!-- creartablaFromJson -->
[h: tabla = arg(0)]
[h: actualTablas = getTableNames()]
[r: img = getImage(tabla)]
[h, if(listContains(actualTablas, tabla)): clearTable(tabla) ; createTable(tabla, 1, 1,img) ] 
[h: tablaJson = getNotes(tabla)]
[h: con = json.length(tablaJson)]


[h: t = json.get(tablaJson,0)]
[h: pause("t","con") ]

[h,c(con), code:{ 	 
[r: r = json.get(tablaJson, roll.count)]

[h: st =json.get(r,"start") ]
	[r: end =json.get(r,"end") ]
	[h: addTableEntry(tabla,number(st),number(end),json.get(r,"value"))
}]
