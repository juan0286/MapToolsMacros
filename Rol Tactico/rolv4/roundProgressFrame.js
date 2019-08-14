<!-- ProgressRoundFrame -->
[h: data = arg(0)]

<!-- ******************* Declarar ataque ******************-->
[h, if( getStrProp(data,"atacar")!="" ): DeclararAtaqueV3()]

[h: acciones = "cargar_sort,lanzar_sort,cargar_proy,disparar_proy,mov_manio,ataque_cac,desplazamiento,mov_estatico"]
[h: tokenAccion = getInitiativeToken()]
[h: tokenAccion = getName(tokenAccion)]

<!-- ******************* Actuar la Accion ******************-->
[h, if( getStrProp(data,"Confirmar")!="" ): actuar(tokenAccion)]

[h, if(tokenAccion == "ACCIONES"): puntoMuerto = 1 ; puntoMuerto = 0]
[h: processorLink =macroLinkText('ProgressRoundFrame@lib:asaltos',"all")]
[h: bodyFrame = "puntoMuerto"]
[ frame("ActividadFrame"):{
 <html>
    <head>
     <link rel='stylesheet' type='text/css' href='myCSS@[r: getMacroLocation()]'></link>
    <title>Eleccion de Acciones</title>
      <title>Eleccion de Acciones</title>
    </head>
    <body class="[r: bodyFrame]">
     <form name="calculoDeDanio" action="[r:processorLink]">
	<table width='100%'  cellpadding='0' cellspacing='3' border="0" style="background-color:[r: temaColor(1)]">
		
		[r, if(puntoMuerto==1):puntoMuertoProgressRoundFrame() ; accionesPosiblesProgressRoundFrame(tokenAccion)]
		
		
</table>
</form>
</body>
</html>

}]
