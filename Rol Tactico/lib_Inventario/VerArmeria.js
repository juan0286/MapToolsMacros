<!-- VerArmeria -->
<!-- data = indice=1;borrrar;guardar; -->
[h: data = arg(0)]
[h: sel = getStrProp(data,"sel")]
[h: borrar = getStrProp(data,"Eliminar")]
[h, if(sel == ""): sel = 0]

[h, if(borrar != ""): deleteTableEntry("Weapons",sel)]
[h, if(borrar != ""): sel=sel-1]


[h: armaView = table("Weapons",sel)]

[h: processorLink =macroLinkText('VerArmeria@lib:inventario',"all")]
[h: sizeInput=5]
[h: temaTitulo=5]
[h: temafila =4]
[h: sintema ="white"]
[h: temaResaltado =4]


[gm, dialog("verArmeria","width=500; height=500;"): {
    <html>
    <head>
      <link rel='stylesheet' type='text/css' href='myCSS@[r: getMacroLocation()]'></link>
      <title>Calculo de Da&#241;o</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="calculoDeDanio" action="[r:processorLink]">
          <input type="hidden" name="sel" value="[r: sel]"></input>
          <table width="100%" class="tabla" border="1">
          <tr>
              <td colspan="2">
                <table width="60%" class="tabla" style=" decoloration: none; padding-top: 12px; padding-bottom: 12px; text-align: center; font-size: 10px;">
                [h: ind = replace("<pre>"+json.indent(armaView)+"</pre>",",","&#32;")]
                  [r: rowPerso(ind+"|td",temafila)]
                </table>
              </td>
              <td>
                <table width="40%" class="tabla">
                  [h: img = "<image src=" tableImage('Weapons', "+sel+", 40)+"></image>"]
                  [r: rowPerso(img,temafila)]
                </table>
              </td>
          </tr>
           
           [h: at = setStrProp("","sel",sel-1)]
           [h: ad = setStrProp("","sel",sel+1)]
           [h: btn1 =macroLink("atras", "VerArmeria@lib:inventario","self",at)]
           [h: btn2 ='<input type="submit" name="Eliminar" value="Eliminar">|th|1|background-color: white;']
           [h: btn3 =macroLink("adelante", "VerArmeria@lib:inventario","self",ad)]
           [r: rowPerso(add(btn1,",",btn2,",",btn3),temafila)]

           </table>
      </form>
      
    </body>
  </html>
}]