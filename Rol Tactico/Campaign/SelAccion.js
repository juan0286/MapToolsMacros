[h: acciones = "cargar_sort,lanzar_sort,cargar_proy,disparar_proy,mov_manio,ataque_cac,desplazamiento,mov_estatico"]
[ frame("SelAccion"):{
 <html>
    <head>
     <link rel='stylesheet' type='text/css' href='myCSS@[r: getMacroLocation()]'></link>
    <title>Eleccion de Acciones</title>
      <title>Eleccion de Acciones</title>
    </head>
    <body>
	<table width='100%'  cellpadding='0' cellspacing='3'>
		[foreach(accButon, acciones,''),code:{
			[h: t = AccionToString(accButon,0)]
			<tr class='row'>
				<td title="[r: t]" class='celdaSel' style='background-color:[r: AccionToString(accButon,1)];'>
					<a href='macro://guardarAccion@Lib:asaltos/self/selected?[r: accButon]'>
						<span>[r: t]</span></a>
				</td>
			</tr>
		}] 
		
</table>
</body>
</html>

}]
