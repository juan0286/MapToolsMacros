<!-- showResultadoCombate -->
[h: tokenAtk = arg(0)]
[h: tokenDef = arg(1)]
[h: golpeAtk = getProperty("golpeActual",tokenAtk)]
[h: golpeDef = getProperty("golpeActual",tokenDef)]
[h: atk = getStrProp(golpeAtk,"bo") ]
[h: def = getStrProp(golpeDef,"bd") ]
[h: tablaDanio = getStrProp(golpeAtk,"tablaDanio") ]
[h: armadura = getStrProp(golpeDef,"armadura") ]

[h: esc = ""]
[h: arm = ""]
[h: atu = ""]
[h: der = ""]

[h: resultado =  atk - def ]
[h, if(getStrProp(golpeDef,"escudo",-1) !=-1), code:{
 [h: resultado = resultado - getStrProp(golpeDef,"bonoEsc")]
 [h: esc = "<b>Bono de Escudo</b> -> "+getStrProp(golpeDef,"bonoEsc") + "<br>" ]
}]
[h, if(getStrProp(golpeAtk,"arma",-1) !=-1), code:{
[h: resultado = resultado + getStrProp(golpeAtk,"bonoArma")]
[h: arm = "<b>Bono de Arma</b> -> "+getStrProp(golpeAtk,"bonoArma") + "<br>"]
}]
[h, if(getState("Aturdido", tokenDef)), code:{
[h: resultado = resultado + 20]
[h: atu = "<b>Esta Aturdido </b> -> +20 Bo" + "<br>"]
}]
[h, if(getState("Postrado", tokenDef)), code:{
[h: resultado = resultado + 30]
[h: atu = "<b>Esta Aturdido </b> -> +30 Bo" + "<br>"]
}]

[r: subResAtaque = resultadoAtaque(tablaDanio,armadura,resultado)]
[dialog("Test"): {
  <html>
    <head>
      <title>Dice Roll Dialog</title>
    </head>
    <body>
      <b>BO del Atacante</b> -> [r: atk]<br>      	
      <b>BD del Defensor</b> -> [r: def]<br>      	
      [r: arm]
      [r: esc]
      [r: atu]
      [r: der]
      <b>El resultado es</b> -> [r: resultado]<br><br>
      <b>Contra tipo de Armadura</b> -> [r: subResAtaque]
    </body>
  </html>
}]
[h:  resetProperty("golpeActual",tokenAtk)]
[h:  resetProperty("golpeActual",tokenDef)]