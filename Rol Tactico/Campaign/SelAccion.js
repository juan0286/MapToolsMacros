[ frame("SelAccion"):{
 <html>
    <head>
     <link rel='stylesheet' type='text/css' href='myCSS@[r: getMacroLocation()]'></link>
    <title>Eleccion de Acciones</title>
      <title>Eleccion de Acciones</title>
    </head>
    <body>
	<table width='100%' cellpadding='0' cellspacing='3'>
		<tr>
			<td title="Cargar Sortilegio" class='celda'>
				<a href='macro://guardarAccion@Lib:asaltos/self/selected?cargar_sort'>
					<span>Cargar Sortilegio</span></a>
			</td>
		</tr>
		<tr>
			<td class='celda'>
				<a href='macro://guardarAccion@Lib:asaltos/self/selected?lanzar_sort'>
					<span style='text-decoration:none; color:blue;'>Lanzar Sortilegio</span></a>
			</td>
		</tr>
		<tr>
			<td class='celda'>
				<a href='macro://guardarAccion@Lib:asaltos/self/selected?cargar_proy'>
					<span style='text-decoration:none; color:blue;'>Cargar Proyectil</span></a>
			</td>
		</tr>
		<tr>
			<td class='celda'>
				<a href='macro://guardarAccion@Lib:asaltos/self/selected?disparar_proy'>
					<span style='text-decoration:none; color:blue;'>Disparar Proyectil</span></a>
			</td>
		</tr>
		<tr>
			<td class='celda'>
				<a href='macro://guardarAccion@Lib:asaltos/self/selected?mov_manio'>
					<span style='text-decoration:none; color:blue;'>Movimiento o Maniobra</span></a>
			</td>
		</tr>
		<tr>
			<td class='celda'>
				<a href='macro://guardarAccion@Lib:asaltos/self/selected?ataque_cac'>
					<span style='text-decoration:none; color:blue;'>Ataque Cuerpo a Cuerpo</span></a>
			</td>
		</tr>
		<tr>
			<td class='celda'>
				<a href='macro://guardarAccion@Lib:asaltos/self/selected?desplazamiento'>
					<span style='text-decoration:none; color:blue;'>Desplazamiento</span></a>
			</td>
		</tr>
		<tr>
			<td class='celda'>
				<a href='macro://guardarAccion@Lib:asaltos/self/selected?mov_estatico'>
					<span style='text-decoration:none; color:blue;'>Movimiento Estatico</span></a>
			</td>
		</tr>
</table>

<table width='100%' cellpadding='0' cellspacing='3'>
		<tr>
			<th class='celda'>				
					<span style='text-decoration:none; color:blue;'>Neo</span></a>
			</th>
		</tr>
		<tr>
			<td class='celda'>
				<a href='macro://guardarAccion@Lib:asaltos/self/selected?desplazamiento'>
					<span style='text-decoration:none; color:blue;'>Sin Accion Definida</span></a>
			</td>
		</tr>
		<tr>
			<td class='celda'>
				<a href='[h: link = macroLinkText("guardarAccion@Lib:asaltos", "self", "mov_estatico")]'>				
					<span style='text-decoration:none; color:blue;'>Kyoros</span></a>
			</td>
		<tr>
			<td class='celda'>
			   					<span style='text-decoration:none; color:blue;'>Sin Accion Definida</span>
			</td>
			<td class='celda'>
					<span style='text-decoration:none; color:blue;'>Sin Accion Definida</span>
			</td>
		</tr>
</table>
</body>
</html>

}]
