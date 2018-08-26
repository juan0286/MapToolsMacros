<!-- BuscarCritico -->
<!-- danio, tablaCritico, tokenAtk, target, dado-->
[h: data = arg(0)]

[h: listTextField = "P.V.,actividad, oaparar, aturd, aturSinParar, sangre, quemadura, congel, iniciativa"]
[h: listaChckBox = "derribado, inconsiente, izqBrazoInutil,derBrazoInutil,izqPiernaInutil,derPiernaInutil"]
[h: listaOtraCosa = "mueteEnAsaltos"]

[h: varsFromStrProp( data )]

[h: golpeActualAtk = getProperty("GolpeActual",tokenAtk)]
[h: golpeActualDef = getProperty("GolpeActual",target)]

[h: tablaCritico = getStrProp(golpeActualDef,"tablaCritico")]

<!-- Aca obtengo la descripcion del critico -->
[h,if(gr != ""): danioCrit = table(tablaCritico+"_"+gr,dadoCritico); danioCrit = ""]

[h: argsConDados = setStrProp(data,"dadoCritico", 1d100)]

[h: processorLink =macroLinkText('BuscarCritico@lib:asaltos',"all")]
[dialog("criticoInput"): {
    <html>
    <head>
      <title>Buscador de Critico</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="calculoDeDanio" action="[r:processorLink]">
      <input type="hidden" name="tokenAtk" value="[r: tokenAtk]"></input>
      <input type="hidden" name="target" value="[r: target]"></input>
      <input type="hidden" name="dadoCritico" value="[r: dadoCritico]"></input>
      <input type="hidden" name="pv" value="[r: pv]"></input>
      <input type="hidden" name="danio" value="[r: danio]"></input>
      <input type="hidden" name="gr" value="[r: gr]"></input>
          <table width="100%">        
          [h: tema1 = 5]
          [r: rowPerso("Da&#241;o,"+danio,tema1,2)]
          [r: rowPerso("DADOS,<input type='text' name='dadoCritico' value='"+dadoCritico+"'>",tema1,2)]
          [r: rowPerso("Descripcion del Critico",tema1,2)]
          <tr style="background-color:[r: temaColor(4)]" height="300">
            <th colspan="4" style="font-size:12px;">
              <span>[r: getStrProp(danioCrit,"Desc")]</span>
            </th>
          </tr>
          [r: rowPerso(macroLink("Lanzar Dados", "BuscarCritico@lib:asaltos","self",argsConDados),tema1,4)]                    
        </table>
        <table width="100%">
        [h: len = listCount(listTextField)]
        [r, for(i,0,len,2,""),code:{          
          [h: l = listGet(listTextField,i)]
          [h: rowList = listAppend(l,"<input type='text' name='"+l+"' value='"+getStrProp(danioCrit,l)+"'></input>")]          
          [h:i = i+1]
          [h: l = listGet(listTextField,i)]
          [h: rowList = listAppend(rowList,l)]          
          [h: rowList = listAppend(rowList,"<input type='text' name='"+l+"' value='"+getStrProp(danioCrit,l)+"'></input>")]                    
          [r: rowPerso(rowList,2,1)]
        }]
        [r: rowPerso("",3,4)]
        [h: len = listCount(listaChckBox)]
        [r, for(i,0,len,2,""),code:{          
          [h: l = listGet(listaChckBox,i)]
          [h: rowList = listAppend(l,"<input type='checkbox' name='"+l+"' value='"+getStrProp(danioCrit,l)+"'></input>")]          
          [h:i = i+1]
          [h: l = listGet(listaChckBox,i)]
          [h: rowList = listAppend(rowList,l)]          
          [h: rowList = listAppend(rowList,"<input type='checkbox' name='"+l+"' value='"+getStrProp(danioCrit,l)+"'></input>")]                    
          [r: rowPerso(rowList,3,1)]
        }]
        </table>  

        <!-- hidden input with the weapon number -->        
 
        <input type="submit" name="Calcular" value="Calcular"> </input>
      </form>
    </body>
  </html>
}]