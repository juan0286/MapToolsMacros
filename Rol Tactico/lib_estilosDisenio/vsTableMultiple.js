<!-- vsTableMultiple -->
[h: actor1 = arg(0)]
[h: actors = arg(1)]
[h: icon = arg(2)]
[h: listaImgageActors =""]
[h: listaNameActors =""]

[h, token( actor1 ): imgA=getTokenImage()]
[h: icon = replace(getIcon(icon), ":", "&#58;")]

[h, foreach( a,actors ),code:{
	[ token( a ): listaImgageActors= listAppend(listaImgageActors,getTokenImage())]
	[ listaNameActors = listAppend(listaNameActors,getName(a))]
}]

<hml><table width='100%' border=0>
<!-- Fila Imagenes -->
[r: listFormat( listaImgageActors, "<tr><td width='33%'><img src='"+imgA+"' width=90 height=90></img></td><th width='100'><img src='"+icon+"' width=45 height=45></img></th>%list</tr>", "<td width='33%'><img src='%item' width=90 height=90></img></td>","")]
<!-- Fila nombres -->
[r: listFormat( listaNameActors, "<tr><th>"+actor1+"</th><td></td>%list</tr>", "<th>%item</th>","")]

</table></html>