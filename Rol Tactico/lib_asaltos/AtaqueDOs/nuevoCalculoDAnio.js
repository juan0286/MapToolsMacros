<!-- CalculoDanio -->
[h: data = arg(0)]

[h: ErrorMsg(length(data),"Debe recibir DATA con:tokenAtk")]

[h: varsFromStrProp( data )]
[h, if (tokenAtk == "GM"), code:{  
  [ bdTmp = 0]
  [h: data = setStrProp(data,"bdTmp", 0)]  
  [ armas = ""]
  [h: data = setStrProp(data,"armas", tablaCritico)]  
  [ campoDADO = "<input type='text' name='boTmp' value="+ boTmp+">" ]
};{

  [h: golpeActualAtk = getProperty("GolpeActual",tokenAtk)]
  [h: arma1 = getProperty("brazo1",tokenAtk)]
  [h: arma2 = getProperty("brazo2",tokenAtk)]
  [h: golpeActualDef = getProperty("GolpeActual",target)]
  [h: boTmp = getStrProp(golpeActualAtk,"boTmp")]
  [h: bdTmp = getStrProp(golpeActualDef,"bdTmp")]
  [h: tablaDanio = json.get(arma1,"danio")]
  [h: tablasCritico = json.get(arma1,"criticos")]
  [h: armas = getStrProp(golpeActualDef,"armas")]
  [ campoDADO = "<span>"+boTmp+"</span>"]        
  
}]
[h: criticos=""]

[h: armadura = getProperty("armadura",target)]

[h: rdo = number(boTmp) - number(bdTmp) + number(dado) + number(modExtra)]

[h: danios = table(tablaDanio,rdo)]
[h: armObj = getTipoArm(armadura)+armadura]
[h: danioStrProp = decode(json.get(danios,armObj))]
[h: varsFromStrProp( danioStrProp )]

[h, if (gr!=""): criticos= listAppend(criticos,tablasCritico)]
[h, if (gr!=""): selectCrit_1= gr]

[h: argsConDados = setStrProp(data,"dado", 1d100)]
[h: argsCrit = setStrProp(danioStrProp,"danio",  pv + " " + gr)]
[h: argsCrit = setStrProp(argsCrit,"tablasCritico", tablasCritico)]
[h: argsCrit = setStrProp(argsCrit,"tokenAtk",  tokenAtk)]
[h: argsCrit = setStrProp(argsCrit,"target",  target)]
[h: argsCrit = setStrProp(argsCrit,"dadoCritico", 0)]

[h: processorLink =macroLinkText('CalculoDanio@lib:asaltos',"all")]
[h: tema1 =3]
[h: tema2 =2]
[dialog("calculoDanioInput","width=500; height=500;"): {
    <html>
    <head>
      <title>Calculo de Da&#241;o</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="calculoDeDanio" action="[r:processorLink]">
          <input type="hidden" name="tokenAtk" value="[r: tokenAtk]"></input>
          <input type="hidden" name="tablaCritico" value="[r: tablasCritico]"></input>     
          <input type="hidden" name="tablaDanio" value="[r: tablaDanio]"></input>     
          <input type="hidden" name="target" value="[r: target]"></input>     
          <table width="100%">
          [r: rowPerso("<label for='name'>Armas</label>|th|4,<span>"+armas+"</span>",tema1)]

          [r: rowPerso("<label for='boTmp'>BO</label>,"+ campoDADO + ",<label for='bdTmp'>BD</label>,<span>"+bdTmp+"</span>",tema1)]
          
          [r: rowPerso("<label for='dado'>DADOS</label>,<input type='text' name='dado' value="+ dado+">,<label for='modExtra'>Mod. Extra</label>,<input type='text' name='modExtra' value="+ modExtra+">",tema1)]
          
          [r: rowPerso(macroLink("Lanzar Dados", "CalculoDanio@lib:asaltos","self",argsConDados)+"|th|4",tema2)]
                    
          [r: rowPerso("<label for='subResultado'>Sub Resultado</label>,<span>"+rdo+"</span>",tema1)]
          
          [r: rowPerso("<label for='Da&#241;o'>Da&#241;o</label>,<span>"+pv + " PV. " + gr ,"critico","")+"</span>",tema1)]
          
          </table>
          <table width="100%">            
           [r: rowPerso('<input type="submit" name="Calcular" value="Calcular">|th',tema1)]
          </table>
           <table width="100%">
           [r: rowPerso("CRITICOS|th|5",tema1)]

           [r,COUNT(countStrProp(criticos)),code:{
              <!-- gr , tabla sin letra| dado_1 sel_target_1, sel_Gr_1 -->
              [h: n = roll.count]
              [h: cr = listGet(criticos,roll.count)]
              [h: tablasOpc = decode(cr)]
              
              [h: boxGrName="selectGr_"+n]
              [h, if (getStrProp(data,"sel_Gr_"+n)!=""): gr=getStrProp(data,boxGrName); sel=""]
              [h: boxGr = selectBoxPerso("A,B,C,D,E",gr,boxGrName)]
              
              [h: boxCritName="selectCrit_"+n]
              [h, if (getStrProp(data,boxCritName)!=""): sel=getStrProp(data,boxCritName); sel=""]
              [h: boxTablas = selectBoxPerso(tablasOpc,sel,"selectCrit_"+n,"criticos")]
              
              [h: boxTgtName="selectTgt_"+n]
              [h, if (getStrProp(data,boxTgtName)!=""): sel=getStrProp(data,boxTgtName); sel=""]
              [h: boxTgt = selectBoxPerso( getExposedTokenNames(),target,"selectTgt_"+n)]
             
             [h: col5 ="<select name='tgt_cr"+n+"'><option selected value='"+target+"'>"+target+"</option><option value='Neo'>Neo</option><option value='Otro'>Otro</option></select>"]
             [r: rowPerso("GRAVEDAD,"+boxGr+",TABLA,"+boxTablas+","+boxTgt,tema2)]
             [r: rowPerso("&#32;,Dados|th|2,<input type='text' name='dado_cr"+n+"' value=''>,<input type='sumit' name='crit_"+n+"' value='Lanzar'>|th|2",tema1)]
             
           }]
           </table>
      </form>
      
    </body>
  </html>
}]