[h: selection = getSelected()]
[h: listaDifi = "RUTINA,MUY FACIL,FACIL,NORMAL,DIFICIL,MUY DIFICIL,EXTREMO,IMPOSIBLE,ABSURDO"]

<!-- ********** Creo los campos, para cada ficha selecionada  **********-->
[H: inputStr = "[]"]
[h, count(listCount(selection)),code:{
	[ idtok = listGet(selection,roll.count)]
	[ tok = getName(idtok)]
	[ mmTok = getMovMan(tok)]
	[H: inputStr = json.append(inputStr,"lblNombre_"+roll.count+"|"+tok+"|-|LABEL|SPAN=TRUE")]
	[H: inputStr = json.append(inputStr,"lblMM_"+roll.count+"|"+mmTok+"|Mov y Maniobra|LABEL")]
	[H: inputStr = json.append(inputStr,"lblDado_"+roll.count+"||Dados|TEXT|SPAN=TRUE")]
	[h: inputStr = json.append(inputStr,"dificultad_"+roll.count+"|"+listaDifi+"|Dificultad|LIST|VALUE=STRING")]
}]


<!-- ********** lanzo el input  **********-->
[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

<!-- ********** busco resultado para cada ficha  **********-->

<table border="1" width="700">
<tr style="background-color:[r: temaColor(1)];"><th colspan=3>Tirada Mov y Maniobra</th></tr>
<tr style="background-color:[r: temaColor(5)];"><th width="150">Personaje</th><th width="150">MM + Dados</th><th width="400">Resultado</th></tr>
[r, count(listCount(selection),""),code:{
	[h: idtok = listGet(selection,roll.count)]
	[h: tok = getName(idtok)]
	[h: mmTok = getMovMan(tok)]
	[h: varDado = "lblDado_"+roll.count]
	[h: varDif = "dificultad_"+roll.count]	
	[h: prp = strPropFromVars(varDif+","+varDado,"UNSUFFIXED")]
	[h: dif =getStrProp(prp,varDif)]
	[h: rgo = mmTok + number(getStrProp(prp,varDado)) ]
	[h: rdoRango = table("MovManiobra",rgo)]
	[h: rdoDif = getStrProp(rdoRango,dif)]
	<tr style="background-color:[r: temaColor(3)];text-align: center;"><td>{tok}</td><td>{rgo}</td><td>{rdoDif}</td></tr>	
}]
[r: "</table>"]