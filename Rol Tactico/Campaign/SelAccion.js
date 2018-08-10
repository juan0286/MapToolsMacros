[h: a = json.get(getAccion("Neo"),"accion")]]
[h: accionNeo = AccionToString(a)]
[h: a = json.get(getAccion("Kyoros"),"accion")]]
[h: accionKyo = AccionToString(a)]
[h: acciones = "[cargar_sort,lanzar_sort,cargar_proy,disparar_proy,mov_manio,ataque_cac,desplazamiento,mov_estatico]"]
[ frame("SelAccion"):{
 <html>
    <head>
     <link rel='stylesheet' type='text/css' href='myCSS@[r: getMacroLocation()]'></link>
    <title>Eleccion de Acciones</title>
      <title>Eleccion de Acciones</title>
    </head>
    <body>
	<table width='100%' heigth='100%' cellpadding='0' cellspacing='3'>
		[foreach(accButon, acciones),code:{
			[h: t = AccionToString(accButon,0)]
			<tr>
				<td title="[r: t]" class='celda'>
					<a href='macro://guardarAccion@Lib:asaltos/self/selected?[r: accButon]'>
						<span style='text-decoration:none'>[r: t]</span></a>
				</td>
			</tr>
		}] 
		
</table>
</body>
</html>

}]
