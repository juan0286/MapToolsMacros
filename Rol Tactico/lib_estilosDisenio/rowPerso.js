[h: listContenido = arg(0)]
[h: tema = temaColor(arg(1))]
[r: "<tr style='background-color:"+tema+";'>"]
[r, foreach(c,listContenido,""): "<td colspan='"+ arg(2)+"'>"+c+"</td>"]
[r: "</tr>"]