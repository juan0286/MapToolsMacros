
[h: activeId = macro.args]
[h: selection = getSelected()]

[h: link = macroLinkText("actionFrame@Lib:personajes", "none", activeId)]
[h: perform= macroLinkText("Empuniar@Lib:personajes", "self", "", "selected" )]
[h, if(pausear()==1): pause("selection")]


[H: inputStr = "[]"]
[h: count(selection),code:{
	[idtok = listGet(selection,roll.count)]
	[tok = getName(idtok)]
	[ mmTok = getMovMan(tok)]

}]


[h: imgWeapon2 = tblImage(tbBrazo2,json.get(brazo2,"ID"))]
[H: inputStr = json.append(inputStr,"lblNombre|<html><h2>Ataque de "+tokenAtk+"</h2></html>|-|LABEL|SPAN=TRUE")]
[H: inputStr = json.append(inputStr,"junk|<html><table border=1  width='400'><tr><th width='50%'><img src='"+replace(imgWeapon1, ":", "&#58;")+"' width=120 height=120></img></th><th width=50%><img src='"+replace(imgWeapon2, ":", "&#58;")+"' width=120 height=120></img></th></tr></table></html>|-|LABEL|SPAN=TRUE")]

[H: inputStr = json.append(inputStr,"armasLbl1|+"+json.get(brazo1,"bonoBO")+"|"+json.get(brazo1,"nombre")+"|LABEL")]
[h, if(bono2!=0): inputStr = json.append(inputStr,"armasLbl2|"+bono2+"|"+json.get(brazo2,"nombre")+"|LABEL")]
[h: inputStr = json.append(inputStr,"target|"+imgList+"|Enemigo Objetivo|LIST|SELECT=0 ICON=TRUE ICONSIZE=30")]
[h: inputStr = json.append(inputStr,"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING")]
[h: inputStr = json.append(inputStr,"penaGolpes|"+penaGolpe+"|Penalizacion por Golpes|LABEL|ICON=TRUE")]
