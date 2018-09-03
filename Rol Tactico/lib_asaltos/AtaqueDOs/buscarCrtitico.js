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
[h:setNotes(listaTablas,"Neo")]


[h: selectBoxCritico = listFormat( listaTablas, "<select name='tablaCriticoSelBox'>%list</select>", "%item","")]

<!-- guardado de criticos -->

[h: guardar=getStrProp(data,"guardar")]

[h,if(guardar != ""),code:{ 
    [h: dadoAnte=getStrProp(data,"dadoCriticoAnterior")]
    [h: tablaSelected=getStrProp(data,"tablaCriticoSelBox")]
      [h: act = table(tablaSelectedGR,dadoAnte) ]
      [h: newDesc = setStrProp(act,"PunVida", PunVida)]
      [h: newDesc = setStrProp(newDesc,"actividad", actividad)]
      [h: newDesc = setStrProp(newDesc,"oaparar", oaparar)]
      [h: newDesc = setStrProp(newDesc,"aturd", aturd)]
      [h: newDesc = setStrProp(newDesc,"aturSinParar", aturSinParar)]
      [h: newDesc = setStrProp(newDesc,"sangre", sangre)]
      [h: newDesc = setStrProp(newDesc,"quemadura", quemadura)]
      [h: newDesc = setStrProp(newDesc,"congel", congel)]
      [h: newDesc = setStrProp(newDesc,"iniciativa", iniciativa)]
      [h: newDesc = setStrProp(newDesc,"SumaAtaque", SumaAtaque)]
      [h: newDesc = setStrProp(newDesc,"derribado", getStrProp(data,"derribado"))]
      [h: newDesc = setStrProp(newDesc,"inconsiente", getStrProp(data,"inconsiente"))]
      [h: newDesc = setStrProp(newDesc,"izqBrazoInutil", getStrProp(data,"izqBrazoInutil"))]
      [h: newDesc = setStrProp(newDesc,"derBrazoInutil", getStrProp(data,"derBrazoInutil"))]
      [h: newDesc = setStrProp(newDesc,"izqPiernaInutil", getStrProp(data,"izqPiernaInutil"))]
      [h: newDesc = setStrProp(newDesc,"derPiernaInutil", getStrProp(data,"derPiernaInutil"))]      
      
      [h: setTableEntry(tablaSelectedGR, dadoAnte, newDesc)]
 
}]

[h: golpeActualAtk = getProperty("GolpeActual",tokenAtk)]
[h: golpeActualDef = getProperty("GolpeActual",target)]

<!-- Aca obtengo la descripcion del critico -->
[h: dadoCriticoMod =dadoCritico + getStrProp(tablasCritico,tablaSelected) ]
[h,if(gr != "" && dadoCritico > 0): danioCrit = table(tablaSelectedGR,dadoCriticoMod); danioCrit = ""]
[h: descFinal = getStrProp(danioCrit,"Desc") ]

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
              <td width="50%" height="100%">
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
               <td width="50%" height="100%">
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
                  [h: len = listCount(listaChckBox)]
                  [r, for(i,0,len,2,""),code:{          
                    [h: l = listGet(listaChckBox,i)]
                    [h: rowList = listAppend(l,"<input type='checkbox' name='"+l+"' value='"+getStrProp(danioCrit,l)+"'></input>")]          
                    [h:i = i+1]
                    [h: l = listGet(listaChckBox,i)]
                    [h: rowList = listAppend(rowList,l)] 
                    [h, if(getStrProp(danioCrit,l) != ""): chk = "checked='checked'" ; chk =""]                 
                    [h: rowList = listAppend(rowList,"<input type='checkbox' name='"+l+"' "+chk+"/>")]                    
                    [r: rowPerso(rowList,3,1)]
                  }]
                    
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