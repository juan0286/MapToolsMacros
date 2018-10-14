<!-- ProgressRonudFrame -->
[h: acciones = "cargar_sort,lanzar_sort,cargar_proy,disparar_proy,mov_manio,ataque_cac,desplazamiento,mov_estatico"]
[h: tokenAccion = getInitiativeToken()]
[h: tokenAccion = getName(tokenAccion)]
[h: processorLink =macroLinkText('ProgressRonudFrame@lib:asaltos',"all")]
[h: bodyFrame = "puntoMuerto"]
[ frame("SelAccion"):{
 <html>
    <head>
     <link rel='stylesheet' type='text/css' href='myCSS@[r: getMacroLocation()]'></link>
    <title>Eleccion de Acciones</title>
      <title>Eleccion de Acciones</title>
    </head>
    <body class="[r: bodyFrame]">
     <form name="calculoDeDanio" action="[r:processorLink]">
	<table width='100%'  cellpadding='0' cellspacing='3' border="1">
		
		[r, if(puntoMuerto):puntoMuertoProgressRonudFrame()]

		[r, if(!puntoMuerto && getAccion()): accionesPosiblesProgressRoundFrame(tokenAccion)]		
		
		
</table>
</form>
</body>
</html>

}]
