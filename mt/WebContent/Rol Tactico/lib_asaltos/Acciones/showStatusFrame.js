<!-- showStatusFrame-->
[h: names = getPCNames()]
[h: names = listDelete(names, listFind(names, "ACCIONES"))]
[r: names]
[ frame("statusFrame"):{
	<html>
    <head>
     <link rel='stylesheet' type='text/css' href='myCSS@[r: getMacroLocation()]'></link>
    <title>Estado de Jugadores</title>
    </head>
    <body>
	<table width='100%' heigth='100%' cellpadding='0' cellspacing='3' border='1' >
	[r,foreach(name, names,"<tr><td height='20' colspan='5'></td></tr>"): tokenStatus(name) ]
	</table>
</body>
</html>
}]