<!-- desisidrFrame -->
[h: tokid = getInitiativeToken() ]
[]
[h: linkActurar = macroLinkText('actuar@Lib:asaltos', 'self', tokid)]
[h: linkCambio = macroLinkText('SelCambioAccion@Lib:asaltos', 'self', tokid)]
[h: linkAccOpo = macroLinkText('accionDeOportunidad@Lib:asaltos', 'self', tokid)]
[ frame("SelAccion"):{
 <html>
    <head>
      <title>Desidir Accion</title>
    </head>
    <body>
		<table width='100%' cellpadding='0' cellspacing='3' border="1">
			<tr>
				<td class='celda' >
					<a href='[r: linkActurar]'>
						<span style='text-decoration:none; color:blue;'>[r: getAccionText(tokName)]</span></a>
				</td>
			</tr>			
			<tr>
				<td class='celda' >
					<a href='[r:linkAccOpo]'>
						<span style='text-decoration:none; color:blue;'>Accion de Oportunidad</span></a>
				</td>
			</tr>
			<tr>
				<td class='celda'>
					<a href='[r:linkCambio]'>
						<span style='text-decoration:none; color:blue;'>Cambio de Accion</span></a>
				</td>
			</tr>			
		</table>
</body>
</html>

}]