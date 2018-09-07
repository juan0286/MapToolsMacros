<!-- describirCriticoSeccion(dado,tabla,mod) -->
[h: dado = arg(0)]   
[h: tabla = arg(1)]
[h: mod = arg(2)]
[h: ErrorMsg(isNumber(dado),"Error en describirCriticoSeccion.("+dado+") Dado no es numero")] 
[h: ErrorMsg(isNumber(mod),"Error en describirCriticoSeccion. ("+mod+") Mod no es numero")] 
[h: ErrorMsg(listContains(getTableNames(),tabla),"Error en describirCriticoSeccion. ("+tabla+") Tabla de Critico no existe")] 
[h: dadoFinal = number(dado)+number(mod)]
[h: critResu = table(tabla,dadoFinal)]
[h: d = getStrProp(critResu,"Desc")]
[r: rowPerso(dado+"|th|1|background-color: green;,("+dadoFinal+") "+replace(d,",","&#32;")+"|td|4",1)]
[h: critResu = deleteStrProp(critResu, "Desc")]
[h: lista =""]
[h, count(countStrProp(critResu)),code:
{
  [key = indexKeyStrProp(critResu, roll.count)]
  [value = indexValueStrProp(critResu, roll.count)]
  [ lista = listAppend(lista,"<label for'"+dadoFinal+"_"+key+"'></label>|th,<input type='text' name='"+dadoFinal+"_"+key+"' value'"+value+"'>")]  
}]
<table width="100%">
[r: rowPerso(lista,5)]
</table>