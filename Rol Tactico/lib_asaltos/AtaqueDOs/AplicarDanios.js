<!-- AplicarDAnios -->
[data = arg(0)]
[h: tokenAtk = getStrProp(data,"tokenAtk")]
[h: pv=getStrProp(data,"pv")]
[h: target = getStrProp(data,"target")]

[h, if(pv!=""): PerderPV(target,pv)]

[h: listaChckBox = "derribado,inconsiente,izqBrazoInutil,derBrazoInutil,izqPiernaInutil,derPiernaInutil,derrotado,muerto"]
[h: cd =countStrProp(data)]      
[h:pause("data","cd")]
[r,COUNT(cd,"<br>"),code:{              
   [h: n = roll.count]     
   [key = indexKeyStrProp(data, roll.count)] 
   [value = indexValueStrProp(data, roll.count)]

   [r, if(  matches(key, ".*PunVida")): PerderPV(target,value)]
   [r, if(  matches(key, ".*actividad")): AlterarActividad(target,value)]
   [r, if(  matches(key, ".*aturd")): Aturdir(target,value)]
   [r, if(  matches(key, ".*aturSinParar")): AturdirSinParar(target,value)]
   [r, if(  matches(key, ".*sangre")): Sangrar(target,value)]
   [r, if(  matches(key, ".*iniciativa")): Iniciativar(tokenAtk,value)]
   [r, if(  matches(key, ".*SumaAtaque")): SumarAlAtaque(tokenAtk,value)]
   [r, if( value==1 && matches(key, ".*derribado")): PerderPv(target,value)]     
   [r, if( value==1 && matches(key, ".*muerto")): Matar(target,value)]
   [r, if( value==1 && matches(key, ".*derrotado")): derrotar(target,value)]
}]
[h:abort(0)]