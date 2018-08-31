<!-- Empuniar -->
[tipo = arg(0)]
[]

[lista2Armas="" ]
[h,if(tipo == "2Armas"): armas = getArmas(geProperty("inv_Armas"),"2Armas")]
[h,if(tipo == "2Manos"): armas = getArmas(geProperty("inv_Armas"),"2Armas")]
[h,if(tipo == "1Mano"): armas = getArmas(geProperty("inv_Armas"),"2Armas")]

[h: tema1 =3]
[h: tema2 =2]

[h: empuniar= dialog("Empuniar"){
<html>
    <head>
      <title>Empuniar</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="calculoDeDanio" action="[r:processorLink]">          
          <table width="100%">
            [h: fila = macroLink("1 Mano", "Empuniar@lib:asaltos","self","2manos","selected")]  
            [h: fila = fila = listAppend(fila,macroLink("2 Armas", "Empuniar@lib:asaltos","self","2manos","selected") )]  
            [h: fila = fila = listAppend(fila,macroLink("2 manos", "Empuniar@lib:asaltos","self","2manos","selected") )]  
            [h: fila = macroLink("2 manos", "Empuniar@lib:asaltos","self","2manos","selected")]  
            <tr><th><input type="submit" name="2Armas" value="2 Armas"> </input></th></tr>
            
            [r: rowPerso(fila,tema1,1)]
          


          </table>
      </form>
    </body>
</html>
}]