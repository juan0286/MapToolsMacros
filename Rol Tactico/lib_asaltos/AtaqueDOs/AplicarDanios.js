<!-- AplicarDAnios -->
[h: data = arg(0)]
[h: tokenAtk = getStrProp(data,"tokenAtk")]
[h: target = getStrProp(data,"target")]

[h: pv=getStrProp(data,"pv")]
[r, if(pv!=""): PerderPV(target,pv)]
[h: sumaPv = pv ]

[h: cd =countStrProp(data)]      

[r,COUNT(cd,""),code:{              
   [h: n = roll.count]     
   [h:key = indexKeyStrProp(data, roll.count)] 
   [h:value = indexValueStrProp(data, roll.count)]

   [r, if(  matches(key, ".*PunVida")): PerderPV(target,value)]
   [h, if(  matches(key, ".*PunVida")): sumaPv = sumaPv + value]
   [r, if(  matches(key, ".*actividad")): AlterarActividad(target,value)]
   [r, if(  matches(key, ".*aturd")): Aturdir(target,value)]
   [r, if(  matches(key, ".*aturSinParar")): AturdirSinParar(target,value)]   
   [r, if(  matches(key, ".*oaparar")): ObligarAParar(target,value)]
   [r, if(  matches(key, ".*sangre")): Sangrar(target,value)]
   [r, if(  matches(key, ".*iniciativa")): Iniciativar(tokenAtk,value)]
   [r, if(  matches(key, ".*SumaAtaque")): SumarAlAtaque(tokenAtk,value)]
   [r, if( value==1 && matches(key, ".*derribado")): PerderPv(target,value)]     
   [r, if( value==1 && matches(key, ".*muerto")): Matar(target,value)]
   [r, if( value==1 && matches(key, ".*derrotado")): derrotar(target,value)]
}]
[h: closeFrame("calculoDanioInput")]
[h: ga = getProperty("GolpeActual",target)]
[h: dr = getStrProp(ga,"danioRecibido")]
[h: ga = setStrProp(ga,"danioRecibido",number(dr) + sumaPv)]
[h: ga = setProperty("GolpeActual",ga,target)]
