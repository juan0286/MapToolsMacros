<!-- accionActual Muestra la accion del token actual en un frame -- >
[h: pj = arg(0)]
[h: iniciativa = arg(1)]

[h: accion = getProperty("Accion",pj)]

[h, if(isPropertyEmpty("Accion",pj)): accion = json.set("{}","accion","mov_estatico","desc","no hizo nada")]
[h: a = json.get(accion,"accion")]
[h: d = json.get(accion,"desc")]

[ frame("DescAccionActual"):{
 <html>
    <head>
      <title>Acciones en el Asalto</title>
    </head>
    <body>
    <table border="1" width='100%' cellpadding='0' cellspacing='3'>
    <tr>
    	<th>Personaje</th>
    	<th>Accion</th>
        <th>Descripcion</th>
    	<th>Iniciacita</th>
    </tr>
    <tr>
    	<td style="text-align: center;">[r: pj]</td>
        <td style="text-align: center;">[r: a]</td>
        <td style="text-align: center;">[r: iniciativa]</td>
    	<td style="text-align: center;">[r: d]</td>
    </tr>
    </table>				
	</body>
</html>

}]
