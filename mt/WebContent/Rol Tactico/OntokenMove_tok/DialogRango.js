**
rango 1 - no digo nada
rango 2 - -25 al Sigilo -2 P. Agotamiento.
rango 3 - -50 al Sigilo -3 P. Agotamiento.
rango 4 - -75 al Sigilo -4 P. Agotamiento.
**
[h: r = arg(0)]
[h: dm = arg(1)]

[h,switch(r):
case 2: Armor = sigBono = -25;
case 3: Armor = sigBono = -50;
case 4: Armor = sigBono = -75
]
[h, if( r > 1 && r < 4):dialog("Rango2Dialog"): {
  <html>
    <head>
      <title>Desplazamiento Rapido</title>
    </head>
    <body>
      <table style="width:100%">
      <tr>
        <th>Tu movimiento max normal es = [r: dm]</th>
      </tr>
      <tr>
        <td>Sigilo []</td>
      </tr>
      <tr>
        <td>Pierde [r: r] Puntos de Agotamiento</td>
      </tr>
    </table>

    </body>
  </html>
} ]

[h, if( r > 4):dialog("Rango2Dialog"): {
  <html>
    <head>
      <title>Desplazamiento Rapido</title>
    </head>
    <body>
      <table style="width:100%">
      <tr>
        <th>Tu movimiento max normal es = [r: dm]</th>
      </tr>
      <tr>
        <td>Requiere Tirada de Mov y Maniobra</td>
      </tr>
    </table>
    </body>
  </html>
} ]
