<!-- AplicarDAnios -->
[h: data = arg(0)]
[h, if(pausear()==1): pause("data")]
[h: tokenAtk = getStrProp(data,"tokenAtk")]
[h: target = getStrProp(data,"target")]

[h: pv=getStrProp(data,"pv")]
[h: sumaPv = pv ]
[h: p1 = "PunVida"]
[h: p2 = "actiidad"]
[h: p3 = "aturd"]
[h: p4 = "sangre"]
[h: p5 = "iniciativa"]
[h: p6 = "simataque"]
[h: p7 = "derribar"]
[h: p8 = "matar"]
[h: p9 = "derrotar"]

[h: cd =countStrProp(data)]      

[r,COUNT(cd,""),code:{              
   [h: n = roll.count]     
   [h:key = indexKeyStrProp(data, roll.count)] 
   [h:value = indexValueStrProp(data, roll.count)]
      [h, if(  matches(key, ".*PunVida")): sumaPv = sumaPv + value]

      [r, if(  matches(key, ".*actividad")): AlterarActividad(target,value)]

      [r, if(  matches(key, ".*aturSinParar")): AturdirSinParar(target,value)]

      [r, if(  matches(key, ".*aturd")): Aturdir(target,value)]

      [r, if(  matches(key, ".*sangre")): Sangrar(target,value)]

      [r, if(  matches(key, ".*iniciativa")): Iniciativar(tokenAtk,value)]

      [r, if( value==1 && matches(key, ".*postrado")): Postrar(target,value)]     
      [r, if( value==1 && matches(key, ".*derribado")): Derribar(target,value)]     

      [r, if( value==1 && matches(key, ".*muerto")): Matar(target,value)]

      [r, if( value==1 && matches(key, ".*derrotado")): Derrotar(target)]


}]
[h, if(pausear()==1): pause("p1","value","key")]
[r,if(sumaPv > 0): PerderPV(target,sumaPv) ; target + " No recibe danios." ]
[h: closeFrame("calculoDanioInput")]

[h: ga = getProperty("GolpeActual",target)]
[h: dr = getStrProp(ga,"danioRecibido")]
[h: ga = setStrProp(ga,"danioRecibido",number(dr) + sumaPv)]
[h: ga = setProperty("GolpeActual",ga,target)]
