[h: rango = arg(0)]
[h: tabla = arg(1)]
[h: gr = arg(2)]
[h: data = arg(3)]

[h: ErrorMsg(isNumber(rango),"Error en SetearCritico.("+rango+") Rango no es numero")] 
[h: ErrorMsg(length(gr),"Error en describirCriticoSeccion. ("+gr+") gr no es numero")] 
[h: ErrorMsg(listContains(getTableNames(),tabla+"_"+gr),"Error en describirCriticoSeccion. ("+tabla+") Tabla de Critico no existe")] 

[h: tabla = tabla+"_"+gr]
[if(rango==""): rango = 1d100]
 
[h: listTextField = "PunVida=;actividad=; oaparar=; aturd=; aturSinParar=; sangre=; quemadura=; congel=; iniciativa=;SumaAtaque=;"]

[h: crit_act = table(tabla,rango) ]      


[h: listaChckBox = "derribado,inconsiente,izqBrazoInutil,derBrazoInutil,izqPiernaInutil,derPiernaInutil,derrotado,muerto"]
      


[h, count(countStrProp(listTextField)),code:
{
  [key = indexKeyStrProp(listTextField, roll.count)]
  [value = indexValueStrProp(listTextField, roll.count)]
  [if(getStrProp(crit_act,key)!=""):listTextField = setStrprop(listTextField,key,getStrProp(crit_act,key))]  
}]

[h, count(countStrProp(listaChckBox)),code:
{
  [key = indexKeyStrProp(listaChckBox, roll.count)]
  [value = indexValueStrProp(listaChckBox, roll.count)]
  [if(getStrProp(crit_act,key)!=""):listaChckBox = setStrprop(listaChckBox,key,getStrProp(crit_act,key))]  
}]


[H: inputStr = "[]"]

[H: inputStr = json.append(inputStr,"Desc|"+rango+"|DADP|TEXT|SPAN=TRUE")]
[H: inputStr = json.append(inputStr,"Desc|<html><table border='1' width='250'><tr><td>"+getStrProp(crit_act,"Desc")+"</td></tr></table></html>|Descripcion|LABEL|SPAN=TRUE")]
[H: inputStr = json.append(inputStr,"resultVars|"+listTextField+"|Campos|PROPS|SPAN=TRUE SETVARS=UNSUFFIXED")]
[h, foreach(ch,listaChckBox,""): inputStr = json.append(inputStr,ch+"|0|"+ch+"|CHECK")]
[H: inputStr = json.append(inputStr,"muerteEnAsaltos||Asaltos hasta morir.|TEXT")]
[H: inputStr = json.append(inputStr,"recuperacion||Tiempo de recuperacion.|TEXT")]

[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

[h:listaCheckboxesSeteado=""]


[h: countResultVars = countStrProp(resultVars)]
[h: finalstrProps=crit_act]
[h, count(countResultVars),code:
{
  [key = indexKeyStrProp(resultVars, roll.count)]
  [value = indexValueStrProp(resultVars, roll.count)]
  [if(value!=""):finalstrProps = setStrprop(finalstrProps,key,value)]  
}]

[h: checkes = strPropFromVars(listaChckBox,"UNSUFFIXED")]
[h: countCheckes = countStrProp(checkes)]
[h, count(countCheckes),code:
{
  [key = indexKeyStrProp(checkes, roll.count)]
  [value = indexValueStrProp(checkes, roll.count)]
  [if(value!=0):finalstrProps = setStrprop(finalstrProps,replace(key,"_ch",""),value)]  
}]
[h, if(muerteEnAsaltos!="" && muerteEnAsaltos!=0):finalstrProps = setStrprop(finalstrProps,"muerteEnAsaltos",muerteEnAsaltos)]  
[h, if(recuperacion!="" && recuperacion!=0):finalstrProps = setStrprop(finalstrProps,"recuperacion",recuperacion)]  

[h: setTableEntry(tabla, rango, finalstrProps)]
[h: evalMacro('[r,macro("CreateNotes@Lib:Notes"): "'+data+'"]')]