[h: listContenido = arg(0)]
[h: default = temaColor(arg(1))]
[h: nombre = temaColor(arg(2))]
[h, if(json.length(macro.args) > 3): tipo = arg(3) ; tipo="lista"]
[h: listaTablas = ""]


[h, switch(tipo),code:
case "lista": { 
	[h, foreach(i,listContenido),code:
	{ 
	  [ if(i==default): se ="selected" ; se=""]    
	  [ listaTablas= listAppend(listaTablas,"<option value='"+i+"' "+se+">"+i+"</option>")]
	  
	}]
};
case "criticos": { 	
	[h, count(countStrProp(listContenido)),code:
	{ a
	  [t = indexKeyStrProp(listContenido, roll.count)]
	  [mod = indexValueStrProp(listContenido, roll.count)]
	  [if(mod!=0):mod ="("+mod+")" ; mod =""]  
	  [if(t==default): se ="selected" ; se=""]    
	  [ listaTablas= listAppend(listaTablas,"<option value='"+t+"' "+se+">"+replace(t,"critico","")+mod+"</option>")]
  }]
};
case "json": { 
	
};
default: { 
	[h: json =  json.set("{}", "accion", acc ,"desc",1)]
	[h: setInitiative(mm + agi)]
}]

[h: selectBox = listFormat( listaTablas, "<select name='"+nombre+"'>%list</select>", "%item","")]
[h: macro.return = selectBox]



