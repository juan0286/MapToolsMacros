[h: pj = arg(0)]
[h: iniciativa = arg(1)]

[h: accion = getProperty("Accion",pj)]
[h, if(accion == ""): accion = "{'accion' : mov_estatico,'desc':1 }"]
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
