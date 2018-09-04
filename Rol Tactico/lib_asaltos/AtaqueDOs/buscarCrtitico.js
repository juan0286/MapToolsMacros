<!-- BuscarCritico -->
<!-- danio, tablasCritico, tokenAtk, target, dado-->
[h: data = arg(0)]

[h: listTextField = "PunVida,actividad, oaparar, aturd, aturSinParar, sangre, quemadura, congel, iniciativa,SumaAtaque"]
[h: listaChckBox = "derribado, inconsiente, izqBrazoInutil,derBrazoInutil,izqPiernaInutil,derPiernaInutil,derrotado,muerto"]
[h: listaOtraCosa = "mueteEnAsaltos"]
[h: varsFromStrProp( data )]
[h: tablasCritico = decode(tablasCritico)]
[h: tablaSelected = getStrProp(data,"tablaCriticoSelBox") ]
[h,if(tablaSelected == ""): tablaSelected = indexKeyStrProp(tablasCritico, 0) ]


[h: tablaSelectedGR = tablaSelected + "_"+gr]

[h,if(getStrProp(data,"guardar") != ""),code:{ 
    [h: dadoAnte=getStrProp(data,"dadoCriticoAnterior")]       
    [h: SetearCritico(dadoAnte,tablaSelectedGR)]
    [h: listTextField=getStrProp()]
}]

[pause("data","tablaSelected")]

[h: countTablasCrit = countStrProp(tablasCritico)]
[h: listaTablas=""]
[h, count(countTablasCrit),code:
{
  [t = indexKeyStrProp(tablasCritico, roll.count)]
  [mod = indexValueStrProp(tablasCritico, roll.count)]
  [if(mod!=0):mod ="("+mod+")" ; mod =""]  
  [if(t==tablaSelected): se ="selected" ; se=""]    
  [ listaTablas= listAppend(listaTablas,"<option value='"+t+"' "+se+">"+replace(t,"critico","")+mod+"</option>")]
  
}]

[h: selectBoxCritico = listFormat( listaTablas, "<select name='tablaCriticoSelBox'>%list</select>", "%item","")]


[h: golpeActualAtk = getProperty("GolpeActual",tokenAtk)]
[h: golpeActualDef = getProperty("GolpeActual",target)]

<!-- Aca obtengo la descripcion del critico -->
[h: dadoCriticoMod =dadoCritico + getStrProp(tablasCritico,tablaSelected) ]
[h,if(gr != "" && dadoCritico > 0): danioCrit = table(tablaSelectedGR,dadoCriticoMod); danioCrit = ""]
[h: descFinal = getStrProp(danioCrit,"Desc") ]


[h: rowList = ""]
[h: sinDescProps=deleteStrProp(danioCrit, "Desc")]
[h, count(countStrProp(sinDescProps)),code:
{
  [key = indexKeyStrProp(sinDescProps, roll.count)]
  [value = indexValueStrProp(sinDescProps, roll.count)]
  [row = rowPerso("<span>"+key+"</span>,<input type='text' name='"+key+"' value='"+value+"'></input>",2)]
  [h: rowList = listAppend(rowList,row)]          
}]


[h: argsConDados = setStrProp(data,"dadoCritico", 1d100)]
[h: argsConDados = setStrProp(argsConDados,"dadoAnte", "")]
[h: argsConDados = setStrProp(argsConDados,"tablaCriticoSelBox", tablaSelected)]
[h: argsConDados = setStrProp(argsConDados,"guardar", "")]

[h: argsDanio = setStrProp(data,"guardar", "")]

[h: processorLink =macroLinkText('BuscarCritico@lib:asaltos',"all")]

[dialog("criticoInput"): {
    <html>
    <head>
      <title>Buscador de Critico</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="buscarCritico" action="[r:processorLink]">
      <input type="hidden" name="tokenAtk" value="[r: tokenAtk]"></input>
      <input type="hidden" name="tablasCritico" value="[r: encode(tablasCritico)]"></input>      
      <input type="hidden" name="target" value="[r: target]"></input>
      <input type="hidden" name="dadoCritico" value="[r: dadoCritico]"></input>
      <input type="hidden" name="pv" value="[r: pv]"></input>
      <input type="hidden" name="danio" value="[r: danio]"></input>
      <input type="hidden" name="gr" value="[r: gr]"></input>
      <input type="hidden" name="dadoCriticoAnterior" value="[r: dadoCriticoMod]"></input>
          <table width="100%" border="1">   
            <tr>
              <td width="75%" height="100%">
                <table width="100%" height="100%">        
                  [h: tema1 = 5]
                  [r: rowPerso("Da&#241;o,"+danio,tema1,2)]
                  [r: rowPerso("DADOS,<input type='text' name='dadoCritico' value='"+dadoCritico+"'>",tema1,2)]
                  [r: rowPerso("TABLA,"+selectBoxCritico,tema1,2)]
                  [r: rowPerso("Descripcion del Critico("+dadoCriticoMod+")|th|2",tema1,2)]
                  <tr style="background-color:[r: temaColor(4)]">
                    <th colspan="2" style="font-size:12px;" height="125">
                      <span>[r: descFinal]</span>
                    </th>
                  </tr>
                  [r: rowPerso("Recuperacion,<input name='recuperacion' value=''>",tema1)]                    
                  [r: rowPerso(macroLink("Lanzar Dados", "BuscarCritico@lib:asaltos","self",argsConDados)+"|th|2",tema1)]                    
                </table>        
               </td>          
               <td width="25%" height="100%">
                  <table width="100%">
                      [r,foreach(row,rowList,""): row]    
                  </table>            
            </td>         
          </tr>
          <tr>
              <th>
                <input size="50" style="width: 100px;" type="submit" name="                    Buscar                    " value="Buscar"> </input>
              </th>
              <th>                
                <input size="50" style="width: 100px;" type="submit" name="                    Guardar                    " value="Guardar"> </input>
              </th>
          </tr>          
          [r: rowPerso(macroLink("Aplicar Critico", "AplicarDanio@lib:asaltos","",argsConDados)+"|th|2",3)]
        </table>
        </table>  
      </form>
    </body>
  </html>
}]