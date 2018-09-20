<!-- describirCriticoSeccion(dado,tabla,mod) -->
[h: dado = arg(0)]   
[h: tabla = arg(1)]
[h: mod = arg(2)]
[h: id = arg(3)]
[h: ErrorMsg(isNumber(dado),"Error en describirCriticoSeccion.("+dado+") Dado no es numero")] 
[h: ErrorMsg(isNumber(mod),"Error en describirCriticoSeccion. ("+mod+") Mod no es numero")] 
[h: ErrorMsg(listContains(getTableNames(),tabla),"Error en describirCriticoSeccion. ("+tabla+") Tabla de Critico no existe")] 
[h: dadoFinal = number(dado)+number(mod)]
[h: critResu = table(tabla,dadoFinal)]
[h: d = getStrProp(critResu,"Desc")]
[r: rowPerso(dadoFinal+"|th|1|background-color: [r: temaColor(4)]; font-size: 18px;,"+replace(d,",","&#32;")+"|td|4",1)]
[h: critResu = deleteStrProp(critResu, "Desc")]
[h: lista =""]

[h, count(countStrProp(critResu)),code:
{
  [key = indexKeyStrProp(critResu, roll.count)]
  [value = indexValueStrProp(critResu, roll.count)]
  [if(value!=0 && value!="" ): lista = listAppend(lista,"<label for'"+dadoFinal+"_"+key+"'>"+key+"</label>,<input type='text' size='3' name='"+id+"_"+key+"' value='"+value+"'>")]  
}]
<tr>
	<td colspan="5" border="1">
		<table width="100%">
			[r: rowPerso(lista,5)]
		</table>
	</td>
</tr>

