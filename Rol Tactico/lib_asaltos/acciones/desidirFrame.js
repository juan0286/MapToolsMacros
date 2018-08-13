<!-- desisidrFrame -->
[h: token = getIniciativeToken()]
[ frame("SelAccion"):{
 <html>
    <head>
      <title>Desidir Accion</title>
    </head>
    <body>
		<table width='100%' cellpadding='0' cellspacing='3' border="1">
			<tr>
				<td class='celda' >
					<a href='macro://actuar@Lib:asaltos/self/selected?[r: token]'>
						<span style='text-decoration:none; color:blue;'>Actuar</span></a>
				</td>
			</tr>			
			<tr>
				<td style='padding-top: 12px;
				    padding-bottom: 12px;
				    text-align: center;
				    background-color: yellow;
				    color: white;'>
					<a href='macro://accionDeOportunidad@Lib:asaltos/self/selected'>
						<span style='text-decoration:none; color:blue;'>Accion de Oportunidad</span></a>
				</td>
			</tr>
			<tr>
				<td style='padding-top: 12px;
				    padding-bottom: 12px;
				    text-align: center;
				    background-color: yellow;
				    color: white;'>
					<a href='macro://SelCambioAccion@Lib:asaltos/self/selected'>
						<span style='text-decoration:none; color:blue;'>Cambio de Accion</span></a>
				</td>
			</tr>			
		</table>
</body>
</html>

}]