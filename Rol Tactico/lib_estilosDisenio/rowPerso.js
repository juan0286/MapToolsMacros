[h: listContenido = arg(0)]
[h: tema = temaColor(arg(1))]

[r: "<tr style='background-color:"+tema+";'>"]
[r, foreach(c,listContenido,""),code:{
	[h: typeCol = "td"]
	[h: styles = ""]
	[h: span = ""]
	[h: list = stringToList(c,"\\|")]
	[h: lc=listCount(list)]
	[h: c = listGet(list,0)]

	[h,if(lc>1): typeCol = listGet(list,1)]
	[h,if(lc>2): span = " colspan='"+listGet(list,2) +"'"]	
	[h,if(lc>3): styles = " style='"+ listGet(list,3) +"'"]				
	
	[h: coso =  "<"+typeCol+styles+span+">"+decode(c)+"</"+typeCol+">"]
	
	[h: setNotes(getNotes("lib:estilosDisenio") +coso,"lib:estilosDisenio")]
	
	[r: "<"+typeCol+styles+span+">"+c+"</"+typeCol+">"]
}] 
[r: "</tr>"]
