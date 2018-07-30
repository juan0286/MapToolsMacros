[h: pj = arg(0)]
[h: Accion = arg(1)]
[h: iniciativa = arg(2)]
[h: a = json.get(Accion,"accion")]
[h: d = json.get(Accion,"desc")]

[ frame("DescAccionActual"):{
 <html>
    <head>
      <title>Acciones en el Asalto</title>
    </head>
    <body>
		<h3>[r: pj]</h3>
		<p>Accion: [r: a]</p>
		<p>Iniciativa:	[r: iniciativa]</p>
		<p>Desc: [r: d]</p>
	</body>
</html>

}]
