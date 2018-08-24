<!-- CalculoDanio -->
[h: data = arg(0)]
[h, if(json.length(macro.args) > 1) : dado = arg(1) ; dado = 0]
[h, if(json.length(macro.args) > 2) : modExtra = arg(2) ; modExtra = 0]

[h: varsFromStrProp(data)]

[h: rdo = boFinal - bdFinal + dado + modExtra]

[h: danios = tabla(tablaDanio,rdo)]
[h: danio = getStrProp(danios,armadura+getArm(armadura))]
[h: danioStrProp = decode(danio)]

[dialog("weaponInput"): {
    <html>
    <head>
      <title>Calculo de Da\u00f1o</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="calculoDeDanio" action="[r:macroLinkText('calcularCritico@lib:asaltos')]">
        <table>
          <tr>
            <th>
              <label for="Name">Armas Nombre</label>
            </th>
            <td>
              <input type="text" name="Name" value="[r: armas]"></input> <br>
            </td>
          </tr>
          <tr>
            <th>
              <label for="boFinal">BO Final</label>
            </th>
            <td>
              <input type="text" name="boFinal" value="[r: boFinal]"></input> <br>
            </td>
          </tr>
          <tr>
            <th>
              <label for="bdFinal">BD Final</label>
            </th>
            <td>
              <input type="text" name="bdFinal" value="[r: bdFinal]"></input> <br>
            </td>
          </tr>
          <tr>
            <th>
              <label for="Dados">Dados</label>
            </th>
            <td>
              <input type="text" name="Dados" value="[r: dado]"></input>
            </td>
          </tr>
          <tr>
            <th>
              <label for="modExtra">Modificador</label>
            </th>
            <td>
              <input type="text" name="modExtra" value="[r: modExtra]"></input>
            </td>
          </tr>
          <tr>
            <th colspan='2'>
              [h: dado= 1d100]              
              [h: args = json.set({}, "data", data)]
              [h: args = json.set(args, "dado", dado)]
              [h: args = json.set(args, "ModExtra", ModExtra)]
              [macroLink("Calcular", "CalculoDanio@lib:asaltos","self",args)]
            </th>            
          </tr>          
          <tr>
            <th>
              <label for="subResultado">Sub Resultado</label>
            </th>
            <td>
              <input type="text" name="subResultado" value="[r: rdo]"></input>
            </td>
          </tr>
          <tr>
            <th>
              <label for="Resultado">Resultado</label>
            </th>
            <td>
              <input type="text" name="Resultado" value="[r: rdo]"></input>
            </td>
          </tr>
          </table>
        <!-- hidden input with the weapon number -->
          <input type="hidden" name="data" value="[r: data]"></input>
 
        <input type="submit" name="Save" value="Save"> </input>
      </form>
    </body>
  </html>
}]