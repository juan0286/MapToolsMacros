<!-- CalculoDanio -->
[h: data = arg(0)]
[h: pause("data")]
[h: varsFromStrProp( data )]

[h: golpeActualAtk = getProperty("GolpeActual",tokenAtk)]
[h: golpeActualDef = getProperty("GolpeActual",target)]

[h: boTmp = getStrProp(golpeActualAtk,"boTmp")]
[h: bdTmp = getStrProp(golpeActualDef,"bdTmp")]

[h: armas = getStrProp(golpeActualDef,"arma")]

[h: tablaDanio = getStrProp(golpeActualDef,"tablaDanio")]
[h: tablaCritico = getStrProp(golpeActualDef,"tablaCritico")]

[h: armadura = getProperty("armadura",target)]

[h: rdo = number(boTmp) - number(bdTmp) + number(dado) + number(modExtra)]

[h: danios = table("ataque"+tablaDanio,rdo)]
[h: armObj = getTipoArm(armadura)+armadura]
[h: danioStrProp = decode(json.get(danios,armObj))]
[h: varsFromStrProp( danioStrProp )]


[h: argsConDados = setStrProp(data,"dado", 1d100)]
[h: argsCrit = setStrProp(danioStrProp,"danio",  pv + " " + gr)]
[h: argsCrit = setStrProp(argsCrit,"tablaCritico", tablaCritico)]
[h: argsCrit = setStrProp(argsCrit,"tokenAtk",  tokenAtk)]
[h: argsCrit = setStrProp(argsCrit,"target",  target)]

[h: processorLink =macroLinkText('CalculoDanio@lib:asaltos',"all")]
[dialog("weaponInput"): {
    <html>
    <head>
      <title>Calculo de Da&#241;o</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="calculoDeDanio" action="[r:processorLink]">
      <input type="hidden" name="tokenAtk" value="[r: tokenAtk]"></input>
      <input type="hidden" name="target" value="[r: target]"></input>     
          
          [r: rowPerso("<label for='name'>Armas</label>,<span>"+armas+"</span>",tema1,1)]
          
          [r: rowPerso("<label for='boTmp'>BO</label>,<span>"+boTmp+"</span>",tema1,1)]
          
          [r: rowPerso("<label for='bdTmp'>BD</label>,<span>"+bdTmp+"</span>",tema1,2)]

          [r: rowPerso("<label for='dado'>DADOS</label>,<input type='text' name='dado' value="+ dado+">",tema1,1)]
          
          [r: rowPerso("<label for='modExtra'>Mod. Extra</label>,<input type='text' name='modExtra' value="+ modExtra+">",tema1,1)]
          
          [r: rowPerso([r: macroLink("Lanzar Dados", "CalculoDanio@lib:asaltos","self",argsConDados)],tema2,2)]
                    
          [r: rowPerso("<label for='subResultado'>Sub Resultado</label>,>,<span>"+rdo+"</span>",tema1,1)]
          
          [r: rowPerso("<label for='Da&#241;o'>Da&#241;o</label>,>,<span>"+pv + " PV. " + gr + " "+ replace(tablaCritico,"critico","")+"</span>",tema1,1)]
    
          </table>
        <input type="submit" name="Calcular" value="Calcular"> </input>
      </form>
      <h2<[r: macroLink("Buscar Critico", "BuscarCritico@lib:asaltos","self",argsCrit)]</h2>
    </body>
  </html>
}]