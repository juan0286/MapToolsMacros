<!-- CalculoDanio -->
[h: data = arg(0)]
[h: rangoMax1= 105]
[h: rangoMax2= 120]
[h: rangoMax3= 135]
[h: rangoMax4= 150]

[h: ErrorMsg(length(data),"Debe recibir DATA con:tokenAtk")]
[h, if(pausear()==1): pause("data")]
[h: varsFromStrProp( data )]
[h, if (tokenAtk == "GM"), code:{  
  [ bdTmp = 0]
  [h: data = setStrProp(data,"bdTmp", 0)]  
  [ armas = "Punios"]
  [h: data = setStrProp(data,"armas", tablaCritico)]  
  [ boFinal = "<input type='text' name='boTmp' value="+ boTmp+">" ]
};{

  [h: golpeActualAtk = getProperty("GolpeActual",tokenAtk)]
  [h: arma1 = getProperty("brazo1",tokenAtk)]
  [h: arma2 = getProperty("brazo2",tokenAtk)]
  [ armas = json.get(arma1,"nombre")]
  [ armas = add(armas," y ",json.get(arma2,"nombre"))]
  [h: golpeActualDef = getProperty("GolpeActual",target)]
  [h: boTmp = getStrProp(golpeActualAtk,"boTmp")]
  [h: bdTmp = getStrProp(golpeActualDef,"bdTmp")]
  [h: tipoAtaque = getStrProp(golpeActualAtk,"tipoAtaque")]
  [h: tablaDanio = json.get(arma1,"danio")]
  [h: tablasCritico = json.get(arma1,"criticos")]  
  [ boFinal = "<span>"+boTmp+"</span>"]        
  
}]
<!-- *************** Finalizar el Ataque *****************--> 


[r, if(getStrProp(data,"aplicarDanio")!=""),code:{  
  [r: AplicarDanios(data)]
  [h, if(getStrProp(ga,"ataqueEspecial")== "Arrojadizo"): tirarArma()]  
  [h, if(getStrProp(ga,"ataqueEspecial")== "Proyectil"): tirarFlecha()] 
    [act_GolpeActualAtack(tokenAtk)]
    [act_GolpeActualDefense(target)]
}] 
<!-- ***************                    *****************--> 

[h: criticos=""]

[h: armadura = getProperty("armadura",target)]

[h: rdo = number(boTmp) - number(bdTmp) + number(dado) + number(modExtra)]
                  [h, if(pausear()==1): pause("rdo")]
                  
<!-- *************** Contemplo Karate u otras talas de rango y obtengo el Rango de golpe   *****************--> 
[h, if(startsWith(tablaDanio,"ataqueKarate")),code:{
                  [h, if(pausear()==1): pause("tablaDanio")]
  [ karateArray = stringToList(tablaDanio,"_") ]
  [ tablaDanio = listGet(karateArray,0) ]
                  [h, if(pausear()==1): pause("tablaDanio")]
  [ rango = listGet(karateArray,1) ]
                  [h, if(pausear()==1): pause("rango")]  
  [h, if(rango == 1 && rdo > rangoMax1): rdo = rangoMax1]
  [h, if(rango == 2 && rdo > rangoMax2): rdo = rangoMax2]
  [h, if(rango == 3 && rdo > rangoMax3): rdo = rangoMax3]
}]
                  [h, if(pausear()==1): pause("rdo")]
[h: danios = table(tablaDanio,rdo)]
[h: armObj = getTipoArm(armadura)+armadura]
[h: danioStrProp = decode(json.get(danios,armObj))]
[h: varsFromStrProp( danioStrProp )]



[h, if (someter==1): tablasCritico = "criticoSometer"]
[h, if (gr!=""): criticos= listAppend(criticos,tablasCritico)]
[h, if (gr!=""): setStrProp(data,"selectGr_1",gr)]

[h, if (gr!="" && tipoAtaque=="2Armas"): criticos= listAppend(criticos,json.get(arma2,"criticos"))]
[h, if (gr!="" && tipoAtaque=="2Armas"): setStrProp(data,"selectGr_2",gr)]


                  [h, if(pausear()==1): pause("criticos")]

<!-- *********** Control si es Kata de Armas de Karate ************-->
[h: tablaDanio2 =json.get(arma2,"danio")]
<!-- Si el arma 1 es karate, y el arma dos, es otro arma, entonces uso kata de armas. -->
[h, if( tablaDanio == "ataqueKarate" && !startsWith(tablaDanio2,"ataqueKarate")  ),code:{
            [h, if(pausear()==1): pause("arma2")]
    [h: bonoKataArmas = bonoKataArmas(arma2,armObj)]    
            [h, if(pausear()==1): pause("bonoKataArmas")]
    [h, if(pv>0): pv= pv + number(bonoKataArmas)]  
            [h, if(pausear()==1): pause("pv")]
    [h: criticos = "criticoDesequilibrio=0;"]

    [h: criticos= listAppend(criticos,json.get(arma2,"criticos")]
} ]

                  [h, if(pausear()==1): pause("tablaDanio2")]
[h: argsConDados = setStrProp(data,"dado", 1d100)]
[h: argsCrit = setStrProp(danioStrProp,"danio",  pv + " " + gr)]
[h: argsCrit = setStrProp(argsCrit,"tablasCritico", tablasCritico)]
[h: argsCrit = setStrProp(argsCrit,"tokenAtk",  tokenAtk)]
[h: argsCrit = setStrProp(argsCrit,"target",  target)]
[h: argsCrit = setStrProp(argsCrit,"dadoCritico", 0)]

[h: processorLink =macroLinkText('postDanios@lib:asaltos',"all")]
[h: sizeInput=5]
[h: temaTitulo=5]
[h: temafila =3]
[h: sintema ="white"]
[h: temaResaltado =4]


[h: tema4 =4]
[h: tema5 =5]

                  [h, if(pausear()==1): pause("tema4")]
[gm, dialog("calculoDanioInput","width=500; height=500;"): {
    <html>
    <head>
      <link rel='stylesheet' type='text/css' href='myCSS@[r: getMacroLocation()]'></link>
      <title>Calculo de Da&#241;o</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="calculoDeDanio" action="[r:processorLink]">
          <input type="hidden" name="tokenAtk" value="[r: tokenAtk]"></input>
          <input type="hidden" name="tablaCritico" value="[r: tablasCritico]"></input>     
          <input type="hidden" name="tablaDanio" value="[r: tablaDanio]"></input>     
          <input type="hidden" name="target" value="[r: target]"></input>               
          <input type="hidden" name="pv" value="[r: pv]"></input>               
          <table width="100%" class="tabla" "background-color:[r: temaColor(1)];">
                            [h, if(pausear()==1): pause("armas","temaTitulo")]
          [r: rowPerso("<label for='name'>Armas</label>|th|1,<span>"+armas+"</span>|th|5",temaTitulo)]

          [r: rowPerso("<label for='boTmp'>BO</label>,"+ boFinal + "|th,<label for='bdTmp'>BD</label>,<span>"+bdTmp+"</span>|th,<label for='modExtra'>Mod. Extra</label>,<input type='text' size='"+sizeInput+"' name='modExtra' value="+ modExtra+">",temafila)]
                            [h, if(pausear()==1): pause("temafila")]
          [r: rowPerso("<label for='dado'>DADOS</label>,<input type='text' size='"+sizeInput+"' name='dado' value="+ dado+">,"+macroLink("Lanzar Dados", "CalculoDanio@lib:asaltos","self",argsConDados)+"|th|4",temafila)]
                                                          [h, if(pausear()==1): pause("argConDados")]
          [r: rowPerso("<label for='subResultado'>Resultado</label>|th,<span>"+rdo+"</span>|th|2|background-color: "+tema4+"; font-size: 18px;,<label for='Da&#241;o'>Da&#241;o</label>|th,<span>"+pv + " PV. " + gr +"</span>|th|2|background-color: "+tema4+"; font-size: 18px;",temafila)]
                                      [h, if(pausear()==1): pause("gr")]
          </table>
          <table width="100%" class="tabla" "background-color:[r: temaColor(1)];">            
           [r: rowPerso('<input type="submit" name="Calcular" value="              Calcular              ">|th|1|background-color: white;',sintema)]
          </table>
           <table width="100%"  class="tabla" "background-color:[r: temaColor(1)];">
           [r: rowPerso("CRITICOS|th|5",temaTitulo)]
                  [h, if(pausear()==1): pause("criticos")]
           [r,COUNT(listCount(criticos),  rowPerso("&#32;|th|5|background-color: white;",sintema) ),code:{
              <!-- gr , tabla sin letra| dado_1 sel_target_1, sel_Gr_1 -->
              [h: n = roll.count]
              [h: cr = listGet(criticos,roll.count)]
              [h: tablasOpc = decode(cr)]
              [h: dadoCrit = getStrProp(data,"dado_cr"+n)]
              [h, if(getStrProp(data,"crit_"+n)!="" && dadoCrit ==""): dadoCrit=1d100]
              

              [h: boxGrName="selectGr_"+n]
              [h, if (getStrProp(data,boxGrName)!=""): gr=getStrProp(data,boxGrName); sel=""]
              [h: boxGr = selectBoxPerso("A,B,C,D,E",gr,boxGrName)]
              
              [h: boxCritName="selectCrit_"+n]
              [h, if (getStrProp(data,boxCritName)!=""): selCrit=getStrProp(data,boxCritName); selCrit=indexKeyStrProp(tablasOpc, 0)]              
              [h: boxTablas = selectBoxPerso(tablasOpc,selCrit,"selectCrit_"+n,"criticos")]
              
              [h: boxTgtName="selectTgt_"+n]
              [h, if (getStrProp(data,boxTgtName)!=""): selTgt=getStrProp(data,boxTgtName); selTgt=target]
              [h: boxTgt = selectBoxPerso( getExposedTokenNames(),selTgt,"selectTgt_"+n)]
             
             [h: col5 ="<select name='tgt_cr"+n+"'><option selected value='"+target+"'>"+target+"</option><option value='Neo'>Neo</option><option value='Otro'>Otro</option></select>"]
             [r: rowPerso("GRAVEDAD,"+boxGr+",TABLA,"+boxTablas+","+boxTgt,temafila)]
             [r: rowPerso("Dados|th|2,<input type='text' size='"+sizeInput+"' name='dado_cr"+n+"' value='"+dadoCrit+"'>,<input type='submit' name='crit_"+n+"' value='    Lanzar    '>|th,<input type='submit' name='EditarCrit_"+n+"' value='    Editar    '>|th",temafila)]
             [h: mod= getStrProp(cr,selCrit)]
              
             [h, if(getStrProp(data,'EditarCrit_'+n)!=""): SetearCritico(number(dadoCrit)+number(mod),selCrit,gr)]                           
             [r, if(dadoCrit!=""): describirCriticoSeccion(dadoCrit,selCrit+"_"+gr,getStrProp(cr,selCrit),"crit_"+n) ]

           }]
             [r: rowPerso('<input type="submit" name="aplicarDanio" value="                FINALIZAR EL ATAQUE                ">|th|5|background-color: white;',sintema)]
           </table>
      </form>
      
    </body>
  </html>
}]