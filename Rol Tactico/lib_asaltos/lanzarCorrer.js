<!-- calculo de Movimiento con MM-->

[h: selection = getSelected()]
[h: listaDifi = "RUTINA,MUY FACIL,FACIL,NORMAL,DIFICIL,MUY DIFICIL,EXTREMO,IMPOSIBLE,ABSURDO"]

<!-- calculo mov normal actual del pj-->



<!-- ********** Creo los campos, para cada ficha selecionada  **********-->
[H: inputStr = "[]"]
[h, count(listCount(selection)),code:{
	[ idtok = listGet(selection,roll.count)]
	[ tok = getName(idtok)]
	[ mmTok = getMovMan(tok)]
	[H: inputStr = json.append(inputStr,"lblNombre_"+roll.count+"|"+tok+"|-|LABEL|SPAN=TRUE")]
	[H: inputStr = json.append(inputStr,"lblMM_"+roll.count+"|"+mmTok+"|Mov y Maniobra|LABEL")]
	[H: inputStr = json.append(inputStr,"lblDado_"+roll.count+"||Dados|TEXT|SPAN=TRUE")]
	[h: inputStr = json.append(inputStr,"dificultad_"+roll.count+"|"+listaDifi+"|Dificultad|LIST|VALUE=STRING SELECT=3")]
}]


<!-- ********** lanzo el input  **********-->
[H: input = input(json.toList(inputStr,"##"))]
[h: abort(input)]

<!-- ********** busco resultado para cada token  **********-->

<table border="1" width="700">
<tr style="background-color:[r: temaColor(1)];"><th colspan=4>Tirada Para Correr</th></tr>
<tr style="background-color:[r: temaColor(5)];"><th width="150">Personaje</th><th width="150">MM + Dados</th><th width="300">Resultado en tabla</th><th width="100">Resultado mov</th></tr>
[GM, count(listCount(selection),""),code:{
	
	[h: porcentaje = 100]
	[h: idtok = listGet(selection,roll.count)]
	[h: tok = getName(idtok)]
	[h: movement = CalcMovimiento(tok) ]
	[h: movementCorriendo = CalcMovimiento(tok) * 2 ]
	[h: mmTok = getMovMan(tok)]
	[h: varDado = "lblDado_"+roll.count]
	[h: varDif = "dificultad_"+roll.count]	
	[h: prp = strPropFromVars(varDif+","+varDado,"UNSUFFIXED")]
	[h: dif =getStrProp(prp,varDif)]
	[h: rgo = mmTok + number(getStrProp(prp,varDado)) ]
	[h: rdoSuma = table("MovManiobra",rgo)]
	[h: rdoEnTablaMovMan = getStrProp(rdoSuma,dif)]
	[h, if(isNumber(rdoEnTablaMovMan)),code:{
		[ if(porcentaje > 100): porcentaje = number(rdoEnTablaMovMan)]		
	};{
		[h: d = 1d10]
		[h, if(pausear()==1): pause("d","rdoEnTablaMovMan")]
		[h, if(  startsWith(rdoEnTablaMovMan, "Ca") || startsWith(rdoEnTablaMovMan, "Sin")) : porcentaje = (d * 10) ; porcentaje = 250]
	}]
	[h, if(pausear()==1): pause("porcentaje")]
	[h: rdoMovimiento = movementCorriendo * (porcentaje / 100)]
	[h: setProperty("ActualMove",rdoMovimiento,tok)]

	[h,token(Tok): jugadores = getOwners()]
	[r, if(isPC(tok)): broadcast(tok +" se movera hasta " + rdoMovimiento + " mts.",jugadores )]

	[h: setProperty("ActualMove",rdoMovimiento)]
	<tr style="background-color:[r: temaColor(3)];text-align: center;"><td>{tok}</td><td>{rgo}</td><td>{rdoEnTablaMovMan}</td><td>{rdoMovimiento} mts.</td></tr>	

}]
[r: "</table>"]