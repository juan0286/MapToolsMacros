[r: lista = FBE_getLIstaBO()]

[h: processorLink = macroLinkText("processForm@Lib:RolBackEnd", "all")]
<form action="[r:processorLink]" method="json">
Character name: getName()

<select name="" size="">
	<!-- Actualizo los bonos de la HOJA uno por uno-->
	[r, foreach(item,lista): "<option value='"++item++"'>"+item+"</option>"]
</select>

<input type="submit" name="myForm_btn" value="Okay">
</form>