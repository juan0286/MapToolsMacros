<!-- CalculoDanio -->
[h: data = arg(0)]

[h: ErrorMsg(length(data),"Debe recibir DATA con:tokenAtk")]

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
<!-- *************** APLICAR LOS DANIOS *****************--> 
[h, if(getStrProp(data,"aplicarDanio")!=""): AplicarDanios(data)]
<!-- ***************                    *****************--> 

[h: criticos=""]

[h: armadura = getProperty("armadura",target)]

[h: rdo = number(boTmp) - number(bdTmp) + number(dado) + number(modExtra)]

[h: danios = table(tablaDanio,rdo)]
[h: armObj = getTipoArm(armadura)+armadura]
[h: danioStrProp = decode(json.get(danios,armObj))]
[h: varsFromStrProp( danioStrProp )]

[h, if (gr!=""): criticos= listAppend(criticos,tablasCritico)]
[h, if (gr!=""): setStrProp(data,"selectGr_1",gr)]

[h, if (gr!="" && tipoAtaque=="2Armas"): criticos= listAppend(criticos,json.get(arma2,"criticos"))]
[h, if (gr!="" && tipoAtaque=="2Armas"): setStrProp(data,"selectGr_2",gr)]

[h: argsConDados = setStrProp(data,"dado", 1d100)]
[h: argsCrit = setStrProp(danioStrProp,"danio",  pv + " " + gr)]
[h: argsCrit = setStrProp(argsCrit,"tablasCritico", tablasCritico)]
[h: argsCrit = setStrProp(argsCrit,"tokenAtk",  tokenAtk)]
[h: argsCrit = setStrProp(argsCrit,"target",  target)]
[h: argsCrit = setStrProp(argsCrit,"dadoCritico", 0)]

[h: processorLink =macroLinkText('CalculoDanio@lib:asaltos',"all")]
[h: sizeInput=5]
[h: temaTitulo=5]
[h: temafila =3]
[h: sintema ="white"]
[h: temaResaltado =4]


[h: tema4 =4]
[h: tema5 =5]

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
          <table width="100%" class="tabla">
          [r: rowPerso("<label for='name'>Armas</label>|th|1,<span>"+armas+"</span>|th|5",temaTitulo)]

          [r: rowPerso("<label for='boTmp'>BO</label>,"+ boFinal + "|th,<label for='bdTmp'>BD</label>,<span>"+bdTmp+"</span>|th,<label for='modExtra'>Mod. Extra</label>,<input type='text' size='"+sizeInput+"' name='modExtra' value="+ modExtra+">",temafila)]
          
          [r: rowPerso("<label for='dado'>DADOS</label>,<input type='text' size='"+sizeInput+"' name='dado' value="+ dado+">,"+macroLink("Lanzar Dados", "CalculoDanio@lib:asaltos","self",argsConDados)+"|th|4",temafila)]
                              
          [r: rowPerso("<label for='subResultado'>Resultado</label>|th,<span>"+rdo+"</span>|th|2|background-color: "+tema4+"; font-size: 18px;,<label for='Da&#241;o'>Da&#241;o</label>|th,<span>"+pv + " PV. " + gr +"</span>|th|2|background-color: "+tema4+"; font-size: 18px;",temafila)]
          
          </table>
          <table width="100%" class="tabla">            
           [r: rowPerso('<input type="submit" name="Calcular" value="              Calcular              ">|th|1|background-color: white;',sintema)]
          </table>
           <table width="100%"  class="tabla">
           [r: rowPerso("CRITICOS|th|5",temaTitulo)]

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
             [r: rowPerso('<input type="submit" name="aplicarDanio" value="                APLICAR LOS DANIOS                ">|th|5|background-color: white;',sintema)]
           </table>
      </form>
      
    </body>
  </html>
}]