<!-- showStatusFrame-->
[h: names = getPCNames()]
[ frame("statusFrame"):{
	<html>
    <head>
     <link rel='stylesheet' type='text/css' href='myCSS@[r: getMacroLocation()]'></link>
    <title>Eleccion de Acciones</title>
      <title>Eleccion de Acciones</title>
    </head>
    <body>
	<table width='100%' heigth='100%' cellpadding='0' cellspacing='3'>
	[foreach(name, names): tokenStatus(name)]
	</table>
</body>
</html>
}]