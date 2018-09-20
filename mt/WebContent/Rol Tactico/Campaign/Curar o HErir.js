[h:status = input(
"PVChange|0|Numero de puntos de danio",
"dmgOrHealing|Daniar,Curar|Danio o curacion??|RADIO|SELECT=0")]
[h:abort(status)]
 
[if(dmgOrHealing == 0),CODE:
{
    [h:PV = PV - PVChange]
    [h:bar.PV = PV / MaxPV]
    [r:token.name] pierde [r:PVChange] Puntos de vida.
};
{
    [h:diff = MaxPV - PV]
    [h:PV = min(PV+PVChange, MaxPV)]
    [h:bar.PV = PV / MaxPV]
    [r:token.name] se cura  [r:min(diff,PVChange)] puntos de vida. 
};]
