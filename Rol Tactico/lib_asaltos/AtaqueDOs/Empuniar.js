<!-- Empuniar -->
[h: empuniar= dialog("Empuniar"){
<html>
    <head>
      <title>Calculo de Da&#241;o</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="calculoDeDanio" action="[r:processorLink]">
          <table width="100%"> 
          </table>
          <table width="100%">
            <tr><th><input type="submit" name="Calcular" value="Calcular"> </input></th></tr>
            [r,if(gr!=""): "<tr><th><h2>"+ macroLink("Buscar Critico", "BuscarCritico@lib:asaltos","self",argsCrit)+"</h2></th></tr>"]
            
            </table>
      </form>
    </body>
</html>
}]