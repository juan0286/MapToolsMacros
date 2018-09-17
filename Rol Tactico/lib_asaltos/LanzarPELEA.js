[h: selection = getSelected()]

<!-- ********** Creo los campos, para cada ficha selecionada  **********-->
[H: inputStr = "[]"]
[h, count(listCount(selection)),code:{
	[ idtok = listGet(selection,roll.count)]
	[ tok = getName(idtok)]
	[h, if(isPC(tok)): pelea = getHoja("BO_PELEA",tok) ; pelea = getProperty("BO_PELEA",tok)]
	[h: acti = getProperty("actividad",tok)]
	[h, if(!isNumber(acti)): acti = 0]
	[h: pelea = pelea + acti]
	[H: inputStr = json.append(inputStr,"lblNombre_"+roll.count+"|"+tok+"|-|LABEL|SPAN=TRUE")]
	[H: inputStr = json.append(inputStr,"lblMM_"+roll.count+"|"+pelea+"|BONO PELEA|LABEL")]
	[H: inputStr = json.append(inputStr,"lblDado_"+roll.count+"||Dados(2d20)|TEXT|SPAN=TRUE")]
}]


<!-- ********** lanzo el input  **********-->
[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

<!-- ********** busco resultado para cada ficha  **********-->

<table border="1" width="700">
<tr style="background-color:[r: temaColor(1)];"><th colspan=3>Tirada de PELEA</th></tr>
<tr style="background-color:[r: temaColor(5)];"><th width="150">Personaje</th><th width="150">PELEA + Dados</th><th width="400">Resultado</th></tr>
[r, count(listCount(selection),""),code:{
	[h: idtok = listGet(selection,roll.count)]
	[h: tok = getName(idtok)]
	[h, if(isPC(tok)): pelea = getHoja("BO_PELEA",tok) ; pelea = getProperty("BO_PELEA",tok)]
	[h: acti = getProperty("actividad",tok)]
	[h, if(!isNumber(acti)): acti = 0]
	[h: pelea = pelea + acti]
	[h: varDado = "lblDado_"+roll.count]	
	[h: prp = strPropFromVars(varDado,"UNSUFFIXED")]	
	[h: rgo = pelea + number(getStrProp(prp,varDado)) ]		
	<tr style="background-color:[r: temaColor(3)];text-align: center;"><td>{tok}</td><td>{rgo}</td><td>{rgo}</td></tr>	
}]
[r: "</table>"]