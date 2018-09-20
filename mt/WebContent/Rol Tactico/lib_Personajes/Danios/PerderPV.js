[h: target= arg(0)]
[h: PVChange= arg(1)]

[h: switchToken(target)]
[h:PV = PV - PVChange]

[h:bar.PV = PV / MaxPV]
[r:token.name] pierde [r:PVChange] Puntos de vida.<br>

[r, if(bar.PV <=0.5 && bar.PV >0.1): target +" se ve cansado (-20 Act).<br>" ]
[h, if(bar.PV <=0.5 && bar.PV >0.1): actividad = actividad - 20 ]

[r, if(bar.PV >0 && bar.PV <=0.1): target +" se ve exhausto (-50 Act).<br>" ]
[r, if(bar.PV >0 && bar.PV <=0.1): actividad = actividad - 30 ]

[r, if(bar.PV ==0): target +" Cae Derrotado.<br>" ]
[h, if(bar.PV ==0): acStividad = setState("Derrotado",1) ]
